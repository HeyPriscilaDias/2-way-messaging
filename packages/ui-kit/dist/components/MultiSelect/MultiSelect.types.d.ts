import { ReactNode } from 'react';
export type MultiSelectVariant = 'outlined' | 'filled';
export type MultiSelectSize = 'sm' | 'md';
export interface MultiSelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}
export interface MultiSelectProps {
    /**
     * The options to display in the dropdown
     */
    options: MultiSelectOption[];
    /**
     * The currently selected values
     */
    value: string[];
    /**
     * Callback fired when the selection changes
     */
    onChange: (values: string[]) => void;
    /**
     * Label displayed above the select
     */
    label?: string;
    /**
     * Placeholder text when no items are selected
     */
    placeholder?: string;
    /**
     * Helper text displayed below the select
     */
    helperText?: string;
    /**
     * Whether the select is in an error state
     */
    error?: boolean;
    /**
     * Whether the select should take full width of its container
     */
    fullWidth?: boolean;
    /**
     * Whether the select is disabled
     */
    disabled?: boolean;
    /**
     * Whether the field is required
     */
    required?: boolean;
    /**
     * The visual variant of the select
     * @default 'outlined'
     */
    variant?: MultiSelectVariant;
    /**
     * The size of the select
     * @default 'md'
     */
    size?: MultiSelectSize;
    /**
     * Custom render function for displaying selected values
     */
    renderValue?: (selected: string[], options: MultiSelectOption[]) => ReactNode;
    /**
     * ID for the select element
     */
    id?: string;
}
//# sourceMappingURL=MultiSelect.types.d.ts.map