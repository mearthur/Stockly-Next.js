import { ShoppingBasketIcon } from "lucide-react";
import { SummaryCard, SummaryCardIcon, SummaryCardTitle, SummaryCardValue } from "./summary-card";
import { getTotalProducts } from "@/app/_data-access/dashboard/get-total-products";

export default async function TotalProductsCard() {
  const totalProducts = await getTotalProducts();
  return (
    <SummaryCard>
      <SummaryCardIcon>
        <ShoppingBasketIcon size={20} />
      </SummaryCardIcon>
      <SummaryCardTitle>Produtos</SummaryCardTitle>
      <SummaryCardValue>{totalProducts}</SummaryCardValue>
    </SummaryCard>
  );
}
