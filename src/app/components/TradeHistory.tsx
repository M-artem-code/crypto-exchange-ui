const generateTrades = (count: number) => {
  const trades = [];
  const now = new Date();
  for (let i = 0; i < count; i++) {
    const time = new Date(now.getTime() - i * 15000);
    const isBuy = Math.random() > 0.5;
    trades.push({
      time: time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }),
      type: isBuy ? 'BUY' : 'SELL',
      price: (89542 + (Math.random() - 0.5) * 100).toFixed(2),
      amount: (Math.random() * 0.5).toFixed(6),
      total: ((89542 + (Math.random() - 0.5) * 100) * Math.random() * 0.5).toFixed(2),
    });
  }
  return trades;
};

export function TradeHistory() {
  const trades = generateTrades(20);

  return (
    <div className="bg-card rounded-xl border border-white/10 flex flex-col h-full">
      <div className="p-4 border-b border-white/10">
        <h3 className="font-semibold">История сделок</h3>
        <div className="grid grid-cols-4 gap-2 text-xs text-muted-foreground mt-3">
          <div>Время</div>
          <div className="text-right">Цена (USDT)</div>
          <div className="text-right">Объем (BTC)</div>
          <div className="text-right">Сумма</div>
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
              <div className={`text-right font-medium ${trade.type === 'BUY' ? 'text-success' : 'text-danger'}`}>
                {trade.price}
              </div>
              <div className="text-right">{trade.amount}</div>
              <div className="text-right">{trade.total}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
