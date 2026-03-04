import { ReactNode } from 'react';
export interface AppShellProps {
    /** Fixed sidebar content (rendered at sidebarWidth) */
    sidebar: ReactNode;
    /** Page content */
    children: ReactNode;
    /** Sidebar width override. Default: 200 */
    sidebarWidth?: number;
}
export declare const APP_SHELL_DEFAULTS: {
    readonly sidebarWidth: 200;
    readonly gap: 12;
};
//# sourceMappingURL=AppShell.types.d.ts.map