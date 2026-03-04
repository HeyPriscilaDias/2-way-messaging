import { IconButtonProps as MuiIconButtonProps } from '@mui/material';
export type WillowIconButtonVariant = 'primary' | 'secondary' | 'on-dark' | 'ghost' | 'critical';
export type WillowIconButtonSize = 'sm' | 'md';
export type WillowIconButtonState = 'default' | 'hover' | 'focus' | 'disabled';
export interface IconButtonProps extends Omit<MuiIconButtonProps, 'variant' | 'color' | 'size'> {
    variant?: WillowIconButtonVariant;
    size?: WillowIconButtonSize;
    state?: WillowIconButtonState;
}
//# sourceMappingURL=IconButton.types.d.ts.map