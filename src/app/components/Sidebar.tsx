import { Settings, HelpCircle, LogOut, Gift } from "lucide-react";

const games = [
  { label: "Краш", icon: "💥" },
  { label: "Колесо", icon: "🎡" },
  { label: "Спиннер", icon: "🎰" },
  { label: "Космос", icon: "🪐" },
  { label: "Халява", icon: "🎁" },
  { label: "Джекпот", icon: "💎" },
];

export function Sidebar() {
  return (
    <aside className="w-56 bg-[#110f24] flex flex-col">
      <div className="p-3">
        <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg bg-[#2a2d42] hover:bg-[#3a3d52] transition-colors">
          <Gift className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm font-medium">Бонусы</span>
        </button>
      </div>

      <div className="p-3">
        <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg bg-[#2a2d42] hover:bg-[#3a3d52] transition-colors">
          <Gift className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm font-medium">Пригласи и зарабатывай</span>
        </button>
      </div>

      <nav className="flex-1 px-3 overflow-y-auto">
        <div className="text-sm font-semibold mb-2">Игры</div>
        <div className="space-y-1">
          {games.map((g) => (
            <button
              key={g.label}
              className="w-full flex items-center gap-3 px-2.5 py-2 rounded-lg text-muted-foreground hover:bg-[#2a2d42] hover:text-foreground transition-colors"
            >
              <div className="w-7 h-7 rounded-lg bg-[#2a2d42] flex items-center justify-center text-sm">
                {g.icon}
              </div>
              <span className="text-sm font-medium">{g.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </aside>
  );
}
