type TradingChartHeaderProps = {
  timeframe: string;
  setTimeframe: (timeframe: string) => void;
  timeframes: string[];
  currentPrice: number;
  priceChange: number;
};

export function TradingChartHeader({
  timeframe,
  setTimeframe,
  timeframes,
  currentPrice,
  priceChange,
}: TradingChartHeaderProps) {
  return (
    <div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-5 md:items-center md:gap-x-10 md:gap-y-0">
        <div className="flex items-center gap-4 min-w-0">
          <div className="w-10 h-10 rounded-full bg-[#f7931a] flex items-center justify-center shrink-0">
            <span className="text-white font-bold">₿</span>
          </div>

          <div className="leading-tight min-w-0">
            <div className="text-xl font-bold leading-5 truncate">BTC/USDT</div>
            <div className="text-sm text-muted-foreground truncate">
              Bitcoin info
            </div>
          </div>
        </div>

        <div className="text-sm">
          <div className="text-muted-foreground text-sm mb-1">Последнее</div>
          <div className="text-2xl font-bold text-success tabular-nums">
            {currentPrice.toLocaleString("en-US")}
          </div>
        </div>

        <div className="text-sm">
          <div className="text-muted-foreground text-sm mb-1">
            Изменение за 24 часа
          </div>
          <div
            className={`font-medium tabular-nums ${priceChange >= 0 ? "text-success" : "text-danger"}`}
          >
            3,741.52 {priceChange >= 0 ? "+" : ""}
            {priceChange}%
          </div>
        </div>

        <div className="text-sm">
          <div className="text-muted-foreground text-sm mb-1">Макс. за 24ч</div>
          <div className="font-semibold tabular-nums">91,790.14</div>
        </div>

        <div className="text-sm">
          <div className="text-muted-foreground text-sm mb-1">Мин. за 24ч</div>
          <div className="font-semibold tabular-nums">88,450.14</div>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-3 min-w-0">
        <div className="flex items-center gap-2 overflow-x-auto min-w-0 flex-1 pr-1">
          {timeframes.map((tf) => (
            <button
              key={tf}
              onClick={() => setTimeframe(tf)}
              className={`px-3 h-7 rounded-md text-xs font-medium transition-colors whitespace-nowrap leading-none ${
                timeframe === tf
                  ? "bg-[#4a4d6a] text-white"
                  : "bg-[#2a2d42] text-muted-foreground hover:bg-[#3a3d52]"
              }`}
            >
              {tf}
            </button>
          ))}
        </div>

        <div className="text-xs text-muted-foreground whitespace-nowrap shrink-0 flex items-center gap-1">
          <span>Объём за 24ч (USDT): </span>
          <span className="text-foreground font-medium tabular-nums">
            2,427,587,475.22
          </span>
        </div>
      </div>
    </div>
  );
}
