import { getMostSoldProducts } from "@/app/_data-access/dashboard/get-most-sold-products";
import MostSoldProductItem from "./most-sold-product-item";

export default async function MostSoldProducts() {
  const mostSoldProducts = await getMostSoldProducts();
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl bg-white">
      <p className="p-6 text-lg font-semibold text-slate-900">Produtos mais vendidos</p>

      <div className="space-y-7 overflow-y-auto px-6 pb-6">
        {mostSoldProducts.map((product) => (
          <MostSoldProductItem product={product} key={product.productId} />
        ))}
      </div>
    </div>
  );
}
