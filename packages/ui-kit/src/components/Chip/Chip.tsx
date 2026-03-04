import { forwardRef } from 'react';
import { StyledChip } from './Chip.styled.js';
import { ChipProps, WillowChipVariant } from './Chip.types.js';

export const Chip = forwardRef<HTMLDivElement, ChipProps>(
  ({ color = 'primary', size = 'small', variant = 'filled', ...props }, ref) => {
    return (
      <StyledChip
        ref={ref}
        $color={color}
        $variant={variant as WillowChipVariant}
        size={size}
        variant={variant}
        {...props}
      />
    );
  }
);

Chip.displayName = 'WillowChip';