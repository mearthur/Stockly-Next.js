"use server";

import { db } from "@/app/_lib/prisma";
import { deleteSaleSchema } from "./schema";
import { revalidatePath } from "next/cache";
import { actionClient } from "@/app/_lib/safe-action";

export const deleteSale = actionClient.schema(deleteSaleSchema).action(async ({ parsedInput: { id } }) => {
  await db.sale.delete({
    where: {
      id,
    },
  });
  revalidatePath("/sales");
});

// export const deleteProduct = async ({ id }: DeleteProductSchema) => {
//   deleteProductSchema.parseAsync({ id });
// };
