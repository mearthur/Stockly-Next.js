import { getlast14DaysRevenue } from "@/app/_data-access/dashboard/get-last-14-days-revenue";
import RevenueChart from "./revenue-chart";

export default async function Last14DaysRevenueCard() {
  const totalLast14DaysRevenue = await getlast14DaysRevenue();
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl bg-white p-6">
      <p className="text-lg font-semibold text-slate-900">Receita Total</p>
      <p className="text-sm text-slate-400">Últimos 14 dias</p>
      <RevenueChart data={totalLast14DaysRevenue} />
    </div>
  );
}
