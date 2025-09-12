import { ComboboxOption } from "../_components/ui/combobox";
import { getProducts } from "../_data-access/product/get-products";
import { CreateSaleButton } from "./_components/create-sale-button";

export default async function SalesPage() {
  const products = await getProducts();
  const productOptions: ComboboxOption[] = products.map((products) => ({
    label: products.name,
    value: products.id,
  }));
  return (
    <div className="spce-y-8 mx-8 my-4 mt-8 w-full rounded-lg bg-white p-8">
      <div className="flex w-full items-center justify-between pb-4">
        <div className="space-y-1">
          <h1 className="text-xl font-medium"></h1>
          <span className="text-xs font-semibold text-slate-500">Gestao de Vendas</span>
          <h2 className="text-xl font-semibold">Vendas</h2>
        </div>
        <CreateSaleButton productOptions={productOptions} products={products} />
      </div>
      {/* <DataTable columns={productTableColumns} data={products} /> */}
    </div>
  );
}
