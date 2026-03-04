/**
 * LLM USAGE GUIDE - TextField
 *
 * WHEN TO USE THIS COMPONENT:
 * - Use TextField for ALL text input fields in forms
 * - NEVER use MUI TextField directly - always use this component
 * - For dropdowns, use Select (when available in ui-kit)
 *
 * VARIANT SELECTION:
 * - outlined (default): Standard form inputs, most common
 * - filled: Search fields, filters, compact inputs
 * - standard: Rarely used - underline-only style
 *
 * SIZE SELECTION:
 * - medium (default): Standard form fields
 * - small: Compact forms, inline editing, table cells
 *
 * COMMON PROPS:
 * - label: Field label (always provide for form fields)
 * - placeholder: Hint text when empty
 * - helperText: Guidance text below the field
 * - error: Boolean - triggers error styling
 * - required: Boolean - shows required indicator
 * - disabled: Boolean - prevents interaction
 * - multiline + rows: For textarea behavior
 * - type: "text" | "password" | "email" | "number" etc.
 *
 * COMMON PATTERNS:
 * ```tsx
 * // Standard form field
 * <TextField
 *   label="Email Address"
 *   placeholder="user@example.com"
 *   type="email"
 *   required
 * />
 *
 * // With validation error
 * <TextField
 *   label="Password"
 *   type="password"
 *   error
 *   helperText="Password must be at least 8 characters"
 * />
 *
 * // Search field
 * <TextField
 *   variant="filled"
 *   placeholder="Search..."
 *   InputProps={{
 *     startAdornment: <SearchIcon />
 *   }}
 * />
 *
 * // Multiline/textarea
 * <TextField
 *   label="Description"
 *   multiline
 *   rows={4}
 *   placeholder="Enter a description..."
 * />
 * ```
 *
 * FORM VALIDATION:
 * - Use error={true} + helperText for inline validation messages
 * - Always show error state AND message together
 * - Clear error state when user starts correcting
 *
 * ACCESSIBILITY:
 * - Always provide a label prop for form fields
 * - Use helperText for additional context
 * - Ensure error messages are descriptive
 *
 * WHEN UPDATING THIS FILE:
 * - Add new stories for new use cases discovered in the frontend
 * - Keep comments updated when variants change
 * - Add examples that would help an LLM understand context
 */
import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@mui/material';
import { TextField } from './TextField.js';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      options: ['outlined', 'filled', 'standard'],
      control: { type: 'radio' },
      description: 'The visual style variant of the text field',
    },
    size: {
      options: ['small', 'medium'],
      control: { type: 'radio' },
      description: 'The size of the text field',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the text field is disabled',
    },
    required: {
      control: { type: 'boolean' },
      description: 'Whether the text field is required',
    },
    error: {
      control: { type: 'boolean' },
      description: 'Whether the text field has an error state',
    },
    multiline: {
      control: { type: 'boolean' },
      description: 'Whether the text field is multiline',
    },
    label: {
      control: { type: 'text' },
      description: 'The label for the text field',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'The placeholder text',
    },
    helperText: {
      control: { type: 'text' },
      description: 'Helper text to display below the text field',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic variants
export const Default: Story = {
  args: {
    label: 'Default TextField',
    placeholder: 'Enter text here',
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    label: 'Filled TextField',
    placeholder: 'Enter text here',
  },
};

export const Standard: Story = {
  args: {
    variant: 'standard',
    label: 'Standard TextField',
    placeholder: 'Enter text here',
  },
};

// Sizes
export const Small: Story = {
  args: {
    size: 'small',
    label: 'Small TextField',
    placeholder: 'Small size',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    label: 'Medium TextField',
    placeholder: 'Medium size',
  },
};

// States
export const WithHelperText: Story = {
  args: {
    label: 'With Helper Text',
    placeholder: 'Enter text',
    helperText: 'This is helper text to guide the user',
  },
};

export const Required: Story = {
  args: {
    required: true,
    label: 'Required Field',
    placeholder: 'This field is required',
  },
};

export const Error: Story = {
  args: {
    error: true,
    label: 'Error State',
    placeholder: 'Invalid input',
    helperText: 'This field has an error',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Disabled Field',
    placeholder: 'Cannot be edited',
    helperText: 'This field is disabled',
  },
};

export const Multiline: Story = {
  args: {
    multiline: true,
    rows: 4,
    label: 'Multiline TextField',
    placeholder: 'Enter multiple lines of text here...',
    helperText: 'This field supports multiple lines',
  },
};

// Input types
export const Password: Story = {
  args: {
    type: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
  },
};

export const Email: Story = {
  args: {
    type: 'email',
    label: 'Email Address',
    placeholder: 'user@example.com',
  },
};

export const Number: Story = {
  args: {
    type: 'number',
    label: 'Number Input',
    placeholder: '123',
  },
};

// Interactive demo
export const AllVariants: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '300px' }}>
      <TextField variant="outlined" label="Outlined" placeholder="Outlined variant" />
      <TextField variant="filled" label="Filled" placeholder="Filled variant" />
      <TextField variant="standard" label="Standard" placeholder="Standard variant" />
    </Box>
  ),
  parameters: {
    controls: { disable: true },
  },
};

export const AllStates: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '300px' }}>
      <TextField label="Default" placeholder="Default state" />
      <TextField required label="Required" placeholder="Required field" />
      <TextField error label="Error" placeholder="Error state" helperText="This field has an error" />
      <TextField disabled label="Disabled" placeholder="Disabled field" />
      <TextField
        multiline
        rows={3}
        label="Multiline"
        placeholder="Multiline text area"
      />
    </Box>
  ),
  parameters: {
    controls: { disable: true },
  },
};