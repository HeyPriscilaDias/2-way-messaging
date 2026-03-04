/**
 * LLM USAGE GUIDE - Select
 *
 * WHEN TO USE THIS COMPONENT:
 * - Use Select for choosing a single option from a list of choices
 * - NEVER use MUI Select directly - always use this component
 * - For multiple selections, consider using Checkbox groups instead
 * - For fewer than 5 options, consider using RadioGroup instead
 * - For type-ahead/search, consider using Autocomplete (when available)
 *
 * VARIANT SELECTION:
 * - outlined (default): Standard forms, settings, user input
 *   - Use for most form fields
 *   - Provides clear visual boundary
 *   - Best for data entry contexts
 *
 * - filled: Search, filters, compact UIs
 *   - Use in toolbars, search bars, filter panels
 *   - More subtle appearance
 *   - Good for secondary controls
 *
 * SIZE SELECTION:
 * - sm (small): Compact UIs, tables, inline forms
 *   - Height: 36px
 *   - Use when space is limited
 *   - Good for data grids or repeated controls
 *
 * - md (medium, default): Standard forms, dialogs
 *   - Height: 44px
 *   - Use for most form contexts
 *   - Provides good touch target size
 *
 * LABEL VS PLACEHOLDER:
 * - label: Persistent field identifier that moves above when focused
 *   - Use for form fields that need clear, permanent labels
 *   - Required for accessibility
 *   - Example: <Select label="Country" ... />
 *
 * - placeholder: Shown inside empty select, disappears when value selected
 *   - Use for providing hints about what to select
 *   - Don't use as replacement for label (accessibility issue)
 *   - Example: <Select placeholder="Choose a country..." ... />
 *
 * - Both together: Label for identification, placeholder for guidance
 *   - Example: <Select label="Country" placeholder="Select your country..." ... />
 *
 * COMMON PATTERNS:
 * ```tsx
 * // Standard form field
 * <Select
 *   variant="outlined"
 *   size="md"
 *   label="Country"
 *   options={countryOptions}
 *   value={selectedCountry}
 *   onChange={(e) => setSelectedCountry(e.target.value)}
 *   fullWidth
 * />
 *
 * // Filter dropdown (toolbar/search context)
 * <Select
 *   variant="filled"
 *   size="sm"
 *   placeholder="Status"
 *   options={statusOptions}
 *   value={statusFilter}
 *   onChange={(e) => setStatusFilter(e.target.value)}
 * />
 *
 * // With validation error
 * <Select
 *   label="Grade Level"
 *   options={gradeOptions}
 *   value={grade}
 *   onChange={(e) => setGrade(e.target.value)}
 *   error={!!errors.grade}
 *   helperText={errors.grade || "Select student's current grade"}
 *   fullWidth
 * />
 *
 * // Disabled option example
 * const options = [
 *   { value: 'active', label: 'Active' },
 *   { value: 'pending', label: 'Pending' },
 *   { value: 'archived', label: 'Archived', disabled: true },
 * ];
 * ```
 *
 * COMMON USE CASES:
 * - Country/State/Region selectors
 * - Grade level selection
 * - Status filters (Active/Inactive/All)
 * - Role assignment dropdowns
 * - Category selection
 * - Time period selection (Year, Month, etc.)
 * - Sort order controls
 *
 * OPTIONS FORMAT:
 * ```tsx
 * const options: SelectOption[] = [
 *   { value: 'us', label: 'United States' },
 *   { value: 'ca', label: 'Canada' },
 *   { value: 'uk', label: 'United Kingdom' },
 * ];
 * ```
 *
 * ACCESSIBILITY:
 * - Always provide a label for form fields
 * - Use helperText for additional guidance or errors
 * - Ensure option labels are descriptive
 * - Consider keyboard navigation (built-in to MUI Select)
 * - For long lists (>20 items), consider adding search functionality
 *
 * FORM INTEGRATION:
 * ```tsx
 * // With React Hook Form
 * <Controller
 *   name="country"
 *   control={control}
 *   render={({ field, fieldState: { error } }) => (
 *     <Select
 *       {...field}
 *       label="Country"
 *       options={countryOptions}
 *       error={!!error}
 *       helperText={error?.message}
 *       fullWidth
 *     />
 *   )}
 * />
 * ```
 *
 * WHEN UPDATING THIS FILE:
 * - Add new stories for patterns discovered in production
 * - Keep variant/size guidance accurate
 * - Add examples showing real Willow use cases
 * - Update accessibility notes based on user feedback
 */
import type { Meta, StoryObj } from '@storybook/react';
import { Box, Typography as MuiTypography } from '@mui/material';
import { Select } from './Select.js';
import { SelectOption } from './Select.types.js';
import { useState } from 'react';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      options: ['outlined', 'filled'],
      control: { type: 'radio' },
      description: 'Visual style variant of the select',
    },
    size: {
      options: ['sm', 'md'],
      control: { type: 'radio' },
      description: 'Size of the select',
    },
    label: {
      control: { type: 'text' },
      description: 'Label displayed above the select',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text when no value is selected',
    },
    helperText: {
      control: { type: 'text' },
      description: 'Helper text displayed below the select',
    },
    error: {
      control: { type: 'boolean' },
      description: 'Whether the select is in an error state',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the select is disabled',
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Whether the select takes full width of container',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data
const countryOptions: SelectOption[] = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'au', label: 'Australia' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
  { value: 'jp', label: 'Japan' },
];

const statusOptions: SelectOption[] = [
  { value: 'all', label: 'All' },
  { value: 'active', label: 'Active' },
  { value: 'pending', label: 'Pending' },
  { value: 'inactive', label: 'Inactive' },
];

const gradeOptions: SelectOption[] = [
  { value: '9', label: '9th Grade' },
  { value: '10', label: '10th Grade' },
  { value: '11', label: '11th Grade' },
  { value: '12', label: '12th Grade' },
];

const optionsWithDisabled: SelectOption[] = [
  { value: 'option1', label: 'Available Option 1' },
  { value: 'option2', label: 'Available Option 2' },
  { value: 'option3', label: 'Disabled Option', disabled: true },
  { value: 'option4', label: 'Available Option 3' },
];

// Basic variants
export const OutlinedMedium: Story = {
  args: {
    variant: 'outlined',
    size: 'md',
    label: 'Country',
    options: countryOptions,
    placeholder: 'Select a country',
  },
};

export const OutlinedSmall: Story = {
  args: {
    variant: 'outlined',
    size: 'sm',
    label: 'Country',
    options: countryOptions,
    placeholder: 'Select a country',
  },
};

export const FilledMedium: Story = {
  args: {
    variant: 'filled',
    size: 'md',
    label: 'Status',
    options: statusOptions,
    placeholder: 'Filter by status',
  },
};

export const FilledSmall: Story = {
  args: {
    variant: 'filled',
    size: 'sm',
    options: statusOptions,
    placeholder: 'Filter by status',
  },
};

// States
export const WithValue: Story = {
  args: {
    label: 'Country',
    options: countryOptions,
    value: 'us',
  },
};

export const WithError: Story = {
  args: {
    label: 'Grade Level',
    options: gradeOptions,
    error: true,
    helperText: 'Please select a grade level',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Country',
    options: countryOptions,
    helperText: 'Select your current country of residence',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Country',
    options: countryOptions,
    value: 'us',
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Country',
    options: countryOptions,
    fullWidth: true,
  },
  decorators: [
    (Story) => (
      <Box sx={{ width: '400px' }}>
        <Story />
      </Box>
    ),
  ],
};

export const DisabledOptions: Story = {
  args: {
    label: 'Options',
    options: optionsWithDisabled,
    placeholder: 'Select an option',
  },
};

// Interactive demos
export const AllVariantsAndSizes: Story = {
  render: () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('');

    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '400px' }}>
        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>Outlined Variant</MuiTypography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Select
              variant="outlined"
              size="md"
              label="Medium Size"
              options={countryOptions}
              placeholder="Select a country"
              value={value1}
              onChange={(e) => setValue1(e.target.value as string)}
              fullWidth
            />
            <Select
              variant="outlined"
              size="sm"
              label="Small Size"
              options={countryOptions}
              placeholder="Select a country"
              value={value2}
              onChange={(e) => setValue2(e.target.value as string)}
              fullWidth
            />
          </Box>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>Filled Variant</MuiTypography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Select
              variant="filled"
              size="md"
              placeholder="Filter by status (medium)"
              options={statusOptions}
              value={value3}
              onChange={(e) => setValue3(e.target.value as string)}
              fullWidth
            />
            <Select
              variant="filled"
              size="sm"
              placeholder="Filter by status (small)"
              options={statusOptions}
              value={value4}
              onChange={(e) => setValue4(e.target.value as string)}
              fullWidth
            />
          </Box>
        </Box>
      </Box>
    );
  },
  parameters: {
    controls: { disable: true },
  },
};

export const FormExample: Story = {
  render: () => {
    const [country, setCountry] = useState('');
    const [grade, setGrade] = useState('');
    const [status, setStatus] = useState('active');
    const [showErrors, setShowErrors] = useState(false);

    const handleSubmit = () => {
      setShowErrors(true);
      if (country && grade) {
        alert(`Form submitted:\nCountry: ${country}\nGrade: ${grade}\nStatus: ${status}`);
      }
    };

    return (
      <Box sx={{ width: '400px' }}>
        <MuiTypography variant="h6" sx={{ mb: 3 }}>Student Information Form</MuiTypography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Select
            label="Country"
            options={countryOptions}
            placeholder="Select your country"
            value={country}
            onChange={(e) => setCountry(e.target.value as string)}
            error={showErrors && !country}
            helperText={showErrors && !country ? 'Country is required' : 'Select your country of residence'}
            fullWidth
          />

          <Select
            label="Grade Level"
            options={gradeOptions}
            placeholder="Select your grade"
            value={grade}
            onChange={(e) => setGrade(e.target.value as string)}
            error={showErrors && !grade}
            helperText={showErrors && !grade ? 'Grade level is required' : undefined}
            fullWidth
          />

          <Select
            label="Status"
            options={statusOptions}
            value={status}
            onChange={(e) => setStatus(e.target.value as string)}
            helperText="Current enrollment status"
            fullWidth
          />

          <Box sx={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', mt: 2 }}>
            <button onClick={() => { setCountry(''); setGrade(''); setStatus('active'); setShowErrors(false); }}>
              Reset
            </button>
            <button onClick={handleSubmit}>
              Submit
            </button>
          </Box>
        </Box>
      </Box>
    );
  },
  parameters: {
    controls: { disable: true },
  },
};

export const FilterToolbarExample: Story = {
  render: () => {
    const [status, setStatus] = useState('all');
    const [grade, setGrade] = useState('');

    return (
      <Box sx={{ width: '600px' }}>
        <MuiTypography variant="h6" sx={{ mb: 2 }}>Student List Filters</MuiTypography>
        <Box sx={{ display: 'flex', gap: '12px', alignItems: 'center', p: 2, bgcolor: '#f5f5f5', borderRadius: '8px' }}>
          <Select
            variant="filled"
            size="sm"
            placeholder="Status"
            options={statusOptions}
            value={status}
            onChange={(e) => setStatus(e.target.value as string)}
            sx={{ minWidth: '150px' }}
          />

          <Select
            variant="filled"
            size="sm"
            placeholder="Grade"
            options={gradeOptions}
            value={grade}
            onChange={(e) => setGrade(e.target.value as string)}
            sx={{ minWidth: '150px' }}
          />

          <MuiTypography variant="body2" sx={{ ml: 'auto', color: '#717680' }}>
            {status !== 'all' || grade ? 'Filters active' : 'No filters'}
          </MuiTypography>
        </Box>
      </Box>
    );
  },
  parameters: {
    controls: { disable: true },
  },
};
