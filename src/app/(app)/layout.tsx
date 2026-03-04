"use client";

import { Box } from "@willow/ui-kit";
import Sidebar from "@/components/Sidebar";
import Dock from "@/components/Dock";
import { DockProvider, useDock } from "@/contexts/DockContext";
import { SidebarProvider, useSidebar } from "@/contexts/SidebarContext";
import { ToastProvider } from "@/components/Toast";

function AppLayoutInner({ children }: { children: React.ReactNode }) {
  const { collapsed } = useSidebar();
  const sidebarWidth = collapsed ? 60 : 220;
  const dock = useDock();

  const dockMargin = !dock.collapsed ? `${dock.width}px` : 1.5;

  return (
    <Box sx={{ display: "flex", height: "calc(100vh - 40px)", overflow: "hidden" }}>
      <Sidebar collapsed={collapsed} />

      <Box
        sx={{
          ml: `${sidebarWidth + 12}px`,
          mt: 1.5,
          mr: dockMargin,
          mb: 1.5,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
          minWidth: 0,
          minHeight: 0,
          overflowX: "hidden",
          transition: "margin-left 0.2s ease, margin-right 0.2s ease",
        }}
      >
        {children}
      </Box>

      <Dock />
    </Box>
  );
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <DockProvider>
        <ToastProvider>
          <AppLayoutInner>{children}</AppLayoutInner>
        </ToastProvider>
      </DockProvider>
    </SidebarProvider>
  );
}
