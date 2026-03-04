import React from 'react';
import { styled } from '@mui/material/styles';
import { Alert as MuiAlert, AlertProps as MuiAlertProps } from '@mui/material';
import { resolvedSemanticTokens } from '../../tokens/semantic-tokens.js';
import { typography } from '../../tokens/typography.js';
import { AlertVariant } from './Alert.types.js';

interface StyledAlertProps {
  $variant: AlertVariant;
}

// Non-null assertions are safe since these keys are defined in typography.ts
const bodyRegular = typography['body-default-regular']!;
const bodyStrong = typography['body-default-strong']!;

export const StyledAlert: React.ComponentType<MuiAlertProps & StyledAlertProps> = styled(MuiAlert, {
  shouldForwardProp: (prop) => !prop.toString().startsWith('$'),
})<StyledAlertProps>(({ $variant }) => ({
  borderRadius: '8px',
  border: '1px solid',
  padding: '12px 16px',

  // Typography for alert body
  fontFamily: bodyRegular.fontFamily,
  fontSize: bodyRegular.fontSize,
  fontWeight: bodyRegular.fontWeight,
  lineHeight: bodyRegular.lineHeight,
  letterSpacing: bodyRegular.letterSpacing,

  // Typography for alert title
  '& .MuiAlertTitle-root': {
    fontFamily: bodyStrong.fontFamily,
    fontSize: bodyStrong.fontSize,
    fontWeight: bodyStrong.fontWeight,
    lineHeight: bodyStrong.lineHeight,
    letterSpacing: bodyStrong.letterSpacing,
    marginBottom: '4px',
  },

  ...($variant === 'error' && {
    backgroundColor: resolvedSemanticTokens.alert['bg-error'],
    borderColor: resolvedSemanticTokens.alert['border-error'],
    color: resolvedSemanticTokens.alert['text-error'],
    '& .MuiAlert-icon': {
      color: resolvedSemanticTokens.alert['icon-error'],
    },
  }),

  ...($variant === 'warning' && {
    backgroundColor: resolvedSemanticTokens.alert['bg-warning'],
    borderColor: resolvedSemanticTokens.alert['border-warning'],
    color: resolvedSemanticTokens.alert['text-warning'],
    '& .MuiAlert-icon': {
      color: resolvedSemanticTokens.alert['icon-warning'],
    },
  }),

  ...($variant === 'info' && {
    backgroundColor: resolvedSemanticTokens.alert['bg-info'],
    borderColor: resolvedSemanticTokens.alert['border-info'],
    color: resolvedSemanticTokens.alert['text-info'],
    '& .MuiAlert-icon': {
      color: resolvedSemanticTokens.alert['icon-info'],
    },
  }),

  ...($variant === 'success' && {
    backgroundColor: resolvedSemanticTokens.alert['bg-success'],
    borderColor: resolvedSemanticTokens.alert['border-success'],
    color: resolvedSemanticTokens.alert['text-success'],
    '& .MuiAlert-icon': {
      color: resolvedSemanticTokens.alert['icon-success'],
    },
  }),
}));
