import { useState } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const timeframes = ['12 Hours', '24 Hours', '7 Days', '1M'];

const generateMockData = (points: number) => {
  const data = [];
  let price = 89000;
  for (let i = 0; i < points; i++) {
    price += (Math.random() - 0.48) * 500;
    data.push({
      time: i,
      price: price,
      high: price + Math.random() * 200,
      low: price - Math.random() * 200,
    });
  }
  return data;
};

export function TradingChart() {
  const [timeframe, setTimeframe] = useState('24 Hours');
  const chartData = generateMockData(100);

  const currentPrice = 89542.51;
  const priceChange = -3.47;
  const volume24h = 8186421;

  return (
    <div className="bg-card rounded-xl p-6 border border-white/10">
      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-[#f7931a]/20 flex items-center justify-center">
              <span className="text-[#f7931a] font-bold">₿</span>
            </div>
            <div>
              <h2 className="text-lg font-bold">BTC/USDT</h2>
              <p className="text-xs text-muted-foreground">Bitcoin Info</p>
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold">{currentPrice.toLocaleString('en-US')}</span>
            <span className={`flex items-center gap-1 text-sm font-medium ${priceChange >= 0 ? 'text-success' : 'text-danger'}`}>
              <span>{priceChange >= 0 ? '+' : ''}{priceChange}%</span>
              {priceChange >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <div className="text-muted-foreground mb-1">Макс. за 24ч</div>
            <div className="font-medium">91,790.14</div>
          </div>
          <div>
            <div className="text-muted-foreground mb-1">Объем за 24ч (BTC)</div>
            <div className="font-medium">{volume24h.toLocaleString('en-US')}</div>
          </div>
          <div>
            <div className="text-muted-foreground mb-1">Мин. за 24ч</div>
            <div className="font-medium">88,450.14</div>
          </div>
          <div>
            <div className="text-muted-foreground mb-1">Объем за 24ч (USDT)</div>
            <div className="font-medium">2,427,587,475.22</div>
          </div>
        </div>
      </div>

      <div className="flex gap-2 mb-4">
        {timeframes.map((tf) => (
          <button
            key={tf}
            onClick={() => setTimeframe(tf)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              timeframe === tf
                ? 'bg-[#4a4d6a] text-white'
                : 'bg-[#2a2d42] text-muted-foreground hover:bg-[#3a3d52]'
            }`}
          >
            {tf}
          </button>
        ))}
      </div>

      <div className="relative h-80">
        <svg width="100%" height="100%" className="overflow-visible">
          <defs>
            <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4caf50" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#4caf50" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          {[0, 1, 2, 3, 4].map((i) => (
            <line
              key={i}
              x1="0"
              y1={`${i * 25}%`}
              x2="100%"
              y2={`${i * 25}%`}
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="1"
            />
          ))}

          {/* Chart area */}
          <path
            d={`M 0,${320 - ((chartData[0].price - 88000) / 4000) * 320} ${chartData
              .map((point, i) => {
                const x = (i / chartData.length) * 100;
                const y = 320 - ((point.price - 88000) / 4000) * 320;
                return `L ${x}%,${y}`;
              })
              .join(' ')} L 100%,320 L 0,320 Z`}
            fill="url(#chartGradient)"
          />

          {/* Chart line */}
          <path
            d={`M 0,${320 - ((chartData[0].price - 88000) / 4000) * 320} ${chartData
              .map((point, i) => {
                const x = (i / chartData.length) * 100;
                const y = 320 - ((point.price - 88000) / 4000) * 320;
                return `L ${x}%,${y}`;
              })
              .join(' ')}`}
            fill="none"
            stroke="#4caf50"
            strokeWidth="2"
          />

          {/* Candlesticks */}
          {chartData.filter((_, i) => i % 5 === 0).map((point, i) => {
            const x = (((i * 5) / chartData.length) * 100) + '%';
            const yHigh = 320 - ((point.high - 88000) / 4000) * 320;
            const yLow = 320 - ((point.low - 88000) / 4000) * 320;
            const yPrice = 320 - ((point.price - 88000) / 4000) * 320;
            const isGreen = point.price > (chartData[Math.max(0, i * 5 - 1)]?.price || point.price);

            return (
              <g key={i}>
                <line
                  x1={x}
                  y1={yHigh}
                  x2={x}
                  y2={yLow}
                  stroke={isGreen ? '#4caf50' : '#ff4757'}
                  strokeWidth="1"
                  opacity="0.6"
                />
                <rect
                  x={`calc(${x} - 2px)`}
                  y={Math.min(yPrice, yPrice - 10)}
                  width="4"
                  height={Math.abs(10)}
                  fill={isGreen ? '#4caf50' : '#ff4757'}
                  opacity="0.8"
                />
              </g>
            );
          })}
        </svg>

        {/* Time labels */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-muted-foreground px-2">
          <span>00:00</span>
          <span>06:00</span>
          <span>12:00</span>
          <span>18:00</span>
          <span>00:00</span>
        </div>
      </div>
    </div>
  );
}
