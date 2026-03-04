import { TableProps as MuiTableProps } from '@mui/material';
import { ReactNode } from 'react';
/**
 * Table variant types
 */
export type TableVariant = 'default' | 'striped';
/**
 * Table size types
 */
export type TableSize = 'sm' | 'md';
/**
 * Column definition for Table
 */
export interface TableColumn<T = Record<string, unknown>> {
    /** Unique identifier for the column */
    id: string;
    /** Header label displayed in the column */
    label: string;
    /** Key or function to access the cell value */
    accessor?: keyof T | ((row: T) => unknown);
    /** Column width */
    width?: string | number;
    /** Text alignment */
    align?: 'left' | 'center' | 'right';
    /** Custom render function for cell content */
    render?: (value: unknown, row: T, index: number) => ReactNode;
}
/**
 * Row data type - must have an id property
 */
export interface TableRow {
    id: string | number;
    [key: string]: unknown;
}
/**
 * Props for the Table component
 */
export interface TableProps<T extends TableRow = TableRow> extends Omit<MuiTableProps, 'size'> {
    /** Visual variant of the table */
    variant?: TableVariant;
    /** Size of the table cells */
    size?: TableSize;
    /** Column definitions */
    columns: TableColumn<T>[];
    /** Data rows */
    data: T[];
    /** Enable row selection with checkboxes */
    selectable?: boolean;
    /** Currently selected row IDs */
    selectedRows?: (string | number)[];
    /** Callback when selection changes */
    onSelectionChange?: (selectedIds: (string | number)[]) => void;
    /** Callback when a row is clicked */
    onRowClick?: (row: T, index: number) => void;
    /** Enable hover effect on rows */
    hoverable?: boolean;
    /** Show loading skeleton */
    loading?: boolean;
    /** Message to display when no data */
    emptyMessage?: string;
}
//# sourceMappingURL=Table.types.d.ts.map