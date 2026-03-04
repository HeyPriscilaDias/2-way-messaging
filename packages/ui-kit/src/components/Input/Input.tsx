import { forwardRef } from 'react';
import { StyledInput, StyledInputContainer } from './Input.styled.js';
import { InputProps } from './Input.types.js';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      state = 'default',
      type = 'text',
      leadingIcon,
      trailingIcon,
      disabled,
      ...props
    },
    ref
  ) => {
    const finalState = disabled ? 'disabled' : state;

    return (
      <StyledInputContainer
        $hasLeadingIcon={!!leadingIcon}
        $hasTrailingIcon={!!trailingIcon}
      >
        {leadingIcon && (
          <span className="input-leading-icon">
            {leadingIcon}
          </span>
        )}
        <StyledInput
          ref={ref}
          type={type}
          $state={finalState}
          $hasLeadingIcon={!!leadingIcon}
          $hasTrailingIcon={!!trailingIcon}
          disabled={disabled}
          {...props}
        />
        {trailingIcon && (
          <span className="input-trailing-icon">
            {trailingIcon}
          </span>
        )}
      </StyledInputContainer>
    );
  }
);

Input.displayName = 'WillowInput';
