import { neutral, Slate, red, blue, yellow, successGreen, lavender, essentials, ui } from './primitives.js';

/**
 * Semantic tokens provide meaningful names for design system colors.
 * These tokens should be used by components instead of referencing primitive colors directly.
 */
export const semanticTokens = {
  brand: {
    primary: Slate[600],
    primaryHover: Slate[700],
    primaryText: neutral[25],
    surface: Slate[25],
  },
  surface: {
    background: ui.background, // '#FBFBFB'
    paper: neutral[25],
    border: neutral[300],
    editBackground: ui.editBackground,
  },
  text: {
    primary: neutral[700],
    secondary: neutral[500],
    disabled: neutral[400],
    onBrand: neutral[25],
  },
  action: {
    disabledBackground: neutral[100],
    disabled: neutral[400],
  },
  status: {
    error: red[600],
    warning: yellow[600],
    success: successGreen[600],
    info: blue[600],
  },
  // College recommendation level colors
  college: {
    safety: blue[300],
    target: Slate[400],
    reach: yellow[400],
    farReach: red[300],
  },
  // Chip colors from frontend theme
  chip: {
    gray: neutral[400],
    white: essentials.white,
    mint: ui.mint,
    lightPink: red[25],
    lightBlue: blue[25],
    lightOrange: yellow[25],
    lightGreen: successGreen[25],
    lightPurple: lavender[25],
    surfaceGreen: Slate[25],
  }
} as const;