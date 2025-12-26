import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { appConfig } from "../config/permissions.config";
import { useTheme } from "../context/ThemeContext";
import {
  LayoutDashboard,
  TrendingUp,
  Users,
  Settings,
  UserCircle,
  ChevronDown,
} from "lucide-react";

const ICONS = {
  crm: LayoutDashboard,
  leads: TrendingUp,
  customers: Users,
  settings: Settings,
  profile: UserCircle,
};

export default function Sidebar({ isOpen, setIsOpen }) {
  const { themeConfig } = useTheme();
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(null);

  // Auto-expand active parent
  useEffect(() => {
    const active = appConfig.permissions.find((menu) =>
      menu.children?.some((c) => location.pathname.startsWith(c.path))
    );
    if (active) setOpenMenu(active.id);
  }, [location.pathname]);

  return (
    <aside
      className={`
        fixed inset-y-0 left-0 z-40 w-64
        transform transition-transform duration-300
        ${themeConfig.sidebar}   /* MUST be solid bg (no /80 /90) */
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:static md:translate-x-0
      `}
    >
      <div className="p-4 text-white">
        <h2 className="text-lg font-semibold mb-6">CRM Panel</h2>

        {appConfig.permissions
          .filter((menu) => menu.enabled)
          .map((menu) => {
            const MenuIcon = ICONS[menu.id];
            const expanded = openMenu === menu.id;

            return (
              <div key={menu.id} className="mb-2">
                
                {/* Parent */}
                <button
                  onClick={() =>
                    setOpenMenu(expanded ? null : menu.id)
                  }
                  className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-white/10 transition"
                >
                  <div className="flex items-center gap-2">
                    <MenuIcon size={18} />
                    <span>{menu.label}</span>
                  </div>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      expanded ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Children */}
                {expanded && (
                  <div className="ml-6 mt-2 space-y-1">
                    {menu.children
                      .filter((child) => child.enabled)
                      .map((child) => {
                        const ChildIcon = ICONS[child.id];

                        return (
                          <NavLink
                            key={child.id}
                            to={child.path}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                              `flex items-center gap-2 rounded-md px-3 py-2 text-sm transition
                              ${
                                isActive
                                  ? "bg-white/20 font-semibold"
                                  : "hover:bg-white/10"
                              }`
                            }
                          >
                            <ChildIcon size={14} />
                            {child.label}
                          </NavLink>
                        );
                      })}
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </aside>
  );
}
