import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@mui/material';
import { Search, User, Mail } from '@willow/icons';
import { Input } from './Input.js';

/**
 * # Input Component
 *
 * A styled native input element that serves as the base for form inputs.
 * This is a low-level component - for most form use cases, prefer `TextInput`
 * which includes label and hint text support.
 *
 * ## When to use Input vs TextInput
 * - **Input**: When you need just the input field without label/hint (e.g., inline editing, search bars)
 * - **TextInput**: When building forms with labels and validation messages
 *
 * ## Features
 * - Native `<input>` element (not MUI)
 * - Support for leading and trailing icons
 * - States: default, filled, focused, error, disabled
 * - Uses design tokens for consistent styling
 */
const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    state: {
      options: ['default', 'filled', 'focused', 'error', 'disabled'],
      control: { type: 'radio' },
      description: 'The visual state of the input',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the input is disabled',
    },
    type: {
      control: { type: 'text' },
      description: 'The input type (text, email, password, number, etc.)',
    },
    leadingIcon: {
      control: false,
      description: 'Icon displayed at the start of the input',
    },
    trailingIcon: {
      control: false,
      description: 'Icon displayed at the end of the input',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
    state: 'default',
  },
  decorators: [
    (Story) => (
      <Box sx={{ width: 300 }}>
        <Story />
      </Box>
    ),
  ],
};

export const WithLeadingIcon: Story = {
  args: {
    placeholder: 'Search...',
    leadingIcon: <Search />,
    state: 'default',
  },
  decorators: [
    (Story) => (
      <Box sx={{ width: 300 }}>
        <Story />
      </Box>
    ),
  ],
};

export const WithTrailingIcon: Story = {
  args: {
    placeholder: 'Enter email...',
    trailingIcon: <Mail />,
    state: 'default',
  },
  decorators: [
    (Story) => (
      <Box sx={{ width: 300 }}>
        <Story />
      </Box>
    ),
  ],
};

export const WithBothIcons: Story = {
  args: {
    placeholder: 'Search users...',
    leadingIcon: <Search />,
    trailingIcon: <User />,
    state: 'default',
  },
  decorators: [
    (Story) => (
      <Box sx={{ width: 300 }}>
        <Story />
      </Box>
    ),
  ],
};

export const Error: Story = {
  args: {
    placeholder: 'Invalid input',
    state: 'error',
  },
  decorators: [
    (Story) => (
      <Box sx={{ width: 300 }}>
        <Story />
      </Box>
    ),
  ],
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
  },
  decorators: [
    (Story) => (
      <Box sx={{ width: 300 }}>
        <Story />
      </Box>
    ),
  ],
};

export const AllStates: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, width: 300 }}>
      <div>
        <p style={{ margin: '0 0 8px', fontSize: 12, color: '#666' }}>Default</p>
        <Input placeholder="Default state" state="default" />
      </div>
      <div>
        <p style={{ margin: '0 0 8px', fontSize: 12, color: '#666' }}>Error</p>
        <Input placeholder="Error state" state="error" />
      </div>
      <div>
        <p style={{ margin: '0 0 8px', fontSize: 12, color: '#666' }}>Disabled</p>
        <Input placeholder="Disabled state" disabled />
      </div>
      <div>
        <p style={{ margin: '0 0 8px', fontSize: 12, color: '#666' }}>With Icons</p>
        <Input placeholder="With icons" leadingIcon={<Search />} trailingIcon={<User />} />
      </div>
    </Box>
  ),
};
