import React from 'react';
import { styled } from '@mui/material/styles';
import { Checkbox as MuiCheckbox, CheckboxProps as MuiCheckboxProps } from '@mui/material';
import { resolvedSemanticTokens } from '../../tokens/semantic-tokens.js';
import { CheckboxSize } from './Checkbox.types.js';

interface StyledCheckboxProps {
  $size: CheckboxSize;
  $error?: boolean;
}

export const StyledCheckbox: React.ComponentType<MuiCheckboxProps & StyledCheckboxProps> = styled(MuiCheckbox, {
  shouldForwardProp: (prop) => !prop.toString().startsWith('$'),
})<StyledCheckboxProps>(({ $size, $error }) => ({
  padding: $size === 'sm' ? '4px' : '8px',

  '& .MuiSvgIcon-root': {
    fontSize: $size === 'sm' ? '16px' : '20px',
  },

  color: $error
    ? resolvedSemanticTokens.form['border-control-error']
    : resolvedSemanticTokens.form['border-control-default'],

  '&.Mui-checked': {
    color: $error
      ? resolvedSemanticTokens.form['border-control-error']
      : resolvedSemanticTokens.form['border-control-checked'],
  },

  '&.MuiCheckbox-indeterminate': {
    color: resolvedSemanticTokens.form['border-control-checked'],
  },

  '&.Mui-disabled': {
    color: resolvedSemanticTokens.form['border-control-disabled'],
  },
}));
