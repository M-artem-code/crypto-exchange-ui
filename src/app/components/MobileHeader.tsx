import { Bell, Plus, ChevronDown, Menu } from 'lucide-react';

export function MobileHeader() {
  return (
    <header className="bg-[#1f2233] px-4 py-3">
      <div className="flex items-center justify-between mb-3">
        <button className="w-8 h-8 flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
          </div>
        </button>

        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-3 py-1.5 bg-[#22274d] rounded-lg">
            <span className="text-xs text-muted-foreground">Ƀ</span>
            <span className="text-sm font-medium">1,148,258.985</span>
            <ChevronDown className="w-3 h-3 text-muted-foreground" />
          </button>

          <button className="w-8 h-8 rounded-lg bg-success flex items-center justify-center">
            <Plus className="w-4 h-4" />
          </button>

          <button className="w-8 h-8 rounded-lg bg-[#22274d] flex items-center justify-center">
            <Bell className="w-4 h-4" />
          </button>

          <button className="w-8 h-8 rounded-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
