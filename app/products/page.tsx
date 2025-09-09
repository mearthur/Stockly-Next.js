import { DataTable } from "../_components/ui/data-table";
import { productTableColumns } from "./_components/table-columns";
// import { cachedGetProducts, getProducts } from "../_data-access/product/get-products";
import { CreateProductButton } from "./_components/create-product-button";
import { getProducts } from "../_data-access/product/get-products";

export default async function ProductsPage() {
  const products = await getProducts();
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
        <CreateProductButton />
      </div>
      <DataTable columns={productTableColumns} data={products} />
    </div>
  );
}
