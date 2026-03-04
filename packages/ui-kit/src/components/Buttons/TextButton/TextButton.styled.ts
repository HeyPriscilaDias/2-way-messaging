import React from 'react';
import { styled } from '@mui/material/styles';
import { Button as MuiButton } from '@mui/material';
import { WillowTextButtonVariant, WillowTextButtonSize, WillowTextButtonState } from './TextButton.types.js';
import { resolvedSemanticTokens } from '../../../tokens/semantic-tokens.js';

interface StyledTextButtonProps {
  $variant: WillowTextButtonVariant;
  $size: WillowTextButtonSize;
  $state?: WillowTextButtonState;
}

const getStateStyles = ($variant: WillowTextButtonVariant, $state?: WillowTextButtonState) => {
  if ($state === 'hover') {
    // Apply hover styles directly
    if ($variant === 'primary') {
      return { backgroundColor: resolvedSemanticTokens.action['bg-action-primary-hover'] };
    }
    if ($variant === 'secondary') {
      return {
        backgroundColor: resolvedSemanticTokens.action['bg-action-secondary-hover'],
        color: resolvedSemanticTokens.content['text-content-action-hover'],
      };
    }
    if ($variant === 'on-dark') {
      return { backgroundColor: resolvedSemanticTokens.action['bg-action-on-dark-hover'] };
    }
    if ($variant === 'ghost') {
      return {
        backgroundColor: resolvedSemanticTokens.action['bg-action-secondary-hover'],
        color: resolvedSemanticTokens.content['text-content-action-hover'],
      };
    }
    if ($variant === 'critical') {
      return { backgroundColor: resolvedSemanticTokens.status['bg-critical-hover'] };
    }
  }
  if ($state === 'focus') {
    // Apply focus styles
    if ($variant === 'primary' || $variant === 'ghost' || $variant === 'secondary') {
      return {
        boxShadow: `inset 0 0 0 2px ${resolvedSemanticTokens.border['color-action-focus']}`,
      };
    }
    if ($variant === 'on-dark') {
      return {
        boxShadow: `inset 0 0 0 2px ${resolvedSemanticTokens.border['color-action-focus-on-dark']}`,
      };
    }
    if ($variant === 'critical') {
      return {
        boxShadow: `inset 0 0 0 2px ${resolvedSemanticTokens.status['bg-critical-hover']}`,
      };
    }
  }
  return {};
};

export const StyledTextButton: React.ComponentType<StyledTextButtonProps & Omit<React.ComponentProps<typeof MuiButton>, keyof StyledTextButtonProps>> = styled(MuiButton, {
  shouldForwardProp: (prop) => !prop.toString().startsWith('$'),
})<StyledTextButtonProps>(({ theme, $variant, $size, $state }) => ({
  fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
  fontWeight: 600,
  textTransform: 'none',
  transition: theme.transitions.create([
    'background-color',
    'box-shadow',
    'border-color',
    'color',
  ]),
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',

  // Size variants
  ...($size === 'sm' && {
    height: 'auto',
    padding: `${resolvedSemanticTokens.spacing['button-y-sm']}px ${resolvedSemanticTokens.spacing['button-x-sm']}px`,
    gap: `${resolvedSemanticTokens.spacing['button-icon-xxs']}px`,
    borderRadius: '8px',
    fontSize: '14px',
    lineHeight: '20px',
  }),
  ...($size === 'md' && {
    height: '36px',
    padding: `${resolvedSemanticTokens.spacing['button-y-md']}px ${resolvedSemanticTokens.spacing['button-x-md']}px`,
    gap: `${resolvedSemanticTokens.spacing['button-icon-xs']}px`,
    borderRadius: '8px',
    fontSize: '14px',
    lineHeight: '20px',
  }),

  // Primary variant
  ...($variant === 'primary' && {
    backgroundColor: resolvedSemanticTokens.action['bg-action-primary-default'],
    color: resolvedSemanticTokens.content['text-content-on-surface-light'],
    '&:hover': {
      backgroundColor: resolvedSemanticTokens.action['bg-action-primary-hover'],
    },
    '&:focus-visible': {
      outline: 'none',
      boxShadow: `inset 0 0 0 2px ${resolvedSemanticTokens.border['color-action-focus']}`,
    },
    '&.Mui-disabled': {
      backgroundColor: resolvedSemanticTokens.action['bg-action-disabled'],
      color: resolvedSemanticTokens.content['text-content-disabled'],
    },
  }),

  // Secondary variant
  ...($variant === 'secondary' && {
    backgroundColor: resolvedSemanticTokens.action['bg-action-secondary-default'],
    color: resolvedSemanticTokens.content['text-content-action-default'],
    border: `1px solid ${resolvedSemanticTokens.border['border-default']}`,
    '&:hover': {
      backgroundColor: resolvedSemanticTokens.action['bg-action-secondary-hover'],
      color: resolvedSemanticTokens.content['text-content-action-hover'],
    },
    '&:focus-visible': {
      outline: 'none',
      boxShadow: `inset 0 0 0 2px ${resolvedSemanticTokens.border['color-action-focus']}`,
    },
    '&.Mui-disabled': {
      backgroundColor: resolvedSemanticTokens.action['bg-action-disabled'],
      color: resolvedSemanticTokens.content['text-content-disabled'],
      border: 'none',
    },
  }),

  // On-dark variant
  ...($variant === 'on-dark' && {
    backgroundColor: resolvedSemanticTokens.action['bg-action-on-dark-default'],
    color: resolvedSemanticTokens.content['text-content-on-surface-light'],
    '&:hover': {
      backgroundColor: resolvedSemanticTokens.action['bg-action-on-dark-hover'],
    },
    '&:focus-visible': {
      outline: 'none',
      boxShadow: `inset 0 0 0 2px ${resolvedSemanticTokens.border['color-action-focus-on-dark']}`,
    },
    '&.Mui-disabled': {
      backgroundColor: resolvedSemanticTokens.action['bg-action-disabled'],
      color: resolvedSemanticTokens.content['text-content-disabled'],
    },
  }),

  // Ghost variant (transparent, text-based)
  ...($variant === 'ghost' && {
    backgroundColor: 'transparent',
    color: resolvedSemanticTokens.content['text-content-action-default'],
    '&:hover': {
      backgroundColor: resolvedSemanticTokens.action['bg-action-secondary-hover'],
      color: resolvedSemanticTokens.content['text-content-action-hover'],
    },
    '&:focus-visible': {
      outline: 'none',
      boxShadow: `inset 0 0 0 2px ${resolvedSemanticTokens.border['color-action-focus']}`,
    },
    '&.Mui-disabled': {
      backgroundColor: resolvedSemanticTokens.action['bg-action-disabled'],
      color: resolvedSemanticTokens.content['text-content-disabled'],
    },
  }),

  // Critical variant
  ...($variant === 'critical' && {
    backgroundColor: resolvedSemanticTokens.status['bg-critical-default'],
    color: resolvedSemanticTokens.status['text-critical'],
    '&:hover': {
      backgroundColor: resolvedSemanticTokens.status['bg-critical-hover'],
    },
    '&:focus-visible': {
      outline: 'none',
      boxShadow: `inset 0 0 0 2px ${resolvedSemanticTokens.status['bg-critical-hover']}`,
    },
    '&.Mui-disabled': {
      backgroundColor: resolvedSemanticTokens.action['bg-action-disabled'],
      color: resolvedSemanticTokens.content['text-content-disabled'],
    },
  }),

  // State overrides (for Storybook visualization)
  ...getStateStyles($variant, $state),
}));
