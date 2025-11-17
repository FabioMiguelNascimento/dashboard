import { LucideIcon, TrendingDown, TrendingUp } from "lucide-react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "./ui/card";

export interface MetricsCardProps {
  value: string;
  Icon: LucideIcon;
  title: string;
  growth: number;
}

const renderGrowth = (growth: number) => {
  if (growth > 0) {
    return (
      <div className="flex gap-2 text-green-600">
        <TrendingUp />
        <span>+ {growth}%</span>
      </div>
    );
  } else if (growth < 0) {
  return (
    <div className="flex gap-2 text-red-600">
      <TrendingDown />
      <span>- {growth}%</span>
    </div>
  );
  }

  return (
    <div className="text-muted-foreground">0%</div>
  );
};

export default function MetricsCard({
  value,
  growth,
  Icon,
  title,
}: MetricsCardProps) {
  return (
  <Card className="w-full h-full">
      <CardHeader>
        <CardTitle className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="p-2 bg-primary rounded-xl flex items-center justify-center min-w-10">
            <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
          </div>
          {renderGrowth(growth)}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <h2 className="text-muted-foreground text-sm font-semibold italic">{title}</h2>
        <span className="text-2xl sm:text-3xl font-bold truncate">{value}</span>
      </CardContent>
    </Card>
  );
}
