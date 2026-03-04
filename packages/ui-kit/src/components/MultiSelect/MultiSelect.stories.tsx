import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { MultiSelect } from './MultiSelect.js';

/**
 * # MultiSelect
 *
 * A dropdown component that allows users to select multiple options.
 * Selected items are displayed as removable chips inside the input.
 *
 * ## When to Use
 *
 * - **Multiple selection required**: When users need to filter or select multiple items
 * - **Moderate option count**: When you have 5+ options (fewer options might work better as checkboxes)
 * - **Space constrained**: When you can't show all options at once
 *
 * ## When NOT to Use
 *
 * - **Single selection**: Use `Select` instead
 * - **2-4 always-visible options**: Use a `Checkbox` group instead
 * - **Hierarchical data**: Consider a tree select or nested menu
 *
 * ## Common Use Cases
 *
 * - Filtering tables by multiple statuses (Active, Pending, Inactive)
 * - Selecting multiple tags or categories
 * - Choosing multiple assignees or recipients
 * - Multi-criteria search filters
 */
const meta: Meta<typeof MultiSelect> = {
  title: 'Form/MultiSelect',
  component: MultiSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['outlined', 'filled'],
      description: 'Visual style variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'Size of the select input',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the select is disabled',
    },
    error: {
      control: 'boolean',
      description: 'Whether to show error state',
    },
    required: {
      control: 'boolean',
      description: 'Whether the field is required',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether to take full width of container',
    },
  },
};

export default meta;
type Story = StoryObj<typeof MultiSelect>;

const statusOptions = [
  { value: 'active', label: 'Active' },
  { value: 'onboarding', label: 'Onboarding' },
  { value: 'never_logged_in', label: 'Never Logged In' },
];

const categoryOptions = [
  { value: 'engineering', label: 'Engineering' },
  { value: 'design', label: 'Design' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'sales', label: 'Sales' },
  { value: 'support', label: 'Support' },
];

/**
 * Default MultiSelect with outlined variant.
 * Click to open dropdown and select multiple options.
 * Selected items appear as chips that can be removed by clicking the X.
 */
export const Default: Story = {
  render: function Render() {
    const [value, setValue] = useState<string[]>(['active']);
    return (
      <div style={{ width: 300 }}>
        <MultiSelect
          label="Status"
          placeholder="Select statuses"
          value={value}
          onChange={setValue}
          options={statusOptions}
        />
      </div>
    );
  },
};

/**
 * MultiSelect with multiple items selected.
 * Shows how chips wrap when multiple items are selected.
 */
export const MultipleSelected: Story = {
  render: function Render() {
    const [value, setValue] = useState<string[]>(['active', 'onboarding', 'never_logged_in']);
    return (
      <div style={{ width: 300 }}>
        <MultiSelect
          label="Status"
          placeholder="Select statuses"
          value={value}
          onChange={setValue}
          options={statusOptions}
        />
      </div>
    );
  },
};

/**
 * Empty state with placeholder text.
 * Shows what the component looks like when nothing is selected.
 */
export const EmptyWithPlaceholder: Story = {
  render: function Render() {
    const [value, setValue] = useState<string[]>([]);
    return (
      <div style={{ width: 300 }}>
        <MultiSelect
          label="Categories"
          placeholder="Select categories..."
          value={value}
          onChange={setValue}
          options={categoryOptions}
        />
      </div>
    );
  },
};

/**
 * With helper text providing additional context.
 */
export const WithHelperText: Story = {
  render: function Render() {
    const [value, setValue] = useState<string[]>(['engineering']);
    return (
      <div style={{ width: 300 }}>
        <MultiSelect
          label="Departments"
          placeholder="Select departments"
          helperText="Choose one or more departments to filter by"
          value={value}
          onChange={setValue}
          options={categoryOptions}
        />
      </div>
    );
  },
};

/**
 * Error state for validation feedback.
 * Shows red border and error-colored helper text.
 */
export const ErrorState: Story = {
  render: function Render() {
    const [value, setValue] = useState<string[]>([]);
    return (
      <div style={{ width: 300 }}>
        <MultiSelect
          label="Status"
          placeholder="Select statuses"
          error
          helperText="Please select at least one status"
          value={value}
          onChange={setValue}
          options={statusOptions}
        />
      </div>
    );
  },
};

/**
 * Required field with asterisk indicator.
 */
export const Required: Story = {
  render: function Render() {
    const [value, setValue] = useState<string[]>([]);
    return (
      <div style={{ width: 300 }}>
        <MultiSelect
          label="Status"
          placeholder="Select statuses"
          required
          value={value}
          onChange={setValue}
          options={statusOptions}
        />
      </div>
    );
  },
};

/**
 * Disabled state - cannot be interacted with.
 * Chips are displayed but cannot be removed.
 */
export const Disabled: Story = {
  render: function Render() {
    return (
      <div style={{ width: 300 }}>
        <MultiSelect
          label="Status"
          placeholder="Select statuses"
          disabled
          value={['active', 'onboarding']}
          onChange={() => {}}
          options={statusOptions}
        />
      </div>
    );
  },
};

/**
 * Small size variant for compact UIs.
 */
export const SmallSize: Story = {
  render: function Render() {
    const [value, setValue] = useState<string[]>(['active']);
    return (
      <div style={{ width: 300 }}>
        <MultiSelect
          label="Status"
          placeholder="Select statuses"
          size="sm"
          value={value}
          onChange={setValue}
          options={statusOptions}
        />
      </div>
    );
  },
};

/**
 * Filled variant with different background style.
 */
export const FilledVariant: Story = {
  render: function Render() {
    const [value, setValue] = useState<string[]>(['active']);
    return (
      <div style={{ width: 300 }}>
        <MultiSelect
          label="Status"
          placeholder="Select statuses"
          variant="filled"
          value={value}
          onChange={setValue}
          options={statusOptions}
        />
      </div>
    );
  },
};

/**
 * Full width variant that expands to fill container.
 */
export const FullWidth: Story = {
  render: function Render() {
    const [value, setValue] = useState<string[]>(['engineering', 'design']);
    return (
      <div style={{ width: 500 }}>
        <MultiSelect
          label="Departments"
          placeholder="Select departments"
          fullWidth
          value={value}
          onChange={setValue}
          options={categoryOptions}
        />
      </div>
    );
  },
};

/**
 * Options with some disabled.
 * Disabled options appear grayed out and cannot be selected.
 */
export const WithDisabledOptions: Story = {
  render: function Render() {
    const [value, setValue] = useState<string[]>(['active']);
    return (
      <div style={{ width: 300 }}>
        <MultiSelect
          label="Status"
          placeholder="Select statuses"
          value={value}
          onChange={setValue}
          options={[
            { value: 'active', label: 'Active' },
            { value: 'onboarding', label: 'Onboarding' },
            { value: 'never_logged_in', label: 'Never Logged In', disabled: true },
          ]}
        />
      </div>
    );
  },
};
