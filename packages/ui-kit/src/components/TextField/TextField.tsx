import { forwardRef } from 'react';
import { StyledTextField } from './TextField.styled.js';
import { TextFieldProps } from './TextField.types.js';

export const TextField = forwardRef<HTMLDivElement, TextFieldProps>(
  (props, ref) => {
    return <StyledTextField ref={ref} {...props} />;
  }
);

TextField.displayName = 'WillowTextField';
