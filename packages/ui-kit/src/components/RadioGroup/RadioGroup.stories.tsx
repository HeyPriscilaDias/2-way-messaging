import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { RadioGroup } from './RadioGroup.js';
import { RadioOption } from './RadioGroup.types.js';

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# RadioGroup Component

A radio button group component with two distinct variants for different use cases.

## LLM USAGE GUIDE

### When to Use Each Variant

**Default Variant:**
- Simple choices with short labels (gender, yes/no, true/false)
- Multiple choice questions with 2-5 options
- Settings toggles where only label text is needed
- Form selections where space is limited
- Can be displayed horizontally with \`row\` prop

**Card Variant:**
- Rich choices that benefit from descriptions
- Plan or subscription selection
- Income brackets or demographic ranges with explanatory text
- Configuration options that need context
- Onboarding questions where clarity is important
- Always displays vertically (row prop ignored)

### Common Patterns

**Simple Form Selection (Default):**
\`\`\`tsx
<RadioGroup
  variant="default"
  label="Gender"
  options={[
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' }
  ]}
  value={gender}
  onChange={(e) => setGender(e.target.value)}
/>
\`\`\`

**Horizontal Layout (Default Only):**
\`\`\`tsx
<RadioGroup
  variant="default"
  row
  label="Is this correct?"
  options={[
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' }
  ]}
  value={answer}
  onChange={(e) => setAnswer(e.target.value)}
/>
\`\`\`

**Rich Selection with Descriptions (Card):**
\`\`\`tsx
<RadioGroup
  variant="card"
  label="Select a plan"
  options={[
    {
      value: 'basic',
      label: 'Basic',
      description: 'Perfect for individuals just getting started'
    },
    {
      value: 'pro',
      label: 'Professional',
      description: 'For teams and growing businesses'
    },
    {
      value: 'enterprise',
      label: 'Enterprise',
      description: 'Advanced features and dedicated support'
    }
  ]}
  value={plan}
  onChange={(e) => setPlan(e.target.value)}
/>
\`\`\`

**With Error State:**
\`\`\`tsx
<RadioGroup
  variant="default"
  label="Required field"
  options={options}
  value={value}
  onChange={(e) => setValue(e.target.value)}
  error={!value}
  helperText={!value ? 'Please select an option' : ''}
/>
\`\`\`

**With Disabled Options:**
\`\`\`tsx
<RadioGroup
  variant="card"
  options={[
    { value: 'option1', label: 'Available Option' },
    { value: 'option2', label: 'Unavailable Option', disabled: true, description: 'Coming soon' }
  ]}
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>
\`\`\`

## Props

- \`variant\`: 'default' | 'card' - Visual style of radio group
- \`options\`: Array of RadioOption objects
- \`label\`: Optional label for the entire group
- \`error\`: Boolean to show error state
- \`helperText\`: Help or error text below the group
- \`row\`: Boolean to display horizontally (default variant only)
- \`value\`: Currently selected value
- \`onChange\`: Handler for selection changes

## Accessibility

- Uses native HTML radio semantics
- Keyboard navigable with arrow keys
- Screen reader friendly with proper labels
- Error states announced to assistive technology
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'card'],
      description: 'Visual style of the radio group',
    },
    options: {
      control: 'object',
      description: 'Array of radio options',
    },
    label: {
      control: 'text',
      description: 'Label for the radio group',
    },
    error: {
      control: 'boolean',
      description: 'Shows error state',
    },
    helperText: {
      control: 'text',
      description: 'Helper or error text',
    },
    row: {
      control: 'boolean',
      description: 'Display horizontally (default variant only)',
    },
    value: {
      control: 'text',
      description: 'Selected value',
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultOptions: RadioOption[] = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const cardOptions: RadioOption[] = [
  {
    value: 'basic',
    label: 'Basic Plan',
    description: 'Perfect for individuals just getting started',
  },
  {
    value: 'pro',
    label: 'Professional Plan',
    description: 'For teams and growing businesses',
  },
  {
    value: 'enterprise',
    label: 'Enterprise Plan',
    description: 'Advanced features and dedicated support',
  },
];

export const DefaultVariant: Story = {
  args: {
    variant: 'default',
    options: defaultOptions,
    label: 'Choose an option',
  },
  render: (args) => {
    const [value, setValue] = useState('option1');
    return (
      <RadioGroup
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
};

export const DefaultHorizontal: Story = {
  args: {
    variant: 'default',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
      { value: 'maybe', label: 'Maybe' },
    ],
    label: 'Is this correct?',
    row: true,
  },
  render: (args) => {
    const [value, setValue] = useState('yes');
    return (
      <RadioGroup
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
};

export const CardVariant: Story = {
  args: {
    variant: 'card',
    options: cardOptions,
    label: 'Select a plan',
  },
  render: (args) => {
    const [value, setValue] = useState('basic');
    return (
      <RadioGroup
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
};

export const WithError: Story = {
  args: {
    variant: 'default',
    options: defaultOptions,
    label: 'Required field',
    error: true,
    helperText: 'Please select an option',
  },
  render: (args) => {
    const [value, setValue] = useState('');
    return (
      <RadioGroup
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        error={!value}
        helperText={!value ? 'Please select an option' : 'Selection confirmed'}
      />
    );
  },
};

export const WithDisabledOptions: Story = {
  args: {
    variant: 'default',
    options: [
      { value: 'option1', label: 'Available Option' },
      { value: 'option2', label: 'Disabled Option', disabled: true },
      { value: 'option3', label: 'Another Available Option' },
    ],
    label: 'Choose an available option',
  },
  render: (args) => {
    const [value, setValue] = useState('option1');
    return (
      <RadioGroup
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
};

export const CardWithDisabledOptions: Story = {
  args: {
    variant: 'card',
    options: [
      {
        value: 'free',
        label: 'Free Plan',
        description: 'Basic features for personal use',
      },
      {
        value: 'pro',
        label: 'Pro Plan',
        description: 'Professional features for growing teams',
      },
      {
        value: 'enterprise',
        label: 'Enterprise Plan',
        description: 'Contact sales for custom pricing',
        disabled: true,
      },
    ],
    label: 'Select your plan',
  },
  render: (args) => {
    const [value, setValue] = useState('free');
    return (
      <RadioGroup
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
};

export const GenderSelection: Story = {
  args: {
    variant: 'default',
    options: [
      { value: 'male', label: 'Male' },
      { value: 'female', label: 'Female' },
      { value: 'non-binary', label: 'Non-binary' },
      { value: 'prefer-not-to-say', label: 'Prefer not to say' },
    ],
    label: 'Gender',
  },
  render: (args) => {
    const [value, setValue] = useState('');
    return (
      <RadioGroup
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
};

export const IncomeBrackets: Story = {
  args: {
    variant: 'card',
    options: [
      {
        value: 'under-25k',
        label: 'Under $25,000',
        description: 'Annual household income below $25,000',
      },
      {
        value: '25k-50k',
        label: '$25,000 - $50,000',
        description: 'Annual household income between $25,000 and $50,000',
      },
      {
        value: '50k-100k',
        label: '$50,000 - $100,000',
        description: 'Annual household income between $50,000 and $100,000',
      },
      {
        value: 'over-100k',
        label: 'Over $100,000',
        description: 'Annual household income above $100,000',
      },
    ],
    label: 'Household Income',
  },
  render: (args) => {
    const [value, setValue] = useState('');
    return (
      <RadioGroup
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
};
