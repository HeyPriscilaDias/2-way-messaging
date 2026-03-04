import { Children, isValidElement, useState, ReactElement } from 'react';
import { CaretRight, Home } from '@willow/icons';
import {
  BreadcrumbsContainer,
  BreadcrumbItemWrapper,
  BreadcrumbLink,
  BreadcrumbText,
  Separator,
  EllipsisButton,
  HomeIconWrapper,
  breadcrumbLinkStyles,
} from './Breadcrumbs.styled.js';
import { BreadcrumbsProps, BreadcrumbItemProps } from './Breadcrumbs.types.js';

/**
 * BreadcrumbItem - Individual breadcrumb element
 * Renders as a link when href is provided, otherwise as plain text (for current page)
 * When isHome is true, renders only the Home icon with no text
 */
export const BreadcrumbItem = ({ children, href, icon, component: LinkComponent, isHome }: BreadcrumbItemProps) => {
  // Home item: render only the Home icon with aria-label for accessibility
  if (isHome) {
    const homeContent = (
      <HomeIconWrapper aria-label="Home">
        <Home size={14} />
      </HomeIconWrapper>
    );

    if (href) {
      if (LinkComponent) {
        return (
          <LinkComponent to={href} className="breadcrumb-link" aria-label="Home">
            {homeContent}
          </LinkComponent>
        );
      }
      return (
        <BreadcrumbLink href={href} aria-label="Home">
          {homeContent}
        </BreadcrumbLink>
      );
    }
    return <BreadcrumbText>{homeContent}</BreadcrumbText>;
  }

  // Regular item: render icon (if provided) and children
  const content = (
    <>
      {icon}
      {children}
    </>
  );

  if (href) {
    // Use custom link component if provided (e.g., React Router's Link)
    if (LinkComponent) {
      return (
        <LinkComponent to={href} className="breadcrumb-link">
          {content}
        </LinkComponent>
      );
    }

    // Default to native anchor tag
    return (
      <BreadcrumbLink href={href}>
        {content}
      </BreadcrumbLink>
    );
  }

  return <BreadcrumbText>{content}</BreadcrumbText>;
};

BreadcrumbItem.displayName = 'BreadcrumbItem';

/**
 * Breadcrumbs - Navigation breadcrumb trail
 * Shows the user's current location within the site hierarchy
 *
 * When there are more than maxItems (default 5), middle items are collapsed
 * into an ellipsis that can be expanded on click.
 */
export const Breadcrumbs = ({ children, className, maxItems = 5 }: BreadcrumbsProps) => {
  const [expanded, setExpanded] = useState(false);

  const childArray = Children.toArray(children).filter(
    (child): child is ReactElement<BreadcrumbItemProps> =>
      isValidElement(child)
  );

  const shouldTruncate = childArray.length > maxItems && !expanded;

  const renderSeparator = (key: string) => (
    <Separator key={key} aria-hidden="true">
      <CaretRight size={12} />
    </Separator>
  );

  const renderItems = () => {
    if (!shouldTruncate) {
      return childArray.map((child, index) => (
        <BreadcrumbItemWrapper key={index}>
          {index > 0 && renderSeparator(`sep-${index}`)}
          {child}
        </BreadcrumbItemWrapper>
      ));
    }

    // Show: first item, ellipsis, last 4 items
    const firstItem = childArray[0];
    const lastItems = childArray.slice(-4);
    const hiddenCount = childArray.length - 5;

    return (
      <>
        <BreadcrumbItemWrapper key="first">
          {firstItem}
        </BreadcrumbItemWrapper>

        <BreadcrumbItemWrapper key="ellipsis">
          {renderSeparator('sep-ellipsis-before')}
          <EllipsisButton
            onClick={() => setExpanded(true)}
            aria-label={`Show ${hiddenCount} more breadcrumb${hiddenCount > 1 ? 's' : ''}`}
            type="button"
          >
            ...
          </EllipsisButton>
        </BreadcrumbItemWrapper>

        {lastItems.map((child, index) => (
          <BreadcrumbItemWrapper key={`last-${index}`}>
            {renderSeparator(`sep-last-${index}`)}
            {child}
          </BreadcrumbItemWrapper>
        ))}
      </>
    );
  };

  return (
    <BreadcrumbsContainer
      className={className}
      aria-label="Breadcrumb"
    >
      {renderItems()}
    </BreadcrumbsContainer>
  );
};

Breadcrumbs.displayName = 'Breadcrumbs';

// Export styles for custom link components to use
export { breadcrumbLinkStyles };
