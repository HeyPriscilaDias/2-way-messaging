import React from 'react';
import { RadioGroupProps as MuiRadioGroupProps } from '@mui/material';

export type RadioGroupVariant = 'default' | 'card';

export interface RadioOption {
  value: string;
  label: React.ReactNode;
  description?: string; // Only shown in card variant
  disabled?: boolean;
}

export interface RadioGroupProps extends Omit<MuiRadioGroupProps, 'children'> {
  variant?: RadioGroupVariant;
  options: RadioOption[];
  label?: string;
  error?: boolean;
  helperText?: string;
  row?: boolean; // Only for default variant
}
