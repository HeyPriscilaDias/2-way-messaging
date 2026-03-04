import React from 'react';
import { TypographyVariant, TypographyWeight, TypographyColor, TypographyAlign } from './Typography.types.js';
import { resolvedSemanticTokens } from '../../tokens/semantic-tokens.js';

interface StyledTypographyProps {
  $variant: TypographyVariant;
  $weight?: TypographyWeight;
  $color: TypographyColor;
  $align?: TypographyAlign;
  $truncate?: boolean;
}

const getVariantStyles = ($variant: TypographyVariant) => {
  switch ($variant) {
    case 'display':
      return {
        fontFamily: "'Poppins', sans-serif",
        fontSize: '30px',
        fontWeight: 600,
        lineHeight: '36px',
      };
    case 'heading':
      return {
        fontFamily: "'Poppins', sans-serif",
        fontSize: '22px',
        fontWeight: 600,
        lineHeight: '28px',
      };
    case 'subheading':
      return {
        fontFamily: "'Poppins', sans-serif",
        fontSize: '18px',
        fontWeight: 600,
        lineHeight: '24px',
      };
    case 'body':
      return {
        fontFamily: "'Inter', 'Helvetica', 'Arial', sans-serif",
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '20px',
      };
    case 'body-lg':
      return {
        fontFamily: "'Inter', 'Helvetica', 'Arial', sans-serif",
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '24px',
      };
    case 'body-sm':
      return {
        fontFamily: "'Inter', 'Helvetica', 'Arial', sans-serif",
        fontSize: '12px',
        fontWeight: 400,
        lineHeight: '16px',
      };
    case 'caption':
      return {
        fontFamily: "'Inter', 'Helvetica', 'Arial', sans-serif",
        fontSize: '12px',
        fontWeight: 400,
        lineHeight: '16px',
      };
    case 'label':
      return {
        fontFamily: "'Inter', 'Helvetica', 'Arial', sans-serif",
        fontSize: '14px',
        fontWeight: 600,
        lineHeight: '20px',
      };
    default:
      return {
        fontFamily: "'Inter', 'Helvetica', 'Arial', sans-serif",
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '20px',
      };
  }
};

const getWeightStyles = ($weight?: TypographyWeight) => {
  if (!$weight) return {};

  switch ($weight) {
    case 'regular':
      return { fontWeight: 400 };
    case 'medium':
      return { fontWeight: 500 };
    case 'semibold':
      return { fontWeight: 600 };
    default:
      return {};
  }
};

const getColorStyles = ($color: TypographyColor) => {
  switch ($color) {
    case 'primary':
      return { color: resolvedSemanticTokens.typography['text-primary'] };
    case 'secondary':
      return { color: resolvedSemanticTokens.typography['text-secondary'] };
    case 'muted':
      return { color: resolvedSemanticTokens.typography['text-muted'] };
    case 'inherit':
      return { color: 'inherit' };
    default:
      return { color: resolvedSemanticTokens.typography['text-primary'] };
  }
};

const getAlignStyles = ($align?: TypographyAlign) => {
  if (!$align || $align === 'inherit') return {};
  return { textAlign: $align };
};

const getTruncateStyles = ($truncate?: boolean) => {
  if (!$truncate) return {};
  return {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap' as const,
  };
};

/**
 * Returns the appropriate display value for each variant.
 * Block elements (headings, paragraphs) use 'block', inline elements use 'inline'.
 */
const getDisplayStyle = ($variant: TypographyVariant) => {
  switch ($variant) {
    case 'caption':
      return 'inline';
    default:
      return 'block';
  }
};

/**
 * Returns the complete styles object for the given props.
 * This is exported so Typography.tsx can apply styles directly to native elements.
 */
export const getTypographyStyles = ({
  $variant,
  $weight,
  $color,
  $align,
  $truncate,
}: StyledTypographyProps): React.CSSProperties => ({
  display: getDisplayStyle($variant),
  ...getVariantStyles($variant),
  ...getWeightStyles($weight),
  ...getColorStyles($color),
  ...getAlignStyles($align),
  ...getTruncateStyles($truncate),
});
