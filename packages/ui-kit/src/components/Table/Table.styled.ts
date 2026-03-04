import React from 'react';
import { styled, Theme } from '@mui/material/styles';
import {
  Table,
  TableContainer,
  Paper,
  PaperProps,
  TableContainerProps,
  TableProps as MuiTableProps,
} from '@mui/material';
import { resolvedSemanticTokens } from '../../tokens/semantic-tokens.js';
import { neutral } from '../../tokens/primitives.js';
import { TableVariant, TableSize } from './Table.types.js';

interface StyledTableContainerProps extends TableContainerProps {
  $variant?: TableVariant;
}

interface StyledTableProps extends MuiTableProps {
  $variant?: TableVariant;
  $size?: TableSize;
  $hoverable?: boolean;
}

const shouldForwardProp = (prop: string) =>
  !['$variant', '$size', '$hoverable'].includes(prop);

export const StyledPaper: React.ComponentType<PaperProps> = styled(Paper)(() => ({
  border: `1px solid ${neutral[300]}`,
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: 'none',
}));

export const StyledTableContainer: React.ComponentType<StyledTableContainerProps> = styled(
  TableContainer,
  { shouldForwardProp }
)<StyledTableContainerProps>(() => ({
  minWidth: '335px',
}));

export const StyledTable: React.ComponentType<StyledTableProps> = styled(Table, { shouldForwardProp })<StyledTableProps>(
  ({ theme, $variant = 'default', $size = 'md', $hoverable = false }) => {
    // Size-specific styles
    const sizeStyles = $size === 'sm'
      ? {
          '& .MuiTableCell-root': {
            padding: '8px 12px',
            fontSize: '13px',
          },
          '& .MuiTableCell-head': {
            fontSize: '12px',
            fontWeight: 600,
          },
        }
      : {
          '& .MuiTableCell-root': {
            padding: '12px 16px',
            fontSize: '14px',
          },
          '& .MuiTableCell-head': {
            fontSize: '13px',
            fontWeight: 600,
          },
        };

    // Variant-specific styles
    const variantStyles = $variant === 'striped'
      ? {
          '& .MuiTableBody-root .MuiTableRow-root:nth-of-type(even)': {
            backgroundColor: resolvedSemanticTokens.table['bg-row-striped'],
          },
        }
      : {};

    // Hover styles
    const hoverStyles = $hoverable
      ? {
          '& .MuiTableBody-root .MuiTableRow-root': {
            cursor: 'pointer',
            transition: (theme as Theme).transitions.create('background-color', {
              duration: (theme as Theme).transitions.duration.short,
            }),
            '&:hover': {
              backgroundColor: resolvedSemanticTokens.table['bg-row-hover'],
            },
          },
        }
      : {};

    return {
      // Base styles
      '& .MuiTableHead-root': {
        backgroundColor: resolvedSemanticTokens.table['bg-header'],
        '& .MuiTableCell-head': {
          fontFamily: "'Inter', sans-serif",
          fontWeight: 600,
          color: resolvedSemanticTokens.table['text-header'],
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          borderBottom: `1px solid ${neutral[300]}`,
        },
      },
      '& .MuiTableBody-root': {
        '& .MuiTableCell-root': {
          fontFamily: "'Inter', sans-serif",
          color: resolvedSemanticTokens.table['text-cell'],
          borderBottom: `1px solid ${resolvedSemanticTokens.table['border-cell']}`,
        },
        '& .MuiTableRow-root:last-child .MuiTableCell-root': {
          borderBottom: 'none',
        },
      },
      ...sizeStyles,
      ...variantStyles,
      ...hoverStyles,
    };
  }
);
