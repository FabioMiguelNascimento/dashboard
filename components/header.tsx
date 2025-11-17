"use client"

import { useDashboard } from "@/app/contexts/dashboard.context";
import { DollarSign, Receipt, ShoppingCart, Target } from "lucide-react";
import MetricsCard from "./metrics-card";

interface Metrics {
    value: string;
    Icon: typeof DollarSign;
    title: string;
    growth: number;
}

export default function Header() {
    const { dailySummary } = useDashboard()

    const metrics: Metrics[] = [
        {
            value:`R$ ${dailySummary.totalSales.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`,
            Icon: DollarSign,
            title: "Total de Vendas",
            growth: 5.3
        },
        {
            value:`R$ ${dailySummary.averageTicket.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`,
            Icon: Receipt,
            title: "Ticket Médio",
            growth: 1.8
        },
        {
            value: dailySummary.numberOfSales.toString(),
            Icon: ShoppingCart,
            title: "Número de Vendas",
            growth: -2.5
        },
        {
            value:`R$ ${dailySummary.dailyGoal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`,
            Icon: Target,
            title: "Meta Diária",
            growth: 7.1
        }
    ]

    if (!dailySummary) {
        return (
            <header className="w-full grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
                <MetricsCard value="—" Icon={DollarSign} title="Total de Vendas" growth={0} />
                <MetricsCard value="—" Icon={Receipt} title="Ticket Médio" growth={0} />
                <MetricsCard value="—" Icon={ShoppingCart} title="Número de Vendas" growth={0} />
                <MetricsCard value="—" Icon={Target} title="Meta Diária" growth={0} />
            </header>
        )
    }

    return (
        <header className="w-full grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
            {metrics.map(metric => (
                <MetricsCard value={metric.value} Icon={metric.Icon} title={metric.title} growth={metric.growth} />
            ))}
        </header>
    )
}