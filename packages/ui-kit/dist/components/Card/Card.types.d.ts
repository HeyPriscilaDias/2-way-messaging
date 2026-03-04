import { PaperProps } from '@mui/material/Paper';
export interface CardProps extends Omit<PaperProps, 'variant'> {
    /**
     * The visual style variant of the card
     * - elevated: Shadow-based card like CollegeCard
     * - outlined: Border-based card like ApplicationCard
     */
    variant?: WillowCardVariant;
    /**
     * Whether the card should have interactive hover effects
     * Enables hover animations and cursor pointer
     */
    interactive?: boolean;
}
export type WillowCardVariant = 'elevated' | 'outlined';
//# sourceMappingURL=Card.types.d.ts.map