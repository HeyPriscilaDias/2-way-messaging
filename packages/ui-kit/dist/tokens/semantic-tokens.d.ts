/**
 * Semantic Token Interface
 * Represents a single semantic design token that references a primitive token
 */
export interface SemanticToken {
    name: string;
    value: string;
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
export declare const figmaSemanticTokens: SemanticTokens;
/**
 * Resolved semantic token values
 * These resolve the token references to actual CSS values
 */
export declare const resolvedSemanticTokens: {
    readonly action: {
        readonly 'bg-action-primary-default': string;
        readonly 'bg-action-primary-hover': string;
        readonly 'bg-action-secondary-default': string;
        readonly 'bg-action-secondary-hover': string;
        readonly 'bg-action-on-dark-default': string;
        readonly 'bg-action-on-dark-hover': string;
        readonly 'bg-action-disabled': string;
    };
    readonly status: {
        readonly 'border-critical-focus': string;
        readonly 'bg-critical-default': string;
        readonly 'bg-critical-hover': string;
        readonly 'text-critical': string;
    };
    readonly content: {
        readonly 'text-content-on-brand-default': string;
        readonly 'text-content-action-hover': string;
        readonly 'text-content-action-default': string;
        readonly 'text-content-on-surface-light': string;
        readonly 'text-content-disabled': string;
        readonly 'icon-content-on-dark': string;
    };
    readonly background: {
        readonly 'bg-canvas': string;
        readonly 'bg-surface-default': string;
        readonly 'bg-surface-focus': string;
    };
    readonly border: {
        readonly 'color-action-focus': string;
        readonly 'color-action-focus-on-dark': string;
        readonly 'border-default': string;
        readonly 'border-action-secondary-default': string;
    };
    readonly sizing: {
        readonly 'size-radius-component-default': number;
        readonly 'size-radius-component-small': number;
        readonly 'size-radius-full': number;
    };
    readonly spacing: {
        readonly 'button-y-md': number;
        readonly 'button-y-sm': number;
        readonly 'button-x-md': number;
        readonly 'button-x-sm': number;
        readonly 'button-icon-xxs': number;
        readonly 'button-icon-xs': number;
        readonly 'button-icon-md': number;
        readonly 'button-icon-lg': number;
    };
    readonly alert: {
        readonly 'bg-error': string;
        readonly 'border-error': string;
        readonly 'icon-error': string;
        readonly 'text-error': string;
        readonly 'bg-warning': string;
        readonly 'border-warning': string;
        readonly 'icon-warning': string;
        readonly 'text-warning': string;
        readonly 'bg-info': string;
        readonly 'border-info': string;
        readonly 'icon-info': string;
        readonly 'text-info': string;
        readonly 'bg-success': string;
        readonly 'border-success': string;
        readonly 'icon-success': string;
        readonly 'text-success': string;
    };
    readonly form: {
        readonly 'border-control-default': string;
        readonly 'border-control-checked': string;
        readonly 'bg-control-checked': string;
        readonly 'border-control-disabled': string;
        readonly 'bg-control-disabled': string;
        readonly 'border-control-error': string;
    };
    readonly tabs: {
        readonly 'border-indicator': string;
        readonly 'text-default': string;
        readonly 'text-selected': string;
        readonly 'bg-hover': string;
    };
    readonly table: {
        readonly 'bg-header': string;
        readonly 'bg-row-striped': string;
        readonly 'bg-row-hover': string;
        readonly 'border-cell': string;
        readonly 'text-header': string;
        readonly 'text-cell': string;
    };
    readonly skeleton: {
        readonly 'bg-base': string;
        readonly 'bg-highlight': string;
    };
    readonly typography: {
        readonly 'text-primary': string;
        readonly 'text-secondary': string;
        readonly 'text-muted': string;
    };
};
/**
 * Get a resolved semantic token value
 * @param category - The token category (e.g., 'action', 'status')
 * @param name - The token name (e.g., 'bgPrimaryDefault')
 * @returns The resolved token value
 */
export declare function getSemanticValue(category: keyof typeof resolvedSemanticTokens, name: string): string | number | null;
export default figmaSemanticTokens;
//# sourceMappingURL=semantic-tokens.d.ts.map