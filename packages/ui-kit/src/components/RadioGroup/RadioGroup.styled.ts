import React from 'react';
import { styled } from '@mui/material/styles';
import { Radio, Box, RadioProps } from '@mui/material';
import { resolvedSemanticTokens } from '../../tokens/semantic-tokens.js';
import { neutral, Slate } from '../../tokens/primitives.js';

interface StyledRadioProps {
  $error?: boolean;
}

export const StyledRadio: React.ComponentType<RadioProps & StyledRadioProps> = styled(Radio, {
  shouldForwardProp: (prop) => !prop.toString().startsWith('$'),
})<StyledRadioProps>(({ $error }) => ({
  color: $error
    ? resolvedSemanticTokens.form['border-control-error']
    : resolvedSemanticTokens.form['border-control-default'],

  '&.Mui-checked': {
    color: $error
      ? resolvedSemanticTokens.form['border-control-error']
      : resolvedSemanticTokens.form['border-control-checked'],
  },

  '&.Mui-disabled': {
    color: resolvedSemanticTokens.form['border-control-disabled'],
  },
}));

interface StyledRadioCardProps {
  $selected?: boolean;
  $disabled?: boolean;
}

export const StyledRadioCard: React.ComponentType<StyledRadioCardProps & React.ComponentProps<typeof Box>> = styled(Box, {
  shouldForwardProp: (prop) => !prop.toString().startsWith('$'),
})<StyledRadioCardProps>(({ $selected, $disabled }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '8px',
  padding: '16px',
  borderRadius: '12px',
  border: `2px solid ${$selected ? Slate[700] : neutral[300]}`,
  backgroundColor: $selected ? Slate[25] : neutral[25],
  cursor: $disabled ? 'not-allowed' : 'pointer',
  opacity: $disabled ? 0.5 : 1,
  transition: 'all 0.2s ease',

  '&:hover': {
    ...(!$disabled &&
      !$selected && {
        borderColor: neutral[400],
        backgroundColor: neutral[50],
      }),
  },
}));
