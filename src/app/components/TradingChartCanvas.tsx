type TradingChartCanvasProps = {
  chartData: Array<{
    time: number;
    price: number;
    high: number;
    low: number;
  }>;
};

export function TradingChartCanvas({ chartData }: TradingChartCanvasProps) {
  return (
    <div className="relative h-full min-h-0">
      <svg width="100%" height="100%" className="overflow-visible">
        <defs>
          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
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
      </svg>

      <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[10px] text-muted-foreground px-2">
        <span>00:00</span>
        <span>06:00</span>
        <span>12:00</span>
        <span>18:00</span>
        <span>00:00</span>
      </div>
    </div>
  );
}
