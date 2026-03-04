import { forwardRef } from 'react';
import {
  RadioGroup as MuiRadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormHelperText,
  Box,
} from '@mui/material';
import { StyledRadio, StyledRadioCard } from './RadioGroup.styled.js';
import { RadioGroupProps } from './RadioGroup.types.js';

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      variant = 'default',
      options,
      label,
      error,
      helperText,
      row,
      value,
      onChange,
      ...props
    },
    ref
  ) => {
    const renderDefaultOptions = () =>
      options.map((option) => (
        <FormControlLabel
          key={option.value}
          value={option.value}
          control={<StyledRadio $error={error} />}
          label={option.label}
          disabled={option.disabled}
        />
      ));

    const renderCardOptions = () => (
      <Box sx={{ display: 'flex', flexDirection: row ? 'row' : 'column', gap: 2 }}>
        {options.map((option) => (
          <StyledRadioCard
            key={option.value}
            $selected={value === option.value}
            $disabled={option.disabled}
            onClick={() => !option.disabled && onChange?.(null as unknown as React.ChangeEvent<HTMLInputElement>, option.value)}
          >
            <StyledRadio
              checked={value === option.value}
              disabled={option.disabled}
              $error={error}
            />
            <Box>
              <Box sx={{ fontWeight: 600, fontSize: '14px' }}>{option.label}</Box>
              {option.description && (
                <Box sx={{ fontSize: '12px', color: 'text.secondary', mt: 0.5 }}>
                  {option.description}
                </Box>
              )}
            </Box>
          </StyledRadioCard>
        ))}
      </Box>
    );

    return (
      <FormControl error={error} ref={ref}>
        {label && <FormLabel sx={{ mb: 1 }}>{label}</FormLabel>}
        <MuiRadioGroup
          value={value}
          onChange={onChange}
          row={variant === 'default' && row}
          {...props}
        >
          {variant === 'default' ? renderDefaultOptions() : renderCardOptions()}
        </MuiRadioGroup>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    );
  }
);

RadioGroup.displayName = 'WillowRadioGroup';
