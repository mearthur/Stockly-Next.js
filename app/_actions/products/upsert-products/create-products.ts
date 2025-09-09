"use server";

import { db } from "@/app/_lib/prisma";
import { revalidatePath, revalidateTag } from "next/cache";
import {
  upsertProductSchema,
  UpsertProductSchema,
} from "@/app/_actions/products/upsert-products/products";

export const upsertProduct = async (data: UpsertProductSchema) => {
  upsertProductSchema.parse(data);
  await db.product.upsert({
    where: { id: data?.id ?? "" },
    update: data,
    create: data,
  });
  revalidateTag("get-products");
};
