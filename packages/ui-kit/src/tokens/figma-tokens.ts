/**
 * Figma Color Tokens
 *
 * This file exports color tokens from Figma in a format that can be used
 * throughout the application. The tokens are sourced from figma-tokens.json
 * which should be kept in sync with the Figma design file.
 */

import figmaTokensJson from './figma-tokens.json' with { type: 'json' };

export type ColorToken = {
  value: string;
  name: string;
  source?: string;
};

export type ColorScale = {
  [key: string]: ColorToken;
};

export type ColorPalette = {
  primitives: {
    neutral: ColorScale;
    slate: ColorScale;
    mint: ColorScale;
    green: ColorScale;
    blue: ColorScale;
    lavender: ColorScale;
    pink: ColorScale;
    red: ColorScale;
    yellow: ColorScale;
  };
  semantic?: {
    brand?: ColorScale;
    surface?: ColorScale;
    text?: ColorScale;
    status?: ColorScale;
  };
  special?: {
    essentials?: ColorScale;
    ui?: ColorScale;
  };
};

// Export the full token structure
export const figmaTokens: ColorPalette = figmaTokensJson.colors as ColorPalette;

// Helper function to extract just hex values from a color scale
export const getHexValues = (scale: ColorScale): Record<string, string> => {
  return Object.entries(scale).reduce((acc, [key, token]) => {
    acc[key] = token.value;
    return acc;
  }, {} as Record<string, string>);
};

// Helper function to get all colors as a flat array with metadata
export const getAllColors = (): Array<ColorToken & { category: string; key: string }> => {
  const colors: Array<ColorToken & { category: string; key: string }> = [];

  // Primitives
  Object.entries(figmaTokens.primitives).forEach(([category, scale]) => {
    Object.entries(scale).forEach(([key, token]) => {
      colors.push({ ...token, category: `primitives.${category}`, key });
    });
  });

  // Semantic (optional)
  if (figmaTokens.semantic) {
    Object.entries(figmaTokens.semantic).forEach(([category, scale]) => {
      if (scale) {
        Object.entries(scale).forEach(([key, token]) => {
          colors.push({ ...token, category: `semantic.${category}`, key });
        });
      }
    });
  }

  // Special (optional)
  if (figmaTokens.special) {
    Object.entries(figmaTokens.special).forEach(([category, scale]) => {
      if (scale) {
        Object.entries(scale).forEach(([key, token]) => {
          colors.push({ ...token, category: `special.${category}`, key });
        });
      }
    });
  }

  return colors;
};

// Export individual scales for convenience
export const figmaPrimitives = {
  neutral: getHexValues(figmaTokens.primitives.neutral),
  slate: getHexValues(figmaTokens.primitives.slate),
  mint: getHexValues(figmaTokens.primitives.mint),
  green: getHexValues(figmaTokens.primitives.green),
  blue: getHexValues(figmaTokens.primitives.blue),
  lavender: getHexValues(figmaTokens.primitives.lavender),
  pink: getHexValues(figmaTokens.primitives.pink),
  red: getHexValues(figmaTokens.primitives.red),
  yellow: getHexValues(figmaTokens.primitives.yellow),
};

export const figmaSemantic = figmaTokens.semantic ? {
  brand: figmaTokens.semantic.brand ? getHexValues(figmaTokens.semantic.brand) : {},
  surface: figmaTokens.semantic.surface ? getHexValues(figmaTokens.semantic.surface) : {},
  text: figmaTokens.semantic.text ? getHexValues(figmaTokens.semantic.text) : {},
  status: figmaTokens.semantic.status ? getHexValues(figmaTokens.semantic.status) : {},
} : undefined;

export const figmaSpecial = figmaTokens.special ? {
  essentials: figmaTokens.special.essentials ? getHexValues(figmaTokens.special.essentials) : {},
  ui: figmaTokens.special.ui ? getHexValues(figmaTokens.special.ui) : {},
} : undefined;

// Helper to check color contrast
export const getContrastColor = (hexColor: string): '#000000' | '#FFFFFF' => {
  // Remove # if present
  const hex = hexColor.replace('#', '');

  // Convert to RGB
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Calculate luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // Return black for light colors, white for dark colors
  return luminance > 0.5 ? '#000000' : '#FFFFFF';
};
