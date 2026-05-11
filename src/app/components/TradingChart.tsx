"use client";

import { useTimeframeStore } from "@/features/timeframe-select";
import { generateChartData } from "@/entities/market";

const timeframes = ["12 Hours", "24 Hours", "7 Days", "1M", "6M", "Order book"];

export function TradingChart() {
  const timeframe = useTimeframeStore((s) => s.timeframe);
  const setTimeframe = useTimeframeStore((s) => s.setTimeframe);
  const chartData = generateChartData(100);

  const currentPrice = 89542.51;
  const priceChange = -3.47;

  return (
    <div className="bg-card rounded-xl p-4 h-full flex flex-col">
      <div className="-mx-4 px-4 pb-3 border-b border-white/10">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-5 md:items-center md:gap-x-10 md:gap-y-0">
          <div className="flex items-center gap-4 min-w-0">
            <div className="w-10 h-10 rounded-full bg-[#f7931a] flex items-center justify-center shrink-0">
              <span className="text-white font-bold">₿</span>
            </div>

            <div className="leading-tight min-w-0">
              <div className="text-xl font-bold leading-5 truncate">
                BTC/USDT
              </div>
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
            <div className="text-muted-foreground text-sm mb-1">
              Макс. за 24ч
            </div>
            <div className="font-semibold tabular-nums">91,790.14</div>
          </div>

          <div className="text-sm">
            <div className="text-muted-foreground text-sm mb-1">
              Мин. за 24ч
            </div>
            <div className="font-semibold tabular-nums">88,450.14</div>
          </div>
        </div>

        <div className="mt-3 grid grid-flow-row gap-2 md:grid-flow-col md:auto-cols-max md:items-center md:justify-start md:gap-4">
          <div className="grid grid-flow-col auto-cols-max gap-2 overflow-x-auto">
            {timeframes.map((tf) => (
              <button
                key={tf}
                onClick={() => setTimeframe(tf)}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                  timeframe === tf
                    ? "bg-[#4a4d6a] text-white"
                    : "bg-[#2a2d42] text-muted-foreground hover:bg-[#3a3d52]"
                }`}
              >
                {tf}
              </button>
            ))}
          </div>

          <div className="text-xs text-muted-foreground whitespace-nowrap">
            <span>Объём за 24ч (USDT): </span>
            <span className="text-foreground font-medium tabular-nums">
              2,427,587,475.22
            </span>
          </div>
        </div>
      </div>

      <div className="relative mt-4 flex-1 min-h-0">
        <svg width="100%" height="100%" className="overflow-visible">
          <defs>
            <linearGradient
              id="chartGradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#4caf50" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#4caf50" stopOpacity="0" />
            </linearGradient>
          </defs>

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

          <path
            d={`M 0,${320 - ((chartData[0].price - 88000) / 4000) * 320} ${chartData
              .map((point, i) => {
                const x = (i / chartData.length) * 100;
                const y = 320 - ((point.price - 88000) / 4000) * 320;
                return `L ${x}%,${y}`;
              })
              .join(" ")} L 100%,320 L 0,320 Z`}
            fill="url(#chartGradient)"
          />

          <path
            d={`M 0,${320 - ((chartData[0].price - 88000) / 4000) * 320} ${chartData
              .map((point, i) => {
                const x = (i / chartData.length) * 100;
                const y = 320 - ((point.price - 88000) / 4000) * 320;
                return `L ${x}%,${y}`;
              })
              .join(" ")}`}
            fill="none"
            stroke="#4caf50"
            strokeWidth="2"
          />

          {chartData
            .filter((_, i) => i % 5 === 0)
            .map((point, i) => {
              const x = ((i * 5) / chartData.length) * 100 + "%";
              const yHigh = 320 - ((point.high - 88000) / 4000) * 320;
              const yLow = 320 - ((point.low - 88000) / 4000) * 320;
              const yPrice = 320 - ((point.price - 88000) / 4000) * 320;
              const isGreen =
                point.price >
                (chartData[Math.max(0, i * 5 - 1)]?.price || point.price);

              return (
                <g key={i}>
                  <line
                    x1={x}
                    y1={yHigh}
                    x2={x}
                    y2={yLow}
                    stroke={isGreen ? "#4caf50" : "#ff4757"}
                    strokeWidth="1"
                    opacity="0.6"
                  />
                  <rect
                    x={`calc(${x} - 2px)`}
                    y={Math.min(yPrice, yPrice - 10)}
                    width="4"
                    height={Math.abs(10)}
                    fill={isGreen ? "#4caf50" : "#ff4757"}
                    opacity="0.8"
                  />
                </g>
              );
            })}
        </svg>

        <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[10px] text-muted-foreground px-2">
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
