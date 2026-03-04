import type { DialogProps as MuiDialogProps, DialogTitleProps } from '@mui/material';

export type WillowModalVariant = 'standard' | 'fullscreen' | 'centered';

export interface ModalProps extends Omit<MuiDialogProps, 'variant'> {
  variant?: WillowModalVariant;
  /**
   * When true, renders a close button (X) in the top-right corner of ModalTitle.
   * The close button uses variant="ghost" styling and calls onClose when clicked.
   *
   * @example
   * <Modal open={open} onClose={handleClose} showCloseButton>
   *   <ModalTitle>My Dialog</ModalTitle>
   *   <ModalContent>Content here</ModalContent>
   * </Modal>
   */
  showCloseButton?: boolean;
}

export interface ModalContextValue {
  onClose?: (event: Record<string, never>, reason: string) => void;
  showCloseButton?: boolean;
}

export interface ModalTitleProps extends DialogTitleProps {
  children?: React.ReactNode;
}
