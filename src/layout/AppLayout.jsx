import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden relative">
    <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

    {sidebarOpen && (
      <div
        onClick={() => setSidebarOpen(false)}
        className="fixed inset-0 bg-black/40 z-30 md:hidden"
      />
    )}

    <div className="flex flex-col flex-1">
      <Topbar onMenuClick={() => setSidebarOpen(true)} />
      <main className="flex-1 bg-gray-100 p-4 md:p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  </div>
  
  );
}
