import { DashboardData } from "../types/dashboard.type";

export const dashboardData: DashboardData = {
  "lastUpdate": "2025-11-17T16:45:00",
  "dailySummary": {
    "totalSales": 47850.50,
    "averageTicket": 127.35,
    "numberOfSales": 376,
    "dailyGoal": 50000.00,
    "goalPercentage": 95.7
  },
  "topSellingProducts": [
    {
      "id": "P001",
      "name": "Camiseta Básica Premium",
      "category": "Vestuário",
      "quantitySold": 87,
      "totalValue": 6525.00,
      "unitPrice": 75.00
    },
    {
      "id": "P002",
      "name": "Calça Jeans Skinny",
      "category": "Vestuário",
      "quantitySold": 52,
      "totalValue": 7280.00,
      "unitPrice": 140.00
    },
    {
      "id": "P003",
      "name": "Tênis Esportivo Run",
      "category": "Calçados",
      "quantitySold": 43,
      "totalValue": 12040.00,
      "unitPrice": 280.00
    },
    {
      "id": "P004",
      "name": "Mochila Urbana 20L",
      "category": "Acessórios",
      "quantitySold": 38,
      "totalValue": 5320.00,
      "unitPrice": 140.00
    },
    {
      "id": "P005",
      "name": "Relógio Digital Smart",
      "category": "Eletrônicos",
      "quantitySold": 31,
      "totalValue": 6200.00,
      "unitPrice": 200.00
    }
  ],
  "lowStockProducts": [
    {
      "id": "P056",
      "name": "Jaqueta de Couro Sintético",
      "category": "Vestuário",
      "currentStock": 3,
      "minimumStock": 15,
      "status": "crítico",
      "supplier": "Fashion Plus Ltda"
    },
    {
      "id": "P089",
      "name": "Óculos de Sol Polarizado",
      "category": "Acessórios",
      "currentStock": 7,
      "minimumStock": 20,
      "status": "baixo",
      "supplier": "Opti Vision"
    },
    {
      "id": "P123",
      "name": "Perfume Essence 100ml",
      "category": "Perfumaria",
      "currentStock": 5,
      "minimumStock": 25,
      "status": "crítico",
      "supplier": "Fragrance Import"
    }
  ],
  "salesByHour": [
    {
      "hour": "08:00",
      "sales": 1250.00,
      "transactions": 12,
      "averageTicket": 104.17
    },
    {
      "hour": "09:00",
      "sales": 2180.50,
      "transactions": 18,
      "averageTicket": 121.14
    },
    {
      "hour": "10:00",
      "sales": 3420.00,
      "transactions": 27,
      "averageTicket": 126.67
    },
    {
      "hour": "11:00",
      "sales": 4890.00,
      "transactions": 39,
      "averageTicket": 125.38
    },
    {
      "hour": "12:00",
      "sales": 5640.50,
      "transactions": 44,
      "averageTicket": 128.19
    },
    {
      "hour": "13:00",
      "sales": 4320.00,
      "transactions": 35,
      "averageTicket": 123.43
    },
    {
      "hour": "14:00",
      "sales": 5180.00,
      "transactions": 41,
      "averageTicket": 126.34
    },
    {
      "hour": "15:00",
      "sales": 6240.00,
      "transactions": 49,
      "averageTicket": 127.35
    },
    {
      "hour": "16:00",
      "sales": 5890.50,
      "transactions": 46,
      "averageTicket": 128.05
    },
    {
      "hour": "17:00",
      "sales": 4720.00,
      "transactions": 38,
      "averageTicket": 124.21
    },
    {
      "hour": "18:00",
      "sales": 3119.00,
      "transactions": 27,
      "averageTicket": 115.52
    }
  ],
  "salesHeatmap": {
    "weekdays": [
      {
        "day": "Segunda",
        "hourlyData": [
          {"hour": "00:00", "intensity": 5},
          {"hour": "01:00", "intensity": 3},
          {"hour": "02:00", "intensity": 2},
          {"hour": "03:00", "intensity": 2},
          {"hour": "04:00", "intensity": 2},
          {"hour": "05:00", "intensity": 4},
          {"hour": "06:00", "intensity": 9},
          {"hour": "07:00", "intensity": 18},
          {"hour": "08:00", "intensity": 30},
          {"hour": "09:00", "intensity": 44},
          {"hour": "10:00", "intensity": 58},
          {"hour": "11:00", "intensity": 70},
          {"hour": "12:00", "intensity": 82},
          {"hour": "13:00", "intensity": 67},
          {"hour": "14:00", "intensity": 74},
          {"hour": "15:00", "intensity": 88},
          {"hour": "16:00", "intensity": 77},
          {"hour": "17:00", "intensity": 64},
          {"hour": "18:00", "intensity": 49},
          {"hour": "19:00", "intensity": 36},
          {"hour": "20:00", "intensity": 28},
          {"hour": "21:00", "intensity": 20},
          {"hour": "22:00", "intensity": 12},
          {"hour": "23:00", "intensity": 7}
        ]
      },
      {
        "day": "Terça",
        "hourlyData": [
          {"hour": "00:00", "intensity": 6},
          {"hour": "01:00", "intensity": 4},
          {"hour": "02:00", "intensity": 3},
          {"hour": "03:00", "intensity": 3},
          {"hour": "04:00", "intensity": 3},
          {"hour": "05:00", "intensity": 5},
          {"hour": "06:00", "intensity": 12},
          {"hour": "07:00", "intensity": 20},
          {"hour": "08:00", "intensity": 33},
          {"hour": "09:00", "intensity": 46},
          {"hour": "10:00", "intensity": 60},
          {"hour": "11:00", "intensity": 72},
          {"hour": "12:00", "intensity": 85},
          {"hour": "13:00", "intensity": 70},
          {"hour": "14:00", "intensity": 78},
          {"hour": "15:00", "intensity": 90},
          {"hour": "16:00", "intensity": 80},
          {"hour": "17:00", "intensity": 66},
          {"hour": "18:00", "intensity": 52},
          {"hour": "19:00", "intensity": 39},
          {"hour": "20:00", "intensity": 32},
          {"hour": "21:00", "intensity": 22},
          {"hour": "22:00", "intensity": 15},
          {"hour": "23:00", "intensity": 9}
        ]
      },
      {
        "day": "Quarta",
        "hourlyData": [
          {"hour": "00:00", "intensity": 7},
          {"hour": "01:00", "intensity": 5},
          {"hour": "02:00", "intensity": 4},
          {"hour": "03:00", "intensity": 4},
          {"hour": "04:00", "intensity": 4},
          {"hour": "05:00", "intensity": 8},
          {"hour": "06:00", "intensity": 16},
          {"hour": "07:00", "intensity": 25},
          {"hour": "08:00", "intensity": 38},
          {"hour": "09:00", "intensity": 52},
          {"hour": "10:00", "intensity": 66},
          {"hour": "11:00", "intensity": 78},
          {"hour": "12:00", "intensity": 92},
          {"hour": "13:00", "intensity": 76},
          {"hour": "14:00", "intensity": 84},
          {"hour": "15:00", "intensity": 97},
          {"hour": "16:00", "intensity": 89},
          {"hour": "17:00", "intensity": 72},
          {"hour": "18:00", "intensity": 58},
          {"hour": "19:00", "intensity": 44},
          {"hour": "20:00", "intensity": 36},
          {"hour": "21:00", "intensity": 26},
          {"hour": "22:00", "intensity": 18},
          {"hour": "23:00", "intensity": 12}
        ]
      },
      {
        "day": "Quinta",
        "hourlyData": [
          {"hour": "00:00", "intensity": 8},
          {"hour": "01:00", "intensity": 6},
          {"hour": "02:00", "intensity": 5},
          {"hour": "03:00", "intensity": 5},
          {"hour": "04:00", "intensity": 5},
          {"hour": "05:00", "intensity": 9},
          {"hour": "06:00", "intensity": 18},
          {"hour": "07:00", "intensity": 26},
          {"hour": "08:00", "intensity": 41},
          {"hour": "09:00", "intensity": 55},
          {"hour": "10:00", "intensity": 69},
          {"hour": "11:00", "intensity": 81},
          {"hour": "12:00", "intensity": 95},
          {"hour": "13:00", "intensity": 80},
          {"hour": "14:00", "intensity": 88},
          {"hour": "15:00", "intensity": 100},
          {"hour": "16:00", "intensity": 90},
          {"hour": "17:00", "intensity": 74},
          {"hour": "18:00", "intensity": 60},
          {"hour": "19:00", "intensity": 48},
          {"hour": "20:00", "intensity": 38},
          {"hour": "21:00", "intensity": 28},
          {"hour": "22:00", "intensity": 22},
          {"hour": "23:00", "intensity": 15}
        ]
      },
      {
        "day": "Sexta",
        "hourlyData": [
          {"hour": "00:00", "intensity": 10},
          {"hour": "01:00", "intensity": 8},
          {"hour": "02:00", "intensity": 6},
          {"hour": "03:00", "intensity": 6},
          {"hour": "04:00", "intensity": 6},
          {"hour": "05:00", "intensity": 10},
          {"hour": "06:00", "intensity": 20},
          {"hour": "07:00", "intensity": 30},
          {"hour": "08:00", "intensity": 45},
          {"hour": "09:00", "intensity": 60},
          {"hour": "10:00", "intensity": 75},
          {"hour": "11:00", "intensity": 88},
          {"hour": "12:00", "intensity": 100},
          {"hour": "13:00", "intensity": 85},
          {"hour": "14:00", "intensity": 95},
          {"hour": "15:00", "intensity": 100},
          {"hour": "16:00", "intensity": 98},
          {"hour": "17:00", "intensity": 86},
          {"hour": "18:00", "intensity": 72},
          {"hour": "19:00", "intensity": 60},
          {"hour": "20:00", "intensity": 48},
          {"hour": "21:00", "intensity": 36},
          {"hour": "22:00", "intensity": 24},
          {"hour": "23:00", "intensity": 12}
        ]
      },
      {
        "day": "Sábado",
        "hourlyData": [
          {"hour": "00:00", "intensity": 9},
          {"hour": "01:00", "intensity": 7},
          {"hour": "02:00", "intensity": 5},
          {"hour": "03:00", "intensity": 5},
          {"hour": "04:00", "intensity": 5},
          {"hour": "05:00", "intensity": 9},
          {"hour": "06:00", "intensity": 18},
          {"hour": "07:00", "intensity": 28},
          {"hour": "08:00", "intensity": 43},
          {"hour": "09:00", "intensity": 58},
          {"hour": "10:00", "intensity": 73},
          {"hour": "11:00", "intensity": 86},
          {"hour": "12:00", "intensity": 97},
          {"hour": "13:00", "intensity": 83},
          {"hour": "14:00", "intensity": 92},
          {"hour": "15:00", "intensity": 99},
          {"hour": "16:00", "intensity": 95},
          {"hour": "17:00", "intensity": 82},
          {"hour": "18:00", "intensity": 68},
          {"hour": "19:00", "intensity": 54},
          {"hour": "20:00", "intensity": 44},
          {"hour": "21:00", "intensity": 32},
          {"hour": "22:00", "intensity": 20},
          {"hour": "23:00", "intensity": 10}
        ]
      },
      {
        "day": "Domingo",
        "hourlyData": [
          {"hour": "00:00", "intensity": 4},
          {"hour": "01:00", "intensity": 3},
          {"hour": "02:00", "intensity": 2},
          {"hour": "03:00", "intensity": 2},
          {"hour": "04:00", "intensity": 2},
          {"hour": "05:00", "intensity": 5},
          {"hour": "06:00", "intensity": 10},
          {"hour": "07:00", "intensity": 14},
          {"hour": "08:00", "intensity": 22},
          {"hour": "09:00", "intensity": 35},
          {"hour": "10:00", "intensity": 49},
          {"hour": "11:00", "intensity": 62},
          {"hour": "12:00", "intensity": 72},
          {"hour": "13:00", "intensity": 58},
          {"hour": "14:00", "intensity": 65},
          {"hour": "15:00", "intensity": 75},
          {"hour": "16:00", "intensity": 68},
          {"hour": "17:00", "intensity": 58},
          {"hour": "18:00", "intensity": 44},
          {"hour": "19:00", "intensity": 32},
          {"hour": "20:00", "intensity": 25},
          {"hour": "21:00", "intensity": 16},
          {"hour": "22:00", "intensity": 10},
          {"hour": "23:00", "intensity": 6}
        ]
      }
    ]
  },
  "salesByCategory": [
    {
      "category": "Vestuário",
      "sales": 18420.00,
      "percentage": 38.5
    },
    {
      "category": "Calçados",
      "sales": 13650.00,
      "percentage": 28.5
    },
    {
      "category": "Acessórios",
      "sales": 8940.50,
      "percentage": 18.7
    },
    {
      "category": "Eletrônicos",
      "sales": 4680.00,
      "percentage": 9.8
    },
    {
      "category": "Perfumaria",
      "sales": 2160.00,
      "percentage": 4.5
    }
  ],
  "paymentMethods": [
    {
      "method": "Cartão de Crédito",
      "transactions": 198,
      "amount": 26845.50,
      "percentage": 56.1
    },
    {
      "method": "Cartão de Débito",
      "transactions": 89,
      "amount": 11320.00,
      "percentage": 23.7
    },
    {
      "method": "Pix",
      "transactions": 67,
      "amount": 8542.00,
      "percentage": 17.8
    },
    {
      "method": "Dinheiro",
      "transactions": 22,
      "amount": 1143.00,
      "percentage": 2.4
    }
  ]
}