import { forwardRef } from 'react';
import { StyledIconButton } from './IconButton.styled.js';
import { IconButtonProps } from './IconButton.types.js';

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      variant = 'secondary',
      size = 'md',
      state = 'default',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <StyledIconButton
        ref={ref}
        $variant={variant} // CRITICAL: Transient prop
        $size={size}
        $state={state}
        disabled={state === 'disabled' || props.disabled}
        {...props}
      >
        {children}
      </StyledIconButton>
    );
  }
);

IconButton.displayName = 'WillowIconButton';
