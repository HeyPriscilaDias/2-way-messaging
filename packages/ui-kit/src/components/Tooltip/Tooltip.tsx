import { forwardRef } from 'react';
import { StyledTooltip } from './Tooltip.styled.js';
import { TooltipProps } from './Tooltip.types.js';

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  ({ arrow = true, children, ...props }, ref) => {
    return (
      <StyledTooltip ref={ref} arrow={arrow} {...props}>
        {children}
      </StyledTooltip>
    );
  }
);
Tooltip.displayName = 'WillowTooltip';
