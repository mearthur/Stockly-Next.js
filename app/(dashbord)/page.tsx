import Header, { HeaderLeft, HeaderSubtitle, HeaderTitle } from "../_components/header";
import { SummaryCardSkeleton } from "./_components/summary-card";
import MostSoldProductItem, { MostSoldProductsSkeleton } from "./_components/most-sold-product-item";
import TotalRevenueCard from "./_components/total-revenue-card";
import { Suspense } from "react";
import TodayRevenueCard from "./_components/today-revenue-card";
import TotalSalesCard from "./_components/total-sales-card";
import TotalStockCard from "./_components/total-stock-card";
import TotalProductsCard from "./_components/total-prodcuts-card";
import Last14DaysRevenueCard from "./_components/last-14-days-revenue-card";
import { Skeleton } from "../_components/ui/skeleton";
import MostSoldProducts from "./_components/most-sold-products-card";

export default async function Home() {
  return (
    <div className="m-8 flex w-full flex-col space-y-8 rounded-lg">
      <Header>
        <HeaderLeft>
          <HeaderSubtitle>Visão Geral</HeaderSubtitle>
          <HeaderTitle>Dashboard</HeaderTitle>
        </HeaderLeft>
      </Header>
      <div className="grid grid-cols-2 gap-6">
        <Suspense fallback={<SummaryCardSkeleton />}>
          <TotalRevenueCard />
        </Suspense>

        <Suspense fallback={<SummaryCardSkeleton />}>
          <TodayRevenueCard />
        </Suspense>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <Suspense fallback={<SummaryCardSkeleton />}>
          <TotalSalesCard />
        </Suspense>

        <Suspense fallback={<SummaryCardSkeleton />}>
          <TotalStockCard />
        </Suspense>

        <Suspense fallback={<SummaryCardSkeleton />}>
          <TotalProductsCard />
        </Suspense>
      </div>
      <div className="grid min-h-0 grid-cols-[minmax(0,2.5fr),minmax(0,1fr)] gap-6">
        <Suspense
          fallback={
            <Skeleton className="bg-white p-6">
              <div className="space-y-2">
                <div className="h-5 w-[86.26px] rounded-md bg-gray-200" />
                <div className="h-4 w-48 rounded-md bg-gray-200" />
              </div>
            </Skeleton>
          }
        >
          <Last14DaysRevenueCard />
        </Suspense>

        <Suspense fallback={<MostSoldProductsSkeleton />}>
          <MostSoldProducts />
        </Suspense>
      </div>
    </div>
  );
}
