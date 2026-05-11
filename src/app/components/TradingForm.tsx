import { useState } from 'react';

export function TradingForm() {
  const [activeTab, setActiveTab] = useState<'buy' | 'sell'>('sell');

  return (
    <div className="bg-card rounded-xl border border-white/10 p-4">
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setActiveTab('buy')}
          className={`flex-1 py-2.5 rounded-lg font-medium transition-colors ${
            activeTab === 'buy'
              ? 'bg-success text-white'
              : 'bg-[#2a2d42] text-muted-foreground'
          }`}
        >
          Купить
        </button>
        <button
          onClick={() => setActiveTab('sell')}
          className={`flex-1 py-2.5 rounded-lg font-medium transition-colors ${
            activeTab === 'sell'
              ? 'bg-danger text-white'
              : 'bg-[#2a2d42] text-muted-foreground'
          }`}
        >
          Продать
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm text-muted-foreground">Вы продаёте:</label>
            <span className="text-xs text-muted-foreground">1 BTC ≈ USD $95,875.01</span>
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

        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm text-muted-foreground">Вы получаете:</label>
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

        <button
          className={`w-full py-4 rounded-lg font-medium text-white transition-colors ${
            activeTab === 'sell'
              ? 'bg-danger hover:bg-danger/90'
              : 'bg-success hover:bg-success/90'
          }`}
        >
          {activeTab === 'sell' ? 'Продать' : 'Купить'}
        </button>
      </div>
    </div>
  );
}
