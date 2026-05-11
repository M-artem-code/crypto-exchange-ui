export function BalanceCard() {
  const rows = [
    { asset: "BTC", amount: "0.00000000" },
    { asset: "LTC", amount: "0.00000000" },
    { asset: "DOGE", amount: "0.00000000" },
    { asset: "MV848", amount: "0.00000000" },
    { asset: "USDT", amount: "0.00000000" },
  ];

  return (
    <div className="bg-card rounded-xl h-full overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 bg-[#22274d]">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M3 21h18" />
          <path d="M5 21V7l8-4v18" />
          <path d="M19 21V11l-6-4" />
        </svg>
        <h3 className="text-2xl font-bold text-muted-foreground">
          Баланс
        </h3>
      </div>

      <div className="px-4 py-3">
        <div className="grid grid-cols-3 text-xs text-muted-foreground mb-2">
          <div>Валюта</div>
          <div className="text-right col-span-2">Количество</div>
        </div>

        <div className="space-y-2">
          {rows.map((r) => (
            <div
              key={r.asset}
              className="grid grid-cols-3 items-center text-sm"
            >
              <div className="text-foreground">{r.asset}</div>
              <div className="text-right col-span-2 flex items-center justify-end gap-2">
                <span className="text-muted-foreground tabular-nums">
                  {r.amount}
                </span>
                <div className="flex items-center gap-1">
                  <button className="w-5 h-5 rounded bg-[#22274d] text-muted-foreground hover:bg-[#3a3d52]">
                    +
                  </button>
                  <button className="w-5 h-5 rounded bg-[#22274d] text-muted-foreground hover:bg-[#3a3d52]">
                    -
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
