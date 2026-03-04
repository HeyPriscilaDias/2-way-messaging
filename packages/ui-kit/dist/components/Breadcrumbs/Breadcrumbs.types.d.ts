import { ComponentType, ReactNode } from 'react';
export interface BreadcrumbItemProps {
    /** The content of the breadcrumb item (ignored when isHome is true) */
    children?: ReactNode;
    /** Optional href for navigation - renders as anchor when provided */
    href?: string;
    /** Optional icon to display before the label */
    icon?: ReactNode;
    /** Custom link component (e.g., React Router's Link). Receives href as 'to' prop. */
    component?: ComponentType<{
        to: string;
        children: ReactNode;
        className?: string;
    }>;
    /** When true, renders only the Home icon with no text (for root navigation) */
    isHome?: boolean;
}
export interface BreadcrumbsProps {
    /** BreadcrumbItem components */
    children: ReactNode;
    /** Optional className for custom styling */
    className?: string;
    /** Maximum items to show before truncating (default: 5) */
    maxItems?: number;
}
//# sourceMappingURL=Breadcrumbs.types.d.ts.map