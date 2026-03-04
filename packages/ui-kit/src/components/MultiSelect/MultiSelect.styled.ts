import React from 'react';
import { styled } from '@mui/material/styles';
import { Select as MuiSelect, SelectProps as MuiSelectProps, Chip as MuiChip } from '@mui/material';
import { neutral, red, Slate } from '../../tokens/primitives.js';
import { spacingScale } from '../../tokens/primitive-tokens.js';
import { MultiSelectVariant, MultiSelectSize } from './MultiSelect.types.js';

interface StyledMultiSelectProps {
  $variant: MultiSelectVariant;
  $size: MultiSelectSize;
}

export const StyledMultiSelectContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: `${spacingScale[4]}px`,
})) as any;

export const StyledMultiSelectLabel = styled('label')(() => ({
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

export const StyledMultiSelect: React.ComponentType<MuiSelectProps & StyledMultiSelectProps> = styled(MuiSelect, {
  shouldForwardProp: (prop) => !prop.toString().startsWith('$'),
})<StyledMultiSelectProps>(({ $variant, $size }) => ({
  fontFamily: "'Inter', sans-serif",
  borderRadius: '8px',

  // Size-specific styles
  ...($size === 'sm' && {
    minHeight: '36px',
    '& .MuiSelect-select': {
      padding: '6px 12px',
      fontSize: '13px',
      lineHeight: '20px',
      minHeight: 'unset !important',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderRadius: '8px',
    },
  }),
  ...($size === 'md' && {
    minHeight: '40px',
    '& .MuiSelect-select': {
      padding: '8px 12px',
      fontSize: '14px',
      lineHeight: '20px',
      minHeight: 'unset !important',
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
      borderColor: Slate[700],
      borderWidth: '1px',
    },
    '&.Mui-error .MuiOutlinedInput-notchedOutline': {
      borderColor: red[600],
    },
    '&.Mui-disabled': {
      backgroundColor: neutral[100],
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: neutral[200],
      },
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
    '&.Mui-disabled': {
      backgroundColor: neutral[50],
    },
  }),

  // Icon positioning
  '& .MuiSelect-icon': {
    right: $size === 'sm' ? '8px' : '12px',
    color: neutral[500],
  },
}));

export const StyledChip: any = styled(MuiChip)(() => ({
  height: '24px',
  fontSize: '12px',
  fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
  backgroundColor: Slate[100],
  color: Slate[700],
  borderRadius: '6px',
  '& .MuiChip-label': {
    padding: '0 8px',
  },
  '& .MuiChip-deleteIcon': {
    fontSize: '16px',
    color: Slate[500],
    '&:hover': {
      color: Slate[700],
    },
  },
}));

export const StyledChipsContainer: any = styled('div')(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '4px',
}));

export const StyledPlaceholder: any = styled('span')(() => ({
  color: neutral[500],
}));
