import { SkeletonProps as MuiSkeletonProps } from '@mui/material';
export type SkeletonVariant = 'text' | 'rectangular' | 'rounded' | 'circular';
export interface SkeletonProps extends Omit<MuiSkeletonProps, 'variant'> {
    variant?: SkeletonVariant;
    animation?: 'pulse' | 'wave' | false;
    width?: number | string;
    height?: number | string;
}
//# sourceMappingURL=Skeleton.types.d.ts.map