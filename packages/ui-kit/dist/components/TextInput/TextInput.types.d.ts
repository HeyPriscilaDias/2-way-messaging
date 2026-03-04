import { InputProps } from '../Input/index.js';
export interface TextInputProps extends Omit<InputProps, 'state'> {
    label?: string;
    hintText?: string;
    state?: InputProps['state'];
    required?: boolean;
}
//# sourceMappingURL=TextInput.types.d.ts.map