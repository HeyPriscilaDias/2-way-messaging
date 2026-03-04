import { ReactElement } from 'react';
export interface FieldProps {
    /** Label text displayed above the input */
    label?: string;
    /** Helper or error text displayed below the input */
    hintText?: string;
    /** Whether the field shows an error state (affects hint text color) */
    error?: boolean;
    /** Whether the field is required (shows asterisk on label) */
    required?: boolean;
    /** Optional ID - if not provided, one will be auto-generated */
    id?: string;
    /** The form control element (Input, Textarea, etc.) */
    children: ReactElement;
}
//# sourceMappingURL=Field.types.d.ts.map