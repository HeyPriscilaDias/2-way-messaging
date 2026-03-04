import { BoxProps } from '@mui/material/Box';

export interface SurfaceProps extends BoxProps {
  /** Remove default padding. Default: false */
  disablePadding?: boolean;
}
