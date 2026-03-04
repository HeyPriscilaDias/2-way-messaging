import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@mui/material';
import { Textarea } from './Textarea.js';

/**
 * # Textarea Component
 *
 * A primitive textarea component for multi-line text input.
 * This is the base component - for forms with labels and validation, use TextAreaField.
 *
 * ## When to use
 * - Multi-line text input (comments, descriptions, notes)
 * - When you need direct control over the textarea element
 * - Inside custom form layouts
 *
 * ## When to use TextAreaField instead
 * - Forms that need labels
 * - Fields that need validation/error messages
 * - Standard form layouts with accessibility support
 *
 * ## Features
 * - Matches Input styling (borders, focus states, colors)
 * - States: default, filled, focused, error, disabled
 * - Resizable by default (vertical)
 * - Configurable rows
 *
 * ## Usage
 * ```tsx
 * import { Textarea } from '@willow/ui-kit';
 *
 * <Textarea
 *   placeholder="Enter your message..."
 *   rows={4}
 * />
 * ```
 */
const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A primitive textarea component for multi-line text input. For forms with labels and validation, use TextAreaField instead.',
      },
    },
  },
  argTypes: {
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
    placeholder: 'Enter your message...',
    rows: 3,
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

export const WithValue: Story = {
  args: {
    defaultValue: 'This is some existing text content that spans multiple lines.\n\nIt demonstrates how the textarea handles pre-filled content.',
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
    placeholder: 'Enter description...',
    rows: 3,
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
    placeholder: 'This field is disabled',
    rows: 3,
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

export const MoreRows: Story = {
  args: {
    placeholder: 'Enter a longer description...',
    rows: 6,
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
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 600 }}>Default</h4>
        <Textarea placeholder="Default state..." rows={2} state="default" />
      </div>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 600 }}>Error</h4>
        <Textarea placeholder="Error state..." rows={2} state="error" />
      </div>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 600 }}>Disabled</h4>
        <Textarea placeholder="Disabled state..." rows={2} state="disabled" disabled />
      </div>
    </Box>
  ),
  parameters: {
    controls: { disable: true },
  },
};
