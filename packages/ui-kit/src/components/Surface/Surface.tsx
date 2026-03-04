import { forwardRef } from 'react';
import { StyledSurface } from './Surface.styled.js';
import { SurfaceProps } from './Surface.types.js';

export const Surface = forwardRef<HTMLDivElement, SurfaceProps>(
  ({ disablePadding = false, ...props }, ref) => {
    return (
      <StyledSurface
        ref={ref}
        $disablePadding={disablePadding}
        {...props}
      />
    );
  }
);

Surface.displayName = 'WillowSurface';
