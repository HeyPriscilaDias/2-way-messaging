import { PageLayoutProps, PAGE_LAYOUT_DEFAULTS } from './PageLayout.types.js';
import { StyledPageLayoutRoot, StyledLeftColumn, StyledSidePanel } from './PageLayout.styled.js';
import { Surface } from '../Surface/Surface.js';

export const PageLayout = ({
  breadcrumbs,
  sidePanel,
  sidePanelWidth = PAGE_LAYOUT_DEFAULTS.sidePanelWidth,
  children,
}: PageLayoutProps) => {
  return (
    <StyledPageLayoutRoot>
      <StyledLeftColumn>
        {breadcrumbs && (
          <Surface
            disablePadding
            sx={{
              flexShrink: 0,
              height: PAGE_LAYOUT_DEFAULTS.breadcrumbsHeight,
              display: 'flex',
              alignItems: 'center',
              px: 3,
            }}
          >
            {breadcrumbs}
          </Surface>
        )}
        <Surface sx={{ flex: 1, overflowY: 'auto' }}>
          {children}
        </Surface>
      </StyledLeftColumn>
      {sidePanel && (
        <StyledSidePanel $width={sidePanelWidth}>
          <Surface disablePadding sx={{ height: '100%' }}>
            {sidePanel}
          </Surface>
        </StyledSidePanel>
      )}
    </StyledPageLayoutRoot>
  );
};

PageLayout.displayName = 'WillowPageLayout';
