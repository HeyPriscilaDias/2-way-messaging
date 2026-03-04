import React from 'react';
import { Button as MuiButton } from '@mui/material';
import { WillowTextButtonVariant, WillowTextButtonSize, WillowTextButtonState } from './TextButton.types.js';
interface StyledTextButtonProps {
    $variant: WillowTextButtonVariant;
    $size: WillowTextButtonSize;
    $state?: WillowTextButtonState;
}
export declare const StyledTextButton: React.ComponentType<StyledTextButtonProps & Omit<React.ComponentProps<typeof MuiButton>, keyof StyledTextButtonProps>>;
export {};
//# sourceMappingURL=TextButton.styled.d.ts.map