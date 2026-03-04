import { AppShellProps, APP_SHELL_DEFAULTS } from './AppShell.types.js';
import { StyledAppShellRoot, StyledSidebar, StyledContent } from './AppShell.styled.js';

export const AppShell = ({
  sidebar,
  children,
  sidebarWidth = APP_SHELL_DEFAULTS.sidebarWidth,
}: AppShellProps) => {
  return (
    <StyledAppShellRoot>
      <StyledSidebar $sidebarWidth={sidebarWidth}>
        {sidebar}
      </StyledSidebar>
      <StyledContent $sidebarWidth={sidebarWidth}>
        {children}
      </StyledContent>
    </StyledAppShellRoot>
  );
};

AppShell.displayName = 'WillowAppShell';
