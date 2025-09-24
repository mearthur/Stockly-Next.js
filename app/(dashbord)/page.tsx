import { CircleDollarSign, DollarSign, PackageIcon, ShoppingBasketIcon } from "lucide-react";
import Header, { HeaderLeft, HeaderSubtitle, HeaderTitle } from "../_components/header";
import { SummaryCard, SummaryCardIcon, SummaryCardTitle, SummaryCardValue } from "./_components/summary-card";
import { getDashboard } from "../_data-access/dashboard/get-dashboard";
import { formatCurrency } from "../_helpers/currency";
import RevenueChart from "./_components/revenue-chart";

export default async function Home() {
  const { todayRevenue, totalProducts, totalRevenue, totalSales, totalStock, totalLast14DaysRevenue } =
    await getDashboard();
  return (
    <div className="m-8 flex w-full flex-col space-y-8 rounded-lg">
      <Header>
        <HeaderLeft>
          <HeaderSubtitle>Visão Geral</HeaderSubtitle>
          <HeaderTitle>Dashboard</HeaderTitle>
        </HeaderLeft>
      </Header>
      <div className="grid grid-cols-2 gap-6">
        <SummaryCard>
          <SummaryCardIcon>
            <DollarSign size={20} />
          </SummaryCardIcon>
          <SummaryCardTitle>Receita Total</SummaryCardTitle>
          <SummaryCardValue>{formatCurrency(totalRevenue)}</SummaryCardValue>
        </SummaryCard>

        <SummaryCard>
          <SummaryCardIcon>
            <DollarSign size={20} />
          </SummaryCardIcon>
          <SummaryCardTitle>Receita Hoje</SummaryCardTitle>
          <SummaryCardValue>{formatCurrency(todayRevenue)}</SummaryCardValue>
        </SummaryCard>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <SummaryCard>
          <SummaryCardIcon>
            <CircleDollarSign size={20} />
          </SummaryCardIcon>
          <SummaryCardTitle>Vendas Totais</SummaryCardTitle>
          <SummaryCardValue>{totalSales}</SummaryCardValue>
        </SummaryCard>

        <SummaryCard>
          <SummaryCardIcon>
            <PackageIcon size={20} />
          </SummaryCardIcon>
          <SummaryCardTitle>Total Em Estoque</SummaryCardTitle>
          <SummaryCardValue>{totalStock}</SummaryCardValue>
        </SummaryCard>

        <SummaryCard>
          <SummaryCardIcon>
            <ShoppingBasketIcon size={20} />
          </SummaryCardIcon>
          <SummaryCardTitle>Produtos</SummaryCardTitle>
          <SummaryCardValue>{totalProducts}</SummaryCardValue>
        </SummaryCard>
      </div>
      <div className="flex h-full flex-col overflow-hidden rounded-xl bg-white p-6">
        <p className="text-lg font-semibold text-slate-900">Receita Total</p>
        <p className="text-sm text-slate-400">Últimos 14 dias</p>
        <RevenueChart data={totalLast14DaysRevenue} />
      </div>
    </div>
  );
}
