import "server-only";

import { db } from "@/app/_lib/prisma";
import { Product } from "@prisma/client";

export interface ProductDto extends Product {
  status: "IN_STOCK" | "OUT_OF_STOCK";
}

export const getProducts = async (): Promise<ProductDto[]> => {
  const product = await db.product.findMany({});
  return product.map((product) => ({
    ...product,
    status: product.stock > 0 ? "IN_STOCK" : "OUT_OF_STOCK",
  }));
};

// export const cachedGetProducts = unstable_cache(getProducts, ["getProducts"], {
//   tags: ["get-products"],
//   revalidate: 60,
// });
