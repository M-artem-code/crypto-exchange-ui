import { Bell, MessageCircle, ChevronDown } from "lucide-react";

export function Header() {
  return (
    <header className="h-14 bg-[#23224c] px-3 flex items-center justify-between">
      <div className="flex items-center gap-4 min-w-0">
        <div className="flex items-center gap-3 text-sm min-w-0">
          <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground shrink-0">
            <span>Биржа</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground shrink-0">
            <span>Поддержка</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#22274d] hover:bg-[#3a3d52] transition-colors shrink-0">
            <div className="w-5 h-5 rounded-full overflow-hidden">
              <img
                src="https://flagcdn.com/w20/ru.png"
                alt="RU"
                className="w-full h-full object-cover"
              />
            </div>
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div className="text-sm flex items-center gap-2 text-muted-foreground">
          <span className="text-xl text-white">(icon)</span>
          <span className="text-xl text-white">LTC</span>
          <span className="text-xl text-white">7,344.48</span>
        </div>

        <button className="px-4 py-2 rounded-lg bg-success hover:bg-success/90 transition-colors text-sm font-medium text-white">
          Депозит
        </button>

        <div className="flex items-center gap-4">
          <button className="w-9 h-9 rounded-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </button>

          <button className="w-9 h-9 rounded-lg hover:bg-[#22274d] transition-colors flex items-center justify-center">
            <Bell className="w-5 h-5 text-muted-foreground" />
          </button>

          <button className="relative w-9 h-9 rounded-lg hover:bg-[#22274d] transition-colors flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-muted-foreground" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-success" />
          </button>
        </div>
      </div>
    </header>
  );
}
