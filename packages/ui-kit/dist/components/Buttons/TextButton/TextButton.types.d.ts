import { ButtonProps as MuiButtonProps } from '@mui/material';
export type WillowTextButtonVariant = 'primary' | 'secondary' | 'on-dark' | 'ghost' | 'critical';
export type WillowTextButtonSize = 'sm' | 'md';
export type WillowTextButtonState = 'default' | 'hover' | 'focus' | 'disabled';
export interface TextButtonProps extends Omit<MuiButtonProps, 'variant' | 'color' | 'size'> {
    variant?: WillowTextButtonVariant;
    size?: WillowTextButtonSize;
    state?: WillowTextButtonState;
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
}
//# sourceMappingURL=TextButton.types.d.ts.map