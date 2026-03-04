import { forwardRef } from 'react';
import { Input } from '../Input/index.js';
import { StyledTextInputContainer, StyledLabel, StyledHintText } from './TextInput.styled.js';
import { TextInputProps } from './TextInput.types.js';

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      label,
      hintText,
      state = 'default',
      required = false,
      id,
      ...props
    },
    ref
  ) => {
    return (
      <StyledTextInputContainer>
        {label && (
          <StyledLabel htmlFor={id} className={required ? 'required' : ''}>
            {label}
          </StyledLabel>
        )}
        <Input
          ref={ref}
          id={id}
          state={state}
          required={required}
          {...props}
        />
        {hintText && (
          <StyledHintText $isError={state === 'error'}>{hintText}</StyledHintText>
        )}
      </StyledTextInputContainer>
    );
  }
);

TextInput.displayName = 'WillowTextInput';
