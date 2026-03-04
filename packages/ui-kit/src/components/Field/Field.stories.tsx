import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@mui/material';
import { Field } from './Field.js';
import { Input } from '../Input/index.js';
import { Textarea } from '../Textarea/index.js';

/**
 * # Field Component
 *
 * A wrapper component that adds label and hint text to any form control.
 * Handles accessibility automatically by generating unique IDs and wiring up
 * htmlFor, id, and aria-describedby attributes.
 *
 * ## When to use
 * - When you need to add labels and validation messages to form controls
 * - When building custom form layouts
 * - When composing form fields with any input-like component
 *
 * ## When to use TextField/TextAreaField instead
 * - For standard form fields, use the pre-composed TextField or TextAreaField
 * - They provide a simpler API and handle state management
 *
 * ## Features
 * - Auto-generates unique IDs for accessibility
 * - Supports required field indicator (asterisk)
 * - Error state for hint text
 * - Works with any form control that accepts id prop
 *
 * ## Usage
 * ```tsx
 * import { Field, Input, Textarea } from '@willow/ui-kit';
 *
 * // With Input
 * <Field label="Email" hintText="We'll never share it" required>
 *   <Input placeholder="Enter email" />
 * </Field>
 *
 * // With Textarea
 * <Field label="Description" hintText="Max 500 characters">
 *   <Textarea rows={4} />
 * </Field>
 * ```
 */
const meta: Meta<typeof Field> = {
  title: 'Components/Field',
  component: Field,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A wrapper component that adds label and hint text to any form control with automatic accessibility handling.',
      },
    },
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'The label text displayed above the input',
    },
    hintText: {
      control: { type: 'text' },
      description: 'Helper text displayed below the input',
    },
    error: {
      control: { type: 'boolean' },
      description: 'Whether to show error styling on hint text',
    },
    required: {
      control: { type: 'boolean' },
      description: 'Whether the field is marked as required',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const WithInput: Story = {
  args: {
    label: 'Email',
    hintText: "We'll never share your email",
    required: false,
    error: false,
  },
  render: (args) => (
    <Box sx={{ width: 350 }}>
      <Field {...args}>
        <Input placeholder="Enter your email" />
      </Field>
    </Box>
  ),
};

export const WithTextarea: Story = {
  args: {
    label: 'Description',
    hintText: 'Max 500 characters',
    required: false,
    error: false,
  },
  render: (args) => (
    <Box sx={{ width: 350 }}>
      <Field {...args}>
        <Textarea placeholder="Enter description..." rows={4} />
      </Field>
    </Box>
  ),
};

export const Required: Story = {
  args: {
    label: 'Full Name',
    hintText: 'This field is required',
    required: true,
    error: false,
  },
  render: (args) => (
    <Box sx={{ width: 350 }}>
      <Field {...args}>
        <Input placeholder="Enter your name" />
      </Field>
    </Box>
  ),
};

export const WithError: Story = {
  args: {
    label: 'Email',
    hintText: 'Invalid email format',
    required: false,
    error: true,
  },
  render: (args) => (
    <Box sx={{ width: 350 }}>
      <Field {...args}>
        <Input placeholder="user@example.com" state="error" />
      </Field>
    </Box>
  ),
};

export const LabelOnly: Story = {
  args: {
    label: 'Username',
    required: false,
  },
  render: (args) => (
    <Box sx={{ width: 350 }}>
      <Field {...args}>
        <Input placeholder="Enter username" />
      </Field>
    </Box>
  ),
};

export const HintOnly: Story = {
  args: {
    hintText: 'This is a hint without a label',
  },
  render: (args) => (
    <Box sx={{ width: 350 }}>
      <Field {...args}>
        <Input placeholder="Enter value" />
      </Field>
    </Box>
  ),
};

export const CompositionExamples: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, width: 350 }}>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 600 }}>Field + Input</h4>
        <Field label="Email" hintText="Standard text input" required>
          <Input placeholder="Enter email" />
        </Field>
      </div>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 600 }}>Field + Textarea</h4>
        <Field label="Bio" hintText="Tell us about yourself">
          <Textarea placeholder="Enter your bio..." rows={3} />
        </Field>
      </div>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 600 }}>Field + Input (Error)</h4>
        <Field label="Password" hintText="Password must be at least 8 characters" error required>
          <Input type="password" placeholder="Enter password" state="error" />
        </Field>
      </div>
    </Box>
  ),
  parameters: {
    controls: { disable: true },
  },
};
