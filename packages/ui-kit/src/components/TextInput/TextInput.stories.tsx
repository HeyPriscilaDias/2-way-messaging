import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@mui/material';
import { Search, User, Eye, EyeOff, Mail } from '@willow/icons';
import { TextInput } from './TextInput.js';
import { useState } from 'react';

/**
 * # TextInput Component
 *
 * A complete form field component combining Input with label and hint text.
 * This is the recommended component for building forms.
 *
 * ## When to use
 * - Form fields with labels
 * - Fields that need validation messages
 * - Any text input that requires accessibility labels
 *
 * ## Features
 * - Optional label with required indicator
 * - Hint text for help or error messages
 * - Leading and trailing icon support
 * - States: default, filled, focused, error, disabled
 *
 * ## Usage
 * ```tsx
 * import { TextInput } from '@willow/ui-kit';
 *
 * <TextInput
 *   label="Email"
 *   placeholder="Enter your email"
 *   hintText="We'll never share your email"
 *   required
 * />
 * ```
 */
const meta: Meta<typeof TextInput> = {
  title: 'Components/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'The TextInput component combines an Input with an optional label and hint text for complete form field functionality. Supports leading and trailing icons for enhanced UX.',
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
    state: {
      options: ['default', 'error', 'disabled'],
      control: { type: 'radio' },
      description: 'The visual state of the input',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'The placeholder text',
    },
    required: {
      control: { type: 'boolean' },
      description: 'Whether the field is marked as required',
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
      description: 'Optional icon displayed at the start of the input',
    },
    trailingIcon: {
      control: false,
      description: 'Optional icon displayed at the end of the input',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
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
    label: 'Password',
    placeholder: 'Enter password',
    hintText: 'Use at least 8 characters',
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
    label: 'Full Name',
    placeholder: 'Enter your name',
    required: true,
    hintText: 'This field is required',
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
    label: 'Email',
    placeholder: 'user@example.com',
    hintText: 'Invalid email format',
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
    label: 'Organization',
    placeholder: 'Your organization',
    hintText: 'This field cannot be edited',
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

export const WithLeadingIcon: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    leadingIcon: <Search />,
    hintText: 'Icon appears at the start of the input',
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

export const WithTrailingIcon: Story = {
  args: {
    label: 'Email',
    placeholder: 'user@example.com',
    trailingIcon: <Mail />,
    hintText: 'Icon appears at the end of the input',
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

export const WithBothIcons: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    leadingIcon: <User />,
    trailingIcon: <Search />,
    hintText: 'Icons can be used on both sides',
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

export const PasswordWithVisibilityToggle: Story = {
  render: () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <Box sx={{ width: 350 }}>
        <TextInput
          label="Password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Enter password"
          hintText="Click the eye icon to toggle visibility"
          trailingIcon={
            <button
              onClick={() => setShowPassword(!showPassword)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                padding: 0,
              }}
              type="button"
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          }
        />
      </Box>
    );
  },
  parameters: {
    controls: { disable: true },
  },
};

export const AllStates: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, width: 350 }}>
      <div>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 600 }}>Default State</h4>
        <TextInput
          id="default"
          label="Email"
          placeholder="Enter your email"
          state="default"
          hintText="We'll never share your email."
        />
      </div>
      <div>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 600 }}>Error State</h4>
        <TextInput
          id="error"
          label="Email"
          placeholder="user@example.com"
          state="error"
          hintText="Invalid email format"
        />
      </div>
      <div>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 600 }}>Disabled State</h4>
        <TextInput
          id="disabled"
          label="Organization"
          placeholder="Your organization"
          state="disabled"
          disabled
          hintText="This field cannot be edited"
        />
      </div>
      <div>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 600 }}>Required Field</h4>
        <TextInput
          id="required"
          label="Full Name"
          placeholder="Enter your name"
          state="default"
          required
          hintText="Your full legal name"
        />
      </div>
      <div>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 600 }}>With Icons</h4>
        <TextInput
          id="icons"
          label="Search Users"
          placeholder="Type to search..."
          leadingIcon={<Search />}
          trailingIcon={<User />}
          hintText="Search by name or email"
        />
      </div>
    </Box>
  ),
  parameters: {
    controls: { disable: true },
  },
};
