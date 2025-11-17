"use client"

import { useDashboard } from "@/app/contexts/dashboard.context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { useMemo, useState } from "react"
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts"

export function SalesChart() {
  const { salesByHour } = useDashboard()
  const [metric, setMetric] = useState<"sales" | "transactions" | "averageTicket">("sales")

  const metricConfig = useMemo(() => {
    return {
      sales: {
        key: "sales",
        label: "Vendas",
        color: "var(--color-chart-1)",
        format: (v: number) => `R$ ${v.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`,
      },
      transactions: {
        key: "transactions",
        label: "Transações",
        color: "var(--color-chart-2)",
        format: (v: number) => `${v}`,
      },
      averageTicket: {
        key: "averageTicket",
        label: "Ticket Médio",
        color: "var(--color-chart-3)",
        format: (v: number) => `R$ ${v.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`,
      },
    } as const
  }, [])

  return (
    <Card className="border-border bg-card">
      <CardHeader className="flex flex-col gap-4 pb-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <div className="space-y-1">
          <CardTitle className="text-xl font-semibold">Vendas por Hora</CardTitle>
          <p className="text-sm text-muted-foreground">Últimas 24 horas</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {(["sales", "transactions", "averageTicket"] as const).map((m) => (
            <button
              key={m}
              onClick={() => setMetric(m)}
              aria-pressed={metric === m}
              className={
                "inline-flex items-center gap-2 rounded-md px-2 py-1 text-sm font-medium focus:outline-none" +
                (metric === m
                  ? " bg-muted text-foreground"
                  : " text-muted-foreground hover:text-foreground")
              }
            >
              <div
                className="h-2 w-2 rounded-full"
                style={{ background: metricConfig[m].color }}
              />
              <span>{metricConfig[m].label}</span>
            </button>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            sales: {
              label: metricConfig.sales.label,
              color: metricConfig.sales.color,
            },
            transactions: {
              label: metricConfig.transactions.label,
              color: metricConfig.transactions.color,
            },
            averageTicket: {
              label: metricConfig.averageTicket.label,
              color: metricConfig.averageTicket.color,
            },
          }}
          className="h-80 w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={salesByHour} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
              <XAxis
                dataKey="hour"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => metricConfig[metric].format(Number(value))}
              />
              <ChartTooltip
                content={<ChartTooltipContent />}
                formatter={(value) => metricConfig[metric].format(Number(value))}
              />
              <defs>
                <linearGradient id="colorMetric" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor={metricConfig[metric].color}
                    stopOpacity={0.3}
                  />
                  <stop
                    offset="95%"
                    stopColor={metricConfig[metric].color}
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey={metricConfig[metric].key}
                stroke={metricConfig[metric].color}
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorMetric)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
