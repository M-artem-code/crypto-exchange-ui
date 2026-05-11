import type { Trade } from "../model/types";
import { seededFloat } from "@/shared/lib/random";

const BASE_NOW_UTC = new Date("2026-01-01T00:00:00.000Z");

export function generateTrades(count: number, stepMs = 15000): Trade[] {
  const trades: Trade[] = [];

  for (let i = 0; i < count; i++) {
    const time = new Date(BASE_NOW_UTC.getTime() - i * stepMs);
    const r = seededFloat((i + 1) * 4242);
    const isBuy = r > 0.5;

    const priceNum = 89542 + (r - 0.5) * 100;
    const amountNum = r * 0.5;

    trades.push({
      time: time.toLocaleTimeString("ru-RU", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "UTC",
      }),
      type: isBuy ? "BUY" : "SELL",
      price: priceNum.toFixed(2),
      amount: amountNum.toFixed(6),
      total: (priceNum * amountNum).toFixed(2),
    });
  }

  return trades;
}
