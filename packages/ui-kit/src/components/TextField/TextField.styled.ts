import React from 'react';
import { styled } from '@mui/material/styles';
import { TextField as MuiTextField, TextFieldProps } from '@mui/material';

export const StyledTextField: React.ComponentType<TextFieldProps> = styled(MuiTextField)<TextFieldProps>(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: (theme.shape.borderRadius as number) * 2, // 8px (theme.shape.borderRadius is typically 4)
    backgroundColor: theme.palette.background.paper,
    '& .MuiOutlinedInput-input': {
      padding: '12px 14px', // Slightly more padding to match production
    },
    '& .MuiSelect-select': {
      padding: '12px 14px',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.divider,
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary.main,
      borderWidth: '2px', // Emphasis on focus state like in production
    },
  },
  // Label styling to match production
  '& .MuiInputLabel-root': {
    color: theme.palette.text.secondary,
  },
}));
