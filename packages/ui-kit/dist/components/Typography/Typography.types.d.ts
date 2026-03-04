import { SxProps, Theme } from '@mui/material/styles';
export type TypographyVariant = 'display' | 'heading' | 'subheading' | 'body' | 'body-lg' | 'body-sm' | 'caption' | 'label';
export type TypographyWeight = 'regular' | 'medium' | 'semibold';
export type TypographyColor = 'primary' | 'secondary' | 'muted' | 'inherit';
export type TypographyAlign = 'left' | 'center' | 'right' | 'inherit';
export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
    variant?: TypographyVariant;
    weight?: TypographyWeight;
    color?: TypographyColor;
    align?: TypographyAlign;
    truncate?: boolean;
    /** Override the default semantic HTML element */
    component?: React.ElementType;
    /** MUI sx prop for additional styling - converted to inline styles */
    sx?: SxProps<Theme>;
}
//# sourceMappingURL=Typography.types.d.ts.map