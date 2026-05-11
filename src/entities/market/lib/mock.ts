import type { ChartPoint } from "../model/types";
import { seededFloat } from "@/shared/lib/random";

export function generateChartData(points: number, seed = 9999): ChartPoint[] {
  const data: ChartPoint[] = [];
  let price = 89000;

  for (let i = 0; i < points; i++) {
    const r = seededFloat((i + 1) * seed);
    price += (r - 0.48) * 500;

    data.push({
      time: i,
      price,
      high: price + r * 200,
      low: price - r * 200,
    });
  }

  return data;
}
