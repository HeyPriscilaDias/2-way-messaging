import { forwardRef } from 'react';
import { StyledTextarea } from './Textarea.styled.js';
import { TextareaProps } from './Textarea.types.js';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      state = 'default',
      disabled,
      rows = 3,
      ...props
    },
    ref
  ) => {
    const finalState = disabled ? 'disabled' : state;

    return (
      <StyledTextarea
        ref={ref}
        rows={rows}
        $state={finalState}
        disabled={disabled}
        {...props}
      />
    );
  }
);

Textarea.displayName = 'WillowTextarea';
