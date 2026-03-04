import React from 'react';
import { styled } from '@mui/material/styles';
import { Select as MuiSelect, SelectProps as MuiSelectProps } from '@mui/material';
import { neutral, red } from '../../tokens/primitives.js';
import { spacingScale } from '../../tokens/primitive-tokens.js';
import { SelectVariant, SelectSize } from './Select.types.js';

interface StyledSelectProps {
  $variant: SelectVariant;
  $size: SelectSize;
}

export const StyledSelectContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: `${spacingScale[4]}px`,
})) as any;

export const StyledSelectLabel = styled('label')(() => ({
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: '20px',
  fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
  color: neutral[900],

  '&.required::after': {
    content: '"*"',
    color: red[600],
    marginLeft: `${spacingScale[4]}px`,
  },
})) as any;

export const StyledHelperText = styled('span', {
  shouldForwardProp: (prop) => prop !== '$isError',
})<{ $isError?: boolean }>(({ $isError }) => ({
  fontSize: '12px',
  lineHeight: '16px',
  fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
  color: $isError ? red[600] : neutral[600],
})) as any;

export const StyledSelect: React.ComponentType<MuiSelectProps & StyledSelectProps> = styled(MuiSelect, {
  shouldForwardProp: (prop) => !prop.toString().startsWith('$'),
})<StyledSelectProps>(({ $variant, $size }) => ({
  fontFamily: "'Inter', sans-serif",
  borderRadius: '8px',

  // Size-specific styles
  ...($size === 'sm' && {
    height: '36px',
    '& .MuiSelect-select': {
      padding: '8px 12px',
      fontSize: '13px',
      lineHeight: '20px',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderRadius: '8px',
    },
  }),
  ...($size === 'md' && {
    height: '36px',
    '& .MuiSelect-select': {
      padding: '8px 12px',
      fontSize: '14px',
      lineHeight: '20px',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderRadius: '8px',
    },
  }),

  // Variant-specific styles
  ...($variant === 'outlined' && {
    backgroundColor: neutral[25],
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: neutral[300],
      borderWidth: '1px',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: neutral[400],
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: neutral[700],
      borderWidth: '1px',
    },
    '&.Mui-error .MuiOutlinedInput-notchedOutline': {
      borderColor: '#D92D20',
    },
  }),
  ...($variant === 'filled' && {
    backgroundColor: neutral[100],
    border: 'none',
    '& .MuiOutlinedInput-notchedOutline': {
      display: 'none',
    },
    '&::before, &::after': {
      display: 'none',
    },
    '&:hover': {
      backgroundColor: neutral[200],
    },
    '&.Mui-focused': {
      backgroundColor: neutral[200],
    },
  }),
  ...($variant === 'standard' && {
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: 0,
    '& .MuiOutlinedInput-notchedOutline': {
      display: 'none',
    },
    '& .MuiSelect-select': {
      padding: 0,
      '&:focus': {
        backgroundColor: 'transparent',
      },
    },
    '&::before, &::after': {
      display: 'none',
    },
    '&:hover': {
      backgroundColor: 'transparent',
    },
  }),

  // Icon positioning
  '& .MuiSelect-icon': {
    right: $size === 'sm' ? '8px' : '12px',
    color: neutral[500],
  },
}));
