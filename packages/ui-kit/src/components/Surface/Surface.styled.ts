import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import React from 'react';

interface StyledSurfaceProps {
  $disablePadding: boolean;
}

export const StyledSurface: React.ComponentType<StyledSurfaceProps & React.ComponentProps<typeof Box>> = styled(Box, {
  shouldForwardProp: (prop) => prop !== '$disablePadding',
})<StyledSurfaceProps>(({ theme, $disablePadding }) => ({
  background: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  ...(!$disablePadding && {
    padding: theme.spacing(3),
  }),
}));
