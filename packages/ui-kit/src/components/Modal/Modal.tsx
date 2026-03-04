import { forwardRef, createContext, useContext } from 'react';
import { Box } from '@mui/material';
import { X } from '@willow/icons';
import { StyledModal, StyledDialogTitle } from './Modal.styled.js';
import { ModalProps, ModalContextValue, ModalTitleProps } from './Modal.types.js';
import { IconButton } from '../Buttons/IconButton/IconButton.js';

/**
 * Modal Context - Allows ModalTitle to access Modal's onClose and showCloseButton props.
 * This enables a clean API where you set showCloseButton on Modal and the close button
 * automatically appears in ModalTitle.
 */
const ModalContext = createContext<ModalContextValue>({});

const useModalContext = () => useContext(ModalContext);

/**
 * Modal - A dialog component for displaying content that requires user attention.
 *
 * LLM Usage Guide:
 * - Use showCloseButton={true} when users should be able to dismiss via X button
 * - Always provide onClose handler when using showCloseButton
 * - Use ModalTitle, ModalContent, and ModalActions as children
 *
 * @example
 * // Basic modal with close button
 * <Modal open={isOpen} onClose={handleClose} showCloseButton>
 *   <ModalTitle>Confirm Action</ModalTitle>
 *   <ModalContent>Are you sure?</ModalContent>
 *   <ModalActions>
 *     <TextButton variant="secondary" onClick={handleClose}>Cancel</TextButton>
 *     <TextButton variant="primary" onClick={handleConfirm}>Confirm</TextButton>
 *   </ModalActions>
 * </Modal>
 */
export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ variant = 'standard', showCloseButton = false, onClose, children, ...props }, ref) => {
    // Cast onClose to the context type which allows 'closeButtonClick' reason
    const contextValue: ModalContextValue = {
      onClose: onClose as ModalContextValue['onClose'],
      showCloseButton,
    };

    return (
      <ModalContext.Provider value={contextValue}>
        <StyledModal
          ref={ref}
          variant={variant}
          onClose={onClose}
          {...props}
        >
          {children}
        </StyledModal>
      </ModalContext.Provider>
    );
  }
);

Modal.displayName = 'WillowModal';

/**
 * ModalTitle - Header section of a Modal.
 *
 * When the parent Modal has showCloseButton={true}, this component automatically
 * renders a close button (X) in the top-right corner. No manual IconButton needed.
 *
 * @example
 * <Modal open={open} onClose={handleClose} showCloseButton>
 *   <ModalTitle>My Dialog Title</ModalTitle>
 *   ...
 * </Modal>
 */
export const ModalTitle = forwardRef<HTMLDivElement, ModalTitleProps>(
  ({ children, ...props }, ref) => {
    const { onClose, showCloseButton } = useModalContext();

    if (showCloseButton && onClose) {
      return (
        <StyledDialogTitle ref={ref} {...props}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <Box sx={{ flex: 1 }}>{children}</Box>
            <IconButton
              variant="ghost"
              size="sm"
              onClick={() => onClose({}, 'closeButtonClick')}
              aria-label="Close dialog"
            >
              <X size={20} />
            </IconButton>
          </Box>
        </StyledDialogTitle>
      );
    }

    return (
      <StyledDialogTitle ref={ref} {...props}>
        {children}
      </StyledDialogTitle>
    );
  }
);

ModalTitle.displayName = 'WillowModalTitle';

// Re-export styled sub-components for convenience
export {
  StyledDialogContent as ModalContent,
  StyledDialogActions as ModalActions
} from './Modal.styled.js';
