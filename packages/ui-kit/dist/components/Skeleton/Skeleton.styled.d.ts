import React from 'react';
import { Skeleton as MuiSkeleton } from '@mui/material';
import { SkeletonVariant } from './Skeleton.types.js';
interface StyledSkeletonProps {
    $variant: SkeletonVariant;
}
export declare const StyledSkeleton: React.ComponentType<StyledSkeletonProps & Omit<React.ComponentProps<typeof MuiSkeleton>, keyof StyledSkeletonProps>>;
export {};
//# sourceMappingURL=Skeleton.styled.d.ts.map