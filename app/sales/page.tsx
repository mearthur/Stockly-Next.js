import { ComboboxOption } from "../_components/ui/combobox";
import { DataTable } from "../_components/ui/data-table";
import { getProducts } from "../_data-access/product/get-products";
import { getSales } from "../_data-access/sale/get-sales";
import { UpsertSaleButton } from "./_components/create-sale-button";
import { saleTableColumns } from "./_components/table-columns";

export default async function SalesPage() {
  const sale = await getSales();
  const products = await getProducts();
  const productOptions: ComboboxOption[] = products.map((products) => ({
    label: products.name,
    value: products.id,
  }));
  const tableData = sale.map((sale) => ({
    ...sale,
    products,
    productOptions,
  }));
  return (
    <div className="m-8 w-full space-y-8 overflow-auto rounded-lg bg-white p-8">
      <div className="flex w-full items-center justify-between pb-4">
        <div className="space-y-1">
          <h1 className="text-xl font-medium"></h1>
          <span className="text-xs font-semibold text-slate-500">Gestao de Vendas</span>
          <h2 className="text-xl font-semibold">Vendas</h2>
        </div>
        <UpsertSaleButton productOptions={productOptions} products={products} />
      </div>
      <DataTable columns={saleTableColumns} data={tableData} />
    </div>
  );
}
