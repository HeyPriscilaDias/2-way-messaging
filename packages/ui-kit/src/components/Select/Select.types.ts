import { SelectProps as MuiSelectProps, SelectChangeEvent } from '@mui/material/Select';
import { ReactNode } from 'react';

export type SelectVariant = 'outlined' | 'filled' | 'standard';
export type SelectSize = 'sm' | 'md';

export interface SelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

// Create a more permissive onChange type that accepts handlers typed with SelectChangeEvent<T>
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SelectOnChange = ((event: SelectChangeEvent<any>, child: ReactNode) => void) | undefined;

export interface SelectProps extends Omit<MuiSelectProps, 'variant' | 'size' | 'onChange'> {
  variant?: SelectVariant;
  size?: SelectSize;
  options: SelectOption[];
  label?: string;
  placeholder?: string;
  helperText?: string;
  error?: boolean;
  fullWidth?: boolean;
  onChange?: SelectOnChange;
}
