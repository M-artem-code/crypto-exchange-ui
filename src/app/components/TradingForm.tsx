export function TradingForm() {
  return (
    <div className="bg-card rounded-xl p-4 h-full flex flex-col">
      <div className="flex bg-[#22274d] rounded-xl overflow-hidden mb-4 h-14 border border-white/5">
        <button className="flex-1 h-full bg-success text-white font-bold text-lg rounded-tl-xl rounded-tr-xl rounded-bl-none rounded-br-none shadow-[0_2px_0_rgba(0,0,0,0.15)] transition-colors">
          Купить
        </button>
        <button className="flex-1 h-full text-muted-foreground font-bold text-lg hover:text-foreground transition-colors">
          Продать
        </button>
      </div>

      <div className="space-y-4 flex-1">
        <div className="flex items-center justify-between text-sm text-muted-foreground pb-3 border-b border-white/10">
          <span>Доступно:</span>
          <span className="tabular-nums">45 854.82 USDT</span>
        </div>

        <div className="relative bg-[#22274d]/60 border border-white/5 rounded-xl px-4 pt-3 pb-4">
          <div className="text-sm text-muted-foreground">Вы покупаете:</div>
          <div className="relative mt-1">
            <input
              type="text"
              defaultValue="0.00844541245"
              className="w-full bg-transparent text-xl font-bold text-foreground tabular-nums pr-24 focus:outline-none"
            />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-2 bg-[#2a2d42] rounded-full px-3 py-1.5">
              <div className="w-6 h-6 rounded-full bg-[#f7931a] flex items-center justify-center">
                <span className="text-white text-xs font-bold">₿</span>
              </div>
              <span className="font-semibold">BTC</span>
            </div>
          </div>
        </div>

        <div className="text-xs text-muted-foreground">
          1 BTC ≈ USD $95,875.01
        </div>

        <div className="relative bg-[#22274d]/60 border border-white/5 rounded-xl px-4 pt-3 pb-4">
          <div className="text-sm text-muted-foreground">Вы потратите:</div>
          <div className="relative mt-1">
            <input
              type="text"
              defaultValue="14.85"
              className="w-full bg-transparent text-xl font-bold text-foreground tabular-nums pr-28 focus:outline-none"
            />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-2 bg-[#2a2d42] rounded-full px-3 py-1.5">
              <div className="w-6 h-6 rounded-full bg-[#f0b90b] flex items-center justify-center">
                <span className="text-white text-xs font-bold">$</span>
              </div>
              <span className="font-semibold">USDT</span>
            </div>
          </div>
        </div>

        <button className="w-full py-4 text-2xl rounded-xl font-bold text-white transition-colors bg-success hover:bg-success/90">
          Купить BTC
        </button>
      </div>
    </div>
  );
}
