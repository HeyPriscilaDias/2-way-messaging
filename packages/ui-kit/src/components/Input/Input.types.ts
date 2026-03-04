import { InputHTMLAttributes } from 'react';

export type WillowInputState = 'default' | 'filled' | 'focused' | 'error' | 'disabled';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  state?: WillowInputState;
  type?: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
}
