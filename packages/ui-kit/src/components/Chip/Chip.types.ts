import { ChipProps as MuiChipProps } from '@mui/material/Chip';

// Willow custom color variants based on the theme
export type WillowChipColor =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'success'
  | 'info'
  | 'gray'
  | 'mint'
  | 'lightPink'
  | 'lightBlue'
  | 'lightOrange'
  | 'lightGreen'
  | 'lightPurple'
  | 'safetyLevelColor'
  | 'targetLevelColor'
  | 'reachLevelColor'
  | 'farReachLevelColor';

export interface ChipProps extends Omit<MuiChipProps, 'color'> {
  // Override color prop to use Willow color variants
  color?: WillowChipColor;
}

export type WillowChipVariant = 'filled' | 'outlined';