"use server";

import { db } from "@/app/_lib/prisma";
import { revalidatePath } from "next/cache";
import {
  createProductSchema,
  CreateProductSchema,
} from "@/app/_actions/products/products";

export const createProduct = async (data: CreateProductSchema) => {
  createProductSchema.parse(data);
  await db.product.create({ data });
  revalidatePath("/products");
};
