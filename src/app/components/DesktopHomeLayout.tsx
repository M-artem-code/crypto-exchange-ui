import { TradingChart } from "./TradingChart";
import { TradingForm } from "./TradingForm";
import { OrderBook } from "./OrderBook";
import { BalanceCard } from "./BalanceCard";
import { MarketData } from "./MarketData";
import { TradeHistory } from "./TradeHistory";

export function DesktopHomeLayout() {
  return (
    <main className="flex-1 p-4 overflow-y-auto">
      <div className="grid grid-cols-1 xl:grid-cols-[340px_1fr] gap-4 mb-4">
        <div className="h-[400px]">
          <TradingForm />
        </div>

        <div className="h-[400px]">
          <TradingChart />
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[0.51fr_1fr_1fr] gap-4 mb-4">
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
