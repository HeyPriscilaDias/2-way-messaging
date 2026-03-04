import React from 'react';
import { styled } from '@mui/material/styles';
import { Chip as MuiChip, ChipProps as MuiChipProps } from '@mui/material';
import { WillowChipColor, WillowChipVariant } from './Chip.types.js';

interface StyledChipProps {
  $color?: WillowChipColor;
  $variant?: WillowChipVariant;
}

export const StyledChip: React.ComponentType<MuiChipProps & StyledChipProps> = styled(MuiChip, {
  shouldForwardProp: (prop) => prop !== '$color' && prop !== '$variant',
})<StyledChipProps>(({ theme, $color = 'primary', $variant = 'filled' }) => ({
  // Base size styling matching production patterns
  '&.MuiChip-sizeSmall': {
    height: '20px', // Matches production SearchBar chips
    padding: '2px 8px',
    fontSize: '0.7rem', // Matches production SearchBar
    fontWeight: 500, // Slightly bolder like production
    lineHeight: '16px',
  },
  '&.MuiChip-sizeMedium': {
    padding: '4px 12px',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '20px',
  },
  '&.MuiChip-sizeLarge': {
    padding: '6px 16px',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '20px',
  },

  '& .MuiChip-label': {
    padding: 0,
    fontFamily: '"Inter", sans-serif',
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '16px',
    color: 'inherit',
  },

  '& .MuiChip-deleteIcon': {
    color: 'inherit',
    opacity: 0.8,
    marginLeft: '4px',
    marginRight: 0,
    '&:hover': {
      color: 'inherit',
      opacity: 1,
    },
  },

  // Color variants - use theme colors for consistency
  // For outlined variant: transparent background, border, text color = main
  // For filled variant: background color, text color = contrastText
  ...($color === 'primary' && $variant === 'filled' && {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  }),
  ...($color === 'primary' && $variant === 'outlined' && {
    backgroundColor: 'transparent',
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
  }),

  ...($color === 'secondary' && $variant === 'filled' && {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  }),
  ...($color === 'secondary' && $variant === 'outlined' && {
    backgroundColor: 'transparent',
    borderColor: theme.palette.secondary.main,
    color: theme.palette.secondary.main,
  }),

  ...($color === 'error' && $variant === 'filled' && {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
  }),
  ...($color === 'error' && $variant === 'outlined' && {
    backgroundColor: 'transparent',
    borderColor: theme.palette.error.main,
    color: theme.palette.error.main,
  }),

  ...($color === 'warning' && $variant === 'filled' && {
    backgroundColor: theme.palette.warning.main,
    color: theme.palette.warning.contrastText,
  }),
  ...($color === 'warning' && $variant === 'outlined' && {
    backgroundColor: 'transparent',
    borderColor: theme.palette.warning.main,
    color: theme.palette.warning.main,
  }),

  ...($color === 'success' && $variant === 'filled' && {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.success.contrastText,
  }),
  ...($color === 'success' && $variant === 'outlined' && {
    backgroundColor: 'transparent',
    borderColor: theme.palette.success.main,
    color: theme.palette.success.main,
  }),

  ...($color === 'info' && $variant === 'filled' && {
    backgroundColor: theme.palette.info.main,
    color: theme.palette.info.contrastText,
  }),
  ...($color === 'info' && $variant === 'outlined' && {
    backgroundColor: 'transparent',
    borderColor: theme.palette.info.main,
    color: theme.palette.info.main,
  }),

  // Willow custom color variants
  ...($color === 'gray' && $variant === 'filled' && {
    backgroundColor: theme.palette.gray?.main || theme.palette.grey[400],
    color: theme.palette.gray?.contrastText || theme.palette.getContrastText(theme.palette.gray?.main || theme.palette.grey[400]),
  }),
  ...($color === 'gray' && $variant === 'outlined' && {
    backgroundColor: 'transparent',
    borderColor: theme.palette.gray?.main || theme.palette.grey[400],
    color: theme.palette.gray?.main || theme.palette.grey[400],
  }),

  ...($color === 'mint' && $variant === 'filled' && {
    backgroundColor: theme.palette.mint?.main,
    color: theme.palette.mint?.contrastText,
  }),
  ...($color === 'mint' && $variant === 'outlined' && {
    backgroundColor: 'transparent',
    borderColor: theme.palette.mint?.main,
    color: theme.palette.mint?.main,
  }),

  ...($color === 'lightPink' && $variant === 'filled' && {
    backgroundColor: theme.palette.lightPink?.main,
    color: theme.palette.lightPink?.contrastText,
  }),
  ...($color === 'lightPink' && $variant === 'outlined' && {
    backgroundColor: 'transparent',
    borderColor: theme.palette.lightPink?.main,
    color: theme.palette.lightPink?.main,
  }),

  ...($color === 'lightBlue' && $variant === 'filled' && {
    backgroundColor: theme.palette.lightBlue?.main,
    color: theme.palette.lightBlue?.contrastText,
  }),
  ...($color === 'lightBlue' && $variant === 'outlined' && {
    backgroundColor: 'transparent',
    borderColor: theme.palette.lightBlue?.main,
    color: theme.palette.lightBlue?.main,
  }),

  ...($color === 'lightOrange' && $variant === 'filled' && {
    backgroundColor: theme.palette.lightOrange?.main,
    color: theme.palette.lightOrange?.contrastText,
  }),
  ...($color === 'lightOrange' && $variant === 'outlined' && {
    backgroundColor: 'transparent',
    borderColor: theme.palette.lightOrange?.main,
    color: theme.palette.lightOrange?.main,
  }),

  ...($color === 'lightGreen' && $variant === 'filled' && {
    backgroundColor: theme.palette.lightGreen?.main,
    color: theme.palette.lightGreen?.contrastText,
  }),
  ...($color === 'lightGreen' && $variant === 'outlined' && {
    backgroundColor: 'transparent',
    borderColor: theme.palette.lightGreen?.main,
    color: theme.palette.lightGreen?.main,
  }),

  ...($color === 'lightPurple' && $variant === 'filled' && {
    backgroundColor: theme.palette.lightPurple?.main,
    color: theme.palette.lightPurple?.contrastText,
  }),
  ...($color === 'lightPurple' && $variant === 'outlined' && {
    backgroundColor: 'transparent',
    borderColor: theme.palette.lightPurple?.main,
    color: theme.palette.lightPurple?.main,
  }),

  // College recommendation level colors
  ...($color === 'safetyLevelColor' && $variant === 'filled' && {
    backgroundColor: theme.palette.safetyLevelColor?.main,
    color: theme.palette.safetyLevelColor?.contrastText,
  }),
  ...($color === 'safetyLevelColor' && $variant === 'outlined' && {
    backgroundColor: 'transparent',
    borderColor: theme.palette.safetyLevelColor?.main,
    color: theme.palette.safetyLevelColor?.main,
  }),

  ...($color === 'targetLevelColor' && $variant === 'filled' && {
    backgroundColor: theme.palette.targetLevelColor?.main,
    color: theme.palette.targetLevelColor?.contrastText,
  }),
  ...($color === 'targetLevelColor' && $variant === 'outlined' && {
    backgroundColor: 'transparent',
    borderColor: theme.palette.targetLevelColor?.main,
    color: theme.palette.targetLevelColor?.main,
  }),

  ...($color === 'reachLevelColor' && $variant === 'filled' && {
    backgroundColor: theme.palette.reachLevelColor?.main,
    color: theme.palette.reachLevelColor?.contrastText,
  }),
  ...($color === 'reachLevelColor' && $variant === 'outlined' && {
    backgroundColor: 'transparent',
    borderColor: theme.palette.reachLevelColor?.main,
    color: theme.palette.reachLevelColor?.main,
  }),

  ...($color === 'farReachLevelColor' && $variant === 'filled' && {
    backgroundColor: theme.palette.farReachLevelColor?.main,
    color: theme.palette.farReachLevelColor?.contrastText,
  }),
  ...($color === 'farReachLevelColor' && $variant === 'outlined' && {
    backgroundColor: 'transparent',
    borderColor: theme.palette.farReachLevelColor?.main,
    color: theme.palette.farReachLevelColor?.main,
  }),
}));
