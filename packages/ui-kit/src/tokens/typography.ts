import React from 'react';

// Helper function to convert px to rem
const pxToRem = (px: number): string => `${px / 16}rem`;

export interface TypographyStyles {
  fontFamily: string;
  fontWeight: React.CSSProperties['fontWeight'];
  fontSize: string;
  lineHeight: number;
  letterSpacing: string;
}

export const typography: Record<string, TypographyStyles> = {
  // --- HEADING STYLES (Poppins) ---
  h1: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 600,
    fontSize: pxToRem(30),
    lineHeight: 36 / 30,
    letterSpacing: '-0.02em',
  },
  h2: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 600,
    fontSize: pxToRem(26),
    lineHeight: 32 / 26,
    letterSpacing: '-0.015em',
  },
  h3: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 600,
    fontSize: pxToRem(22),
    lineHeight: 28 / 22,
    letterSpacing: '-0.01em',
  },
  h4: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 600,
    fontSize: pxToRem(18),
    lineHeight: 24 / 18,
    letterSpacing: '-0.005em',
  },
  h5: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 600,
    fontSize: pxToRem(14),
    lineHeight: 20 / 14,
    letterSpacing: '0em',
  },
  // --- BODY STYLES (Inter) ---
  'body-large-strong': {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 600,
    fontSize: pxToRem(16),
    lineHeight: 24 / 16,
    letterSpacing: '0em',
  },
  'body-large-regular': {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 400,
    fontSize: pxToRem(16),
    lineHeight: 24 / 16,
    letterSpacing: '0em',
  },
  'body-large-link': {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 600,
    fontSize: pxToRem(16),
    lineHeight: 24 / 16,
    letterSpacing: '0em',
  },
  'body-default-strong': {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 600,
    fontSize: pxToRem(14),
    lineHeight: 20 / 14,
    letterSpacing: '0em',
  },
  'body-default-regular': {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 400,
    fontSize: pxToRem(14),
    lineHeight: 20 / 14,
    letterSpacing: '0em',
  },
  'body-default-link': {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 600,
    fontSize: pxToRem(14),
    lineHeight: 20 / 14,
    letterSpacing: '0em',
  },
  'body-small-strong': {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 600,
    fontSize: pxToRem(12),
    lineHeight: 16 / 12,
    letterSpacing: '0em',
  },
  'body-small-regular': {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 400,
    fontSize: pxToRem(12),
    lineHeight: 16 / 12,
    letterSpacing: '0em',
  },
  'body-small-link': {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 600,
    fontSize: pxToRem(12),
    lineHeight: 16 / 12,
    letterSpacing: '0em',
  },
  'table-heading': {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 600,
    fontSize: pxToRem(12),
    lineHeight: 16 / 12,
    letterSpacing: '0em',
  },
};
