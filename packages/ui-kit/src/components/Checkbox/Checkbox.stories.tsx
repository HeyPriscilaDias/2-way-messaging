import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox.js';
import { Box, Stack } from '@mui/material';
import { useState } from 'react';

/**
 * LLM USAGE GUIDE - Checkbox Component
 *
 * WHEN TO USE:
 * - Binary on/off choices in forms (agree to terms, enable notifications)
 * - Multiple independent selections (filter options, feature toggles)
 * - Table row selection (single or bulk select)
 * - Settings panels (enable/disable features)
 *
 * WHEN NOT TO USE:
 * - Mutually exclusive options → Use Radio buttons instead
 * - Single binary choice that triggers immediate action → Use Switch instead
 * - Selecting from a large list → Consider dropdown or multi-select
 *
 * COMMON PATTERNS:
 *
 * 1. Form Agreement:
 *    <Checkbox
 *      label="I agree to the terms and conditions"
 *      required
 *    />
 *
 * 2. Filter Toggles:
 *    <Checkbox
 *      label="Show archived items"
 *      checked={showArchived}
 *      onChange={(e) => setShowArchived(e.target.checked)}
 *    />
 *
 * 3. Table Row Selection:
 *    <Checkbox
 *      checked={isSelected}
 *      onChange={handleSelect}
 *      size="sm"
 *    />
 *
 * 4. Select All (Indeterminate State):
 *    <Checkbox
 *      checked={allSelected}
 *      indeterminate={someSelected}
 *      onChange={handleSelectAll}
 *      label="Select all"
 *    />
 *
 * 5. Form with Validation:
 *    <Checkbox
 *      label="Required field"
 *      error={hasError}
 *      helperText="You must check this box to continue"
 *      required
 *    />
 *
 * SIZE SELECTION:
 * - `sm` (16px): Use in tables, compact lists, tight spaces
 * - `md` (20px): Use in forms, settings, standard layouts (default)
 *
 * LABEL HANDLING:
 * - With `label` prop: Component wraps checkbox in FormControlLabel automatically
 * - Without `label` prop: Returns bare checkbox (for custom layouts)
 * - For complex labels with links/formatting: Omit label prop and wrap manually:
 *   <FormControlLabel
 *     control={<Checkbox />}
 *     label={<span>I agree to <Link>terms</Link></span>}
 *   />
 *
 * ERROR STATE:
 * - Use `error={true}` to show error styling (red border)
 * - Combine with `helperText` to explain the error
 * - Typically used with form validation
 *
 * INDETERMINATE STATE:
 * - Used for "select all" when some (but not all) items are selected
 * - Shows a dash icon instead of checkmark
 * - Set `indeterminate={true}` and `checked={false}`
 *
 * ACCESSIBILITY:
 * - Always provide label for screen readers (via label prop or aria-label)
 * - Use helperText for additional context
 * - Supports keyboard navigation (Space to toggle)
 * - Use `required` prop for required form fields
 */

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'Checkbox label',
  },
};

export const WithoutLabel: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    label: 'Checked checkbox',
    defaultChecked: true,
  },
};

export const Indeterminate: Story = {
  args: {
    label: 'Indeterminate state (select all)',
    indeterminate: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled checkbox',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled checked',
    disabled: true,
    checked: true,
  },
};

export const Error: Story = {
  args: {
    label: 'Checkbox with error',
    error: true,
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'I agree to the terms and conditions',
    helperText: 'You must agree to continue',
  },
};

export const ErrorWithHelperText: Story = {
  args: {
    label: 'Required field',
    error: true,
    helperText: 'This field is required',
  },
};

export const Sizes: Story = {
  render: () => (
    <Stack spacing={2}>
      <Checkbox size="sm" label="Small (16px) - for tables and compact layouts" />
      <Checkbox size="md" label="Medium (20px) - for forms and standard layouts (default)" />
    </Stack>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    const [items, setItems] = useState([
      { id: 1, label: 'Item 1', checked: false },
      { id: 2, label: 'Item 2', checked: false },
      { id: 3, label: 'Item 3', checked: false },
    ]);

    const allChecked = items.every(item => item.checked);
    const someChecked = items.some(item => item.checked) && !allChecked;

    const handleSelectAll = () => {
      const newState = !allChecked;
      setItems(items.map(item => ({ ...item, checked: newState })));
    };

    const handleToggleItem = (id: number) => {
      setItems(items.map(item =>
        item.id === id ? { ...item, checked: !item.checked } : item
      ));
    };

    return (
      <Stack spacing={3}>
        <Box>
          <Checkbox
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            label="Single checkbox example"
          />
        </Box>

        <Box>
          <Box sx={{ mb: 1, pb: 1, borderBottom: '1px solid #e0e0e0' }}>
            <Checkbox
              checked={allChecked}
              indeterminate={someChecked}
              onChange={handleSelectAll}
              label="Select all items"
              size="sm"
            />
          </Box>
          <Stack spacing={0.5} sx={{ pl: 2 }}>
            {items.map(item => (
              <Checkbox
                key={item.id}
                checked={item.checked}
                onChange={() => handleToggleItem(item.id)}
                label={item.label}
                size="sm"
              />
            ))}
          </Stack>
        </Box>
      </Stack>
    );
  },
};

export const FormExample: Story = {
  render: () => {
    const [agreed, setAgreed] = useState(false);
    const [newsletter, setNewsletter] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const hasError = submitted && !agreed;

    return (
      <Box sx={{ maxWidth: 400 }}>
        <Stack spacing={2}>
          <Checkbox
            label="I agree to the terms and conditions"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            error={hasError}
            helperText={hasError ? 'You must agree to continue' : undefined}
          />
          <Checkbox
            label="Subscribe to newsletter (optional)"
            checked={newsletter}
            onChange={(e) => setNewsletter(e.target.checked)}
          />
          <Box>
            <button
              onClick={() => setSubmitted(true)}
              style={{
                padding: '8px 16px',
                backgroundColor: '#1976d2',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Submit
            </button>
          </Box>
          {submitted && agreed && (
            <Box sx={{ color: 'green', fontSize: '14px' }}>
              Form submitted successfully!
            </Box>
          )}
        </Stack>
      </Box>
    );
  },
};

export const TableSelection: Story = {
  render: () => {
    const [selectedRows, setSelectedRows] = useState<number[]>([]);
    const rows = [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
      { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
    ];

    const allSelected = selectedRows.length === rows.length;
    const someSelected = selectedRows.length > 0 && !allSelected;

    const handleSelectAll = () => {
      setSelectedRows(allSelected ? [] : rows.map(r => r.id));
    };

    const handleToggleRow = (id: number) => {
      setSelectedRows(prev =>
        prev.includes(id)
          ? prev.filter(rowId => rowId !== id)
          : [...prev, id]
      );
    };

    return (
      <Box sx={{ width: '100%', maxWidth: 600 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f5f5f5' }}>
              <th style={{ padding: '8px', textAlign: 'left', width: '40px' }}>
                <Checkbox
                  size="sm"
                  checked={allSelected}
                  indeterminate={someSelected}
                  onChange={handleSelectAll}
                />
              </th>
              <th style={{ padding: '8px', textAlign: 'left' }}>Name</th>
              <th style={{ padding: '8px', textAlign: 'left' }}>Email</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(row => (
              <tr key={row.id} style={{ borderTop: '1px solid #e0e0e0' }}>
                <td style={{ padding: '8px' }}>
                  <Checkbox
                    size="sm"
                    checked={selectedRows.includes(row.id)}
                    onChange={() => handleToggleRow(row.id)}
                  />
                </td>
                <td style={{ padding: '8px' }}>{row.name}</td>
                <td style={{ padding: '8px' }}>{row.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {selectedRows.length > 0 && (
          <Box sx={{ mt: 2, fontSize: '14px', color: '#666' }}>
            {selectedRows.length} row(s) selected
          </Box>
        )}
      </Box>
    );
  },
};
