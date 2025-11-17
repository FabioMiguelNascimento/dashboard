import { AccessHeatmap } from "@/components/access-heatmap";
import Header from "@/components/header";
import { SalesChart } from "@/components/sales-chart";
import { TopAndLowSellingProducts } from "@/components/top-selling-products";
import { DashboardProvider } from "./contexts/dashboard.context";

export default function Home() {
  return (
    <DashboardProvider>
      <main className="w-full max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <Header />
        <SalesChart />
        <AccessHeatmap />
        <TopAndLowSellingProducts />
      </main>
    </DashboardProvider>
  );
}
