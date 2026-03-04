import { breadcrumbLinkStyles } from './Breadcrumbs.styled.js';
import { BreadcrumbsProps, BreadcrumbItemProps } from './Breadcrumbs.types.js';
/**
 * BreadcrumbItem - Individual breadcrumb element
 * Renders as a link when href is provided, otherwise as plain text (for current page)
 * When isHome is true, renders only the Home icon with no text
 */
export declare const BreadcrumbItem: {
    ({ children, href, icon, component: LinkComponent, isHome }: BreadcrumbItemProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
/**
 * Breadcrumbs - Navigation breadcrumb trail
 * Shows the user's current location within the site hierarchy
 *
 * When there are more than maxItems (default 5), middle items are collapsed
 * into an ellipsis that can be expanded on click.
 */
export declare const Breadcrumbs: {
    ({ children, className, maxItems }: BreadcrumbsProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export { breadcrumbLinkStyles };
//# sourceMappingURL=Breadcrumbs.d.ts.map