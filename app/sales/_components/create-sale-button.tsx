"use client";

import { Button } from "@/app/_components/ui/button";
import { Sheet, SheetTrigger } from "@/app/_components/ui/sheet";
import { UpsertSheetContent } from "./upsert-sheet-content";
import { ComboboxOption } from "@/app/_components/ui/combobox";
import { useState } from "react";
import { PlusIcon } from "lucide-react";
import { ProductDto } from "@/app/_data-access/product/get-products";

interface UpsertSaleButtonProps {
  products: ProductDto[];
  productOptions: ComboboxOption[];
}

export const UpsertSaleButton = (props: UpsertSaleButtonProps) => {
  const [sheetIsOpen, setsheetIsOpen] = useState(false);
  return (
    <Sheet open={sheetIsOpen} onOpenChange={setsheetIsOpen}>
      <SheetTrigger asChild>
        <Button className="gap-2">
          <PlusIcon size={20} />
          Nova Venda
        </Button>
      </SheetTrigger>
      <UpsertSheetContent {...props} setsheetIsOpen={setsheetIsOpen} isOpen={sheetIsOpen} />
    </Sheet>
  );
};
