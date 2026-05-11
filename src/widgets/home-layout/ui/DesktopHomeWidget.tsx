"use client";

import { TradingFormWidget } from "@/widgets/trading-form";
import { BalanceCardWidget } from "@/widgets/balance-card";
import { OrderBookWidget } from "@/widgets/order-book";
import { MarketDataWidget } from "@/widgets/market-data";
import { TradeHistoryWidget } from "@/widgets/trade-history";
import { TradingChartWidget } from "@/widgets/trading-chart";

export function DesktopHomeWidget() {
  return (
    <main className="flex-1 p-4">
      <div className="grid grid-cols-1 xl:grid-cols-[330px_3.5fr] gap-4 mb-4">
        <div className="h-[380px]">
          <TradingFormWidget />
        </div>

        <div className="h-[380px]">
          <TradingChartWidget />
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[330px_1fr_1fr] gap-4 mb-4">
        <div className="h-[330px]">
          <BalanceCardWidget />
        </div>
        <div className="h-[330px]">
          <OrderBookWidget mode="sell" />
        </div>
        <div className="h-[330px]">
          <OrderBookWidget mode="buy" />
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_750px] gap-4">
        <div className="h-[300px]">
          <MarketDataWidget />
        </div>
        <div className="h-[300px]">
          <TradeHistoryWidget />
        </div>
      </div>
    </main>
  );
}
