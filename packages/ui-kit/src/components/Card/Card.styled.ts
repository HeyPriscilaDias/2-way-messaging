import React from 'react';
import { styled } from '@mui/material/styles';
import { Paper, PaperProps } from '@mui/material';
import { WillowCardVariant } from './Card.types.js';

interface StyledCardProps extends PaperProps {
  $variant: WillowCardVariant;
  $interactive?: boolean;
}

export const StyledCard: React.ComponentType<StyledCardProps> = styled(Paper, {
  shouldForwardProp: (prop) => prop !== '$variant' && prop !== '$interactive',
})<StyledCardProps>(({ theme, $variant, $interactive }) => ({
  borderRadius: (theme.shape.borderRadius as number) * 2, // 8px like in production CollegeCard
  overflow: 'visible',
  cursor: $interactive ? 'pointer' : 'default',
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',

  // Base styling for elevated variant (like CollegeCard)
  ...($variant === 'elevated' && {
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)', // Matches CollegeCard production shadow
    border: 'none',

    ...($interactive && {
      '&:hover': {
        transform: 'translateY(-4px)', // Matches CollegeCard hover effect
        boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)', // Elevated hover shadow
      },
    }),
  }),

  // Base styling for outlined variant (like ApplicationCard)
  ...($variant === 'outlined' && {
    boxShadow: 'none',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '12px', // ApplicationCard uses 12px specifically

    ...($interactive && {
      '&:hover': {
        transform: 'translateY(-2px)', // Slightly different hover for outlined cards
        boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)', // Matches ApplicationCard hover
      },
    }),
  }),
}));