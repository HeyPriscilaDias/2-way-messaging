import { forwardRef } from 'react';
import { Field } from '../Field/index.js';
import { Textarea } from '../Textarea/index.js';
import { TextAreaFieldProps } from './TextAreaField.types.js';

/**
 * TextAreaField is a ready-to-use form field that combines Field + Textarea.
 * Use this for multi-line text input forms.
 *
 * @example
 * ```tsx
 * <TextAreaField
 *   label="Description"
 *   placeholder="Enter description..."
 *   hintText="Max 500 characters"
 *   rows={4}
 *   required
 * />
 * ```
 */
export const TextAreaField = forwardRef<HTMLTextAreaElement, TextAreaFieldProps>(
  (
    {
      label,
      hintText,
      state = 'default',
      required = false,
      id,
      disabled,
      ...textareaProps
    },
    ref
  ) => {
    const isError = state === 'error';

    return (
      <Field
        label={label}
        hintText={hintText}
        error={isError}
        required={required}
        id={id}
      >
        <Textarea
          ref={ref}
          state={state}
          disabled={disabled}
          {...textareaProps}
        />
      </Field>
    );
  }
);

TextAreaField.displayName = 'WillowTextAreaField';
