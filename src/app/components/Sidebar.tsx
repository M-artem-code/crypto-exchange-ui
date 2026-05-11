import { Gift, ArrowLeft } from "lucide-react";

const games = [
  { label: "Краш", icon: "💥" },
  { label: "Колесо", icon: "🎡" },
  { label: "Спиннер", icon: "🎰" },
  { label: "Космос", icon: "🪐" },
  { label: "Халява", icon: "🎁" },
  { label: "Джекпот", icon: "💎" },
];

export function SidebarHeader({
  open,
  onToggle,
}: {
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="h-14 bg-[#23224c] flex items-center justify-between px-3">
      <div className="flex items-center gap-2 min-w-0">
        <div className="w-8 h-8 rounded-full bg-success flex items-center justify-center shrink-0">
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
        <span
          className={
            "font-bold text-lg truncate transition-all duration-300 " +
            (open ? "opacity-100 max-w-[10rem]" : "opacity-0 max-w-0")
          }
        >
          SOUTH 1
        </span>
      </div>

      <button
        type="button"
        onClick={onToggle}
        className="w-8 h-8 rounded-lg bg-[#22274d] hover:bg-[#3a3d52] transition-colors flex items-center justify-center shrink-0"
        aria-label={open ? "Collapse sidebar" : "Expand sidebar"}
      >
        <ArrowLeft
          className={
            "w-4 h-4 text-muted-foreground transition-transform " +
            (open ? "" : "rotate-180")
          }
        />
      </button>
    </div>
  );
}

export function Sidebar({ open }: { open: boolean }) {
  return (
    <aside
      className={
        (open ? "w-56" : "w-14") +
        " bg-[#110f24] flex flex-col transition-[width] duration-300 ease-in-out"
      }
    >
      <div className="p-3">
        <button
          className={
            "w-full flex items-center px-3 py-2 rounded-lg bg-[#2a2d42] hover:bg-[#3a3d52] transition-all duration-300 ease-out hover:-translate-y-[1px] hover:scale-[1.01] will-change-transform"
          }
        >
          <span
            className={
              "flex items-center mx-auto transition-all duration-300 " +
              (open ? "gap-2" : "")
            }
          >
            <Gift className="w-4 h-4 text-muted-foreground" />
            <span
              className={
                "text-sm font-extrabold whitespace-nowrap transition-all duration-300 " +
                (open ? "opacity-100 max-w-[10rem]" : "opacity-0 max-w-0")
              }
            >
              Бонусы
            </span>
          </span>
        </button>
      </div>

      <div className="pr-3 pb-3 pl-3">
        <button className="w-full flex items-center justify-center px-3 py-2 rounded-lg bg-[#2a2d42] hover:bg-[#3a3d52] transition-all duration-300 ease-out hover:-translate-y-[1px] hover:scale-[1.01] will-change-transform">
          <span
            className={
              "text-sm font-bold whitespace-nowrap transition-all duration-300 " +
              (open ? "opacity-100 max-w-[16rem]" : "opacity-0 max-w-0")
            }
          >
            Пригласи и зарабатывай
          </span>
        </button>
      </div>

      <nav className="flex-1 px-3 overflow-y-auto">
        <div
          className={
            "text-xl font-extrabold mb-2 ml-5 transition-all duration-300 " +
            (open ? "opacity-100 max-h-6" : "opacity-0 max-h-0")
          }
        >
          Игры
        </div>
        <div className="space-y-1">
          {games.map((g) => (
            <button
              key={g.label}
              className={
                "group w-full flex items-center px-2.5 py-2 rounded-lg text-muted-foreground hover:bg-[#2a2d42] hover:text-foreground transition-all duration-300 ease-out hover:-translate-y-[1px] hover:scale-[1.01] will-change-transform " +
                (open ? "gap-3" : "justify-center")
              }
            >
              <div className="w-8 h-8 rounded-lg bg-[#2a2d42] flex items-center justify-center text-sm transition-colors duration-200 ease-out group-hover:bg-[#3a3d52]">
                {g.icon}
              </div>
              <span
                className={
                  "text-xl text-white font-bold whitespace-nowrap transition-all duration-300 " +
                  (open ? "opacity-100 max-w-[10rem]" : "opacity-0 max-w-0")
                }
              >
                {g.label}
              </span>
            </button>
          ))}
        </div>
      </nav>
    </aside>
  );
}
