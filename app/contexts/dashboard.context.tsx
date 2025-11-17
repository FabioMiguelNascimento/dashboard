"use client"

import { createContext, ReactNode, useContext } from "react";
import { DashboardData } from "../types/dashboard.type";
import { dashboardData } from "../data/dashboard.data";

const DashboardContext = createContext<DashboardData | undefined>(undefined)

export function DashboardProvider({ children }: { children: ReactNode }) {
    return  (
        <DashboardContext.Provider value={dashboardData}>
            {children}  
        </DashboardContext.Provider> 
    )
} 

export function useDashboard() {
    const context = useContext(DashboardContext);

    if(!context) {
        throw new Error("Context must be used with a provider")
    }

    return context
}