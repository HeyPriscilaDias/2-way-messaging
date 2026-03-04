import { styled } from '@mui/material/styles';
import { Tabs as MuiTabs, Tab as MuiTab, TabsProps as MuiTabsProps, TabProps as MuiTabProps } from '@mui/material';
import { resolvedSemanticTokens } from '../../tokens/semantic-tokens.js';
import { neutral } from '../../tokens/primitives.js';

/**
 * Styled Tabs Container
 * Wraps the MUI Tabs component with Willow styling
 */
export const StyledTabs: React.ComponentType<MuiTabsProps> = styled(MuiTabs)(() => ({
  borderBottom: `1px solid ${neutral[300]}`,
  minHeight: 'auto',

  '& .MuiTabs-indicator': {
    backgroundColor: resolvedSemanticTokens.tabs['border-indicator'],
    height: '3px',
  },
}));

/**
 * Styled Tab Item
 * Individual tab with Willow styling
 */
export const StyledTab: React.ComponentType<MuiTabProps> = styled(MuiTab)(() => ({
  textTransform: 'none',
  minWidth: 'auto',
  padding: '12px 16px',
  marginRight: '8px',
  fontSize: '14px',
  fontFamily: "'Inter', sans-serif",
  fontWeight: 400,
  lineHeight: '20px',
  color: resolvedSemanticTokens.tabs['text-default'],
  minHeight: 'auto',

  '&.Mui-selected': {
    fontWeight: 600,
    color: resolvedSemanticTokens.tabs['text-selected'],
  },

  '&:hover': {
    backgroundColor: resolvedSemanticTokens.tabs['bg-hover'],
  },

  '&.Mui-disabled': {
    color: neutral[400],
  },
}));
