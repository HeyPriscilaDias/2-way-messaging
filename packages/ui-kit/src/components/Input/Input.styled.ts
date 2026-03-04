import { styled } from '@mui/material/styles';
import { WillowInputState } from './Input.types.js';
import { resolvedSemanticTokens } from '../../tokens/semantic-tokens.js';
import { neutral } from '../../tokens/primitives.js';
import { spacingScale, sizingScale } from '../../tokens/primitive-tokens.js';

interface StyledInputProps {
  $state?: WillowInputState;
  $hasLeadingIcon?: boolean;
  $hasTrailingIcon?: boolean;
}

interface StyledInputContainerProps {
  $hasLeadingIcon?: boolean;
  $hasTrailingIcon?: boolean;
}

const getStateStyles = ($state?: WillowInputState) => {
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

export const StyledInput = styled('input', {
  shouldForwardProp: (prop) => !prop.toString().startsWith('$'),
})<StyledInputProps>(({ theme, $state, $hasLeadingIcon, $hasTrailingIcon }) => ({
  width: '100%',
  height: '36px',
  boxSizing: 'border-box',
  padding: `0 ${spacingScale[12]}px`,
  paddingLeft: $hasLeadingIcon ? '40px' : undefined,
  paddingRight: $hasTrailingIcon ? '40px' : undefined,

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

export const StyledInputContainer = styled('div')<StyledInputContainerProps>(() => ({
  position: 'relative',
  width: '100%',
  height: '36px',
  display: 'flex',
  alignItems: 'center',

  '& .input-leading-icon': {
    position: 'absolute',
    left: `${spacingScale[12]}px`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'none',
    color: neutral[500],

    '& svg': {
      width: '16px',
      height: '16px',
    },
  },

  '& .input-trailing-icon': {
    position: 'absolute',
    right: `${spacingScale[12]}px`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: neutral[500],

    '& svg': {
      width: '16px',
      height: '16px',
    },
  },
})) as any;
