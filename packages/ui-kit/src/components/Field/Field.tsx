import { useId, cloneElement, isValidElement } from 'react';
import { StyledFieldContainer, StyledLabel, StyledHintText } from './Field.styled.js';
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
export const Field = ({
  label,
  hintText,
  error = false,
  required = false,
  id: providedId,
  children,
}: FieldProps) => {
  const generatedId = useId();
  const id = providedId || generatedId;
  const hintId = hintText ? `${id}-hint` : undefined;

  // Clone the child element and inject id and aria-describedby
  // cloneElement merges the new props with existing props automatically
  const childWithProps = isValidElement(children)
    ? cloneElement(children, {
        id,
        'aria-describedby': hintId,
      } as Record<string, unknown>)
    : children;

  return (
    <StyledFieldContainer>
      {label && (
        <StyledLabel htmlFor={id} className={required ? 'required' : ''}>
          {label}
        </StyledLabel>
      )}
      {childWithProps}
      {hintText && (
        <StyledHintText id={hintId} $isError={error}>
          {hintText}
        </StyledHintText>
      )}
    </StyledFieldContainer>
  );
};

Field.displayName = 'WillowField';
