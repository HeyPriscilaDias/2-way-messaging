import React from 'react';
import { PaperProps, TableContainerProps, TableProps as MuiTableProps } from '@mui/material';
import { TableVariant, TableSize } from './Table.types.js';
interface StyledTableContainerProps extends TableContainerProps {
    $variant?: TableVariant;
}
interface StyledTableProps extends MuiTableProps {
    $variant?: TableVariant;
    $size?: TableSize;
    $hoverable?: boolean;
}
export declare const StyledPaper: React.ComponentType<PaperProps>;
export declare const StyledTableContainer: React.ComponentType<StyledTableContainerProps>;
export declare const StyledTable: React.ComponentType<StyledTableProps>;
export {};
//# sourceMappingURL=Table.styled.d.ts.map