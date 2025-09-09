import { z } from "zod";

export const upsertProductSchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string().trim().min(1, "O nome do produto é obrigatório."),
  price: z.coerce.number().min(0.01, "O preço do produto é obrigatório."),
  stock: z.coerce
    .number()
    .int()
    .min(1, "A quantidade em estoque deve ser pelo menos 1."),
});

export type UpsertProductSchema = z.infer<typeof upsertProductSchema>;
