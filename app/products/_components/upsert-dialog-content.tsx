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
import { useForm } from "react-hook-form";
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
  const form = useForm<UpsertProductSchema>({
    shouldUnregister: true,
    resolver: zodResolver(upsertProductSchema),
    defaultValues: defaultValues ?? {
      id: "",
      name: "",
      price: 0,
      stock: 1,
    },
  });

  const isEditing = !!defaultValues;

  const onSubmit = (data: UpsertProductSchema) => {
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
                    onValueChange={(values) => field.onChange(values.floatValue)}
                    {...field}
                    onChange={() => {}}
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
                <FormLabel>stock</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Digite o stock do produto" {...field} />
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
