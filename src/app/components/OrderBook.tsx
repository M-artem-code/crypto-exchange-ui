import { useState } from 'react';

const generateOrders = (type: 'buy' | 'sell', count: number) => {
  const orders = [];
  const basePrice = type === 'buy' ? 89500 : 89550;
  for (let i = 0; i < count; i++) {
    const price = type === 'buy' ? basePrice - i * 10 : basePrice + i * 10;
    orders.push({
      price: price.toFixed(2),
      amount: (Math.random() * 2).toFixed(6),
      total: (price * Math.random() * 2).toFixed(2),
    });
  }
  return orders;
};

export function OrderBook() {
  const [activeTab, setActiveTab] = useState<'all' | 'buy' | 'sell'>('all');

  const buyOrders = generateOrders('buy', 15);
  const sellOrders = generateOrders('sell', 15);

  return (
    <div className="bg-card rounded-xl border border-white/10 flex flex-col h-full">
      <div className="p-4 border-b border-white/10">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold">Стакан ордеров</h3>
          <div className="flex gap-1">
            <button
              onClick={() => setActiveTab('all')}
              className={`p-2 rounded ${activeTab === 'all' ? 'bg-[#3a3d52]' : 'hover:bg-[#2a2d42]'}`}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <rect x="2" y="2" width="5" height="5" className="text-danger" />
                <rect x="9" y="2" width="5" height="5" className="text-success" />
                <rect x="2" y="9" width="5" height="5" className="text-danger" />
                <rect x="9" y="9" width="5" height="5" className="text-success" />
              </svg>
            </button>
            <button
              onClick={() => setActiveTab('buy')}
              className={`p-2 rounded ${activeTab === 'buy' ? 'bg-[#3a3d52]' : 'hover:bg-[#2a2d42]'}`}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-success">
                <rect x="2" y="2" width="12" height="12" />
              </svg>
            </button>
            <button
              onClick={() => setActiveTab('sell')}
              className={`p-2 rounded ${activeTab === 'sell' ? 'bg-[#3a3d52]' : 'hover:bg-[#2a2d42]'}`}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-danger">
                <rect x="2" y="2" width="12" height="12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground">
          <div>Цена (USDT)</div>
          <div className="text-right">Количество (BTC)</div>
          <div className="text-right">Сумма</div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {(activeTab === 'all' || activeTab === 'sell') && (
          <div className="px-4 py-2">
            <div className="text-xs text-muted-foreground mb-2">Продажа</div>
            {sellOrders.map((order, i) => (
              <div
                key={i}
                className="grid grid-cols-3 gap-2 text-xs py-1.5 hover:bg-white/5 cursor-pointer relative group"
              >
                <div
                  className="absolute inset-y-0 right-0 bg-danger/10"
                  style={{ width: `${Math.random() * 70 + 10}%` }}
                />
                <div className="text-danger relative z-10">{order.price}</div>
                <div className="text-right relative z-10">{order.amount}</div>
                <div className="text-right relative z-10">{order.total}</div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'all' && (
          <div className="px-4 py-3 bg-[#2a2d42]/50">
            <div className="text-2xl font-bold text-center">89,542.51</div>
            <div className="text-xs text-center text-muted-foreground">≈ $89,542.51</div>
          </div>
        )}

        {(activeTab === 'all' || activeTab === 'buy') && (
          <div className="px-4 py-2">
            <div className="text-xs text-muted-foreground mb-2">Покупка</div>
            {buyOrders.map((order, i) => (
              <div
                key={i}
                className="grid grid-cols-3 gap-2 text-xs py-1.5 hover:bg-white/5 cursor-pointer relative group"
              >
                <div
                  className="absolute inset-y-0 right-0 bg-success/10"
                  style={{ width: `${Math.random() * 70 + 10}%` }}
                />
                <div className="text-success relative z-10">{order.price}</div>
                <div className="text-right relative z-10">{order.amount}</div>
                <div className="text-right relative z-10">{order.total}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
