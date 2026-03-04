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
export declare const PAGE_LAYOUT_DEFAULTS: {
    readonly gap: 12;
    readonly breadcrumbsHeight: 56;
    readonly sidePanelWidth: 350;
};
//# sourceMappingURL=PageLayout.types.d.ts.map