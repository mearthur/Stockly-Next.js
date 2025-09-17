import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/app/_components/ui/alert-dialog";
import { useAction } from "next-safe-action/hooks";
import { deleteSale } from "@/app/_actions/sale/delete";
import { toast } from "sonner";
import { Sale } from "@prisma/client";
interface SalesTableDropdownMenuProps {
  sale: Pick<Sale, "id">;
}

export const DeleteSaleDialogContent = ({ sale }: SalesTableDropdownMenuProps) => {
  const { execute: executeDeleteProduct } = useAction(deleteSale, {
    onSuccess: () => {
      toast.success("Venda deletada com sucesso.");
    },
    onError: () => {
      toast.error("Error ao deletar a venda.");
    },
  });
  const handleContinueClick = () => executeDeleteProduct({ id: sale.id });

  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Você tem certeza que deseja deletar ?</AlertDialogTitle>
        <AlertDialogDescription>
          Você está prestes a ecluir esta venda. Esta ação não pode ser desfeita. Deseja Continuar ?
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancelar</AlertDialogCancel>
        <AlertDialogAction onClick={handleContinueClick}>Continuar</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
};
