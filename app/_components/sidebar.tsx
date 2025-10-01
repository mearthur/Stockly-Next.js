import { LayoutGridIcon, PackageIcon, ShoppingBagIcon } from "lucide-react";
import SidebarButton from "./ui/sidebar.button";

export default function Sidebar() {
  return (
    <div className="w-64 bg-white">
      {/* Image */}
      <div className="px-8 py-6">
        <h1 className="text-2xl font-extrabold text-slate-900">STOCKLY</h1>
      </div>
      {/* Buttons */}
      <div className="flex flex-col gap-2 p-2">
        <SidebarButton href="/">
          <LayoutGridIcon size={20} />
          Dasboard
        </SidebarButton>

        <SidebarButton href="/products">
          <PackageIcon size={20} />
          Produtos
        </SidebarButton>

        <SidebarButton href="/sales">
          <ShoppingBagIcon size={20} />
          Vendas
        </SidebarButton>
      </div>
    </div>
  );
}
