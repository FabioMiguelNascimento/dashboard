"use client"

import { useDashboard } from "@/app/contexts/dashboard.context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const getIntensityColor = (value: number) => {
  if (value >= 90) return "bg-chart-1"
  if (value >= 75) return "bg-chart-1/70"
  if (value >= 50) return "bg-chart-1/50"
  if (value >= 30) return "bg-chart-1/30"
  if (value > 0) return "bg-chart-1/15"
  return "bg-secondary"
}

export function AccessHeatmap() {
  const { salesHeatmap } = useDashboard()
  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Mapa de Calor Semanal</CardTitle>
        <p className="text-sm text-muted-foreground">Intensidade de vendas por hora e dia</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {salesHeatmap.weekdays.map((row) => (
            <div key={row.day} className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground w-20 text-right">{row.day}</span>
              <div className="flex gap-1 flex-1">
                {row.hourlyData.map((hourData, index) => (
                  <div
                    key={index}
                    role="button"
                    tabIndex={0}
                    aria-label={`${row.day} ${hourData.hour}: intensidade ${hourData.intensity}/100`}
                    className={`h-6 flex-1 rounded-sm ${getIntensityColor(
                      hourData.intensity
                    )} hover:ring-2 hover:ring-primary transition-all duration-200 cursor-pointer group relative`}
                    title={`${row.day} ${hourData.hour}: ${hourData.intensity}/100`}
                  >
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-popover border border-border rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                      {hourData.hour}: {hourData.intensity}/100
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
          <span className="text-xs text-muted-foreground">Intensidade:</span>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">Baixa</span>
            <div className="flex gap-1">
              <div className="h-3 w-3 rounded-sm bg-secondary" />
              <div className="h-3 w-3 rounded-sm bg-chart-1/15" />
              <div className="h-3 w-3 rounded-sm bg-chart-1/30" />
              <div className="h-3 w-3 rounded-sm bg-chart-1/50" />
              <div className="h-3 w-3 rounded-sm bg-chart-1/70" />
              <div className="h-3 w-3 rounded-sm bg-chart-1" />
            </div>
            <span className="text-xs text-muted-foreground">Alta</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
