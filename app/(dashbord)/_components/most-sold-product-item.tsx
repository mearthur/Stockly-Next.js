import ProductStatusBadge from "@/app/_components/status-bagde";
import { Skeleton } from "@/app/_components/ui/skeleton";
import { MostSoldProductDto } from "@/app/_data-access/dashboard/get-most-sold-products";
import { formatCurrency } from "@/app/_helpers/currency";

interface MostSoldProductItemProps {
  product: MostSoldProductDto;
}

export default function MostSoldProductItem({ product }: MostSoldProductItemProps) {
  return (
    <div className="item-center flex justify-between">
      <div className="space-y-[6px]">
        <ProductStatusBadge status={product.status} />
        <p className="font-semibold">{product.name}</p>
        <p className="font-medium text-slate-500">{formatCurrency(Number(product.price))}</p>
      </div>
      <div>
        <p className="text-sm font-semibold">{product.totalSold} Vendido(s)</p>
      </div>
    </div>
  );
}

export const MostSoldProductsItemSkeleton = () => {
  return (
    <div className="flex items-center justify-between pt-5">
      <div className="space-y-2">
        <div className="h-[22px] w-[91.23px] rounded-md bg-gray-200" />
        <div className="h-6 w-[91.23px] rounded-md bg-gray-200" />
        <div className="h-6 w-[105px] rounded-md bg-gray-200" />
      </div>
      <div>
        <div className="h-5 w-[86.26px] rounded-md bg-gray-200" />
      </div>
    </div>
  );
};

export const MostSoldProductsSkeleton = () => {
  return (
    <Skeleton className="bg-white p-6">
      <div className="space-y-2">
        <div className="h-5 w-[86.26px] rounded-md bg-gray-200" />
        <div className="h-4 w-48 rounded-md bg-gray-200" />
        <MostSoldProductsItemSkeleton />
        <MostSoldProductsItemSkeleton />
        <MostSoldProductsItemSkeleton />
      </div>
    </Skeleton>
  );
};
