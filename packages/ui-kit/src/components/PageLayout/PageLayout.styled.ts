import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import React from 'react';
import { PAGE_LAYOUT_DEFAULTS } from './PageLayout.types.js';

export const StyledPageLayoutRoot: React.ComponentType<React.ComponentProps<typeof Box>> = styled(Box)({
  display: 'flex',
  gap: PAGE_LAYOUT_DEFAULTS.gap,
  height: '100%',
});

export const StyledLeftColumn: React.ComponentType<React.ComponentProps<typeof Box>> = styled(Box)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: PAGE_LAYOUT_DEFAULTS.gap,
  minWidth: 0,
  overflowY: 'auto',
});

interface StyledSidePanelProps {
  $width: number;
}

export const StyledSidePanel: React.ComponentType<StyledSidePanelProps & React.ComponentProps<typeof Box>> = styled(Box, {
  shouldForwardProp: (prop) => prop !== '$width',
})<StyledSidePanelProps>(({ $width }) => ({
  width: $width,
  flexShrink: 0,
  height: '100%',
}));
