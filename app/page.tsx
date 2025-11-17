import Header from "@/components/header";
import { DashboardProvider } from "./contexts/dashboard.context";
import { SalesChart } from "@/components/sales-chart";
import { AccessHeatmap } from "@/components/access-heatmap";

export default function Home() {
  return (
    <DashboardProvider>
      <main className="w-full max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <Header />
        <SalesChart />
        <AccessHeatmap />
      </main>
    </DashboardProvider>
  );
}
