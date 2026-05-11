"use client";

import { useTimeframeStore } from "@/features/timeframe-select";
import { generateChartData } from "@/entities/market";

import { TradingChartHeader } from "./TradingChartHeader";
import { TradingChartCanvas } from "./TradingChartCanvas";

const timeframes = ["12 Hours", "24 Hours", "7 Days", "1M", "6M", "Order book"];

export function TradingChartWidget() {
  const timeframe = useTimeframeStore((s) => s.timeframe);
  const setTimeframe = useTimeframeStore((s) => s.setTimeframe);
  const chartData = generateChartData(100);

  const currentPrice = 89542.51;
  const priceChange = -3.47;

  return (
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
  );
}
