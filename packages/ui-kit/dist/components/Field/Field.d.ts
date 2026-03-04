import { FieldProps } from './Field.types.js';
/**
 * Field is a wrapper component that provides label and hint text for form controls.
 * It automatically handles accessibility by generating unique IDs and wiring up
 * htmlFor, id, and aria-describedby attributes.
 *
 * @example
 * ```tsx
 * <Field label="Email" hintText="We'll never share your email" required>
 *   <Input placeholder="Enter email" />
 * </Field>
 * ```
 */
export declare const Field: {
    ({ label, hintText, error, required, id: providedId, children, }: FieldProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=Field.d.ts.map