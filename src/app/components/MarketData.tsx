const marketPairs = [
  { pair: 'BTC/USDT', price: '89,542.51', change: -3.47, volume: '8.2B' },
  { pair: 'ETH/USDT', price: '3,234.12', change: 2.34, volume: '2.1B' },
  { pair: 'BNB/USDT', price: '612.45', change: 1.23, volume: '856M' },
  { pair: 'SOL/USDT', price: '143.67', change: -1.89, volume: '643M' },
  { pair: 'XRP/USDT', price: '0.52', change: 4.56, volume: '521M' },
  { pair: 'ADA/USDT', price: '0.45', change: 0.87, volume: '412M' },
  { pair: 'DOGE/USDT', price: '0.08', change: -2.12, volume: '389M' },
  { pair: 'MATIC/USDT', price: '0.92', change: 3.45, volume: '298M' },
];

export function MarketData() {
  return (
    <div className="bg-card rounded-xl border border-white/10 flex flex-col h-full">
      <div className="p-4 border-b border-white/10">
        <h3 className="font-semibold">Рынок</h3>
        <div className="grid grid-cols-4 gap-2 text-xs text-muted-foreground mt-3">
          <div>Пара</div>
          <div className="text-right">Цена</div>
          <div className="text-right">Изменение</div>
          <div className="text-right">Объем 24ч</div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="px-4 py-2">
          {marketPairs.map((pair, i) => (
            <div
              key={i}
              className="grid grid-cols-4 gap-2 text-xs py-2.5 hover:bg-white/5 cursor-pointer rounded transition-colors"
            >
              <div className="font-medium">{pair.pair}</div>
              <div className="text-right">{pair.price}</div>
              <div className={`text-right font-medium ${pair.change >= 0 ? 'text-success' : 'text-danger'}`}>
                {pair.change >= 0 ? '+' : ''}{pair.change}%
              </div>
              <div className="text-right text-muted-foreground">{pair.volume}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
