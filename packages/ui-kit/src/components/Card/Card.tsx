import { forwardRef } from 'react';
import { StyledCard } from './Card.styled.js';
import { CardProps } from './Card.types.js';

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'elevated', interactive = false, ...props }, ref) => {
    return (
      <StyledCard
        ref={ref}
        $variant={variant}
        $interactive={interactive}
        {...props}
      />
    );
  }
);

Card.displayName = 'WillowCard';