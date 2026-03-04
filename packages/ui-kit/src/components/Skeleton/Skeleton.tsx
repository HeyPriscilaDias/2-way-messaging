import { forwardRef } from 'react';
import { StyledSkeleton } from './Skeleton.styled.js';
import { SkeletonProps } from './Skeleton.types.js';

export const Skeleton = forwardRef<HTMLSpanElement, SkeletonProps>(
  ({ variant = 'text', animation = 'pulse', ...props }, ref) => {
    return <StyledSkeleton ref={ref} $variant={variant} animation={animation} {...props} />;
  }
);

Skeleton.displayName = 'WillowSkeleton';
