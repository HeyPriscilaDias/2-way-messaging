/**
 * LLM USAGE GUIDE - Chip
 *
 * WHEN TO USE THIS COMPONENT:
 * - Use Chip for status indicators, tags, labels, and badges
 * - NEVER use MUI Chip directly - always use this component
 * - For buttons, use TextButton or IconButton instead
 *
 * COLOR SELECTION - Standard Colors:
 * - success: Completed, approved, active, enabled
 * - error: Failed, rejected, blocked, expired
 * - warning: Pending, needs attention, expiring soon
 * - info: Informational, in progress, processing
 * - primary: Default emphasis, general tags
 * - secondary: Subtle emphasis, less important tags
 *
 * COLOR SELECTION - Willow Custom Colors:
 * - gray: Neutral/inactive states
 * - mint: Willow brand accent
 * - lightPink, lightBlue, lightOrange, lightGreen, lightPurple: Category tags
 *
 * COLOR SELECTION - College Level Colors (domain-specific):
 * - safetyLevelColor: Safety school indicator
 * - targetLevelColor: Target school indicator
 * - reachLevelColor: Reach school indicator
 * - farReachLevelColor: Far reach school indicator
 *
 * VARIANT SELECTION:
 * - filled (default): Strong emphasis, primary status display
 * - outlined: Subtle emphasis, secondary information
 *
 * SIZE SELECTION:
 * - small (default): Most common, compact
 * - medium: Standard size
 * - large: High emphasis, standalone tags
 *
 * COMMON USE CASES:
 * - Application status → success/error/warning/info
 * - User roles/permissions → primary/secondary
 * - Categories/tags → light colors (lightBlue, lightGreen, etc.)
 * - School recommendations → level colors
 *
 * COMMON PATTERNS:
 * ```tsx
 * // Status indicator
 * <Chip color="success" label="Approved" />
 * <Chip color="warning" label="Pending Review" />
 * <Chip color="error" label="Rejected" />
 *
 * // Category tags
 * <Chip color="lightBlue" label="Science" />
 * <Chip color="lightGreen" label="Math" />
 *
 * // Removable tag
 * <Chip
 *   color="primary"
 *   label="Selected Item"
 *   onDelete={() => handleRemove(item)}
 * />
 *
 * // Clickable filter chip
 * <Chip
 *   color={isActive ? "primary" : "gray"}
 *   label="Filter Option"
 *   clickable
 *   onClick={() => toggleFilter()}
 * />
 * ```
 *
 * ACCESSIBILITY:
 * - Use descriptive labels
 * - For status chips, ensure color isn't the only indicator
 * - Deletable chips should have clear delete action
 *
 * WHEN UPDATING THIS FILE:
 * - Add new stories for new use cases discovered in the frontend
 * - Keep comments updated when variants change
 * - Add examples that would help an LLM understand context
 */
import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@mui/material';
import { Chip } from './Chip.js';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    color: {
      options: [
        'primary',
        'secondary',
        'error',
        'warning',
        'success',
        'info',
        'gray',
        'mint',
        'lightPink',
        'lightBlue',
        'lightOrange',
        'lightGreen',
        'lightPurple',
        'safetyLevelColor',
        'targetLevelColor',
        'reachLevelColor',
        'farReachLevelColor'
      ],
      control: { type: 'select' },
      description: 'The color variant of the chip',
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
      description: 'The size of the chip',
    },
    variant: {
      options: ['filled', 'outlined'],
      control: { type: 'radio' },
      description: 'The visual style variant of the chip',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the chip is disabled',
    },
    clickable: {
      control: { type: 'boolean' },
      description: 'Whether the chip is clickable',
    },
    deletable: {
      control: { type: 'boolean' },
      description: 'Whether the chip shows a delete icon',
    },
    label: {
      control: { type: 'text' },
      description: 'The content of the chip',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic variants
export const Primary: Story = {
  args: {
    label: 'Primary Chip',
    color: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Chip',
    color: 'secondary',
  },
};

export const Success: Story = {
  args: {
    label: 'Success Chip',
    color: 'success',
  },
};

export const Error: Story = {
  args: {
    label: 'Error Chip',
    color: 'error',
  },
};

export const Warning: Story = {
  args: {
    label: 'Warning Chip',
    color: 'warning',
  },
};

// Willow custom colors
export const Gray: Story = {
  args: {
    label: 'Gray Chip',
    color: 'gray',
  },
};

export const Mint: Story = {
  args: {
    label: 'Mint Chip',
    color: 'mint',
  },
};

export const LightPink: Story = {
  args: {
    label: 'Light Pink',
    color: 'lightPink',
  },
};

export const LightBlue: Story = {
  args: {
    label: 'Light Blue',
    color: 'lightBlue',
  },
};

export const LightOrange: Story = {
  args: {
    label: 'Light Orange',
    color: 'lightOrange',
  },
};

export const LightGreen: Story = {
  args: {
    label: 'Light Green',
    color: 'lightGreen',
  },
};

export const LightPurple: Story = {
  args: {
    label: 'Light Purple',
    color: 'lightPurple',
  },
};

// College recommendation level colors
export const SafetyLevel: Story = {
  args: {
    label: 'Safety School',
    color: 'safetyLevelColor',
  },
};

export const TargetLevel: Story = {
  args: {
    label: 'Target School',
    color: 'targetLevelColor',
  },
};

export const ReachLevel: Story = {
  args: {
    label: 'Reach School',
    color: 'reachLevelColor',
  },
};

export const FarReachLevel: Story = {
  args: {
    label: 'Far Reach School',
    color: 'farReachLevelColor',
  },
};

// Sizes
export const Small: Story = {
  args: {
    label: 'Small Chip',
    size: 'small',
    color: 'primary',
  },
};

export const Medium: Story = {
  args: {
    label: 'Medium Chip',
    size: 'medium',
    color: 'primary',
  },
};

export const Large: Story = {
  args: {
    label: 'Large Chip',
    size: 'large',
    color: 'primary',
  },
};

// Variants
export const Outlined: Story = {
  args: {
    label: 'Outlined Chip',
    variant: 'outlined',
    color: 'primary',
  },
};

export const Filled: Story = {
  args: {
    label: 'Filled Chip',
    variant: 'filled',
    color: 'primary',
  },
};

// States
export const Clickable: Story = {
  args: {
    label: 'Clickable Chip',
    clickable: true,
    color: 'primary',
    onClick: () => alert('Chip clicked!'),
  },
};

export const Deletable: Story = {
  args: {
    label: 'Deletable Chip',
    color: 'primary',
    onDelete: () => alert('Chip deleted!'),
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Chip',
    disabled: true,
    color: 'primary',
  },
};

export const WithIcon: Story = {
  args: {
    label: 'With Icon',
    color: 'primary',
    // Note: Icons would come from @willow/icons in real implementation
  },
};

// Interactive demos
export const AllStandardColors: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Chip label="Primary" color="primary" />
      <Chip label="Secondary" color="secondary" />
      <Chip label="Success" color="success" />
      <Chip label="Error" color="error" />
      <Chip label="Warning" color="warning" />
      <Chip label="Info" color="info" />
    </Box>
  ),
  parameters: {
    controls: { disable: true },
  },
};

export const AllWillowColors: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Chip label="Gray" color="gray" />
      <Chip label="Mint" color="mint" />
      <Chip label="Light Pink" color="lightPink" />
      <Chip label="Light Blue" color="lightBlue" />
      <Chip label="Light Orange" color="lightOrange" />
      <Chip label="Light Green" color="lightGreen" />
      <Chip label="Light Purple" color="lightPurple" />
    </Box>
  ),
  parameters: {
    controls: { disable: true },
  },
};

export const CollegeLevelColors: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Chip label="Safety School" color="safetyLevelColor" />
      <Chip label="Target School" color="targetLevelColor" />
      <Chip label="Reach School" color="reachLevelColor" />
      <Chip label="Far Reach School" color="farReachLevelColor" />
    </Box>
  ),
  parameters: {
    controls: { disable: true },
  },
};

export const AllSizes: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
      <Box sx={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Chip label="Small" size="small" color="primary" />
        <Chip label="Medium" size="medium" color="primary" />
        <Chip label="Large" size="large" color="primary" />
      </Box>
      <Box sx={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Chip label="Small" size="small" color="lightGreen" />
        <Chip label="Medium" size="medium" color="lightGreen" />
        <Chip label="Large" size="large" color="lightGreen" />
      </Box>
    </Box>
  ),
  parameters: {
    controls: { disable: true },
  },
};

export const AllVariants: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Box sx={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Chip label="Filled Primary" variant="filled" color="primary" />
        <Chip label="Outlined Primary" variant="outlined" color="primary" />
      </Box>
      <Box sx={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Chip label="Filled Success" variant="filled" color="success" />
        <Chip label="Outlined Success" variant="outlined" color="success" />
      </Box>
    </Box>
  ),
  parameters: {
    controls: { disable: true },
  },
};

export const InteractiveStates: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Chip label="Default" color="primary" />
      <Chip label="Clickable" color="primary" clickable onClick={() => console.log('Clicked!')} />
      <Chip label="Deletable" color="primary" onDelete={() => console.log('Deleted!')} />
      <Chip label="Both" color="primary" clickable onClick={() => console.log('Clicked!')} onDelete={() => console.log('Deleted!')} />
      <Chip label="Disabled" color="primary" disabled />
    </Box>
  ),
  parameters: {
    controls: { disable: true },
  },
};