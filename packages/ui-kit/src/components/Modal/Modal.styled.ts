import { styled } from '@mui/material/styles';
import { Dialog as MuiDialog, DialogTitle as MuiDialogTitle, DialogContent as MuiDialogContent, DialogActions as MuiDialogActions, DialogTitleProps, DialogContentProps, DialogActionsProps } from '@mui/material';
import { neutral } from '../../tokens/primitives.js';
import type { ModalProps } from './Modal.types.js';

export const StyledModal: React.ComponentType<ModalProps> = styled(MuiDialog)<ModalProps>(({ theme, variant = 'standard' }) => ({
  '& .MuiDialog-paper': {
    borderRadius: (theme.shape.borderRadius as number) * 2, // 8px to match production AddApplicationDialog
    boxShadow: theme.shadows[8],
    minWidth: variant === 'fullscreen' ? '100vw' : '320px',
    maxWidth: variant === 'fullscreen' ? '100vw' : undefined,
    minHeight: variant === 'fullscreen' ? '100vh' : 'auto',
    maxHeight: variant === 'fullscreen' ? '100vh' : '90vh',
    margin: variant === 'centered' ? 'auto' : theme.spacing(2),
    ...(variant === 'fullscreen' && {
      borderRadius: 0,
      margin: 0,
    }),
  },
  '& .MuiBackdrop-root': {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
}));

export const StyledDialogTitle: React.ComponentType<DialogTitleProps> = styled(MuiDialogTitle)(({ theme }) => ({
  display: 'flex', // Enable flexbox layout like in production
  alignItems: 'center', // Center align items vertically
  justifyContent: 'space-between', // Space between title and close button
  padding: '24px 24px 16px 24px',
  paddingBottom: theme.spacing(1), // Use theme spacing for consistency
  color: theme.palette.text.primary, // Use theme color instead of hardcoded
  fontSize: '20px',
  fontWeight: 600,
  lineHeight: '28px',
  '&:last-child': {
    paddingBottom: theme.spacing(1),
  },
}));

export const StyledDialogContent: React.ComponentType<DialogContentProps> = styled(MuiDialogContent)(() => ({
  padding: '24px',
  color: neutral[700],
  fontSize: '14px',
  lineHeight: '20px',
  '&:first-of-type': {
    paddingTop: '24px',
  },
  '& .MuiDialogContentText-root': {
    color: neutral[700],
    fontSize: '14px',
    lineHeight: '20px',
    marginBottom: 0,
  },
}));

export const StyledDialogActions: React.ComponentType<DialogActionsProps> = styled(MuiDialogActions)(() => ({
  padding: '16px 24px 24px 24px',
  borderTop: `1px solid ${neutral[200]}`,
  gap: '12px',
  justifyContent: 'flex-end',
  '& .MuiButton-root': {
    minWidth: '80px',
  },
}));