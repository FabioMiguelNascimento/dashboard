"use client"

import { useDashboard } from "@/app/contexts/dashboard.context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip } from "@/components/ui/chart"
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"

const COLORS = [
  "var(--color-chart-1)",
  "var(--color-chart-2)",
  "var(--color-chart-3)",
  "var(--color-chart-4)",
  "var(--color-chart-5)",
]

export function SalesByCategory() {
  const { salesByCategory } = useDashboard()

  if (!salesByCategory) {
    return (
      <Card className="border-border bg-card">
        <CardContent className="p-6">
          <div className="animate-pulse space-y-4">
            <div className="h-4 bg-muted rounded w-3/4"></div>
            <div className="h-4 bg-muted rounded w-1/2"></div>
          </div>
        </CardContent>
      </Card>
    )
  }

  const chartData = salesByCategory.map((category, index) => ({
    name: category.category,
    value: category.sales,
    percentage: category.percentage,
    color: COLORS[index % COLORS.length],
  }))

  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Vendas por Categoria</CardTitle>
        <p className="text-sm text-muted-foreground mt-1">Distribuição das vendas por categoria de produto</p>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            vendas: {
              label: "Vendas",
            },
          }}
          className="h-72 w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percentage }) => `${name} ${percentage}%`}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <ChartTooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload
                    return (
                      <div className="bg-background border border-border rounded-lg p-3 shadow-lg">
                        <p className="font-medium">{data.name}</p>
                        <p className="text-sm text-muted-foreground">
                          Valor: R$ {data.value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Percentual: {data.percentage}%
                        </p>
                      </div>
                    )
                  }
                  return null
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>

        {/* Legenda das categorias */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          {salesByCategory.map((category, index) => (
            <div
              key={category.category}
              className="flex flex-col gap-2 p-3 bg-muted/50 rounded-lg sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                />
                <span className="text-sm font-medium">{category.category}</span>
              </div>
              <div className="text-left sm:text-right">
                <p className="text-sm font-semibold">
                  R$ {category.sales.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </p>
                <p className="text-xs text-muted-foreground">{category.percentage}%</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}