import type { Order } from "../model/types";
import { seededFloat } from "@/shared/lib/random";

export function generateOrders(type: "buy" | "sell", count: number): Order[] {
  const orders: Order[] = [];
  const basePrice = type === "buy" ? 89500 : 89550;

  for (let i = 0; i < count; i++) {
    const r = seededFloat((i + 1) * 4242);
    const price = type === "buy" ? basePrice - i * 10 : basePrice + i * 10;

    orders.push({
      price: price.toFixed(2),
      amount: (r * 2).toFixed(6),
      total: (price * r * 2).toFixed(2),
      depth: r * 70 + 10,
    });
  }

  return orders;
}
