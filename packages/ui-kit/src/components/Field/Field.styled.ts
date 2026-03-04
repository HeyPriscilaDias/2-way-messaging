import { styled } from '@mui/material/styles';
import { neutral, red } from '../../tokens/primitives.js';
import { spacingScale } from '../../tokens/primitive-tokens.js';

interface StyledHintTextProps {
  $isError?: boolean;
}

export const StyledFieldContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: `${spacingScale[4]}px`,
})) as any;

export const StyledLabel = styled('label')(() => ({
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: '20px',
  fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
  color: neutral[900],

  '&.required::after': {
    content: '"*"',
    color: red[600],
    marginLeft: `${spacingScale[4]}px`,
  },
})) as any;

export const StyledHintText = styled('span', {
  shouldForwardProp: (prop) => prop !== '$isError',
})<StyledHintTextProps>(({ $isError }) => ({
  fontSize: '12px',
  lineHeight: '16px',
  fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
  color: $isError ? red[600] : neutral[600],
})) as any;
