import { ReactNode } from 'react';

export interface PageLayoutProps {
  /** Breadcrumbs content rendered in a Surface bar at top */
  breadcrumbs?: ReactNode;
  /** Optional right panel content (e.g. Alma). Rendered at sidePanelWidth. */
  sidePanel?: ReactNode;
  /** Side panel width override. Default: 350 */
  sidePanelWidth?: number;
  /** Main content */
  children: ReactNode;
}

export const PAGE_LAYOUT_DEFAULTS = {
  gap: 12,
  breadcrumbsHeight: 56,
  sidePanelWidth: 350,
} as const;
