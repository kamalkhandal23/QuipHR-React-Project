import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { appConfig } from "../config/permissions.config";
import { useRef, useEffect } from "react";

export default function ProfileDropdown() {
    const [open, setOpen] = useState(false);
    const { theme, setTheme, allThemes } = useTheme();
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setOpen((prev) => !prev)}
                className="flex items-center gap-2 font-medium hover:opacity-90"
            >
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm font-semibold">
                    {appConfig.user.name[0]}
                </div>
                <span>{appConfig.user.name.split(" ")[0]}</span>
                <svg
                    className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""
                        }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </button>


            {open && (
                <div className="absolute right-0 top-full mt-3 w-64 bg-white text-black rounded-xl shadow-xl z-[9999] p-4">
                    <p className="text-sm font-semibold mb-3">
                        Theme Selection
                    </p>

                    <div className="grid grid-cols-4 gap-3">
                        {Object.entries(allThemes).map(([key, value]) => (
                            <button
                                key={key}
                                onClick={() => {
                                    setTheme(key);
                                    setOpen(false);
                                }}
                                className={`h-10 w-10 rounded-lg border-2 transition-transform duration-150 hover:scale-105 ${theme === key ? "border-black" : "border-transparent"
                                    } ${value.sidebar}`}

                                title={value.name}
                            />
                        ))}
                    </div>

                    <button
                        onClick={() => {
                            localStorage.clear();
                            window.location.reload();
                        }}
                        className="mt-4 w-full text-left text-sm text-red-600 hover:underline"
                    >
                        Logout
                    </button>

                </div>
            )}
        </div>
    );
}
