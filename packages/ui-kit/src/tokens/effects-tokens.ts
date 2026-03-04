/**
 * Effects Tokens
 *
 * This file contains reusable effect tokens like shadows, focus states, etc.
 * These tokens combine multiple CSS properties to create visual effects.
 */

import { figmaPrimitives } from './figma-tokens.js';

/**
 * Shadow Effect Interface
 * Represents a single box-shadow layer
 */
export interface ShadowLayer {
  x: number;
  y: number;
  blur: number;
  spread: number;
  color: string;
  inset?: boolean;
}

/**
 * Effect Token Interface
 * Can contain multiple shadow layers or other effects
 */
export interface EffectToken {
  name: string;
  description: string;
  shadows: ShadowLayer[];
  cssValue: string; // Pre-computed CSS box-shadow value
}

/**
 * Convert a shadow layer to CSS box-shadow string
 */
const shadowLayerToCSS = (layer: ShadowLayer): string => {
  const inset = layer.inset ? 'inset ' : '';
  return `${inset}${layer.x}px ${layer.y}px ${layer.blur}px ${layer.spread}px ${layer.color}`;
};

/**
 * Convert multiple shadow layers to CSS box-shadow value
 */
const shadowsToCSS = (shadows: ShadowLayer[]): string => {
  return shadows.map(shadowLayerToCSS).join(', ');
};

/**
 * Focus Effect - Blue
 * Used to indicate keyboard focus on interactive components
 * Combines an outer white glow with a blue outline
 */
export const focusEffectBlue: EffectToken = {
  name: 'Focus Effect - Blue',
  description: 'Keyboard focus indicator for interactive components (buttons, inputs, etc.)',
  shadows: [
    {
      x: 0,
      y: 0,
      blur: 0,
      spread: 4,
      color: figmaPrimitives.blue['600'] || '#0097C9', // #0097C9
    },
    {
      x: 0,
      y: 0,
      blur: 0,
      spread: 2,
      color: figmaPrimitives.neutral['25'] || '#FFFFFF', // #FFFFFF (White)
    },
  ],
  cssValue: '',
};

// Compute CSS value
focusEffectBlue.cssValue = shadowsToCSS(focusEffectBlue.shadows);

/**
 * All effect tokens
 */
export const effectTokens = {
  focus: {
    blue: focusEffectBlue,
  },
} as const;

/**
 * Helper to get focus effect CSS for use in styled components or CSS-in-JS
 * @param variant - The focus variant ('blue', 'red', 'grey', etc.)
 * @returns CSS box-shadow value
 */
export const getFocusEffect = (variant: 'blue' = 'blue'): string => {
  return effectTokens.focus[variant].cssValue;
};

/**
 * Export individual effects for convenience
 */
export const effects = {
  /**
   * Focus effect for primary interactive elements
   * Usage: box-shadow: ${effects.focusBlue};
   */
  focusBlue: focusEffectBlue.cssValue,
} as const;

export default effectTokens;
