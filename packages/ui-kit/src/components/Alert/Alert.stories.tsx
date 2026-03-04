import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert.js';
import { Stack } from '@mui/material';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['error', 'warning', 'info', 'success'],
      description: 'The type of alert to display',
    },
    title: {
      control: 'text',
      description: 'Optional title displayed above the alert content',
    },
    onClose: {
      action: 'closed',
      description: 'Callback fired when the close button is clicked',
    },
    children: {
      control: 'text',
      description: 'The content of the alert',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Error: Story = {
  args: {
    variant: 'error',
    children: 'This is an error alert with important information.',
  },
};

export const ErrorWithTitle: Story = {
  args: {
    variant: 'error',
    title: 'Error',
    children: 'Your submission could not be processed. Please check your input and try again.',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'This is a warning alert with important information.',
  },
};

export const WarningWithTitle: Story = {
  args: {
    variant: 'warning',
    title: 'Warning',
    children: 'This feature will be deprecated in the next release. Please migrate to the new API.',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    children: 'This is an info alert with helpful information.',
  },
};

export const InfoWithTitle: Story = {
  args: {
    variant: 'info',
    title: 'Tip',
    children: 'You can use keyboard shortcuts to navigate faster. Press ? to see all shortcuts.',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'This is a success alert confirming your action.',
  },
};

export const SuccessWithTitle: Story = {
  args: {
    variant: 'success',
    title: 'Success',
    children: 'Your changes have been saved successfully!',
  },
};

export const WithCloseButton: Story = {
  args: {
    variant: 'info',
    title: 'Dismissible Alert',
    children: 'Click the close button to dismiss this alert.',
    onClose: () => console.log('Alert closed'),
  },
};

export const AllVariants: Story = {
  render: () => (
    <Stack spacing={2}>
      <Alert variant="error" title="Error">
        Your submission could not be processed. Please check your input and try again.
      </Alert>
      <Alert variant="warning" title="Warning">
        This feature will be deprecated in the next release. Please migrate to the new API.
      </Alert>
      <Alert variant="info" title="Tip">
        You can use keyboard shortcuts to navigate faster. Press ? to see all shortcuts.
      </Alert>
      <Alert variant="success" title="Success">
        Your changes have been saved successfully!
      </Alert>
    </Stack>
  ),
};

export const LongContent: Story = {
  args: {
    variant: 'info',
    title: 'Important Information',
    children:
      'This alert contains a longer message to demonstrate how the component handles multi-line content. ' +
      'The alert should expand vertically to accommodate all the text while maintaining proper padding and spacing. ' +
      'Icons and borders should remain properly aligned regardless of content length.',
  },
};

export const WithoutIcon: Story = {
  args: {
    variant: 'info',
    children: 'This alert appears without an icon.',
    icon: false,
  },
};

/**
 * LLM USAGE GUIDE
 *
 * The Alert component provides feedback messages to users about operations, states, or conditions.
 *
 * WHEN TO USE EACH VARIANT:
 *
 * ERROR (red):
 * - Failed operations (save failed, delete failed, upload failed)
 * - Validation errors (form submission errors, invalid input)
 * - Permission denied or unauthorized access
 * - System errors or critical issues
 * Example: "Failed to save changes. Please try again."
 *
 * WARNING (yellow):
 * - Important notices that require attention but aren't critical
 * - Deprecation warnings or upcoming changes
 * - Actions that may have unintended consequences
 * - Resource limitations or quotas approaching limits
 * Example: "This action cannot be undone. Are you sure you want to continue?"
 *
 * INFO (blue):
 * - General information or tips
 * - Feature explanations or help text
 * - Status updates for ongoing processes
 * - Neutral notifications
 * Example: "You can use keyboard shortcuts to navigate faster."
 *
 * SUCCESS (green):
 * - Successfully completed actions (saved, created, deleted, updated)
 * - Confirmations of user actions
 * - Process completion messages
 * - Successful validations
 * Example: "Your changes have been saved successfully!"
 *
 * TITLE PROP USAGE:
 * - Use title for longer alerts that need a summary/heading
 * - Use title when the alert contains multiple sentences or paragraphs
 * - Omit title for short, single-sentence alerts
 * - Title should be 1-3 words (e.g., "Error", "Success", "Important", "Tip")
 *
 * COMMON PATTERNS:
 *
 * 1. Form Validation Errors:
 *    <Alert variant="error" title="Validation Error">
 *      Please correct the following fields: Email, Password
 *    </Alert>
 *
 * 2. Success Confirmations:
 *    <Alert variant="success">
 *      Student added successfully!
 *    </Alert>
 *
 * 3. Dismissible Notices:
 *    <Alert variant="info" title="New Feature" onClose={handleDismiss}>
 *      Check out our new dashboard redesign!
 *    </Alert>
 *
 * 4. Page-Level Warnings:
 *    <Alert variant="warning" title="Maintenance Scheduled">
 *      The system will be down for maintenance on Saturday from 2-4 AM EST.
 *    </Alert>
 *
 * 5. Inline Help Text:
 *    <Alert variant="info">
 *      Enter your student's grade level to see personalized recommendations.
 *    </Alert>
 *
 * ACCESSIBILITY:
 * - Alerts automatically have appropriate ARIA roles
 * - Icons provide visual reinforcement but don't replace clear text
 * - Close button (when onClose provided) is keyboard accessible
 * - Color is not the only indicator - icons and text provide context
 *
 * PLACEMENT GUIDELINES:
 * - Form errors: Place at top of form or next to relevant fields
 * - Success messages: Place at top of page or near the action taken
 * - Page-level notices: Place at top of page content area
 * - Inline tips: Place near the relevant feature or input
 */
