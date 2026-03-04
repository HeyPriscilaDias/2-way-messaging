/**
 * LLM USAGE GUIDE - TextButton
 *
 * WHEN TO USE THIS COMPONENT:
 * - Use TextButton for ALL buttons that contain text (with or without icons)
 * - NEVER use MUI Button directly - always use this component
 * - For icon-only buttons, use IconButton instead
 *
 * VARIANT SELECTION:
 * - primary: Main action on a page/section (Save, Submit, Continue, Confirm)
 * - secondary: Alternative action, less emphasis (Cancel, Back, Skip)
 * - ghost: Tertiary action, link-like (Learn more, View all, See details)
 * - critical: Destructive actions (Delete, Remove, Revoke access)
 * - on-dark: ONLY for buttons on dark backgrounds (dark navbars, dark cards)
 *
 * SIZE SELECTION:
 * - md (default): Standard buttons in forms, cards, modals
 * - sm: Compact spaces, inline actions, table rows
 *
 * ICON USAGE:
 * - leadingIcon: Icon before text (common for actions like "Add", "Download")
 * - trailingIcon: Icon after text (common for navigation like "Next →")
 * - Don't use both icons simultaneously
 *
 * COMMON PATTERNS:
 * ```tsx
 * // Form submission
 * <TextButton variant="primary">Save Changes</TextButton>
 *
 * // Cancel/close actions
 * <TextButton variant="secondary">Cancel</TextButton>
 *
 * // Destructive with confirmation
 * <TextButton variant="critical">Delete Account</TextButton>
 *
 * // Navigation link-style
 * <TextButton variant="ghost" trailingIcon={<ArrowRight />}>View Details</TextButton>
 * ```
 *
 * ACCESSIBILITY:
 * - Always use descriptive text (avoid just "Click here" or "Submit")
 * - Disabled buttons should have clear reason shown elsewhere in UI
 *
 * WHEN UPDATING THIS FILE:
 * - Add new stories for new use cases discovered in the frontend
 * - Keep comments updated when variants change
 * - Add examples that would help an LLM understand context
 */
import type { Meta, StoryObj } from '@storybook/react';
import { ArrowLeft, ArrowRight } from '@willow/icons';
import { TextButton } from './TextButton.js';

const meta: Meta<typeof TextButton> = {
  title: 'Components/Buttons/TextButton',
  component: TextButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Buttons are interactive elements that allow users to trigger actions. Use different variants and sizes to create visual hierarchy and guide user interaction.',
      },
    },
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'on-dark', 'ghost', 'critical'],
      control: { type: 'radio' },
      description: 'The visual style variant of the button',
    },
    size: {
      options: ['sm', 'md'],
      control: { type: 'radio' },
      description: 'The size of the button',
    },
    state: {
      options: ['default', 'hover', 'focus', 'disabled'],
      control: { type: 'radio' },
      description: 'The interactive state of the button',
    },
    children: {
      control: { type: 'text' },
      description: 'The content of the button',
    },
    leadingIcon: {
      control: { type: 'boolean' },
      description: 'Display an icon before the button text',
    },
    trailingIcon: {
      control: { type: 'boolean' },
      description: 'Display an icon after the button text',
    },
    disabled: {
      control: false,
      description: 'Automatically set based on state prop',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TextButtonStory: Story = {
  render: (args) => (
    <TextButton
      {...args}
      leadingIcon={args.leadingIcon ? <ArrowLeft /> : undefined}
      trailingIcon={args.trailingIcon ? <ArrowRight /> : undefined}
    />
  ),
  args: {
    variant: 'primary',
    size: 'md',
    state: 'default',
    children: 'Button',
    leadingIcon: false,
    trailingIcon: false,
  },
};
