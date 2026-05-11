import { Menu, Gamepad2, Wallet, BarChart3, MessageCircle } from 'lucide-react';

const navItems = [
  { icon: Menu, label: 'Меню' },
  { icon: Gamepad2, label: 'Игры' },
  { icon: Wallet, label: 'Кошелек' },
  { icon: BarChart3, label: 'Биржа', active: true },
  { icon: MessageCircle, label: 'Чат' },
];

export function MobileNavigation() {
  return (
    <nav className="bg-[#1f2233] border-t border-white/10 px-2 py-2">
      <div className="flex items-center justify-around">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
              item.active
                ? 'text-success'
                : 'text-muted-foreground'
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span className="text-[10px] font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
