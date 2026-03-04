import { AlertProps as MuiAlertProps } from '@mui/material';
export type AlertVariant = 'error' | 'warning' | 'info' | 'success';
export interface AlertProps extends Omit<MuiAlertProps, 'severity' | 'variant'> {
    variant: AlertVariant;
    title?: string;
    onClose?: () => void;
    children: React.ReactNode;
}
//# sourceMappingURL=Alert.types.d.ts.map