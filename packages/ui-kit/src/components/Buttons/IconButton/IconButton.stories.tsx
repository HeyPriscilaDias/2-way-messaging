/**
 * LLM USAGE GUIDE - IconButton
 *
 * WHEN TO USE THIS COMPONENT:
 * - Use IconButton for buttons that contain ONLY an icon (no text)
 * - NEVER use MUI IconButton directly - always use this component
 * - If the button has text, use TextButton with leadingIcon/trailingIcon instead
 *
 * VARIANT SELECTION:
 * - secondary (default): Most common - outlined icon buttons
 * - ghost: Minimal icon buttons (toolbars, inline actions, close buttons)
 * - primary: Rare - high-emphasis icon-only action
 * - critical: Destructive icon actions (delete icons)
 * - on-dark: ONLY for icon buttons on dark backgrounds
 *
 * SIZE SELECTION:
 * - md (default): Standard icon buttons
 * - sm: Compact spaces, dense UIs, table actions
 *
 * COMMON USE CASES:
 * - Close buttons (X icon) → variant="ghost"
 * - Edit/pencil buttons → variant="secondary"
 * - Delete/trash buttons → variant="ghost" or variant="critical"
 * - Navigation arrows → variant="secondary"
 * - Toolbar actions → variant="ghost"
 * - Settings gear → variant="ghost"
 *
 * COMMON PATTERNS:
 * ```tsx
 * // Close button in modal/card header
 * <IconButton variant="ghost" aria-label="Close">
 *   <CloseIcon />
 * </IconButton>
 *
 * // Edit action in a row
 * <IconButton variant="secondary" aria-label="Edit item">
 *   <EditIcon />
 * </IconButton>
 *
 * // Delete action
 * <IconButton variant="ghost" aria-label="Delete item">
 *   <TrashIcon />
 * </IconButton>
 * ```
 *
 * ACCESSIBILITY (CRITICAL):
 * - ALWAYS provide aria-label - icon buttons have no visible text!
 * - aria-label should describe the action, not the icon
 * - Good: aria-label="Close dialog"
 * - Bad: aria-label="X icon"
 *
 * WHEN UPDATING THIS FILE:
 * - Add new stories for new use cases discovered in the frontend
 * - Keep comments updated when variants change
 * - Add examples that would help an LLM understand context
 */
import type { Meta, StoryObj } from '@storybook/react';
import { ArrowRight } from '@willow/icons';
import { IconButton } from './IconButton.js';

const meta: Meta<typeof IconButton> = {
  title: 'Components/Buttons/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Icon buttons are used to trigger actions with icon-only appearance. They use the same variant system as regular buttons with compact sizing.',
      },
    },
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'on-dark', 'ghost', 'critical'],
      control: { type: 'radio' },
      description: 'The visual style variant of the icon button',
    },
    size: {
      options: ['sm', 'md'],
      control: { type: 'radio' },
      description: 'The size of the icon button',
    },
    state: {
      options: ['default', 'hover', 'focus', 'disabled'],
      control: { type: 'radio' },
      description: 'The interactive state of the button',
    },
    disabled: {
      control: false,
      description: 'Automatically set based on state prop',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const IconButtonStory: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    state: 'default',
    children: <ArrowRight />,
  },
};
