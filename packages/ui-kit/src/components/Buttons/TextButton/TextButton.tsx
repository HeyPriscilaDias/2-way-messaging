import { forwardRef } from 'react';
import { StyledTextButton } from './TextButton.styled.js';
import { TextButtonProps } from './TextButton.types.js';

export const TextButton = forwardRef<HTMLButtonElement, TextButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      state = 'default',
      children,
      leadingIcon,
      trailingIcon,
      ...props
    },
    ref
  ) => {
    return (
      <StyledTextButton
        ref={ref}
        $variant={variant} // CRITICAL: Transient prop
        $size={size}
        $state={state}
        disabled={state === 'disabled' || props.disabled}
        {...props}
      >
        {leadingIcon && (
          <span className="button-leading-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {leadingIcon}
          </span>
        )}
        {children}
        {trailingIcon && (
          <span className="button-trailing-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {trailingIcon}
          </span>
        )}
      </StyledTextButton>
    );
  }
);

TextButton.displayName = 'WillowTextButton';
