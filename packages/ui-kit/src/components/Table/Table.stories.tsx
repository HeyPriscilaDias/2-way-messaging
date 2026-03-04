/**
 * LLM USAGE GUIDE - Table
 *
 * WHEN TO USE THIS COMPONENT:
 * - Use Table for displaying structured data in rows and columns
 * - NEVER use MUI Table directly - always use this component
 * - For simple lists, consider using Card components instead
 *
 * VARIANT SELECTION:
 * - default: Clean table without row alternation
 * - striped: Alternating row colors for better readability in dense data
 *
 * SIZE SELECTION:
 * - sm: Compact tables, dense data (8px/12px padding, 13px font)
 * - md: Standard tables (12px/16px padding, 14px font)
 *
 * COLUMN CONFIGURATION:
 * - id: Unique identifier (required)
 * - label: Header text
 * - accessor: Key or function to get cell value
 * - width: Fixed column width
 * - align: Text alignment ('left', 'center', 'right')
 * - render: Custom render function for cell content
 *
 * COMMON USE CASES:
 * - Data listing -> default variant, sm size
 * - Admin dashboards -> striped variant, md size, selectable
 * - Report tables -> striped variant, md size
 * - Interactive lists -> hoverable, with onRowClick
 *
 * COMMON PATTERNS:
 * ```tsx
 * // Basic table
 * const columns = [
 *   { id: 'name', label: 'Name', accessor: 'name' },
 *   { id: 'email', label: 'Email', accessor: 'email' },
 * ];
 * <Table columns={columns} data={users} />
 *
 * // With custom cell rendering
 * const columns = [
 *   { id: 'name', label: 'Name', accessor: 'name' },
 *   {
 *     id: 'status',
 *     label: 'Status',
 *     render: (value) => <Chip color={value === 'active' ? 'success' : 'gray'} label={value} />
 *   },
 * ];
 *
 * // Selectable table
 * const [selected, setSelected] = useState([]);
 * <Table
 *   columns={columns}
 *   data={items}
 *   selectable
 *   selectedRows={selected}
 *   onSelectionChange={setSelected}
 * />
 *
 * // Clickable rows
 * <Table
 *   columns={columns}
 *   data={items}
 *   onRowClick={(row) => navigate(`/details/${row.id}`)}
 * />
 * ```
 *
 * LOADING STATE:
 * - Set loading={true} to show skeleton rows
 * - Shows 3 skeleton rows by default
 *
 * EMPTY STATE:
 * - Set emptyMessage to customize the empty state text
 * - Default: "No data available"
 *
 * ACCESSIBILITY:
 * - Tables use semantic HTML (table, thead, tbody, tr, th, td)
 * - Checkboxes have proper labels via context
 * - Clickable rows have pointer cursor
 *
 * WHEN UPDATING THIS FILE:
 * - Add new stories for new use cases discovered in the frontend
 * - Keep comments updated when variants change
 * - Add examples that would help an LLM understand context
 */
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Box } from '@mui/material';
import { Table } from './Table.js';
import { TableColumn } from './Table.types.js';
import { Chip } from '../Chip/index.js';
import { TextButton } from '../Buttons/index.js';

// Sample data type
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
}

// Sample data
const sampleData: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'active' },
  { id: 3, name: 'Bob Wilson', email: 'bob@example.com', role: 'Viewer', status: 'inactive' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Editor', status: 'active' },
  { id: 5, name: 'Charlie Davis', email: 'charlie@example.com', role: 'Viewer', status: 'inactive' },
];

// Basic columns
const basicColumns: TableColumn<User>[] = [
  { id: 'name', label: 'Name', accessor: 'name', width: '150px' },
  { id: 'email', label: 'Email', accessor: 'email' },
  { id: 'role', label: 'Role', accessor: 'role', width: '100px' },
  { id: 'status', label: 'Status', accessor: 'status', width: '100px' },
];

// Columns with custom rendering
const customColumns: TableColumn<User>[] = [
  { id: 'name', label: 'Name', accessor: 'name', width: '150px' },
  { id: 'email', label: 'Email', accessor: 'email' },
  { id: 'role', label: 'Role', accessor: 'role', width: '100px' },
  {
    id: 'status',
    label: 'Status',
    accessor: 'status',
    width: '120px',
    render: (value) => (
      <Chip
        color={value === 'active' ? 'success' : 'gray'}
        label={value as string}
        size="small"
      />
    ),
  },
];

// Columns with actions
const actionColumns: TableColumn<User>[] = [
  { id: 'name', label: 'Name', accessor: 'name', width: '150px' },
  { id: 'email', label: 'Email', accessor: 'email' },
  {
    id: 'actions',
    label: 'Actions',
    align: 'right',
    width: '150px',
    render: (_, row) => (
      <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
        <TextButton variant="ghost" size="sm" onClick={() => console.log('Edit', row)}>
          Edit
        </TextButton>
        <TextButton variant="critical" size="sm" onClick={() => console.log('Delete', row)}>
          Delete
        </TextButton>
      </Box>
    ),
  },
];

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      options: ['default', 'striped'],
      control: { type: 'radio' },
      description: 'Visual variant of the table',
    },
    size: {
      options: ['sm', 'md'],
      control: { type: 'radio' },
      description: 'Size of table cells',
    },
    selectable: {
      control: { type: 'boolean' },
      description: 'Enable row selection',
    },
    hoverable: {
      control: { type: 'boolean' },
      description: 'Enable hover effect on rows',
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Show loading skeleton',
    },
    emptyMessage: {
      control: { type: 'text' },
      description: 'Message shown when no data',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic variants
export const Default: Story = {
  args: {
    columns: basicColumns,
    data: sampleData,
    variant: 'default',
    size: 'md',
  },
};

export const Striped: Story = {
  args: {
    columns: basicColumns,
    data: sampleData,
    variant: 'striped',
    size: 'md',
  },
};

// Sizes
export const Small: Story = {
  args: {
    columns: basicColumns,
    data: sampleData,
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    columns: basicColumns,
    data: sampleData,
    size: 'md',
  },
};

// Features
export const WithCustomRendering: Story = {
  args: {
    columns: customColumns,
    data: sampleData,
    variant: 'striped',
  },
};

export const WithActions: Story = {
  args: {
    columns: actionColumns,
    data: sampleData,
  },
};

export const Hoverable: Story = {
  args: {
    columns: basicColumns,
    data: sampleData,
    hoverable: true,
  },
};

export const ClickableRows: Story = {
  args: {
    columns: basicColumns,
    data: sampleData,
    onRowClick: (row) => console.log('Clicked:', row),
  },
};

// Selectable table with state
const SelectableTable = () => {
  const [selectedRows, setSelectedRows] = useState<(string | number)[]>([]);

  return (
    <Box>
      <Box sx={{ mb: 2 }}>
        Selected: {selectedRows.length === 0 ? 'None' : selectedRows.join(', ')}
      </Box>
      <Table
        columns={customColumns}
        data={sampleData}
        selectable
        selectedRows={selectedRows}
        onSelectionChange={setSelectedRows}
        variant="striped"
      />
    </Box>
  );
};

export const Selectable: Story = {
  render: () => <SelectableTable />,
  parameters: {
    controls: { disable: true },
  },
};

// States
export const Loading: Story = {
  args: {
    columns: basicColumns,
    data: [],
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    columns: basicColumns,
    data: [],
    emptyMessage: 'No users found',
  },
};

export const CustomEmptyMessage: Story = {
  args: {
    columns: basicColumns,
    data: [],
    emptyMessage: 'No results match your search criteria',
  },
};

// All variants comparison
export const AllVariants: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Box>
        <Box sx={{ mb: 1, fontWeight: 600 }}>Default Variant</Box>
        <Table columns={basicColumns} data={sampleData.slice(0, 3)} variant="default" />
      </Box>
      <Box>
        <Box sx={{ mb: 1, fontWeight: 600 }}>Striped Variant</Box>
        <Table columns={basicColumns} data={sampleData.slice(0, 3)} variant="striped" />
      </Box>
    </Box>
  ),
  parameters: {
    controls: { disable: true },
  },
};

export const AllSizes: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Box>
        <Box sx={{ mb: 1, fontWeight: 600 }}>Small Size</Box>
        <Table columns={basicColumns} data={sampleData.slice(0, 3)} size="sm" />
      </Box>
      <Box>
        <Box sx={{ mb: 1, fontWeight: 600 }}>Medium Size</Box>
        <Table columns={basicColumns} data={sampleData.slice(0, 3)} size="md" />
      </Box>
    </Box>
  ),
  parameters: {
    controls: { disable: true },
  },
};
