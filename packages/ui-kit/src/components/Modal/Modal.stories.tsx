/**
 * LLM USAGE GUIDE - Modal
 *
 * WHEN TO USE THIS COMPONENT:
 * - Use Modal for dialogs, popups, and overlays that require user attention
 * - NEVER use MUI Dialog directly - always use this component
 * - Use compound components: Modal, ModalTitle, ModalContent, ModalActions
 *
 * VARIANT SELECTION:
 * - standard (default): Most common, standard dialog
 * - centered: Vertically centered with auto margins
 * - fullscreen: Takes entire viewport (mobile-friendly)
 *
 * SIZE SELECTION (maxWidth prop):
 * - xs: Very small dialogs (simple confirmations)
 * - sm: Small dialogs (confirmations, simple forms)
 * - md: Medium dialogs (standard forms)
 * - lg: Large dialogs (complex forms, tables)
 * - xl: Extra large dialogs (dashboards, multi-step flows)
 *
 * COMPOUND COMPONENTS:
 * - ModalTitle: Dialog header with title text
 * - ModalContent: Scrollable content area
 * - ModalActions: Footer with action buttons (right-aligned)
 *
 * COMMON USE CASES:
 * - Confirmation dialogs → sm, simple message + Cancel/Confirm
 * - Form dialogs → md/lg, form fields + Cancel/Submit
 * - Delete confirmations → sm, warning message + Cancel/Delete
 * - Information dialogs → sm/md, content + OK button
 * - Complex flows → lg/xl, multi-step content
 *
 * COMMON PATTERNS:
 * ```tsx
 * // Confirmation dialog
 * <Modal open={isOpen} onClose={handleClose} maxWidth="sm">
 *   <ModalTitle>Confirm Action</ModalTitle>
 *   <ModalContent>
 *     Are you sure you want to proceed?
 *   </ModalContent>
 *   <ModalActions>
 *     <TextButton variant="secondary" onClick={handleClose}>Cancel</TextButton>
 *     <TextButton variant="primary" onClick={handleConfirm}>Confirm</TextButton>
 *   </ModalActions>
 * </Modal>
 *
 * // Delete confirmation (destructive)
 * <Modal open={isOpen} onClose={handleClose} maxWidth="sm">
 *   <ModalTitle>Delete Item</ModalTitle>
 *   <ModalContent>
 *     This action cannot be undone. Are you sure?
 *   </ModalContent>
 *   <ModalActions>
 *     <TextButton variant="secondary" onClick={handleClose}>Cancel</TextButton>
 *     <TextButton variant="critical" onClick={handleDelete}>Delete</TextButton>
 *   </ModalActions>
 * </Modal>
 *
 * // Form dialog
 * <Modal open={isOpen} onClose={handleClose} maxWidth="md" fullWidth>
 *   <ModalTitle>Add New Item</ModalTitle>
 *   <ModalContent>
 *     <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
 *       <TextField label="Name" required />
 *       <TextField label="Description" multiline rows={3} />
 *     </Box>
 *   </ModalContent>
 *   <ModalActions>
 *     <TextButton variant="secondary" onClick={handleClose}>Cancel</TextButton>
 *     <TextButton variant="primary" onClick={handleSubmit}>Save</TextButton>
 *   </ModalActions>
 * </Modal>
 * ```
 *
 * ACTION BUTTON ORDER:
 * - Secondary/Cancel action on LEFT
 * - Primary/Confirm action on RIGHT
 * - Critical actions (Delete) should be clearly labeled
 *
 * CLOSE BUTTON (showCloseButton prop):
 * - Use showCloseButton={true} to automatically add an X button in ModalTitle
 * - The close button uses ghost variant and is properly positioned
 * - ALWAYS prefer this over manually adding IconButton - it ensures consistency
 * - The button automatically calls onClose with reason 'closeButtonClick'
 *
 * ```tsx
 * // CORRECT: Use showCloseButton prop
 * <Modal open={open} onClose={handleClose} showCloseButton>
 *   <ModalTitle>My Dialog</ModalTitle>
 *   ...
 * </Modal>
 *
 * // WRONG: Don't manually add close buttons
 * <Modal open={open} onClose={handleClose}>
 *   <ModalTitle>
 *     <Box display="flex" justifyContent="space-between">
 *       My Dialog
 *       <IconButton onClick={handleClose}><X /></IconButton>  // NO!
 *     </Box>
 *   </ModalTitle>
 * </Modal>
 * ```
 *
 * CLOSING BEHAVIOR:
 * - By default, clicking backdrop or pressing Escape closes modal
 * - Use disableEscapeKeyDown or disableBackdropClick to prevent accidental closes
 * - Always provide explicit close/cancel button for important dialogs
 *
 * ACCESSIBILITY:
 * - ModalTitle provides the aria-labelledby
 * - Focus is trapped inside the modal
 * - Escape key closes by default
 * - Ensure buttons are reachable by keyboard
 *
 * WHEN UPDATING THIS FILE:
 * - Add new stories for new use cases discovered in the frontend
 * - Keep comments updated when variants change
 * - Add examples that would help an LLM understand context
 */
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Box, TextField } from '@mui/material';
import { Modal, ModalTitle, ModalContent, ModalActions } from './Modal.js';
import type { ModalProps } from './Modal.types.js';
import { Button } from '../Buttons/index.js';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      options: ['standard', 'fullscreen', 'centered'],
      control: { type: 'radio' },
      description: 'The display variant of the modal',
    },
    open: {
      control: { type: 'boolean' },
      description: 'Whether the modal is open',
    },
    maxWidth: {
      options: ['xs', 'sm', 'md', 'lg', 'xl', false],
      control: { type: 'select' },
      description: 'Maximum width of the modal',
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Whether the modal should take full width',
    },
    disableEscapeKeyDown: {
      control: { type: 'boolean' },
      description: 'Disable closing on escape key',
    },
    showCloseButton: {
      control: { type: 'boolean' },
      description: 'Show a close button (X) in the top-right corner of ModalTitle',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Helper component for interactive stories
const ModalWithTrigger = ({
  children,
  triggerText = 'Open Modal',
  ...modalProps
}: {
  children: React.ReactNode;
  triggerText?: string;
} & Omit<ModalProps, 'open' | 'onClose' | 'children'>) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        {triggerText}
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        {...modalProps}
      >
        {children}
      </Modal>
    </>
  );
};

// Basic Modal variants
export const Standard: Story = {
  render: () => (
    <ModalWithTrigger>
      <ModalTitle>Standard Modal</ModalTitle>
      <ModalContent>
        This is a standard modal with default styling and behavior.
      </ModalContent>
      <ModalActions>
        <Button variant="text">Cancel</Button>
        <Button variant="contained">Confirm</Button>
      </ModalActions>
    </ModalWithTrigger>
  ),
};

export const Centered: Story = {
  render: () => (
    <ModalWithTrigger variant="centered" triggerText="Open Centered Modal">
      <ModalTitle>Centered Modal</ModalTitle>
      <ModalContent>
        This modal is centered on the screen with auto margins.
      </ModalContent>
      <ModalActions>
        <Button variant="text">Cancel</Button>
        <Button variant="contained">Confirm</Button>
      </ModalActions>
    </ModalWithTrigger>
  ),
};

export const Fullscreen: Story = {
  render: () => (
    <ModalWithTrigger variant="fullscreen" triggerText="Open Fullscreen Modal">
      <ModalTitle>Fullscreen Modal</ModalTitle>
      <ModalContent>
        This modal takes up the entire screen with no margins or border radius.
        It's perfect for mobile experiences or when you need maximum screen space.
      </ModalContent>
      <ModalActions>
        <Button variant="text">Cancel</Button>
        <Button variant="contained">Save</Button>
      </ModalActions>
    </ModalWithTrigger>
  ),
};

// Content variations
export const WithLongContent: Story = {
  render: () => (
    <ModalWithTrigger triggerText="Open Modal with Long Content">
      <ModalTitle>Terms and Conditions</ModalTitle>
      <ModalContent>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
      </ModalContent>
      <ModalActions>
        <Button variant="text">Decline</Button>
        <Button variant="contained">Accept</Button>
      </ModalActions>
    </ModalWithTrigger>
  ),
};

export const WithoutTitle: Story = {
  render: () => (
    <ModalWithTrigger triggerText="Open Modal without Title">
      <ModalContent>
        This modal doesn't have a title. The content goes directly in the body area.
      </ModalContent>
      <ModalActions>
        <Button variant="text">Cancel</Button>
        <Button variant="contained">OK</Button>
      </ModalActions>
    </ModalWithTrigger>
  ),
};

export const WithoutActions: Story = {
  render: () => (
    <ModalWithTrigger triggerText="Open Modal without Actions">
      <ModalTitle>Information</ModalTitle>
      <ModalContent>
        This modal doesn't have action buttons. You can close it by clicking outside or pressing Escape.
      </ModalContent>
    </ModalWithTrigger>
  ),
};

export const ConfirmationDialog: Story = {
  render: () => (
    <ModalWithTrigger triggerText="Delete Item" maxWidth="sm">
      <ModalTitle>Confirm Deletion</ModalTitle>
      <ModalContent>
        Are you sure you want to delete this item? This action cannot be undone.
      </ModalContent>
      <ModalActions>
        <Button variant="text">Cancel</Button>
        <Button variant="contained" color="error">Delete</Button>
      </ModalActions>
    </ModalWithTrigger>
  ),
};

export const FormDialog: Story = {
  render: () => (
    <ModalWithTrigger triggerText="Add New Item" maxWidth="md" fullWidth>
      <ModalTitle>Add New Item</ModalTitle>
      <ModalContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingTop: '8px' }}>
          <TextField
            label="Name"
            placeholder="Enter item name"
            required
            fullWidth
          />
          <TextField
            label="Description"
            placeholder="Enter description (optional)"
            multiline
            rows={3}
            fullWidth
          />
        </Box>
      </ModalContent>
      <ModalActions>
        <Button variant="text">Cancel</Button>
        <Button variant="contained">Add Item</Button>
      </ModalActions>
    </ModalWithTrigger>
  ),
};

// Size variations
export const SmallModal: Story = {
  render: () => (
    <ModalWithTrigger triggerText="Small Modal" maxWidth="xs" fullWidth>
      <ModalTitle>Small Modal</ModalTitle>
      <ModalContent>
        This is a small modal (xs max width).
      </ModalContent>
      <ModalActions>
        <Button variant="text">Cancel</Button>
        <Button variant="contained">OK</Button>
      </ModalActions>
    </ModalWithTrigger>
  ),
};

export const LargeModal: Story = {
  render: () => (
    <ModalWithTrigger triggerText="Large Modal" maxWidth="lg" fullWidth>
      <ModalTitle>Large Modal</ModalTitle>
      <ModalContent>
        This is a large modal (lg max width) that can accommodate more content and wider layouts.
      </ModalContent>
      <ModalActions>
        <Button variant="text">Cancel</Button>
        <Button variant="contained">OK</Button>
      </ModalActions>
    </ModalWithTrigger>
  ),
};

// Interactive demonstrations
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
      <ModalWithTrigger triggerText="Standard">
        <ModalTitle>Standard Modal</ModalTitle>
        <ModalContent>Standard modal variant with default styling.</ModalContent>
        <ModalActions>
          <Button variant="text">Cancel</Button>
          <Button variant="contained">OK</Button>
        </ModalActions>
      </ModalWithTrigger>

      <ModalWithTrigger variant="centered" triggerText="Centered">
        <ModalTitle>Centered Modal</ModalTitle>
        <ModalContent>Centered modal variant with auto margins.</ModalContent>
        <ModalActions>
          <Button variant="text">Cancel</Button>
          <Button variant="contained">OK</Button>
        </ModalActions>
      </ModalWithTrigger>

      <ModalWithTrigger variant="fullscreen" triggerText="Fullscreen">
        <ModalTitle>Fullscreen Modal</ModalTitle>
        <ModalContent>Fullscreen modal variant that takes up the entire viewport.</ModalContent>
        <ModalActions>
          <Button variant="text">Cancel</Button>
          <Button variant="contained">OK</Button>
        </ModalActions>
      </ModalWithTrigger>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

/**
 * WithCloseButton - PREFERRED PATTERN FOR MODALS WITH CLOSE BUTTON
 *
 * Use showCloseButton={true} on Modal to automatically render a properly-styled
 * close button in the ModalTitle. This ensures:
 * - Consistent positioning (top-right corner)
 * - Correct styling (ghost variant, no border)
 * - Proper accessibility (aria-label)
 * - Automatic wiring to onClose handler
 *
 * NEVER manually add IconButton for close functionality - use this prop instead.
 */
export const WithCloseButton: Story = {
  render: () => (
    <ModalWithTrigger triggerText="Open Modal with Close Button" showCloseButton maxWidth="md" fullWidth>
      <ModalTitle>Modal with Close Button</ModalTitle>
      <ModalContent>
        This modal has showCloseButton={'{true}'} which automatically adds an X button
        in the top-right corner of the title. The button uses ghost styling and calls
        onClose when clicked.
        <br /><br />
        Always use this pattern instead of manually adding IconButton components.
      </ModalContent>
      <ModalActions>
        <Button variant="text">Cancel</Button>
        <Button variant="contained">Save</Button>
      </ModalActions>
    </ModalWithTrigger>
  ),
};

export const FormDialogWithCloseButton: Story = {
  render: () => (
    <ModalWithTrigger triggerText="Add New Class" showCloseButton maxWidth="md" fullWidth>
      <ModalTitle>Add New Class</ModalTitle>
      <ModalContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingTop: '8px' }}>
          <TextField
            label="Class Name"
            placeholder="Enter class name"
            required
            fullWidth
          />
          <TextField
            label="Description"
            placeholder="Enter description (optional)"
            multiline
            rows={3}
            fullWidth
          />
        </Box>
      </ModalContent>
      <ModalActions>
        <Button variant="text">Cancel</Button>
        <Button variant="contained">Create Class</Button>
      </ModalActions>
    </ModalWithTrigger>
  ),
};