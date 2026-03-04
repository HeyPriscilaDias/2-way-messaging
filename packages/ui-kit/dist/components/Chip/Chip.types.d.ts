import { ChipProps as MuiChipProps } from '@mui/material/Chip';
export type WillowChipColor = 'primary' | 'secondary' | 'error' | 'warning' | 'success' | 'info' | 'gray' | 'mint' | 'lightPink' | 'lightBlue' | 'lightOrange' | 'lightGreen' | 'lightPurple' | 'safetyLevelColor' | 'targetLevelColor' | 'reachLevelColor' | 'farReachLevelColor';
export interface ChipProps extends Omit<MuiChipProps, 'color'> {
    color?: WillowChipColor;
}
export type WillowChipVariant = 'filled' | 'outlined';
//# sourceMappingURL=Chip.types.d.ts.map