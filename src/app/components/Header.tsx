import { Bell, ChevronDown, MessageCircle, ArrowLeft } from "lucide-react";

export function Header() {
  return (
    <header className="h-14 bg-[#23224c] px-3 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-success flex items-center justify-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="font-bold text-lg">SOUTH 1</span>
          </div>

          <button className="w-8 h-8 rounded-lg bg-[#22274d] hover:bg-[#3a3d52] transition-colors flex items-center justify-center">
            <ArrowLeft className="w-4 h-4 text-muted-foreground" />
          </button>

          <div className="flex items-center gap-3 text-sm">
            <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <span>Биржа</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <span>Поддержка</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#22274d] hover:bg-[#3a3d52] transition-colors">
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

      <div className="flex items-center gap-2.5">
        <div className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">LTC</span>
          <span className="ml-1 tabular-nums">7,344.48</span>
        </div>

        <button className="px-4 py-2 rounded-lg bg-success hover:bg-success/90 transition-colors text-sm font-medium text-white">
          Депозит
        </button>

        <button className="w-9 h-9 rounded-lg bg-[#22274d] hover:bg-[#3a3d52] transition-colors flex items-center justify-center">
          <Bell className="w-4 h-4" />
        </button>

        <button className="w-9 h-9 rounded-lg bg-[#22274d] hover:bg-[#3a3d52] transition-colors flex items-center justify-center">
          <MessageCircle className="w-4 h-4" />
        </button>

        <button className="w-9 h-9 rounded-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </button>
      </div>
    </header>
  );
}
