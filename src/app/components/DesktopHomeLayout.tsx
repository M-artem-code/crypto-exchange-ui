"use client";

import { useTimeframeStore } from "@/features/timeframe-select";
import { generateChartData } from "@/entities/market";

import { TradingForm } from "./TradingForm";
import { OrderBook } from "./OrderBook";
import { BalanceCard } from "./BalanceCard";
import { MarketData } from "./MarketData";
import { TradeHistory } from "./TradeHistory";
import { TradingChartCanvas } from "./TradingChartCanvas";
import { TradingChartHeader } from "./TradingChartHeader";

const timeframes = ["12 Hours", "24 Hours", "7 Days", "1M", "6M", "Order book"];

export function DesktopHomeLayout() {
  const timeframe = useTimeframeStore((s) => s.timeframe);
  const setTimeframe = useTimeframeStore((s) => s.setTimeframe);
  const chartData = generateChartData(100);
  const currentPrice = 89542.51;
  const priceChange = -3.47;

  return (
    <main className="flex-1 p-4">
      <div className="grid grid-cols-1 xl:grid-cols-[330px_3.5fr] gap-4 mb-4">
        <div className="h-[380px]">
          <TradingForm />
        </div>

        <div className="h-[380px]">
          <div className="h-full grid grid-rows-[auto_1fr] gap-3">
            <div className="bg-card rounded-xl p-4">
              <TradingChartHeader
                timeframe={timeframe}
                setTimeframe={setTimeframe}
                timeframes={timeframes}
                currentPrice={currentPrice}
                priceChange={priceChange}
              />
            </div>

            <div className="bg-card rounded-xl p-4 min-h-0">
              <TradingChartCanvas chartData={chartData} />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[330px_1fr_1fr] gap-4 mb-4">
        <div className="h-[330px]">
          <BalanceCard />
        </div>
        <div className="h-[330px]">
          <OrderBook mode="sell" />
        </div>
        <div className="h-[330px]">
          <OrderBook mode="buy" />
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_750px] gap-4">
        <div className="h-[300px]">
          <MarketData />
        </div>
        <div className="h-[300px]">
          <TradeHistory />
        </div>
      </div>
    </main>
  );
}
