import React from 'react';
import { styled } from '@mui/material/styles';
import { Skeleton as MuiSkeleton } from '@mui/material';
import { SkeletonVariant } from './Skeleton.types.js';
import { resolvedSemanticTokens } from '../../tokens/semantic-tokens.js';

interface StyledSkeletonProps {
  $variant: SkeletonVariant;
}

export const StyledSkeleton: React.ComponentType<StyledSkeletonProps & Omit<React.ComponentProps<typeof MuiSkeleton>, keyof StyledSkeletonProps>> = styled(MuiSkeleton, {
  shouldForwardProp: (prop) => !prop.toString().startsWith('$'),
})<StyledSkeletonProps>(({ $variant }) => ({
  backgroundColor: resolvedSemanticTokens.skeleton['bg-base'],

  '&::after': {
    background: `linear-gradient(90deg, transparent, ${resolvedSemanticTokens.skeleton['bg-highlight']}, transparent)`,
  },

  ...($variant === 'text' && {
    borderRadius: '4px',
  }),
  ...($variant === 'rectangular' && {
    borderRadius: '8px',
  }),
  ...($variant === 'rounded' && {
    borderRadius: '8px',
  }),
  ...($variant === 'circular' && {
    borderRadius: '50%',
  }),
}));
