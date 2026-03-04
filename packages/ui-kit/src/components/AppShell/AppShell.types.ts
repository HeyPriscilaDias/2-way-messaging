import { ReactNode } from 'react';

export interface AppShellProps {
  /** Fixed sidebar content (rendered at sidebarWidth) */
  sidebar: ReactNode;
  /** Page content */
  children: ReactNode;
  /** Sidebar width override. Default: 200 */
  sidebarWidth?: number;
}

export const APP_SHELL_DEFAULTS = {
  sidebarWidth: 200,
  gap: 12,
} as const;
