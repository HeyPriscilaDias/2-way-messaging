import { TextareaHTMLAttributes } from 'react';
export type WillowTextareaState = 'default' | 'filled' | 'focused' | 'error' | 'disabled';
export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    state?: WillowTextareaState;
    /** Minimum number of visible rows */
    minRows?: number;
    /** Maximum number of visible rows (enables auto-resize up to this limit) */
    maxRows?: number;
}
//# sourceMappingURL=Textarea.types.d.ts.map