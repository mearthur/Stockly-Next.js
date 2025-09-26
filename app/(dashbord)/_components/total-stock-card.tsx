import { PackageIcon } from "lucide-react";
import { SummaryCard, SummaryCardIcon, SummaryCardTitle, SummaryCardValue } from "./summary-card";
import { getTotalStock } from "@/app/_data-access/dashboard/get-total-stock";

export default async function TotalStockCard() {
  const totalStock = await getTotalStock();
  return (
    <SummaryCard>
      <SummaryCardIcon>
        <PackageIcon size={20} />
      </SummaryCardIcon>
      <SummaryCardTitle>Total Em Estoque</SummaryCardTitle>
      <SummaryCardValue>{totalStock}</SummaryCardValue>
    </SummaryCard>
  );
}
