import { Button } from "../_components/ui/button";
import { PlusIcon } from "lucide-react";
import { DataTable } from "../_components/ui/data-table";
import { productTableColumns } from "./_components/table-columns";
import { getProducts } from "../_data-access/product/get-products";

export default async function Products() {
  const products = await getProducts();
  return (
    <div className="spce-y-8 mx-8 my-4 mt-8 w-full rounded-lg bg-white p-8">
      <div className="flex w-full items-center justify-between pb-4">
        <div className="space-y-1">
          <span className="text-xs font-semibold text-slate-500">
            Gestao de Produtos
          </span>
          <h2 className="text-xl font-semibold">Produtos</h2>
        </div>
        <Button className="gap-2">
          <PlusIcon size={20} />
          Novo Produto
        </Button>
      </div>
      <DataTable columns={productTableColumns} data={products} />
    </div>
  );
}
