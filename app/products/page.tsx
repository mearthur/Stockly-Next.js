import { DataTable } from "../_components/ui/data-table";
import { productTableColumns } from "./_components/table-columns";
import { cachedGetProducts } from "../_data-access/product/get-products";
import { AddProductButton } from "./_components/add-product-button";

export default async function ProductsPage() {
  const products = await cachedGetProducts();
  return (
    <div className="spce-y-8 mx-8 my-4 mt-8 w-full rounded-lg bg-white p-8">
      <div className="flex w-full items-center justify-between pb-4">
        <div className="space-y-1">
          <h1 className="text-xl font-medium"></h1>
          <span className="text-xs font-semibold text-slate-500">
            Gestao de Produtos
          </span>
          <h2 className="text-xl font-semibold">Produtos</h2>
        </div>
        <AddProductButton />
      </div>
      <DataTable columns={productTableColumns} data={products} />
    </div>
  );
}
