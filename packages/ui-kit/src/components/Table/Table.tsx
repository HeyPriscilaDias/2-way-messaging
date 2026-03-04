import React, { forwardRef } from 'react';
import {
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Checkbox,
} from '@mui/material';
import { StyledPaper, StyledTableContainer, StyledTable } from './Table.styled.js';
import { TableProps, TableRow as TableRowType, TableColumn } from './Table.types.js';
import { Skeleton } from '../Skeleton/index.js';
import { Typography } from '../Typography/index.js';
import { Slate, neutral } from '../../tokens/primitives.js';

/**
 * Get the cell value from a row based on column accessor
 */
function getCellValue<T extends TableRowType>(
  row: T,
  column: TableColumn<T>
): unknown {
  if (column.accessor) {
    if (typeof column.accessor === 'function') {
      return column.accessor(row);
    }
    return row[column.accessor as string];
  }
  return row[column.id];
}

/**
 * Table component for displaying tabular data with optional selection and hover effects.
 */
const Table = forwardRef<HTMLDivElement, TableProps>(
  (
    {
      variant = 'default',
      size = 'md',
      columns,
      data,
      selectable = false,
      selectedRows = [],
      onSelectionChange,
      onRowClick,
      hoverable = false,
      loading = false,
      emptyMessage = 'No data available',
      ...props
    },
    ref
  ) => {
    // Handle select all
    const handleSelectAll = (checked: boolean) => {
      if (onSelectionChange) {
        onSelectionChange(checked ? data.map((row) => row.id) : []);
      }
    };

    // Handle row selection
    const handleSelectRow = (rowId: string | number, checked: boolean) => {
      if (onSelectionChange) {
        const newSelection = checked
          ? [...selectedRows, rowId]
          : selectedRows.filter((id) => id !== rowId);
        onSelectionChange(newSelection);
      }
    };

    const isAllSelected = data.length > 0 && selectedRows.length === data.length;
    const isIndeterminate = selectedRows.length > 0 && selectedRows.length < data.length;

    // Checkbox styles
    const checkboxStyles = {
      color: neutral[400],
      '&.Mui-checked': { color: Slate[600] },
      '&.MuiCheckbox-indeterminate': { color: Slate[600] },
    };

    // Loading state
    if (loading) {
      return (
        <StyledPaper>
          <StyledTableContainer ref={ref}>
            <StyledTable $variant={variant} $size={size} $hoverable={false} {...props}>
              <TableHead>
                <TableRow>
                  {selectable && <TableCell padding="checkbox" />}
                  {columns.map((column) => (
                    <TableCell key={column.id} align={column.align || 'left'} style={{ width: column.width }}>
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {[...Array(3)].map((_, index) => (
                  <TableRow key={index}>
                    {selectable && <TableCell padding="checkbox" />}
                    {columns.map((column) => (
                      <TableCell key={column.id}>
                        <Skeleton variant="text" width="80%" />
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </StyledTable>
          </StyledTableContainer>
        </StyledPaper>
      );
    }

    return (
      <StyledPaper>
        <StyledTableContainer ref={ref}>
          <StyledTable
            $variant={variant}
            $size={size}
            $hoverable={hoverable || !!onRowClick}
            {...props}
          >
            <TableHead>
              <TableRow>
                {selectable && (
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={isAllSelected}
                      indeterminate={isIndeterminate}
                      onChange={(e) => handleSelectAll(e.target.checked)}
                      sx={checkboxStyles}
                    />
                  </TableCell>
                )}
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align || 'left'}
                    style={{ width: column.width }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={columns.length + (selectable ? 1 : 0)}
                    align="center"
                    sx={{ py: 4 }}
                  >
                    <Typography variant="body" color="muted">
                      {emptyMessage}
                    </Typography>
                  </TableCell>
                </TableRow>
              ) : (
                data.map((row, index) => (
                  <TableRow
                    key={row.id}
                    onClick={onRowClick ? () => onRowClick(row, index) : undefined}
                    sx={{
                      cursor: onRowClick ? 'pointer' : 'default',
                    }}
                  >
                    {selectable && (
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={selectedRows.includes(row.id)}
                          onChange={(e) => handleSelectRow(row.id, e.target.checked)}
                          onClick={(e) => e.stopPropagation()}
                          sx={checkboxStyles}
                        />
                      </TableCell>
                    )}
                    {columns.map((column) => {
                      const value = getCellValue(row, column);
                      const displayValue = column.render
                        ? column.render(value, row, index)
                        : (value as React.ReactNode);

                      return (
                        <TableCell key={column.id} align={column.align || 'left'}>
                          {displayValue}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))
              )}
            </TableBody>
          </StyledTable>
        </StyledTableContainer>
      </StyledPaper>
    );
  }
);

Table.displayName = 'Table';

export { Table };
