import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import React from 'react';
import { APP_SHELL_DEFAULTS } from './AppShell.types.js';

interface StyledAppShellProps {
  $sidebarWidth: number;
}

export const StyledAppShellRoot: React.ComponentType<React.ComponentProps<typeof Box>> = styled(Box)(({ theme }) => ({
  height: '100vh',
  overflow: 'hidden',
  background: theme.palette.background.default,
}));

export const StyledSidebar: React.ComponentType<StyledAppShellProps & React.ComponentProps<typeof Box>> = styled(Box, {
  shouldForwardProp: (prop) => prop !== '$sidebarWidth',
})<StyledAppShellProps>(({ $sidebarWidth }) => ({
  position: 'fixed',
  width: $sidebarWidth,
  height: '100vh',
  top: 0,
  left: 0,
  zIndex: 100,
}));

export const StyledContent: React.ComponentType<StyledAppShellProps & React.ComponentProps<typeof Box>> = styled(Box, {
  shouldForwardProp: (prop) => prop !== '$sidebarWidth',
})<StyledAppShellProps>(({ $sidebarWidth }) => ({
  marginLeft: $sidebarWidth,
  padding: APP_SHELL_DEFAULTS.gap,
  height: '100vh',
  overflow: 'hidden',
}));
