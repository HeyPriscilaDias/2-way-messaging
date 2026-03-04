import React from 'react';
import { TypographyVariant, TypographyWeight, TypographyColor, TypographyAlign } from './Typography.types.js';
interface StyledTypographyProps {
    $variant: TypographyVariant;
    $weight?: TypographyWeight;
    $color: TypographyColor;
    $align?: TypographyAlign;
    $truncate?: boolean;
}
/**
 * Returns the complete styles object for the given props.
 * This is exported so Typography.tsx can apply styles directly to native elements.
 */
export declare const getTypographyStyles: ({ $variant, $weight, $color, $align, $truncate, }: StyledTypographyProps) => React.CSSProperties;
export {};
//# sourceMappingURL=Typography.styled.d.ts.map