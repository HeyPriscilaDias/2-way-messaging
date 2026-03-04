import { ModalProps, ModalTitleProps } from './Modal.types.js';
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
export declare const Modal: import("react").ForwardRefExoticComponent<Omit<ModalProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
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
export declare const ModalTitle: import("react").ForwardRefExoticComponent<Omit<ModalTitleProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export { StyledDialogContent as ModalContent, StyledDialogActions as ModalActions } from './Modal.styled.js';
//# sourceMappingURL=Modal.d.ts.map