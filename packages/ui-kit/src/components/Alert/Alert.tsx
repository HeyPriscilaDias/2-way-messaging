import { forwardRef } from 'react';
import { AlertTitle } from '@mui/material';
import { StyledAlert } from './Alert.styled.js';
import { AlertProps } from './Alert.types.js';

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ variant, title, children, onClose, ...props }, ref) => {
    return (
      <StyledAlert
        ref={ref}
        $variant={variant}
        severity={variant}
        onClose={onClose}
        {...props}
      >
        {title && <AlertTitle>{title}</AlertTitle>}
        {children}
      </StyledAlert>
    );
  }
);

Alert.displayName = 'WillowAlert';
