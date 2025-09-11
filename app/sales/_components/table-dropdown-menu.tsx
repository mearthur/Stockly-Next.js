import { AlertDialogTrigger } from "@/app/_components/ui/alert-dialog";
import { Button } from "@/app/_components/ui/button";
import { DialogTrigger } from "@/app/_components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/_components/ui/dropdown-menu";
import { Product } from "@prisma/client";
import { ClipboardCopyIcon, EditIcon, MoreHorizontalIcon, TrashIcon } from "lucide-react";

interface SalesTableDropdownMenuProps {
  product: Pick<Product, "id">;
  onDelete: (productId: string) => void;
}

export const SalesTableDropdownMenu = ({ product, onDelete }: SalesTableDropdownMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <MoreHorizontalIcon size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Ações</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="gap-1.5" onClick={() => navigator.clipboard.writeText(product.id)}>
          <ClipboardCopyIcon size={16} />
          Copiar Id
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-1.5" onClick={() => onDelete(product.id)}>
          <TrashIcon size={16} />
          Deletar
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
