/**
 * Primitive Token Interface
 * Represents a single primitive design token with numeric value
 */
export interface PrimitiveToken {
    name: string;
    value: number;
    description: string;
}
/**
 * String Primitive Token Interface
 * Represents a single primitive design token with string value (e.g., font families)
 */
export interface StringPrimitiveToken {
    name: string;
    value: string;
    description: string;
}
/**
 * Spacing Primitive Tokens
 * Base tokens for spacing (margin, padding, gap)
 */
export interface SpacingPrimitives {
    '0': PrimitiveToken;
    '4': PrimitiveToken;
    '6': PrimitiveToken;
    '8': PrimitiveToken;
    '12': PrimitiveToken;
    '16': PrimitiveToken;
    '18': PrimitiveToken;
    '24': PrimitiveToken;
}
/**
 * Sizing Primitive Tokens
 * Base tokens for sizing (border radius, icon sizes)
 */
export interface SizingPrimitives {
    radiusSm: PrimitiveToken;
    radiusMd: PrimitiveToken;
    radiusLg: PrimitiveToken;
    radiusFull: PrimitiveToken;
    iconSm: PrimitiveToken;
    iconMd: PrimitiveToken;
}
/**
 * Typography Primitive Tokens
 * Base tokens for font families, weights, sizes, line heights, and letter spacing
 */
export interface TypographyPrimitives {
    fontFamily: {
        heading: StringPrimitiveToken;
        body: StringPrimitiveToken;
    };
    fontWeight: {
        regular: PrimitiveToken;
        strong: PrimitiveToken;
    };
    fontSize: {
        xs: PrimitiveToken;
        sm: PrimitiveToken;
        md: PrimitiveToken;
        lg: PrimitiveToken;
        xl: PrimitiveToken;
        '2xl': PrimitiveToken;
        '3xl': PrimitiveToken;
    };
    lineHeight: {
        xxs: PrimitiveToken;
        xs: PrimitiveToken;
        sm: PrimitiveToken;
        md: PrimitiveToken;
        lg: PrimitiveToken;
        xl: PrimitiveToken;
    };
    letterSpacing: {
        n050: PrimitiveToken;
        none: PrimitiveToken;
        n100: PrimitiveToken;
        n150: PrimitiveToken;
        n200: PrimitiveToken;
        n500: PrimitiveToken;
    };
}
/**
 * All Primitive Tokens
 */
export interface PrimitiveTokens {
    spacing: SpacingPrimitives;
    sizing: SizingPrimitives;
    typography: TypographyPrimitives;
}
/**
 * Raw primitive tokens data from JSON
 */
export declare const primitiveTokens: PrimitiveTokens;
/**
 * Spacing scale for easy access
 */
export declare const spacingScale: {
    readonly 0: number;
    readonly 4: number;
    readonly 6: number;
    readonly 8: number;
    readonly 12: number;
    readonly 16: number;
    readonly 18: number;
    readonly 24: number;
};
/**
 * Sizing scale for easy access
 */
export declare const sizingScale: {
    readonly radiusSm: number;
    readonly radiusMd: number;
    readonly radiusLg: number;
    readonly radiusFull: number;
    readonly iconSm: number;
    readonly iconMd: number;
};
/**
 * Typography font family scale
 */
export declare const fontFamilyScale: {
    readonly heading: string;
    readonly body: string;
};
/**
 * Typography font weight scale
 */
export declare const fontWeightScale: {
    readonly regular: number;
    readonly strong: number;
};
/**
 * Typography font size scale
 */
export declare const fontSizeScale: {
    readonly xs: number;
    readonly sm: number;
    readonly md: number;
    readonly lg: number;
    readonly xl: number;
    readonly '2xl': number;
    readonly '3xl': number;
};
/**
 * Typography line height scale
 */
export declare const lineHeightScale: {
    readonly xxs: number;
    readonly xs: number;
    readonly sm: number;
    readonly md: number;
    readonly lg: number;
    readonly xl: number;
};
/**
 * Typography letter spacing scale
 */
export declare const letterSpacingScale: {
    readonly n050: number;
    readonly none: number;
    readonly n100: number;
    readonly n150: number;
    readonly n200: number;
    readonly n500: number;
};
/**
 * Get all font sizes in ascending order
 */
export declare function getFontSizes(): number[];
/**
 * Get all line heights in ascending order
 */
export declare function getLineHeights(): number[];
/**
 * Get all letter spacings in ascending order
 */
export declare function getLetterSpacings(): number[];
/**
 * Get all spacing values in ascending order
 */
export declare function getSpacings(): number[];
/**
 * Get a specific spacing value
 * @param size - The spacing size (0, 4, 6, 8, 12, 16, 18, 24)
 * @returns The spacing value in pixels
 */
export declare function getSpacing(size: keyof typeof spacingScale): number;
/**
 * Get a specific sizing value
 * @param name - The sizing name (radiusSm, radiusMd, radiusLg, radiusFull, iconSm, iconMd)
 * @returns The sizing value in pixels
 */
export declare function getSizing(name: keyof typeof sizingScale): number;
export default primitiveTokens;
//# sourceMappingURL=primitive-tokens.d.ts.map