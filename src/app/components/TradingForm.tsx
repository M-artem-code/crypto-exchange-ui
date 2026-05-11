export function TradingForm() {
  return (
    <div className="bg-card rounded-xl p-4 h-full flex flex-col">
      <div className="flex bg-[#2a2d42] rounded-lg p-1 mb-4">
        <button className="flex-1 py-2 rounded-md bg-success text-white font-medium">
          Купить
        </button>
        <button className="flex-1 py-2 rounded-md text-muted-foreground font-medium hover:text-foreground">
          Продать
        </button>
      </div>

      <div className="space-y-4 flex-1">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>Доступно:</span>
          <span className="tabular-nums">45 854.82 USDT</span>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm text-muted-foreground">
              Вы покупаете:
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              value="0.00844541245"
              className="w-full bg-[#2a2d42] rounded-lg px-4 py-3 pr-16 focus:outline-none focus:ring-2 ring-success/50"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#f7931a]/20 flex items-center justify-center">
                <span className="text-[#f7931a] text-xs font-bold">₿</span>
              </div>
              <span className="font-medium">BTC</span>
            </div>
          </div>
        </div>

        <div className="text-xs text-muted-foreground">
          1 BTC ≈ USD $95,875.01
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm text-muted-foreground">
              Вы потратите:
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              value="14.85"
              className="w-full bg-[#2a2d42] rounded-lg px-4 py-3 pr-20 focus:outline-none focus:ring-2 ring-success/50"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#26a17b]/20 flex items-center justify-center">
                <span className="text-[#26a17b] text-xs font-bold">$</span>
              </div>
              <span className="font-medium">USDT</span>
            </div>
          </div>
        </div>

        <button className="w-full py-4 rounded-lg font-medium text-white transition-colors bg-success hover:bg-success/90">
          Купить BTC
        </button>
      </div>
    </div>
  );
}
