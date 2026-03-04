import { CheckboxProps as MuiCheckboxProps } from '@mui/material';
export type CheckboxSize = 'sm' | 'md';
export interface CheckboxProps extends Omit<MuiCheckboxProps, 'size'> {
    size?: CheckboxSize;
    label?: string;
    helperText?: string;
    error?: boolean;
}
//# sourceMappingURL=Checkbox.types.d.ts.map