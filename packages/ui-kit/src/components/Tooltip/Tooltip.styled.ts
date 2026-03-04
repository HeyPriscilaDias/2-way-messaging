import React from 'react';
import { styled } from '@mui/material/styles';
import { Tooltip as MuiTooltip, TooltipProps as MuiTooltipProps } from '@mui/material';

// Tooltip styling is defined in the MUI theme (createWillowTheme.ts)
// using body-sm typography (12px Inter, weight 400, line-height 16px)
export const StyledTooltip: React.ComponentType<MuiTooltipProps> = styled(MuiTooltip)({});
