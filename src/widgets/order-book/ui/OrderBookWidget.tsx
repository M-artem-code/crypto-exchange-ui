"use client";

import { useState } from "react";
import { generateOrders } from "@/entities/order";

type OrderBookMode = "all" | "buy" | "sell";

export function OrderBookWidget({ mode = "all" }: { mode?: OrderBookMode }) {
  const [activeTab, setActiveTab] = useState<OrderBookMode>(mode);

  const sellOrders = generateOrders("sell", 12);
  const buyOrders = generateOrders("buy", 12);

  const title =
    mode === "sell"
      ? "Ордера на продажу"
      : mode === "buy"
        ? "Ордера на покупку"
        : "Стакан ордеров";

  const resolvedTab: OrderBookMode = mode === "all" ? activeTab : mode;

  const headerIconColor =
    mode === "sell"
      ? "text-danger"
      : mode === "buy"
        ? "text-success"
        : "text-muted-foreground";
  const headerIcon =
    mode === "sell" ? (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className={headerIconColor}
      >
        <path d="M12 19V5" />
        <path d="m5 12 7-7 7 7" />
      </svg>
    ) : (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className={headerIconColor}
      >
        <path d="M12 5v14" />
        <path d="m19 12-7 7-7-7" />
      </svg>
    );

  return (
    <div className="bg-card rounded-xl flex flex-col h-full overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 bg-[#22274d]">
        <div className="flex items-center gap-2">
          {headerIcon}
          <h3 className="text-2xl font-bold text-muted-foreground">{title}</h3>
        </div>
        {mode === "all" && (
          <div className="flex gap-1">
            <button
              onClick={() => setActiveTab("all")}
              className={`p-2 rounded ${activeTab === "all" ? "bg-[#3a3d52]" : "hover:bg-[#22274d]"}`}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <rect
                  x="2"
                  y="2"
                  width="5"
                  height="5"
                  className="text-danger"
                />
                <rect
                  x="9"
                  y="2"
                  width="5"
                  height="5"
                  className="text-success"
                />
                <rect
                  x="2"
                  y="9"
                  width="5"
                  height="5"
                  className="text-danger"
                />
                <rect
                  x="9"
                  y="9"
                  width="5"
                  height="5"
                  className="text-success"
                />
              </svg>
            </button>
            <button
              onClick={() => setActiveTab("buy")}
              className={`p-2 rounded ${activeTab === "buy" ? "bg-[#3a3d52]" : "hover:bg-[#22274d]"}`}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="text-success"
              >
                <rect x="2" y="2" width="12" height="12" />
              </svg>
            </button>
            <button
              onClick={() => setActiveTab("sell")}
              className={`p-2 rounded ${activeTab === "sell" ? "bg-[#3a3d52]" : "hover:bg-[#22274d]"}`}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="text-danger"
              >
                <rect x="2" y="2" width="12" height="12" />
              </svg>
            </button>
          </div>
        )}
      </div>

      <div className="px-4 py-3">
        <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground">
          <div>Цена</div>
          <div className="text-right">BTC</div>
          <div className="text-right">USDT</div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {(resolvedTab === "all" || resolvedTab === "sell") && (
          <div className="px-4 py-1">
            {mode === "all" && (
              <div className="text-xs text-muted-foreground mb-2">Продажа</div>
            )}
            {sellOrders.map((order, i) => (
              <div
                key={i}
                className="grid grid-cols-3 gap-2 text-xs py-1.5 hover:bg-white/5 cursor-pointer relative group"
              >
                <div
                  className="absolute inset-y-0 right-0 bg-danger/10"
                  style={{ width: `${order.depth}%` }}
                />
                <div className="text-danger relative z-10">{order.price}</div>
                <div className="text-right relative z-10">{order.amount}</div>
                <div className="text-right relative z-10">{order.total}</div>
              </div>
            ))}
          </div>
        )}

        {resolvedTab === "all" && (
          <div className="px-4 py-3 bg-[#22274d]/50">
            <div className="text-2xl font-bold text-center">89,542.51</div>
            <div className="text-xs text-center text-muted-foreground">
              ≈ $89,542.51
            </div>
          </div>
        )}

        {(resolvedTab === "all" || resolvedTab === "buy") && (
          <div className="px-4 py-1">
            {mode === "all" && (
              <div className="text-xs text-muted-foreground mb-2">Покупка</div>
            )}
            {buyOrders.map((order, i) => (
              <div
                key={i}
                className="grid grid-cols-3 gap-2 text-xs py-1.5 hover:bg-white/5 cursor-pointer relative group"
              >
                <div
                  className="absolute inset-y-0 right-0 bg-success/10"
                  style={{ width: `${order.depth}%` }}
                />
                <div className="text-success relative z-10">{order.price}</div>
                <div className="text-right relative z-10">{order.amount}</div>
                <div className="text-right relative z-10">{order.total}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
