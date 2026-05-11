import { useState } from "react";

import { TradingForm } from "./TradingForm";
import { OrderBook } from "./OrderBook";
import { BalanceCard } from "./BalanceCard";
import { MarketData } from "./MarketData";
import { TradeHistory } from "./TradeHistory";
import { TradingChartCanvas } from "./TradingChartCanvas";
import { TradingChartHeader } from "./TradingChartHeader";

const timeframes = ["12 Hours", "24 Hours", "7 Days", "1M", "6M", "Order book"];

const generateMockData = (points: number) => {
  const data = [];
  let price = 89000;
  for (let i = 0; i < points; i++) {
    price += (Math.random() - 0.48) * 500;
    data.push({
      time: i,
      price: price,
      high: price + Math.random() * 200,
      low: price - Math.random() * 200,
    });
  }
  return data;
};

export function DesktopHomeLayout() {
  const [timeframe, setTimeframe] = useState("24 Hours");
  const chartData = generateMockData(100);
  const currentPrice = 89542.51;
  const priceChange = -3.47;

  return (
    <main className="flex-1 p-4 overflow-y-auto">
      <div className="grid grid-cols-1 xl:grid-cols-[260px_1fr] gap-4 mb-4">
        <div className="h-[400px]">
          <TradingForm />
        </div>

        <div className="h-[400px]">
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

      <div className="grid grid-cols-1 xl:grid-cols-[0.5fr_1fr_1fr] gap-4 mb-4">
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

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_650px] gap-4">
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
