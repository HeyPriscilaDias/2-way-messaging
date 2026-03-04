import { forwardRef } from 'react';
import { Box } from '@mui/material';
import { getTypographyStyles } from './Typography.styled.js';
import { TypographyProps, TypographyVariant } from './Typography.types.js';

/**
 * Maps typography variants to their default semantic HTML elements.
 * This ensures proper document structure and accessibility when
 * the component prop is not explicitly provided.
 */
const variantElementMap: Record<TypographyVariant, React.ElementType> = {
  display: 'h1',
  heading: 'h2',
  subheading: 'h3',
  body: 'p',
  'body-lg': 'p',
  'body-sm': 'p',
  caption: 'span',
  label: 'label',
};

export const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ variant = 'body', color = 'primary', weight, align, truncate, component, sx, style, ...props }, ref) => {
    // Use explicit component prop if provided, otherwise use semantic default
    const Element = component ?? variantElementMap[variant];

    // Get typography styles based on props
    const typographyStyles = getTypographyStyles({
      $variant: variant,
      $color: color,
      $weight: weight,
      $align: align,
      $truncate: truncate,
    });

    // Extract color from typography styles to apply via sx (so user sx.color can override)
    // This fixes the CSS specificity issue where inline style color was overriding sx color
    const { color: defaultColor, ...restTypographyStyles } = typographyStyles;

    // Merge typography styles (without color) with any custom styles passed via style prop
    const mergedStyles = { ...restTypographyStyles, ...style };

    // Merge base margin reset and default color with user sx props (user sx takes precedence)
    const mergedSx = { margin: 0, color: defaultColor, ...sx };

    return (
      <Box
        ref={ref}
        component={Element}
        sx={mergedSx}
        style={mergedStyles}
        {...props}
      />
    );
  }
);

Typography.displayName = 'WillowTypography';
