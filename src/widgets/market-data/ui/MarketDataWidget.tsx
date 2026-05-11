"use client";

const marketPairs = [
  { pair: "BTC/USDT", price: "89,542.51", change: -3.47, volume: "8.2B" },
  { pair: "ETH/USDT", price: "3,234.12", change: 2.34, volume: "2.1B" },
  { pair: "BNB/USDT", price: "612.45", change: 1.23, volume: "856M" },
  { pair: "SOL/USDT", price: "143.67", change: -1.89, volume: "643M" },
  { pair: "XRP/USDT", price: "0.52", change: 4.56, volume: "521M" },
  { pair: "ADA/USDT", price: "0.45", change: 0.87, volume: "412M" },
  { pair: "DOGE/USDT", price: "0.08", change: -2.12, volume: "389M" },
  { pair: "MATIC/USDT", price: "0.92", change: 3.45, volume: "298M" },
];

export function MarketDataWidget() {
  return (
    <div className="bg-card rounded-xl flex flex-col h-full overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 bg-[#22274d]">
        <div className="flex items-center gap-2">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-muted-foreground"
          >
            <path d="M3 3v18h18" />
            <path d="M7 14l4-4 4 4 6-6" />
          </svg>
          <h3 className="font-semibold text-muted-foreground">Рынок</h3>
        </div>

        <div className="w-56">
          <div className="relative">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              type="text"
              placeholder="Поиск"
              className="w-full pl-9 pr-3 py-2 bg-[#22274d] border rounded-lg text-xs focus:outline-none focus:ring-2 ring-success/50"
            />
          </div>
        </div>
      </div>

      <div className="px-4 pt-3 pb-2">
        <div className="flex items-center gap-2 mb-3">
          {["TOP", "LTC", "BTC", "MV848", "USDT"].map((t) => (
            <button
              key={t}
              className="px-2.5 py-1 rounded-md bg-[#22274d] text-[10px] text-muted-foreground hover:bg-[#3a3d52]"
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-4 gap-2 text-xs text-muted-foreground pb-1">
          <div>Название</div>
          <div className="text-right">Цена</div>
          <div className="text-right">24ч Изменение</div>
          <div className="text-right">24ч Объём.</div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="px-4 py-2">
          {marketPairs.map((pair, i) => (
            <div
              key={i}
              className="grid grid-cols-4 gap-2 text-xs py-2.5 hover:bg-white/5 cursor-pointer rounded transition-colors"
            >
              <div className="font-medium flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#f7931a]/20 flex items-center justify-center text-[10px] text-[#f7931a]">
                  ₿
                </div>
                <span>{pair.pair}</span>
              </div>
              <div className="text-right">{pair.price}</div>
              <div
                className={`text-right font-medium ${pair.change >= 0 ? "text-success" : "text-danger"}`}
              >
                {pair.change >= 0 ? "+" : ""}
                {pair.change}%
              </div>
              <div className="text-right text-muted-foreground">
                {pair.volume}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
