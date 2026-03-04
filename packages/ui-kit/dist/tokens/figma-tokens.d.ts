/**
 * Figma Color Tokens
 *
 * This file exports color tokens from Figma in a format that can be used
 * throughout the application. The tokens are sourced from figma-tokens.json
 * which should be kept in sync with the Figma design file.
 */
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
export declare const figmaTokens: ColorPalette;
export declare const getHexValues: (scale: ColorScale) => Record<string, string>;
export declare const getAllColors: () => Array<ColorToken & {
    category: string;
    key: string;
}>;
export declare const figmaPrimitives: {
    neutral: Record<string, string>;
    slate: Record<string, string>;
    mint: Record<string, string>;
    green: Record<string, string>;
    blue: Record<string, string>;
    lavender: Record<string, string>;
    pink: Record<string, string>;
    red: Record<string, string>;
    yellow: Record<string, string>;
};
export declare const figmaSemantic: {
    brand: Record<string, string>;
    surface: Record<string, string>;
    text: Record<string, string>;
    status: Record<string, string>;
} | undefined;
export declare const figmaSpecial: {
    essentials: Record<string, string>;
    ui: Record<string, string>;
} | undefined;
export declare const getContrastColor: (hexColor: string) => "#000000" | "#FFFFFF";
//# sourceMappingURL=figma-tokens.d.ts.map