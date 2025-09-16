import "server-only";

import { db } from "@/app/_lib/prisma";

export interface SaleDto {
  id: string;
  productNames: string;
  totalProducts: number;
  totalAmount: number;
  date: Date;
}

export const getSales = async (): Promise<SaleDto[]> => {
  const sales = await db.sale.findMany({
    include: {
      saleProduct: {
        include: { products: true },
      },
    },
  });
  return sales.map((sale) => ({
    id: sale.id,
    date: sale.date,
    productNames: sale.saleProduct.map((saleProduct) => saleProduct.products.name).join(" • "),
    totalAmount: sale.saleProduct.reduce(
      (acc, saleProducts) => acc + Number(saleProducts.quantity ?? 0) * Number(saleProducts.unitPrice ?? 0),
      0,
    ),
    totalProducts: sale.saleProduct.reduce((acc, saleProducts) => acc + Number(saleProducts.quantity ?? 0), 0),
  }));
};

// export const cachedGetSales = unstable_cache(getSales, ["getSales"], {
//   tags: ["get-sale"],
//   revalidate: 60,
// });
