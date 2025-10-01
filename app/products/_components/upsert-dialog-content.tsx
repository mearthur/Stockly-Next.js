"use client";

import { upsertProduct } from "@/app/_actions/products/upsert-products";
import { UpsertProductSchema, upsertProductSchema } from "@/app/_actions/products/upsert-products/schema";
import { AlertDialogHeader } from "@/app/_components/ui/alert-dialog";
import { Button } from "@/app/_components/ui/button";
import { DialogClose, DialogContent, DialogDescription, DialogFooter, DialogTitle } from "@/app/_components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/app/_components/ui/form";
import { Input } from "@/app/_components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { Dispatch, SetStateAction } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import type { Resolver } from "react-hook-form";
import { NumericFormat } from "react-number-format";
import { toast } from "sonner";

interface UpsertProductDialogContentPage {
  defaultValues?: UpsertProductSchema;
  setDialogIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const UpsertProductContent = ({ setDialogIsOpen, defaultValues }: UpsertProductDialogContentPage) => {
  const { execute: executeUpsertProduct } = useAction(upsertProduct, {
    onSuccess: () => {
      toast.success("Produto salvo com sucesso.");
      setDialogIsOpen(false);
    },
    onError: () => {
      toast.error("Ocorreu um error ao salvar o produto.");
    },
  });

  // ===== Normalize defaultValues (evita strings vindas de API)
  const normalizedDefaults: UpsertProductSchema = defaultValues
    ? {
        id: defaultValues.id,
        name: defaultValues.name ?? "",
        // se por acaso vier string, força number
        price:
          typeof (defaultValues as any).price === "string"
            ? Number((defaultValues as any).price)
            : ((defaultValues as any).price ?? 0),
        stock:
          typeof (defaultValues as any).stock === "string"
            ? Number((defaultValues as any).stock)
            : ((defaultValues as any).stock ?? 0),
      }
    : {
        id: "",
        name: "",
        price: 0,
        stock: 0,
      };

  // ===== Cast explícito do resolver para alinhar generics do RHF
  const typedResolver = zodResolver(upsertProductSchema) as unknown as Resolver<UpsertProductSchema>;

  const form = useForm<UpsertProductSchema>({
    shouldUnregister: true,
    resolver: typedResolver,
    defaultValues: normalizedDefaults,
  });

  const isEditing = !!defaultValues;

  const onSubmit: SubmitHandler<UpsertProductSchema> = (data) => {
    executeUpsertProduct({ ...data, id: defaultValues?.id });
  };

  return (
    <DialogContent>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <AlertDialogHeader>
            <DialogTitle>{isEditing ? "Editar" : "Criar"} Produto</DialogTitle>
            <DialogDescription>Insira as Informações a baixo</DialogDescription>
          </AlertDialogHeader>

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome do produto</FormLabel>
                <FormControl>
                  <Input placeholder="Digite o nome do produto" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preço do produto</FormLabel>
                <FormControl>
                  <NumericFormat
                    thousandSeparator="."
                    decimalSeparator=","
                    fixedDecimalScale
                    decimalScale={2}
                    prefix="R$ "
                    allowNegative={false}
                    customInput={Input}
                    value={field.value as any}
                    // garante number (ou 0)
                    onValueChange={(values) => field.onChange(values.floatValue ?? 0)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="stock"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Estoque</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    value={field.value === null || field.value === undefined ? 0 : field.value} // mostra 0 por padrão
                    onChange={(e) => {
                      const val = e.target.value;
                      // permite apagar, mas mantém number
                      field.onChange(val === "" ? "" : Number(val));
                    }}
                    onBlur={(e) => {
                      // se o usuário deixou vazio, normaliza para 0
                      if (e.target.value === "") {
                        field.onChange(0);
                      }
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="secondary" type="reset">
                Cancelar
              </Button>
            </DialogClose>
            <Button type="submit" disabled={form.formState.isSubmitting} className="gap-1.5">
              {form.formState.isSubmitting && <Loader2Icon className="animate-spin" size={16} />}
              Salvar
            </Button>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  );
};
