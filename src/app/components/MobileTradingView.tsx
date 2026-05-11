"use client";

import { useState } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { TradingForm } from "./TradingForm";
import { generateChartData } from "@/entities/market";
import { generateTrades } from "@/entities/trade";

const timeframes = ["12 Hours", "24 Hours", "7 Days", "1M"];
const tabs = ["Баланс", "Ордеры", "Сделки", "Рынок"];

export function MobileTradingView() {
  const [timeframe, setTimeframe] = useState("24 Hours");
  const [activeTab, setActiveTab] = useState("Сделки");
  const chartData = generateChartData(50);
  const trades = generateTrades(15, 30000);

  const currentPrice = 89542.51;
  const priceChange = -3.47;

  return (
    <div className="flex flex-col">
      <div className="bg-card p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#f7931a]/20 flex items-center justify-center">
              <span className="text-[#f7931a] font-bold">₿</span>
            </div>
            <div>
              <h2 className="font-bold">BTC/USDT</h2>
              <p className="text-[10px] text-muted-foreground">Bitcoin Info</p>
            </div>
          </div>

          <div className="text-right">
            <div className="text-xs text-muted-foreground mb-0.5">
              Макс. за 24ч
            </div>
            <div className="text-sm font-medium">91,790.14</div>
          </div>

          <div className="text-right">
            <div className="text-xs text-muted-foreground mb-0.5">
              Объем за 24ч (BTC)
            </div>
            <div className="text-sm font-medium">8,186,421</div>
          </div>
        </div>

        <div className="mb-3">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold">
              {currentPrice.toLocaleString("en-US")}
            </span>
            <span
              className={`flex items-center gap-1 text-sm font-medium ${priceChange >= 0 ? "text-success" : "text-danger"}`}
            >
              <span>
                {priceChange >= 0 ? "+" : ""}
                {priceChange}%
              </span>
              {priceChange >= 0 ? (
                <TrendingUp className="w-3 h-3" />
              ) : (
                <TrendingDown className="w-3 h-3" />
              )}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2 text-xs">
            <div>
              <span className="text-muted-foreground">Мин. за 24ч: </span>
              <span className="font-medium">88,450.14</span>
            </div>
            <div>
              <span className="text-muted-foreground">
                Объем за 24ч (USDT):{" "}
              </span>
              <span className="font-medium">2,427,587,475.22</span>
            </div>
          </div>
        </div>

        <div className="flex gap-2 mb-3 overflow-x-auto">
          {timeframes.map((tf) => (
            <button
              key={tf}
              onClick={() => setTimeframe(tf)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                timeframe === tf
                  ? "bg-[#4a4d6a] text-white"
                  : "bg-[#22274d] text-muted-foreground"
              }`}
            >
              {tf}
            </button>
          ))}
        </div>

        <div className="relative h-48 bg-[#1f2233] rounded-lg p-2">
          <svg width="100%" height="100%" className="overflow-visible">
            <defs>
              <linearGradient
                id="mobileChartGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#4caf50" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#4caf50" stopOpacity="0" />
              </linearGradient>
            </defs>

            <path
              d={`M 0,${192 - ((chartData[0].price - 88000) / 4000) * 192} ${chartData
                .map((point, i) => {
                  const x = (i / chartData.length) * 100;
                  const y = 192 - ((point.price - 88000) / 4000) * 192;
                  return `L ${x}%,${y}`;
                })
                .join(" ")} L 100%,192 L 0,192 Z`}
              fill="url(#mobileChartGradient)"
            />

            <path
              d={`M 0,${192 - ((chartData[0].price - 88000) / 4000) * 192} ${chartData
                .map((point, i) => {
                  const x = (i / chartData.length) * 100;
                  const y = 192 - ((point.price - 88000) / 4000) * 192;
                  return `L ${x}%,${y}`;
                })
                .join(" ")}`}
              fill="none"
              stroke="#4caf50"
              strokeWidth="2"
            />

            {chartData
              .filter((_, i) => i % 3 === 0)
              .map((point, i) => {
                const x = ((i * 3) / chartData.length) * 100 + "%";
                const yHigh = 192 - ((point.high - 88000) / 4000) * 192;
                const yLow = 192 - ((point.low - 88000) / 4000) * 192;
                const yPrice = 192 - ((point.price - 88000) / 4000) * 192;
                const isGreen =
                  point.price >
                  (chartData[Math.max(0, i * 3 - 1)]?.price || point.price);

                return (
                  <g key={i}>
                    <line
                      x1={x}
                      y1={yHigh}
                      x2={x}
                      y2={yLow}
                      stroke={isGreen ? "#4caf50" : "#ff4757"}
                      strokeWidth="1"
                      opacity="0.5"
                    />
                    <rect
                      x={`calc(${x} - 1.5px)`}
                      y={Math.min(yPrice, yPrice - 8)}
                      width="3"
                      height={Math.abs(8)}
                      fill={isGreen ? "#4caf50" : "#ff4757"}
                      opacity="0.7"
                    />
                  </g>
                );
              })}
          </svg>

          <div className="absolute bottom-1 left-0 right-0 flex justify-between text-[10px] text-muted-foreground px-2">
            <span>00:00</span>
            <span>06:00</span>
            <span>12:00</span>
            <span>18:00</span>
            <span>00:00</span>
          </div>
        </div>
      </div>

      <div className="bg-background px-4 pt-4">
        <div className="flex gap-2 mb-4 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === tab
                  ? "bg-card text-white"
                  : "text-muted-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "Сделки" && (
          <div className="bg-card rounded-xl border border-white/10 mb-4">
            <div className="p-3 border-b border-white/10">
              <div className="flex items-center justify-between text-[10px] text-muted-foreground">
                <span>Время</span>
                <span>Тип</span>
                <span>Цена</span>
                <span>BTC</span>
              </div>
            </div>
            <div className="max-h-64 overflow-y-auto">
              {trades.map((trade, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between px-3 py-2 text-xs border-b border-white/5 last:border-b-0"
                >
                  <span className="text-muted-foreground w-14">
                    {trade.time}
                  </span>
                  <span
                    className={`w-12 font-medium ${trade.type === "BUY" ? "text-success" : "text-danger"}`}
                  >
                    {trade.type}
                  </span>
                  <span className="w-20 text-right">{trade.price}</span>
                  <span className="w-24 text-right text-muted-foreground">
                    {trade.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        <TradingForm />

        <div className="flex gap-2 mt-4 mb-20">
          <button className="flex-1 py-3 rounded-lg bg-success text-white font-medium">
            Купить
          </button>
          <button className="flex-1 py-3 rounded-lg bg-danger text-white font-medium">
            Продать
          </button>
        </div>
      </div>
    </div>
  );
}
