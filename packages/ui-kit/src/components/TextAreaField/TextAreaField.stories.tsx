import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@mui/material';
import { TextAreaField } from './TextAreaField.js';

/**
 * # TextAreaField Component
 *
 * A ready-to-use form field component that combines Field + Textarea.
 * This is the recommended component for multi-line text input forms.
 *
 * ## When to use
 * - Multi-line text inputs (comments, descriptions, notes)
 * - Form fields with labels and validation messages
 * - Any textarea that requires accessibility labels
 *
 * ## When to use Field + Textarea instead
 * - Custom form layouts with special composition needs
 * - When you need more control over the Field wrapper
 *
 * ## Features
 * - Optional label with required indicator
 * - Hint text for help or error messages
 * - States: default, filled, focused, error, disabled
 * - Auto-generated IDs for accessibility
 * - Configurable rows
 * - Resizable by default (vertical)
 *
 * ## Usage
 * ```tsx
 * import { TextAreaField } from '@willow/ui-kit';
 *
 * <TextAreaField
 *   label="Description"
 *   placeholder="Enter description..."
 *   hintText="Max 500 characters"
 *   rows={4}
 *   required
 * />
 * ```
 */
const meta: Meta<typeof TextAreaField> = {
  title: 'Components/TextAreaField',
  component: TextAreaField,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A ready-to-use form field component combining Field + Textarea. For single-line text, use TextField.',
      },
    },
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'The label text displayed above the textarea',
    },
    hintText: {
      control: { type: 'text' },
      description: 'Helper text displayed below the textarea',
    },
    state: {
      options: ['default', 'error', 'disabled'],
      control: { type: 'radio' },
      description: 'The visual state of the textarea',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'The placeholder text',
    },
    rows: {
      control: { type: 'number' },
      description: 'Number of visible text lines',
    },
    required: {
      control: { type: 'boolean' },
      description: 'Whether the field is marked as required',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the textarea is disabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter description...',
    rows: 4,
    state: 'default',
  },
  decorators: [
    (Story) => (
      <Box sx={{ width: 350 }}>
        <Story />
      </Box>
    ),
  ],
};

export const WithHintText: Story = {
  args: {
    label: 'Bio',
    placeholder: 'Tell us about yourself...',
    hintText: 'Max 500 characters',
    rows: 4,
    state: 'default',
  },
  decorators: [
    (Story) => (
      <Box sx={{ width: 350 }}>
        <Story />
      </Box>
    ),
  ],
};

export const Required: Story = {
  args: {
    label: 'Feedback',
    placeholder: 'Enter your feedback...',
    required: true,
    hintText: 'This field is required',
    rows: 4,
    state: 'default',
  },
  decorators: [
    (Story) => (
      <Box sx={{ width: 350 }}>
        <Story />
      </Box>
    ),
  ],
};

export const Error: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter description...',
    hintText: 'Description is required',
    rows: 4,
    state: 'error',
  },
  decorators: [
    (Story) => (
      <Box sx={{ width: 350 }}>
        <Story />
      </Box>
    ),
  ],
};

export const Disabled: Story = {
  args: {
    label: 'Notes',
    placeholder: 'No notes available',
    hintText: 'This field cannot be edited',
    rows: 4,
    state: 'disabled',
    disabled: true,
  },
  decorators: [
    (Story) => (
      <Box sx={{ width: 350 }}>
        <Story />
      </Box>
    ),
  ],
};

export const WithDefaultValue: Story = {
  args: {
    label: 'Summary',
    defaultValue: 'This is an existing summary that can be edited.\n\nIt spans multiple lines.',
    hintText: 'Edit as needed',
    rows: 5,
    state: 'default',
  },
  decorators: [
    (Story) => (
      <Box sx={{ width: 350 }}>
        <Story />
      </Box>
    ),
  ],
};

export const AllStates: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, width: 350 }}>
      <TextAreaField
        label="Default"
        placeholder="Enter text..."
        hintText="Default state"
        rows={3}
        state="default"
      />
      <TextAreaField
        label="Required"
        placeholder="Enter text..."
        hintText="This field is required"
        required
        rows={3}
        state="default"
      />
      <TextAreaField
        label="Error"
        placeholder="Enter text..."
        hintText="Invalid input"
        rows={3}
        state="error"
      />
      <TextAreaField
        label="Disabled"
        placeholder="Enter text..."
        hintText="Cannot be edited"
        rows={3}
        state="disabled"
        disabled
      />
    </Box>
  ),
  parameters: {
    controls: { disable: true },
  },
};
