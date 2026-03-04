import { forwardRef } from 'react';
import { FormControlLabel, FormHelperText, Box } from '@mui/material';
import { StyledCheckbox } from './Checkbox.styled.js';
import { CheckboxProps } from './Checkbox.types.js';

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ size = 'md', label, helperText, error, ...props }, ref) => {
    const checkbox = (
      <StyledCheckbox
        ref={ref}
        $size={size}
        $error={error}
        {...props}
      />
    );

    if (!label) return checkbox;

    return (
      <Box>
        <FormControlLabel
          control={checkbox}
          label={label}
          sx={{
            '& .MuiFormControlLabel-label': {
              fontSize: size === 'sm' ? '12px' : '14px',
              fontFamily: "'Inter', sans-serif",
            },
          }}
        />
        {helperText && (
          <FormHelperText error={error} sx={{ ml: '32px', mt: '-4px' }}>
            {helperText}
          </FormHelperText>
        )}
      </Box>
    );
  }
);

Checkbox.displayName = 'WillowCheckbox';
