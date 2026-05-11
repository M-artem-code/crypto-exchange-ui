const generateTrades = (count: number) => {
  const trades = [];
  const now = new Date();
  for (let i = 0; i < count; i++) {
    const time = new Date(now.getTime() - i * 15000);
    const isBuy = Math.random() > 0.5;
    trades.push({
      time: time.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }),
      type: isBuy ? "BUY" : "SELL",
      price: (89542 + (Math.random() - 0.5) * 100).toFixed(2),
      amount: (Math.random() * 0.5).toFixed(6),
      total: (
        (89542 + (Math.random() - 0.5) * 100) *
        Math.random() *
        0.5
      ).toFixed(2),
    });
  }
  return trades;
};

export function TradeHistory() {
  const trades = generateTrades(20);

  return (
    <div className="bg-card rounded-xl flex flex-col h-full overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 bg-[#22274d]">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-muted-foreground"
        >
          <path d="M4 4h16v16H4z" />
          <path d="M8 8h8" />
          <path d="M8 12h8" />
          <path d="M8 16h5" />
        </svg>
        <h3 className="font-semibold text-muted-foreground">История сделок</h3>
      </div>

      <div className="px-4 py-3">
        <div className="grid grid-cols-4 gap-2 text-xs text-muted-foreground">
          <div>Время</div>
          <div className="text-right">Тип</div>
          <div className="text-right">Цена</div>
          <div className="text-right">BTC</div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="px-4 py-2">
          {trades.map((trade, i) => (
            <div
              key={i}
              className="grid grid-cols-4 gap-2 text-xs py-1.5 hover:bg-white/5 cursor-pointer"
            >
              <div className="text-muted-foreground">{trade.time}</div>
              <div
                className={`text-right font-medium ${trade.type === "BUY" ? "text-success" : "text-danger"}`}
              >
                {trade.type}
              </div>
              <div className="text-right">{trade.price}</div>
              <div className="text-right text-muted-foreground">
                {trade.amount}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
