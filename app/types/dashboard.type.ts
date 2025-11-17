export type DashboardData = {
  lastUpdate: string
  dailySummary: DailySummary
  topSellingProducts: TopSellingProduct[]
  lowStockProducts: LowStockProduct[]
  salesByHour: SalesByHour[]
  salesHeatmap: SalesHeatmap
  salesByCategory: SalesByCategory[]
  paymentMethods: PaymentMethod[]
} | undefined 

export interface DailySummary {
  totalSales: number
  averageTicket: number
  numberOfSales: number
  dailyGoal: number
  goalPercentage: number
}

export interface TopSellingProduct {
  id: string
  name: string
  category: string
  quantitySold: number
  totalValue: number
  unitPrice: number
}

export interface LowStockProduct {
  id: string
  name: string
  category: string
  currentStock: number
  minimumStock: number
  status: string
  supplier: string
}

export interface SalesByHour {
  hour: string
  sales: number
  transactions: number
  averageTicket: number
}

export interface SalesHeatmap {
  weekdays: Weekday[]
}

export interface Weekday {
  day: string
  hourlyData: HourlyDaum[]
}

export interface HourlyDaum {
  hour: string
  intensity: number
}

export interface SalesByCategory {
  category: string
  sales: number
  percentage: number
}

export interface PaymentMethod {
  method: string
  transactions: number
  amount: number
  percentage: number
}