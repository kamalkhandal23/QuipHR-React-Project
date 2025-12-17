import { appConfig } from "../config/permissions.config";
import { useTheme } from "../context/ThemeContext";
import ProfileDropdown from "./ProfileDropdown";

export default function Topbar({ onMenuClick }) {

    const { themeConfig } = useTheme();

    return (
        <header
            className={`flex items-center justify-between px-6 h-16 text-white shadow-sm transition-colors duration-300 ${themeConfig.topbar}`}
        >

            <div className="flex items-center gap-3">
                <button
                    className="md:hidden"
                    onClick={onMenuClick}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>

                <h1 className="text-sm font-medium tracking-wide">
                    Welcome <span className="font-semibold">{appConfig.user.name}</span>
                </h1>
            </div>


            <div className="flex items-center gap-4">
                <div className="h-6 w-px bg-white/30" />
                <ProfileDropdown />
            </div>
        </header>
    );
}
