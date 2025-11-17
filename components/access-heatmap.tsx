"use client"

import { useState } from "react"

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

const formatHourLabel = (hour: string) => {
  if (hour.endsWith(":00")) {
    return `${hour.slice(0, 2)}h`
  }
  return hour
}

const BUSINESS_START = 8
const BUSINESS_END = 18

const filterBusinessHours = <T extends { hour: string }>(data: T[]) => {
  return data.filter((item) => {
    const hourNumber = parseInt(item.hour.split(":")[0], 10)
    return hourNumber >= BUSINESS_START && hourNumber <= BUSINESS_END
  })
}

export function AccessHeatmap() {
  const { salesHeatmap } = useDashboard()
  const hourLabels = filterBusinessHours(salesHeatmap.weekdays?.[0]?.hourlyData ?? [])
  const columnTemplate = `repeat(${hourLabels.length || 1}, minmax(1.35rem, 1fr))`
  const hourGridClasses = "grid gap-1 w-full"
  const [activeTooltip, setActiveTooltip] = useState<{ day: string; hour: string; intensity: number } | null>(null)
  return (
    <Card className="border-border bg-card w-full">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Mapa de Calor Semanal</CardTitle>
        <p className="text-sm text-muted-foreground">Intensidade de vendas por hora e dia</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-3">
            {hourLabels.length > 0 && (
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
                <span className="text-[11px] uppercase tracking-wide text-muted-foreground font-semibold w-full text-left sm:w-20 sm:text-right">
                  Horário
                </span>
                <div
                  className={`${hourGridClasses} text-[10px] font-semibold uppercase text-muted-foreground`}
                  style={{ gridTemplateColumns: columnTemplate }}
                >
                  {hourLabels.map((hour) => (
                    <span key={hour.hour} className="text-center">
                      {formatHourLabel(hour.hour)}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {salesHeatmap.weekdays.map((row) => {
              const filteredHourly = filterBusinessHours(row.hourlyData)
              return (
                <div key={row.day} className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
                  <span className="text-xs text-muted-foreground w-full text-left sm:w-20 sm:text-right">{row.day}</span>
                  <div className={hourGridClasses} style={{ gridTemplateColumns: columnTemplate }}>
                    {filteredHourly.map((hourData, index) => {
                      const isActive =
                        activeTooltip?.day === row.day && activeTooltip?.hour === hourData.hour
                      return (
                        <div
                          key={index}
                          role="button"
                          tabIndex={0}
                          aria-label={`${row.day} ${hourData.hour}: intensidade ${hourData.intensity}/100`}
                          className={`w-full aspect-square rounded-sm ${getIntensityColor(
                            hourData.intensity
                          )} hover:ring-2 hover:ring-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all duration-200 cursor-pointer group relative`}
                          title={`${row.day} ${hourData.hour}: ${hourData.intensity}/100`}
                          onPointerDown={() =>
                            setActiveTooltip({ day: row.day, hour: hourData.hour, intensity: hourData.intensity })
                          }
                          onFocus={() =>
                            setActiveTooltip({ day: row.day, hour: hourData.hour, intensity: hourData.intensity })
                          }
                          onBlur={() =>
                            setActiveTooltip((current) =>
                              current?.day === row.day && current?.hour === hourData.hour ? null : current
                            )
                          }
                        >
                          <div
                            className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-popover border border-border rounded text-xs transition-opacity pointer-events-none whitespace-nowrap z-10 ${
                              isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                            }`}
                          >
                            {hourData.hour}: {hourData.intensity}/100
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="flex flex-col gap-4 pt-4 border-t border-border sm:flex-row sm:items-center sm:justify-between">
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
            <div
              className="text-xs text-muted-foreground"
              aria-live="polite"
            >
              {activeTooltip
                ? `${activeTooltip.day} • ${activeTooltip.hour}: ${activeTooltip.intensity}/100`
                : "Toque em um horário para ver os detalhes."}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
