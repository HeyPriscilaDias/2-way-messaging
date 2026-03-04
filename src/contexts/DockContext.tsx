"use client";

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";

const DEFAULT_WIDTH = 324;
const MIN_WIDTH = 250;

const STORAGE_KEY = "dock-state";

type ActiveTab = "alma" | "tasks";

interface DockContextValue {
  width: number;
  collapsed: boolean;
  activeTab: ActiveTab;
  setWidth: (w: number) => void;
  collapse: () => void;
  expand: () => void;
  setActiveTab: (tab: ActiveTab) => void;
  DEFAULT_WIDTH: number;
  MIN_WIDTH: number;
}

const DockContext = createContext<DockContextValue | null>(null);

function readStoredState(): { width: number; collapsed: boolean; activeTab: ActiveTab } {
  if (typeof window === "undefined") return { width: DEFAULT_WIDTH, collapsed: false, activeTab: "alma" };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        width: typeof parsed.width === "number" ? parsed.width : DEFAULT_WIDTH,
        collapsed: typeof parsed.collapsed === "boolean" ? parsed.collapsed : false,
        activeTab: parsed.activeTab === "tasks" ? "tasks" : "alma",
      };
    }
  } catch { /* ignore */ }
  return { width: DEFAULT_WIDTH, collapsed: false, activeTab: "alma" };
}

export function DockProvider({ children }: { children: ReactNode }) {
  const [width, setWidthRaw] = useState(() => readStoredState().width);
  const [collapsed, setCollapsed] = useState(() => readStoredState().collapsed);
  const [activeTab, setActiveTabRaw] = useState<ActiveTab>(() => readStoredState().activeTab);

  // Persist to localStorage whenever state changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ width, collapsed, activeTab }));
    } catch { /* ignore */ }
  }, [width, collapsed, activeTab]);

  const setWidth = useCallback((w: number) => {
    const maxWidth = typeof window !== "undefined" ? window.innerWidth * 0.5 : 600;
    setWidthRaw(Math.min(maxWidth, Math.max(MIN_WIDTH, w)));
  }, []);

  const collapse = useCallback(() => setCollapsed(true), []);
  const expand = useCallback(() => {
    setCollapsed(false);
  }, []);
  const setActiveTab = useCallback((tab: ActiveTab) => setActiveTabRaw(tab), []);

  return (
    <DockContext.Provider
      value={{ width, collapsed, activeTab, setWidth, collapse, expand, setActiveTab, DEFAULT_WIDTH, MIN_WIDTH }}
    >
      {children}
    </DockContext.Provider>
  );
}

export function useDock() {
  const ctx = useContext(DockContext);
  if (!ctx) throw new Error("useDock must be used within DockProvider");
  return ctx;
}
