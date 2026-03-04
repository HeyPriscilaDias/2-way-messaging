import { TextareaProps } from '../Textarea/index.js';
export interface TextAreaFieldProps extends Omit<TextareaProps, 'state'> {
    /** Label text displayed above the textarea */
    label?: string;
    /** Helper or error text displayed below the textarea */
    hintText?: string;
    /** Visual state of the textarea */
    state?: TextareaProps['state'];
    /** Whether the field is required (shows asterisk on label) */
    required?: boolean;
}
//# sourceMappingURL=TextAreaField.types.d.ts.map