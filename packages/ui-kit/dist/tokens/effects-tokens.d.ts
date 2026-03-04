/**
 * Effects Tokens
 *
 * This file contains reusable effect tokens like shadows, focus states, etc.
 * These tokens combine multiple CSS properties to create visual effects.
 */
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
    cssValue: string;
}
/**
 * Focus Effect - Blue
 * Used to indicate keyboard focus on interactive components
 * Combines an outer white glow with a blue outline
 */
export declare const focusEffectBlue: EffectToken;
/**
 * All effect tokens
 */
export declare const effectTokens: {
    readonly focus: {
        readonly blue: EffectToken;
    };
};
/**
 * Helper to get focus effect CSS for use in styled components or CSS-in-JS
 * @param variant - The focus variant ('blue', 'red', 'grey', etc.)
 * @returns CSS box-shadow value
 */
export declare const getFocusEffect: (variant?: "blue") => string;
/**
 * Export individual effects for convenience
 */
export declare const effects: {
    /**
     * Focus effect for primary interactive elements
     * Usage: box-shadow: ${effects.focusBlue};
     */
    readonly focusBlue: string;
};
export default effectTokens;
//# sourceMappingURL=effects-tokens.d.ts.map