import React from 'react';
import { RadioGroupProps as MuiRadioGroupProps } from '@mui/material';
export type RadioGroupVariant = 'default' | 'card';
export interface RadioOption {
    value: string;
    label: React.ReactNode;
    description?: string;
    disabled?: boolean;
}
export interface RadioGroupProps extends Omit<MuiRadioGroupProps, 'children'> {
    variant?: RadioGroupVariant;
    options: RadioOption[];
    label?: string;
    error?: boolean;
    helperText?: string;
    row?: boolean;
}
//# sourceMappingURL=RadioGroup.types.d.ts.map