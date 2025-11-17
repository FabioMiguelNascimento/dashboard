import { AccessHeatmap } from "@/components/access-heatmap";
import Header from "@/components/header";
import { PaymentMethods } from "@/components/payment-methods";
import { SalesByCategory } from "@/components/sales-by-category";
import { SalesChart } from "@/components/sales-chart";
import { TopAndLowSellingProducts } from "@/components/top-selling-products";
import { DashboardProvider } from "./contexts/dashboard.context";

export default function Home() {
  return (
    <DashboardProvider>
      <main className="w-full  mx-auto px-4 py-8 sm:px-6 lg:px-8 bg-background min-h-screen">
        <div className="mb-8">
          <Header />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 space-y-6">
            <SalesChart />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AccessHeatmap />
            <SalesByCategory />
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <TopAndLowSellingProducts />
            <PaymentMethods />
          </div>
        </div>
      </main>
    </DashboardProvider>
  );
}
