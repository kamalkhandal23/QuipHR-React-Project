import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { appConfig } from "../config/permissions.config";
import { useTheme } from "../context/ThemeContext";
import {
  LayoutDashboard,
  TrendingUp,
  Users,
  Settings,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Circle,
} from "lucide-react";

const ICONS = {
  crm: LayoutDashboard,
  leads: TrendingUp,
  customers: Users,
  settings: Settings,
};

export default function Sidebar({ isOpen, setIsOpen }) {
  const { themeConfig } = useTheme();
  const location = useLocation();

  const isDesktop = window.matchMedia("(min-width: 768px)").matches;

  const [expanded, setExpanded] = useState(false);
  const [openParent, setOpenParent] = useState(null);

  useEffect(() => {
    if (!isDesktop) setExpanded(true);
  }, [isDesktop]);

  useEffect(() => {
    const active = appConfig.permissions.find((menu) =>
      menu.children?.some((c) => location.pathname.startsWith(c.path))
    );
    if (active) setOpenParent(active.id);
  }, [location.pathname]);

  return (
    <aside
      className={`
        fixed md:static inset-y-0 left-0 z-40
        transition-all duration-300
        overflow-visible
        ${themeConfig.sidebar}
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0
        ${expanded ? "w-64" : "w-16"}
      `}
    >
      <div className="flex h-full flex-col text-white overflow-visible">
        <div className="h-16 flex items-center justify-center font-semibold">
          {expanded ? "CRM Panel" : "CRM"}
        </div>

        <nav className="flex-1 px-2 space-y-2">
          {appConfig.permissions
            .filter((menu) => menu.enabled)
            .map((menu) => {
              const Icon = ICONS[menu.id] || Circle;
              const isOpenMenu = openParent === menu.id;

              return (
                <div key={menu.id} className="relative group">
                  <div className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-white/10">
                    <div className="flex items-center gap-3">
                      <Icon size={18} />
                      {expanded && (
                        <span className="text-sm font-medium">
                          {menu.label}
                        </span>
                      )}
                    </div>

                    {expanded && (
                      <button
                        onClick={() =>
                          setOpenParent(isOpenMenu ? null : menu.id)
                        }
                      >
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${isOpenMenu ? "rotate-180" : ""
                            }`}
                        />
                      </button>
                    )}
                  </div>

                  {expanded && isOpenMenu && (
                    <div className="ml-8 mt-1 space-y-1">
                      {menu.children
                        .filter((c) => c.enabled)
                        .map((child) => {
                          const ChildIcon = ICONS[child.id] || Circle;
                          return (
                            <NavLink
                              key={child.id}
                              to={child.path}
                              onClick={() => setIsOpen(false)}
                              className={({ isActive }) =>
                                `flex items-center gap-2 rounded-md px-3 py-1 text-sm transition
                                ${isActive
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

                  {!expanded && isDesktop && (
                    <div className="absolute left-full top-0 opacity-0 invisible group-hover:visible group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-all duration-200 ease-out z-[999]">
                      <div className="absolute -left-3 top-0 h-full w-3 bg-transparent" />
                      <div className="min-w-[190px] bg-white text-gray-800 rounded-lg shadow-2xl py-1">
                        {menu.children
                          .filter((c) => c.enabled)
                          .map((child) => {
                            const ChildIcon = ICONS[child.id] || Circle;
                            return (
                              <NavLink
                                key={child.id}
                                to={child.path}
                                className="flex items-center gap-2 px-4 py-2 text-sm rounded-md transition-colors duration-150 hover:bg-gray-100 hover:text-black"
                              >
                                <ChildIcon size={14} className="opacity-70" />
                                {child.label}
                              </NavLink>
                            );
                          })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
        </nav>

        <div className="hidden md:flex justify-center p-3 border-t border-white/10">
          <button
            onClick={() => setExpanded(!expanded)}
            className="p-2 rounded-md hover:bg-white/10"
          >
            {expanded ? <ChevronLeft /> : <ChevronRight />}
          </button>
        </div>
      </div>
    </aside>
  );
}
