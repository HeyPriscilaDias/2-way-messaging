import semanticTokensData from './semantic-tokens.json' with { type: 'json' };
import { neutral, Slate, red, blue, yellow, successGreen } from './primitives.js';
import { spacingScale, sizingScale } from './primitive-tokens.js';

/**
 * Semantic Token Interface
 * Represents a single semantic design token that references a primitive token
 */
export interface SemanticToken {
  name: string;
  value: string; // Reference to primitive token (e.g., "{color.neutral.25}")
  description: string;
}

/**
 * Action Semantic Tokens
 * Tokens for interactive action elements like buttons
 */
export interface ActionSemanticTokens {
  'bg-action-primary-default': SemanticToken;
  'bg-action-primary-hover': SemanticToken;
  'bg-action-secondary-default': SemanticToken;
  'bg-action-secondary-hover': SemanticToken;
  'bg-action-on-dark-default': SemanticToken;
  'bg-action-on-dark-hover': SemanticToken;
  'bg-action-disabled': SemanticToken;
}

/**
 * Status Semantic Tokens
 * Tokens for status/state indicators (errors, warnings, etc.)
 */
export interface StatusSemanticTokens {
  'border-critical-focus': SemanticToken;
  'bg-critical-default': SemanticToken;
  'bg-critical-hover': SemanticToken;
  'text-critical': SemanticToken;
}

/**
 * Content Semantic Tokens
 * Tokens for text and icon content
 */
export interface ContentSemanticTokens {
  'text-content-on-brand-default': SemanticToken;
  'text-content-action-hover': SemanticToken;
  'text-content-action-default': SemanticToken;
  'text-content-on-surface-light': SemanticToken;
  'text-content-disabled': SemanticToken;
  'icon-content-on-dark': SemanticToken;
}

/**
 * Background Semantic Tokens
 * Tokens for background colors
 */
export interface BackgroundSemanticTokens {
  'bg-canvas': SemanticToken;
  'bg-surface-default': SemanticToken;
  'bg-surface-focus': SemanticToken;
}

/**
 * Border Semantic Tokens
 * Tokens for border colors
 */
export interface BorderSemanticTokens {
  'color-action-focus': SemanticToken;
  'color-action-focus-on-dark': SemanticToken;
  'border-default': SemanticToken;
  'border-action-secondary-default': SemanticToken;
}

/**
 * Sizing Semantic Tokens
 * Tokens for component sizing (border radius, etc.)
 */
export interface SizingSemanticTokens {
  'size-radius-component-default': SemanticToken;
  'size-radius-component-small': SemanticToken;
  'size-radius-full': SemanticToken;
}

/**
 * Spacing Semantic Tokens
 * Tokens for component spacing (padding, gaps)
 */
export interface SpacingSemanticTokens {
  'button-y-md': SemanticToken;
  'button-y-sm': SemanticToken;
  'button-x-md': SemanticToken;
  'button-x-sm': SemanticToken;
  'button-icon-xxs': SemanticToken;
  'button-icon-xs': SemanticToken;
  'button-icon-md': SemanticToken;
  'button-icon-lg': SemanticToken;
}

/**
 * All Semantic Tokens
 */
export interface SemanticTokens {
  action: ActionSemanticTokens;
  status: StatusSemanticTokens;
  content: ContentSemanticTokens;
  background: BackgroundSemanticTokens;
  border: BorderSemanticTokens;
  sizing: SizingSemanticTokens;
  spacing: SpacingSemanticTokens;
}

/**
 * Raw semantic tokens data from JSON
 */
export const figmaSemanticTokens: SemanticTokens = semanticTokensData as SemanticTokens;

/**
 * Resolved semantic token values
 * These resolve the token references to actual CSS values
 */
export const resolvedSemanticTokens = {
  action: {
    'bg-action-primary-default': Slate[700],
    'bg-action-primary-hover': Slate[900],
    'bg-action-secondary-default': neutral[25],
    'bg-action-secondary-hover': neutral[100],
    'bg-action-on-dark-default': Slate[500],
    'bg-action-on-dark-hover': Slate[600],
    'bg-action-disabled': neutral[200],
  },
  status: {
    'border-critical-focus': red[900],
    'bg-critical-default': red[600],
    'bg-critical-hover': red[800],
    'text-critical': neutral[25],
  },
  content: {
    'text-content-on-brand-default': neutral[25],
    'text-content-action-hover': neutral[900],
    'text-content-action-default': neutral[700],
    'text-content-on-surface-light': neutral[25],
    'text-content-disabled': neutral[500],
    'icon-content-on-dark': neutral[25],
  },
  background: {
    'bg-canvas': neutral[25],
    'bg-surface-default': neutral[100],
    'bg-surface-focus': neutral[100],
  },
  border: {
    'color-action-focus': Slate[700],
    'color-action-focus-on-dark': neutral[25],
    'border-default': neutral[300],
    'border-action-secondary-default': neutral[300],
  },
  sizing: {
    'size-radius-component-default': sizingScale.radiusMd,
    'size-radius-component-small': sizingScale.radiusSm,
    'size-radius-full': sizingScale.radiusFull,
  },
  spacing: {
    'button-y-md': spacingScale[8],
    'button-y-sm': spacingScale[6],
    'button-x-md': spacingScale[18],
    'button-x-sm': spacingScale[12],
    'button-icon-xxs': spacingScale[4],
    'button-icon-xs': spacingScale[8],
    'button-icon-md': spacingScale[16],
    'button-icon-lg': spacingScale[24],
  },
  // Alert tokens
  alert: {
    'bg-error': red[50],
    'border-error': red[200],
    'icon-error': red[600],
    'text-error': red[700],
    'bg-warning': yellow[50],
    'border-warning': yellow[200],
    'icon-warning': yellow[600],
    'text-warning': yellow[700],
    'bg-info': blue[50],
    'border-info': blue[200],
    'icon-info': blue[600],
    'text-info': blue[700],
    'bg-success': successGreen[50],
    'border-success': successGreen[200],
    'icon-success': successGreen[600],
    'text-success': successGreen[700],
  },
  // Form control tokens (checkbox, radio)
  form: {
    'border-control-default': neutral[400],
    'border-control-checked': Slate[700],
    'bg-control-checked': Slate[700],
    'border-control-disabled': neutral[300],
    'bg-control-disabled': neutral[100],
    'border-control-error': red[500],
  },
  // Tab tokens
  tabs: {
    'border-indicator': Slate[700],
    'text-default': neutral[700],
    'text-selected': neutral[900],
    'bg-hover': neutral[50],
  },
  // Table tokens
  table: {
    'bg-header': neutral[100],
    'bg-row-striped': neutral[50],
    'bg-row-hover': Slate[25],
    'border-cell': neutral[200],
    'text-header': neutral[800],
    'text-cell': neutral[700],
  },
  // Skeleton tokens
  skeleton: {
    'bg-base': neutral[200],
    'bg-highlight': neutral[300],
  },
  // Typography tokens
  typography: {
    'text-primary': neutral[900],
    'text-secondary': neutral[700],
    'text-muted': neutral[500],
  },
} as const;

/**
 * Get a resolved semantic token value
 * @param category - The token category (e.g., 'action', 'status')
 * @param name - The token name (e.g., 'bgPrimaryDefault')
 * @returns The resolved token value
 */
export function getSemanticValue(
  category: keyof typeof resolvedSemanticTokens,
  name: string
): string | number | null {
  const categoryTokens = resolvedSemanticTokens[category] as Record<string, string | number>;
  return categoryTokens?.[name] ?? null;
}

// Export all semantic tokens as default
export default figmaSemanticTokens;
