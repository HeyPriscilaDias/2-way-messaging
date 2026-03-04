import "@mui/material/styles";
import "@mui/material/Typography";
import "@mui/material/Chip";
import "@mui/material/AppBar";
declare module "@mui/material/Chip" {
    interface ChipPropsColorOverrides {
        gray: true;
        white: true;
        mint: true;
        lightPink: true;
        lightBlue: true;
        lightOrange: true;
        lightGreen: true;
        lightPurple: true;
        surfaceGreen: true;
        safetyLevelColor: true;
        targetLevelColor: true;
        reachLevelColor: true;
        farReachLevelColor: true;
    }
}
declare module "@mui/material/AppBar" {
    interface AppBarPropsColorOverrides {
        gray: true;
        white: true;
        mint: true;
        surfaceGreen: true;
    }
}
/** Custom palette color structure */
interface CustomPaletteColor {
    main: string;
    contrastText: string;
}
declare module "@mui/material/styles" {
    interface TypographyVariants {
        cardTitle: React.CSSProperties;
        subHeading: React.CSSProperties;
        cardProviderName: React.CSSProperties;
        cardLocation: React.CSSProperties;
        cardProgramName: React.CSSProperties;
        pageTitle: React.CSSProperties;
        cardDescription: React.CSSProperties;
        bodyLarge: React.CSSProperties;
        bodyLargeSemibold: React.CSSProperties;
        bodyDefault: React.CSSProperties;
        bodyDefaultSemibold: React.CSSProperties;
        bodySmall: React.CSSProperties;
        bodySmallSemibold: React.CSSProperties;
        tableHeading: React.CSSProperties;
    }
    interface TypographyVariantsOptions {
        cardTitle?: React.CSSProperties;
        subHeading?: React.CSSProperties;
        cardProviderName?: React.CSSProperties;
        cardLocation?: React.CSSProperties;
        cardProgramName?: React.CSSProperties;
        pageTitle?: React.CSSProperties;
        cardDescription?: React.CSSProperties;
        bodyLarge?: React.CSSProperties;
        bodyLargeSemibold?: React.CSSProperties;
        bodyDefault?: React.CSSProperties;
        bodyDefaultSemibold?: React.CSSProperties;
        bodySmall?: React.CSSProperties;
        bodySmallSemibold?: React.CSSProperties;
        tableHeading?: React.CSSProperties;
    }
    interface Palette {
        gray: CustomPaletteColor;
        close: CustomPaletteColor;
        white: CustomPaletteColor;
        charcoal: CustomPaletteColor;
        chalkboard: CustomPaletteColor;
        mint: CustomPaletteColor;
        chalk: CustomPaletteColor;
        black: CustomPaletteColor;
        lightPink: CustomPaletteColor;
        lightBlue: CustomPaletteColor;
        lightOrange: CustomPaletteColor;
        lightGreen: CustomPaletteColor;
        lightPurple: CustomPaletteColor;
        surfaceGreen: CustomPaletteColor;
        safetyLevelColor: CustomPaletteColor;
        targetLevelColor: CustomPaletteColor;
        reachLevelColor: CustomPaletteColor;
        farReachLevelColor: CustomPaletteColor;
    }
    interface PaletteOptions {
        gray: {
            main: string;
            contrastText: string;
        };
        close: {
            main: string;
            contrastText: string;
        };
        white: {
            main: string;
            contrastText: string;
        };
        charcoal: {
            main: string;
            contrastText: string;
        };
        chalkboard: {
            main: string;
            contrastText: string;
        };
        mint: {
            main: string;
            contrastText: string;
        };
        chalk: {
            main: string;
            contrastText: string;
        };
        black: {
            main: string;
            contrastText: string;
        };
        lightPink: {
            main: string;
            contrastText: string;
        };
        lightBlue: {
            main: string;
            contrastText: string;
        };
        lightOrange: {
            main: string;
            contrastText: string;
        };
        lightGreen: {
            main: string;
            contrastText: string;
        };
        lightPurple: {
            main: string;
            contrastText: string;
        };
        surfaceGreen: {
            main: string;
            contrastText: string;
        };
        safetyLevelColor: {
            main: string;
            contrastText: string;
        };
        targetLevelColor: {
            main: string;
            contrastText: string;
        };
        reachLevelColor: {
            main: string;
            contrastText: string;
        };
        farReachLevelColor: {
            main: string;
            contrastText: string;
        };
    }
}
declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        cardTitle: true;
        leadCardTitle: true;
        leadCardDate: true;
        leadCardInfo: true;
        subHeading: true;
        cardProviderName: true;
        cardLocation: true;
        cardProgramName: true;
        pageTitle: true;
        cardDescription: true;
        bodyLarge: true;
        bodyLargeSemibold: true;
        bodyDefault: true;
        bodyDefaultSemibold: true;
        bodySmall: true;
        bodySmallSemibold: true;
        tableHeading: true;
    }
}
declare module "@mui/material/Button" {
    interface ButtonPropsVariantOverrides {
        primary: true;
        secondary: true;
        tertiary: true;
        critical: true;
        "text-dark": true;
        "text-light": true;
        contained: true;
        outlined: true;
        text: true;
    }
}
export {};
//# sourceMappingURL=augmentations.d.ts.map