"use client"

import { useDashboard } from "@/app/contexts/dashboard.context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip } from "@/components/ui/chart"
import { Bar, BarChart, Cell, ResponsiveContainer, XAxis, YAxis } from "recharts"

const COLORS = [
  "var(--color-chart-1)",
  "var(--color-chart-2)",
  "var(--color-chart-3)",
  "var(--color-chart-4)",
]

export function PaymentMethods() {
  const { paymentMethods } = useDashboard()

  if (!paymentMethods) {
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

  const chartData = paymentMethods.map((method, index) => ({
    method: method.method,
    amount: method.amount,
    percentage: method.percentage,
    transactions: method.transactions,
    color: COLORS[index % COLORS.length],
  }))

  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Métodos de Pagamento</CardTitle>
        <p className="text-sm text-muted-foreground mt-1">Distribuição por valor e transações</p>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            amount: {
              label: "Valor (R$)",
            },
            transactions: {
              label: "Transações",
            },
          }}
          className="h-[300px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis
                dataKey="method"
                type="category"
                tick={{ fontSize: 12 }}
              />
              <YAxis type="number" />
              <ChartTooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload
                    return (
                      <div className="bg-background border border-border rounded-lg p-3 shadow-lg">
                        <p className="font-medium">{label}</p>
                        <p className="text-sm text-muted-foreground">
                          Valor: R$ {data.amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Transações: {data.transactions}
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
              <Bar dataKey="amount" radius={[0, 4, 4, 0]}>
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>

        {/* Resumo dos métodos */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          {paymentMethods.map((method, index) => (
            <div key={method.method} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                />
                <span className="text-sm    font-medium">{method.method}</span>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold">
                  R$ {method.amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </p>
                <p className="text-xs text-muted-foreground">{method.percentage}%</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
    