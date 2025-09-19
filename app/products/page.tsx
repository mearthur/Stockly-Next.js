import { DataTable } from "../_components/ui/data-table";
import { productTableColumns } from "./_components/table-columns";
import { CreateProductButton } from "./_components/create-product-button";
import { getProducts } from "../_data-access/product/get-products";
import Header, { HeaderLeft, HeaderRight, HeaderSubtitle, HeaderTitle } from "../_components/header";

export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <div className="m-8 w-full space-y-8 overflow-auto rounded-lg bg-white p-8">
      <Header>
        <HeaderLeft>
          <HeaderSubtitle>Gestao de Produtos</HeaderSubtitle>
          <HeaderTitle>Produtos</HeaderTitle>
        </HeaderLeft>
        <HeaderRight>
          <CreateProductButton />
        </HeaderRight>
      </Header>
      <DataTable columns={productTableColumns} data={products} />
    </div>
  );
}
