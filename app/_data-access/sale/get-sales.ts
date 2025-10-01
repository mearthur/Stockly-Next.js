import "server-only";

import { db } from "@/app/_lib/prisma";

interface SaleProductDto {
  productId: string;
  quantity: number;
  unitPrice: number;
  productName: string;
}
export interface SaleDto {
  id: string;
  productNames: string;
  totalProducts: number;
  totalAmount: number;
  date: Date;
  saleProducts: SaleProductDto[];
}

export const getSales = async (): Promise<SaleDto[]> => {
  const sales = await db.sale.findMany({
    include: {
      saleProducts: {
        include: { product: true },
      },
    },
  });
  return sales.map((sale) => ({
    id: sale.id,
    date: sale.date,
    productNames: sale.saleProducts.map((saleProducts) => saleProducts.product.name).join(" • "),
    totalAmount: sale.saleProducts.reduce(
      (acc, saleProducts) => acc + Number(saleProducts.quantity ?? 0) * Number(saleProducts.unitPrice ?? 0),
      0,
    ),
    totalProducts: sale.saleProducts.reduce((acc, saleProducts) => acc + Number(saleProducts.quantity ?? 0), 0),
    saleProducts: sale.saleProducts.map(
      (saleProducts): SaleProductDto => ({
        productId: saleProducts.productId,
        productName: saleProducts.product.name,
        quantity: saleProducts.quantity,
        unitPrice: Number(saleProducts.unitPrice),
      }),
    ),
  }));
};

// export const cachedGetSales = unstable_cache(getSales, ["getSales"], {
//   tags: ["get-sale"],
//   revalidate: 60,
// });
