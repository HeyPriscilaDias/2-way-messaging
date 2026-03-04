import typographyTokensData from './typography-tokens.json' with { type: 'json' };

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
export const typographyTokens: TypographyTokens = typographyTokensData as TypographyTokens;

/**
 * Get CSS properties for a typography token
 * @param tokenName - The name of the typography token (e.g., 'body/df-regular')
 * @returns CSS properties object or null if token not found
 */
export function getTypographyCSS(tokenName: string): React.CSSProperties | null {
  const token = typographyTokens[tokenName];
  if (!token) return null;

  return {
    fontFamily: token.fontFamily,
    fontWeight: token.fontWeight,
    fontSize: `${token.fontSize}px`,
    lineHeight: `${token.lineHeightPx}px`,
    letterSpacing: `${token.letterSpacing}px`,
    ...(token.textDecoration && { textDecoration: token.textDecoration.toLowerCase() as React.CSSProperties['textDecoration'] }),
    ...(token.textCase && { textTransform: token.textCase.toLowerCase() as React.CSSProperties['textTransform'] }),
  };
}

/**
 * Get all tokens in a specific category
 * @param category - The category prefix (e.g., 'body', 'display')
 * @returns Array of typography tokens in that category
 */
export function getTokensByCategory(category: string): TypographyToken[] {
  return Object.values(typographyTokens).filter((token) =>
    token.name.startsWith(`${category}/`)
  );
}

/**
 * Get all available categories
 * @returns Array of unique category names
 */
export function getCategories(): string[] {
  const categories = new Set<string>();
  Object.keys(typographyTokens).forEach((key) => {
    const category = key.split('/')[0];
    if (category) categories.add(category);
  });
  return Array.from(categories).sort();
}

/**
 * Convert typography token to CSS string
 * @param tokenName - The name of the typography token
 * @returns CSS string or empty string if token not found
 */
export function getTypographyCSSString(tokenName: string): string {
  const css = getTypographyCSS(tokenName);
  if (!css) return '';

  return Object.entries(css)
    .map(([key, value]) => {
      // Convert camelCase to kebab-case
      const kebabKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      return `${kebabKey}: ${value};`;
    })
    .join(' ');
}

/**
 * Convenience exports organized by category
 */

// Heading styles (Poppins)
export const headingStyles = {
  'h1': typographyTokens['heading/H1'],
  'h2': typographyTokens['heading/H2'],
  'h3': typographyTokens['heading/H3'],
  'h4': typographyTokens['heading/H4'],
  'h5': typographyTokens['heading/H5'],
};

// Body text styles (Inter)
export const bodyStyles = {
  'lg-strong': typographyTokens['body/lg-strong'],
  'lg-regular': typographyTokens['body/lg-regular'],
  'lg-link': typographyTokens['body/lg-link'],
  'df-strong': typographyTokens['body/df-strong'],
  'df-regular': typographyTokens['body/df-regular'],
  'df-link': typographyTokens['body/df-link'],
  'sm-strong': typographyTokens['body/sm-strong'],
  'sm-regular': typographyTokens['body/sm-regular'],
  'sm-link': typographyTokens['body/sm-link'],
};

/**
 * Get font size scale
 * Useful for creating responsive typography
 */
export function getFontSizeScale(): number[] {
  const sizes = new Set<number>();
  Object.values(typographyTokens).forEach((token) => {
    sizes.add(token.fontSize);
  });
  return Array.from(sizes).sort((a, b) => a - b);
}

/**
 * Get font weight scale
 */
export function getFontWeightScale(): number[] {
  const weights = new Set<number>();
  Object.values(typographyTokens).forEach((token) => {
    weights.add(token.fontWeight);
  });
  return Array.from(weights).sort((a, b) => a - b);
}

// Export all typography tokens as default
export default typographyTokens;
