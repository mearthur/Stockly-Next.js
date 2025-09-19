import Header, { HeaderLeft, HeaderRight, HeaderSubtitle, HeaderTitle } from "../_components/header";
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
      <Header>
        <HeaderLeft>
          <HeaderSubtitle>Gestao de Vendas</HeaderSubtitle>
          <HeaderTitle>Vendas</HeaderTitle>
        </HeaderLeft>
        <HeaderRight>
          <UpsertSaleButton productOptions={productOptions} products={products} />
        </HeaderRight>
      </Header>
      <DataTable columns={saleTableColumns} data={tableData} />
    </div>
  );
}
