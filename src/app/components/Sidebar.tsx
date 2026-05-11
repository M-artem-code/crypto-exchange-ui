import { Home, TrendingUp, Wallet, Settings, BarChart3, FileText, HelpCircle, LogOut, Search } from 'lucide-react';

const menuItems = [
  { icon: Home, label: 'Главная', active: false },
  { icon: BarChart3, label: 'Биржа', active: true },
  { icon: Wallet, label: 'Кошелек', active: false },
  { icon: TrendingUp, label: 'Портфель', active: false },
  { icon: FileText, label: 'История', active: false },
];

const cryptoList = [
  { symbol: 'BTC', name: 'Bitcoin', price: '89,542.51', change: -3.47, color: '#f7931a' },
  { symbol: 'ETH', name: 'Ethereum', price: '3,234.12', change: 2.34, color: '#627eea' },
  { symbol: 'USDT', name: 'Tether', price: '1.00', change: 0.01, color: '#26a17b' },
  { symbol: 'BNB', name: 'Binance', price: '612.45', change: 1.23, color: '#f3ba2f' },
  { symbol: 'SOL', name: 'Solana', price: '143.67', change: -1.89, color: '#14f195' },
  { symbol: 'XRP', name: 'Ripple', price: '0.52', change: 4.56, color: '#23292f' },
];

export function Sidebar() {
  return (
    <aside className="w-64 bg-[#1f2233] border-r border-white/10 flex flex-col">
      <div className="p-4 border-b border-white/10">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Поиск..."
            className="w-full pl-10 pr-4 py-2 bg-[#2a2d42] rounded-lg text-sm focus:outline-none focus:ring-2 ring-success/50"
          />
        </div>
      </div>

      <nav className="flex-1 p-2 overflow-y-auto">
        <div className="space-y-1 mb-6">
          {menuItems.map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                item.active
                  ? 'bg-success text-white'
                  : 'text-muted-foreground hover:bg-[#2a2d42] hover:text-foreground'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </div>

        <div className="mb-2 px-3">
          <h3 className="text-xs font-medium text-muted-foreground uppercase">Криптовалюты</h3>
        </div>

        <div className="space-y-1">
          {cryptoList.map((crypto) => (
            <button
              key={crypto.symbol}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#2a2d42] transition-colors group"
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                style={{ backgroundColor: crypto.color + '20', color: crypto.color }}
              >
                {crypto.symbol[0]}
              </div>
              <div className="flex-1 text-left">
                <div className="text-sm font-medium">{crypto.symbol}</div>
                <div className="text-xs text-muted-foreground">{crypto.name}</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium">${crypto.price}</div>
                <div className={`text-xs ${crypto.change >= 0 ? 'text-success' : 'text-danger'}`}>
                  {crypto.change >= 0 ? '+' : ''}{crypto.change}%
                </div>
              </div>
            </button>
          ))}
        </div>
      </nav>

      <div className="p-2 border-t border-white/10">
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-[#2a2d42] hover:text-foreground transition-colors">
          <Settings className="w-5 h-5" />
          <span className="text-sm font-medium">Настройки</span>
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-[#2a2d42] hover:text-foreground transition-colors">
          <HelpCircle className="w-5 h-5" />
          <span className="text-sm font-medium">Помощь</span>
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-danger hover:bg-danger/10 transition-colors">
          <LogOut className="w-5 h-5" />
          <span className="text-sm font-medium">Выход</span>
        </button>
      </div>
    </aside>
  );
}
