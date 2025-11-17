"use client"

import { useDashboard } from "@/app/contexts/dashboard.context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"

const COLORS = [
  "var(--color-chart-1)",
  "var(--color-chart-2)",
  "var(--color-chart-3)",
  "var(--color-chart-4)",
  "var(--color-chart-5)",
]

export function TopAndLowSellingProducts() {
  const { topSellingProducts } = useDashboard()

  const chartData = topSellingProducts.map((product, index) => ({
    name: product.name,
    value: product.quantitySold,
    color: COLORS[index % COLORS.length],
  }))

  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Produtos Mais Vendidos</CardTitle>
        <p className="text-sm text-muted-foreground mt-1">Últimas 24 horas</p>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            vendas: {
              label: "Vendas",
            },
          }}
          className="h-[400px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <ChartTooltip content={<ChartTooltipContent />} />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}