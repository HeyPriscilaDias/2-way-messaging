import React from 'react';
import { IconButton as MuiIconButton } from '@mui/material';
import { WillowIconButtonVariant, WillowIconButtonSize, WillowIconButtonState } from './IconButton.types.js';
interface StyledIconButtonProps {
    $variant: WillowIconButtonVariant;
    $size: WillowIconButtonSize;
    $state?: WillowIconButtonState;
}
export declare const StyledIconButton: React.ComponentType<StyledIconButtonProps & Omit<React.ComponentProps<typeof MuiIconButton>, keyof StyledIconButtonProps>>;
export {};
//# sourceMappingURL=IconButton.styled.d.ts.map