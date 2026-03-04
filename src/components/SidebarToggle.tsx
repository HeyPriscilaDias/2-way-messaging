"use client";

import { Tooltip, IconButton } from "@willow/ui-kit";
import { useSidebar } from "@/contexts/SidebarContext";

function SidebarIcon({ size = 20, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="88" y1="48" x2="88" y2="208" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
      <rect x="32" y="48" width="192" height="160" rx="8" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
      <line x1="32" y1="80" x2="56" y2="80" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
      <line x1="32" y1="112" x2="56" y2="112" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
      <line x1="32" y1="144" x2="56" y2="144" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    </svg>
  );
}

function SidebarFillIcon({ size = 20, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 256 256"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="256" height="256" fill="none"/>
      <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM64,152H48a8,8,0,0,1,0-16H64a8,8,0,0,1,0,16Zm0-32H48a8,8,0,0,1,0-16H64a8,8,0,0,1,0,16Zm0-32H48a8,8,0,0,1,0-16H64a8,8,0,0,1,0,16ZM216,200H88V56H216V200Z"/>
    </svg>
  );
}

export default function SidebarToggle() {
  const { collapsed, toggleCollapse } = useSidebar();

  return (
    <Tooltip
      title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      placement="bottom"
      arrow={false}
      slotProps={{
        popper: {
          modifiers: [{ name: "offset", options: { offset: [0, -4] } }],
        },
      }}
    >
      <IconButton
        variant="ghost"
        size="sm"
        onClick={toggleCollapse}
        sx={{ flexShrink: 0 }}
      >
        {collapsed ? <SidebarFillIcon size={20} /> : <SidebarIcon size={20} />}
      </IconButton>
    </Tooltip>
  );
}
