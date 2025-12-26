import { NavLink, useLocation } from "react-router-dom";
import { appConfig } from "../config/permissions.config";
import { useTheme } from "../context/ThemeContext";
import { useEffect, useState } from "react";

export default function Sidebar({ isOpen, setIsOpen }) {
  const { themeConfig } = useTheme();
  const [openMenu, setOpenMenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const activeParent = appConfig.permissions.find(
      (menu) =>
        menu.enabled &&
        menu.children?.some(
          (child) => child.enabled && child.path === location.pathname
        )
    );

    if (activeParent) {
      setOpenMenu(activeParent.id);
    }
  }, [location.pathname]);

  return (
    <aside
      className={`fixed md:static inset-y-0 left-0 z-40 w-64 text-white p-4
      transform transition-transform duration-300
      ${themeConfig.sidebar}
      ${isOpen ? "translate-x-0" : "-translate-x-full"}
      md:translate-x-0`}
    >
      <h2 className="text-lg font-bold mb-8 tracking-wide">
        CRM Panel
      </h2>

      {appConfig.permissions
        .filter((menu) => menu.enabled)
        .map((menu) => (
          <div key={menu.id} className="mb-4">
            <button
              onClick={() =>
                setOpenMenu((prev) =>
                  prev === menu.id ? null : menu.id
                )
              }
              className="flex w-full items-center justify-between
                         text-xs uppercase tracking-wide
                         text-white/70 mb-3 hover:text-white"
            >
              <span>{menu.label}</span>
              <span className="text-sm">
                {openMenu === menu.id ? "▾" : "▸"}
              </span>
            </button>

            {openMenu === menu.id && (
              <div className="ml-3 space-y-1">
                {menu.children
                  .filter((child) => child.enabled)
                  .map((child) => (
                    <NavLink
                      key={child.id}
                      to={child.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `relative flex items-center px-3 py-2 rounded-md text-sm
                        transition-all
                        ${
                          isActive
                            ? "bg-white/20 font-semibold"
                            : "hover:bg-white/10"
                        }`
                      }
                    >
                      {({ isActive }) =>
                        isActive && (
                          <span className="absolute left-0 top-0 h-full w-1 bg-white rounded-r" />
                        )
                      }
                      <span className="ml-2">{child.label}</span>
                    </NavLink>
                  ))}
              </div>
            )}
          </div>
        ))}
    </aside>
  );
}
