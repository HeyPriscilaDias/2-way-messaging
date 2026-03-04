import React from 'react';
import { styled } from '@mui/material/styles';
import { resolvedSemanticTokens } from '../../tokens/semantic-tokens.js';

// Body SM Regular typography values
const bodySmStyles = {
  fontFamily: "'Inter', 'Helvetica', 'Arial', sans-serif",
  fontSize: '12px',
  fontWeight: 400,
  lineHeight: '16px',
};

export const BreadcrumbsContainer: React.ComponentType<React.HTMLAttributes<HTMLElement>> = styled('nav')({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '8px',
});

export const BreadcrumbItemWrapper: React.ComponentType<React.HTMLAttributes<HTMLSpanElement>> = styled('span')({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
});

export const breadcrumbLinkStyles = {
  ...bodySmStyles,
  color: resolvedSemanticTokens.typography['text-secondary'],
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',
  '&:hover': {
    textDecoration: 'underline',
  },
  '&:focus-visible': {
    outline: `2px solid ${resolvedSemanticTokens.border['color-action-focus']}`,
    outlineOffset: '2px',
    borderRadius: '2px',
  },
} as const;

export const BreadcrumbLink: React.ComponentType<React.AnchorHTMLAttributes<HTMLAnchorElement>> = styled('a')(breadcrumbLinkStyles);

export const BreadcrumbText: React.ComponentType<React.HTMLAttributes<HTMLSpanElement>> = styled('span')({
  ...bodySmStyles,
  color: resolvedSemanticTokens.typography['text-secondary'],
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',
});

export const Separator: React.ComponentType<React.HTMLAttributes<HTMLSpanElement>> = styled('span')({
  display: 'inline-flex',
  alignItems: 'center',
  color: resolvedSemanticTokens.typography['text-secondary'],
});

export const EllipsisButton: React.ComponentType<React.ButtonHTMLAttributes<HTMLButtonElement>> = styled('button')({
  ...bodySmStyles,
  color: resolvedSemanticTokens.typography['text-secondary'],
  background: 'none',
  border: 'none',
  padding: '2px 4px',
  cursor: 'pointer',
  borderRadius: '2px',
  '&:hover': {
    backgroundColor: resolvedSemanticTokens.background['bg-surface-default'],
  },
  '&:focus-visible': {
    outline: `2px solid ${resolvedSemanticTokens.border['color-action-focus']}`,
    outlineOffset: '2px',
  },
});

export const HomeIconWrapper: React.ComponentType<React.HTMLAttributes<HTMLSpanElement>> = styled('span')({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
});
