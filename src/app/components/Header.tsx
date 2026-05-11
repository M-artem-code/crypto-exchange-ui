import { Bell, Plus, ChevronDown } from 'lucide-react';

export function Header() {
  return (
    <header className="h-16 bg-[#1f2233] border-b border-white/10 px-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-success flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
          </div>
          <span className="font-bold text-lg">SOUFFI 1</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 px-4 py-2 bg-[#2a2d42] rounded-lg hover:bg-[#3a3d52] transition-colors">
          <span className="text-sm text-muted-foreground">Ƀ</span>
          <span className="font-medium">1,148,258.985</span>
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </button>

        <button className="w-10 h-10 rounded-lg bg-success hover:bg-success/90 transition-colors flex items-center justify-center">
          <Plus className="w-5 h-5" />
        </button>

        <button className="w-10 h-10 rounded-lg bg-[#2a2d42] hover:bg-[#3a3d52] transition-colors flex items-center justify-center relative">
          <Bell className="w-5 h-5" />
        </button>

        <button className="w-10 h-10 rounded-full overflow-hidden">
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
