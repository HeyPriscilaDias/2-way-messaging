import { forwardRef, ReactNode } from 'react';
import { FormControl, MenuItem, Checkbox, ListItemText } from '@mui/material';
import {
  StyledMultiSelect,
  StyledMultiSelectContainer,
  StyledMultiSelectLabel,
  StyledHelperText,
  StyledChip,
  StyledChipsContainer,
  StyledPlaceholder,
} from './MultiSelect.styled.js';
import { MultiSelectProps } from './MultiSelect.types.js';

/**
 * MultiSelect component for selecting multiple options from a dropdown.
 *
 * ## When to use
 * - Use when users need to select multiple items from a predefined list
 * - Common use cases: filtering by multiple statuses, selecting multiple tags, choosing multiple categories
 *
 * ## When NOT to use
 * - For single selection, use the regular `Select` component
 * - For a small number of always-visible options (2-4), consider `Checkbox` group instead
 *
 * ## Examples
 *
 * Basic usage:
 * ```tsx
 * <MultiSelect
 *   label="Status"
 *   value={selectedStatuses}
 *   onChange={setSelectedStatuses}
 *   options={[
 *     { value: 'active', label: 'Active' },
 *     { value: 'pending', label: 'Pending' },
 *     { value: 'inactive', label: 'Inactive' },
 *   ]}
 * />
 * ```
 *
 * With placeholder and helper text:
 * ```tsx
 * <MultiSelect
 *   label="Categories"
 *   placeholder="Select categories"
 *   helperText="Choose one or more categories"
 *   value={selectedCategories}
 *   onChange={setSelectedCategories}
 *   options={categoryOptions}
 * />
 * ```
 */
export const MultiSelect = forwardRef<HTMLDivElement, MultiSelectProps>(
  (
    {
      variant = 'outlined',
      size = 'md',
      options,
      label,
      placeholder,
      helperText,
      error,
      fullWidth,
      disabled,
      required,
      value,
      onChange,
      renderValue,
      id,
    },
    ref
  ) => {
    const selectId = id || (label ? `multiselect-${Math.random().toString(36).substr(2, 9)}` : undefined);

    const handleChange = (event: any) => {
      const newValue = event.target.value as string[];
      onChange(newValue);
    };

    const handleDelete = (valueToDelete: string) => (event: React.MouseEvent<HTMLElement>) => {
      event.stopPropagation();
      onChange(value.filter((v) => v !== valueToDelete));
    };

    const defaultRenderValue = (selected: string[]): ReactNode => {
      if (!selected || selected.length === 0) {
        return <StyledPlaceholder>{placeholder}</StyledPlaceholder>;
      }

      return (
        <StyledChipsContainer>
          {selected.map((selectedValue) => {
            const option = options.find((o) => o.value === selectedValue);
            return (
              <StyledChip
                key={selectedValue}
                label={option?.label ?? selectedValue}
                onDelete={disabled ? undefined : handleDelete(selectedValue)}
                onMouseDown={(e: React.MouseEvent<HTMLElement>) => e.stopPropagation()}
              />
            );
          })}
        </StyledChipsContainer>
      );
    };

    const renderValueFn = renderValue
      ? (selected: unknown) => renderValue(selected as string[], options)
      : (selected: unknown) => defaultRenderValue(selected as string[]);

    return (
      <StyledMultiSelectContainer ref={ref} style={{ width: fullWidth ? '100%' : undefined }}>
        {label && (
          <StyledMultiSelectLabel htmlFor={selectId} className={required ? 'required' : ''}>
            {label}
          </StyledMultiSelectLabel>
        )}
        <FormControl error={error} fullWidth={fullWidth} disabled={disabled}>
          <StyledMultiSelect
            $variant={variant}
            $size={size}
            id={selectId}
            multiple
            value={value}
            onChange={handleChange}
            displayEmpty={!!placeholder}
            renderValue={renderValueFn}
            disabled={disabled}
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value} disabled={option.disabled}>
                <Checkbox checked={value.includes(option.value)} />
                <ListItemText primary={option.label} />
              </MenuItem>
            ))}
          </StyledMultiSelect>
        </FormControl>
        {helperText && <StyledHelperText $isError={error}>{helperText}</StyledHelperText>}
      </StyledMultiSelectContainer>
    );
  }
);

MultiSelect.displayName = 'WillowMultiSelect';
