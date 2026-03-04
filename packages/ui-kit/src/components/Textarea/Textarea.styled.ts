import { styled } from '@mui/material/styles';
import { WillowTextareaState } from './Textarea.types.js';
import { resolvedSemanticTokens } from '../../tokens/semantic-tokens.js';
import { neutral } from '../../tokens/primitives.js';
import { spacingScale, sizingScale } from '../../tokens/primitive-tokens.js';

interface StyledTextareaProps {
  $state?: WillowTextareaState;
}

const getStateStyles = ($state?: WillowTextareaState) => {
  switch ($state) {
    case 'error':
      return {
        borderColor: resolvedSemanticTokens.form['border-control-error'],
        '&:focus': {
          borderColor: resolvedSemanticTokens.form['border-control-error'],
          outline: `2px solid ${resolvedSemanticTokens.form['border-control-error']}`,
          outlineOffset: '2px',
        },
      };
    case 'focused':
      return {
        borderColor: resolvedSemanticTokens.border['color-action-focus'],
        outline: `2px solid ${resolvedSemanticTokens.border['color-action-focus']}`,
        outlineOffset: '2px',
      };
    case 'disabled':
      return {
        backgroundColor: neutral[200],
        color: resolvedSemanticTokens.content['text-content-disabled'],
        cursor: 'not-allowed',
        '&::placeholder': {
          color: neutral[400],
        },
      };
    case 'filled':
      return {
        backgroundColor: neutral[25],
        borderColor: resolvedSemanticTokens.border['border-default'],
      };
    case 'default':
    default:
      return {
        backgroundColor: neutral[25],
        borderColor: resolvedSemanticTokens.border['border-default'],
      };
  }
};

export const StyledTextarea = styled('textarea', {
  shouldForwardProp: (prop) => !prop.toString().startsWith('$'),
})<StyledTextareaProps>(({ theme, $state }) => ({
  width: '100%',
  minHeight: '80px',
  boxSizing: 'border-box',
  padding: `${spacingScale[8]}px ${spacingScale[12]}px`,
  resize: 'vertical',

  fontSize: '14px',
  lineHeight: '20px',
  fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',

  border: `1px solid ${resolvedSemanticTokens.border['border-default']}`,
  borderRadius: `${sizingScale.radiusMd}px`,
  transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow', 'outline']),

  color: neutral[900],

  '&::placeholder': {
    color: neutral[500],
  },

  '&:hover:not(:disabled)': {
    borderColor: neutral[400],
  },

  '&:focus': {
    outline: `2px solid ${resolvedSemanticTokens.border['color-action-focus']}`,
    outlineOffset: '2px',
    borderColor: resolvedSemanticTokens.border['color-action-focus'],
  },

  ...getStateStyles($state),
})) as any;
