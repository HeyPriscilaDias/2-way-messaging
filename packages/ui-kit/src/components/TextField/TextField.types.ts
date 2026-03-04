import { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';

// TextField preserves all MUI TextField props and functionality
// Using type alias instead of empty interface to avoid lint warning
export type TextFieldProps = MuiTextFieldProps;

export type WillowTextFieldVariant = 'outlined' | 'filled' | 'standard';
