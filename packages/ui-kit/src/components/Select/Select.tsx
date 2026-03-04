import { forwardRef, ReactNode } from 'react';
import { FormControl, MenuItem } from '@mui/material';
import { StyledSelect, StyledSelectContainer, StyledSelectLabel, StyledHelperText } from './Select.styled.js';
import { SelectProps } from './Select.types.js';

export const Select = forwardRef<HTMLDivElement, SelectProps>(
  ({
    variant = 'outlined',
    size = 'md',
    options,
    label,
    placeholder,
    helperText,
    error,
    fullWidth,
    value,
    renderValue,
    required,
    id,
    ...props
  }, ref) => {
    const selectId = id || (label ? `select-${Math.random().toString(36).substr(2, 9)}` : undefined);

    const defaultRenderValue = (selected: unknown): ReactNode => {
      if (!selected || selected === '') {
        return <span style={{ color: '#717680' }}>{placeholder}</span>;
      }
      const option = options.find(o => o.value === selected);
      return <span>{option?.label ?? String(selected)}</span>;
    };

    return (
      <StyledSelectContainer ref={ref} style={{ width: fullWidth ? '100%' : undefined }}>
        {label && (
          <StyledSelectLabel htmlFor={selectId} className={required ? 'required' : ''}>
            {label}
          </StyledSelectLabel>
        )}
        <FormControl error={error} fullWidth={fullWidth}>
          <StyledSelect
            $variant={variant}
            $size={size}
            id={selectId}
            value={value ?? ''}
            displayEmpty={!!placeholder}
            renderValue={renderValue || defaultRenderValue}
            {...props}
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value} disabled={option.disabled}>
                {option.label}
              </MenuItem>
            ))}
          </StyledSelect>
        </FormControl>
        {helperText && <StyledHelperText $isError={error}>{helperText}</StyledHelperText>}
      </StyledSelectContainer>
    );
  }
);

Select.displayName = 'WillowSelect';
