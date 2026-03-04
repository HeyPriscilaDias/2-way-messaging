/**
 * Primitive Token References
 * References to the primitive design tokens used by this typography token
 */
export interface PrimitiveRefs {
    fontSize: string;
    lineHeight: string;
    letterSpacing: string;
}
/**
 * Typography Token Interface
 * Represents a single typography style with all its properties
 */
export interface TypographyToken {
    name: string;
    description?: string;
    fontFamily: string;
    fontWeight: number;
    fontSize: number;
    lineHeightPx: number;
    letterSpacing: number;
    textDecoration?: string;
    textCase?: string;
    primitiveRefs?: PrimitiveRefs;
}
/**
 * Typography Tokens Collection
 * All typography tokens from Figma, organized by category
 */
export interface TypographyTokens {
    [key: string]: TypographyToken;
}
/**
 * Raw typography tokens data from JSON
 */
export declare const typographyTokens: TypographyTokens;
/**
 * Get CSS properties for a typography token
 * @param tokenName - The name of the typography token (e.g., 'body/df-regular')
 * @returns CSS properties object or null if token not found
 */
export declare function getTypographyCSS(tokenName: string): React.CSSProperties | null;
/**
 * Get all tokens in a specific category
 * @param category - The category prefix (e.g., 'body', 'display')
 * @returns Array of typography tokens in that category
 */
export declare function getTokensByCategory(category: string): TypographyToken[];
/**
 * Get all available categories
 * @returns Array of unique category names
 */
export declare function getCategories(): string[];
/**
 * Convert typography token to CSS string
 * @param tokenName - The name of the typography token
 * @returns CSS string or empty string if token not found
 */
export declare function getTypographyCSSString(tokenName: string): string;
/**
 * Convenience exports organized by category
 */
export declare const headingStyles: {
    h1: TypographyToken;
    h2: TypographyToken;
    h3: TypographyToken;
    h4: TypographyToken;
    h5: TypographyToken;
};
export declare const bodyStyles: {
    'lg-strong': TypographyToken;
    'lg-regular': TypographyToken;
    'lg-link': TypographyToken;
    'df-strong': TypographyToken;
    'df-regular': TypographyToken;
    'df-link': TypographyToken;
    'sm-strong': TypographyToken;
    'sm-regular': TypographyToken;
    'sm-link': TypographyToken;
};
/**
 * Get font size scale
 * Useful for creating responsive typography
 */
export declare function getFontSizeScale(): number[];
/**
 * Get font weight scale
 */
export declare function getFontWeightScale(): number[];
export default typographyTokens;
//# sourceMappingURL=typography-tokens.d.ts.map