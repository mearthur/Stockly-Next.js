import { CircleDollarSign } from "lucide-react";
import { SummaryCard, SummaryCardIcon, SummaryCardTitle, SummaryCardValue } from "./summary-card";
import { getTotalSales } from "@/app/_data-access/dashboard/get-total-sale";

export default function TotalSalesCard() {
  const totalSales = getTotalSales();
  return (
    <SummaryCard>
      <SummaryCardIcon>
        <CircleDollarSign size={20} />
      </SummaryCardIcon>
      <SummaryCardTitle>Vendas Totais</SummaryCardTitle>
      <SummaryCardValue>{totalSales}</SummaryCardValue>
    </SummaryCard>
  );
}
