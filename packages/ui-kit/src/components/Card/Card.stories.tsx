/**
 * LLM USAGE GUIDE - Card
 *
 * WHEN TO USE THIS COMPONENT:
 * - Use Card for grouping related content into a visual container
 * - NEVER use MUI Card directly - always use this component
 * - Use for: profile sections, list items, form sections, content blocks
 *
 * VARIANT SELECTION:
 * - outlined (default): Static content containers, information display
 * - elevation: Interactive cards, clickable items (adds hover shadow)
 *
 * WILLOW CARD STYLING:
 * - Cards have 12px border radius (theme.shape.borderRadius)
 * - Cards use 1px border instead of shadows (neutral[300])
 * - No box-shadow by default (Willow design principle)
 *
 * PADDING PATTERNS:
 * Cards don't have built-in padding - wrap content in Box with padding:
 * - Compact: p={2} (16px)
 * - Standard: p={3} (24px)
 * - Spacious: p={4} (32px)
 *
 * COMMON USE CASES:
 * - Profile cards → outlined, with avatar and info
 * - List item cards → outlined, potentially clickable
 * - Form sections → outlined, groups related fields
 * - Feature cards → elevation, with image and CTA
 * - Dashboard widgets → outlined, with title and content
 *
 * COMMON PATTERNS:
 * ```tsx
 * // Basic content card
 * <Card>
 *   <Box p={3}>
 *     <Typography variant="h6">Card Title</Typography>
 *     <Typography variant="body2" color="text.secondary">
 *       Card content goes here
 *     </Typography>
 *   </Box>
 * </Card>
 *
 * // Clickable card with hover effect
 * <Card variant="elevation" onClick={handleClick} sx={{ cursor: 'pointer' }}>
 *   <Box p={3}>
 *     <Typography>Click me</Typography>
 *   </Box>
 * </Card>
 *
 * // Card with actions
 * <Card>
 *   <Box p={3}>
 *     <Typography variant="h6" gutterBottom>Title</Typography>
 *     <Typography variant="body2">Content</Typography>
 *   </Box>
 *   <Box px={3} pb={2} display="flex" gap={1}>
 *     <TextButton variant="ghost">Cancel</TextButton>
 *     <TextButton variant="primary">Save</TextButton>
 *   </Box>
 * </Card>
 * ```
 *
 * ACCESSIBILITY:
 * - If card is clickable, use appropriate role and keyboard handling
 * - Consider using semantic HTML inside (headings, lists)
 *
 * WHEN UPDATING THIS FILE:
 * - Add new stories for new use cases discovered in the frontend
 * - Keep comments updated when variants change
 * - Add examples that would help an LLM understand context
 */
import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card.js';
import { Box, Typography } from '@mui/material';
import { Button } from '../Buttons/index.js';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    elevation: {
      control: { type: 'range', min: 0, max: 24 },
      description: 'The depth of the card shadow (note: Willow cards use borders instead of shadows)',
    },
    variant: {
      options: ['elevation', 'outlined'],
      control: { type: 'radio' },
      description: 'The variant of the card',
    },
    square: {
      control: { type: 'boolean' },
      description: 'If true, rounded corners are disabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic variants
export const Default: Story = {
  args: {
    children: (
      <Box p={3}>
        <Typography variant="h6" >
          Default Card
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is a default card with Willow styling - no shadow, 12px border radius, and neutral border.
        </Typography>
      </Box>
    ),
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: (
      <Box p={3}>
        <Typography variant="h6" >
          Outlined Card
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is an outlined card variant.
        </Typography>
      </Box>
    ),
  },
};

export const Elevation: Story = {
  args: {
    variant: 'elevation',
    elevation: 1,
    children: (
      <Box p={3}>
        <Typography variant="h6" >
          Elevation Card
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This card has elevation styling (though Willow uses borders instead of shadows).
        </Typography>
      </Box>
    ),
  },
};

export const Square: Story = {
  args: {
    square: true,
    children: (
      <Box p={3}>
        <Typography variant="h6" >
          Square Card
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This card has square corners instead of rounded.
        </Typography>
      </Box>
    ),
  },
};

// Content examples
export const WithImage: Story = {
  args: {
    children: (
      <Box>
        <Box
          sx={{
            height: '200px',
            background: 'linear-gradient(45deg, #f0f0f0 25%, transparent 25%), linear-gradient(-45deg, #f0f0f0 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f0f0f0 75%), linear-gradient(-45deg, transparent 75%, #f0f0f0 75%)',
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'text.secondary'
          }}
        >
          Image Placeholder
        </Box>
        <Box p={3}>
          <Typography variant="h6" >
            Card with Image
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This card includes an image placeholder at the top.
          </Typography>
        </Box>
      </Box>
    ),
  },
};

export const Compact: Story = {
  args: {
    children: (
      <Box p={2}>
        <Typography variant="h6" >
          Compact Card
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Smaller padding for compact layouts.
        </Typography>
      </Box>
    ),
  },
};

export const WithActions: Story = {
  args: {
    children: (
      <Box>
        <Box p={3}>
          <Typography variant="h6" >
            Card with Actions
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This card has action buttons at the bottom.
          </Typography>
        </Box>
        <Box px={3} pb={2} display="flex" gap={1}>
          <Button variant="ghost" size="md">
            Cancel
          </Button>
          <Button variant="primary" size="md">
            Save
          </Button>
        </Box>
      </Box>
    ),
  },
};

// Interactive demo
export const AllVariants: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
      <Card sx={{ width: '200px' }}>
        <Box p={2}>
          <Typography variant="subtitle1" gutterBottom>Default</Typography>
          <Typography variant="body2" color="text.secondary">
            Standard card styling
          </Typography>
        </Box>
      </Card>

      <Card variant="outlined" sx={{ width: '200px' }}>
        <Box p={2}>
          <Typography variant="subtitle1" gutterBottom>Outlined</Typography>
          <Typography variant="body2" color="text.secondary">
            Outlined variant
          </Typography>
        </Box>
      </Card>

      <Card square sx={{ width: '200px' }}>
        <Box p={2}>
          <Typography variant="subtitle1" gutterBottom>Square</Typography>
          <Typography variant="body2" color="text.secondary">
            Square corners
          </Typography>
        </Box>
      </Card>
    </Box>
  ),
  parameters: {
    controls: { disable: true },
  },
};

export const ContentExamples: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
      <Card sx={{ width: '250px' }}>
        <Box p={1}>
          <Typography variant="caption" color="text.secondary">
            Minimal padding
          </Typography>
        </Box>
      </Card>

      <Card sx={{ width: '250px' }}>
        <Box p={3}>
          <Typography variant="h6" gutterBottom>
            Standard padding
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Regular content spacing
          </Typography>
        </Box>
      </Card>

      <Card sx={{ width: '250px' }}>
        <Box p={4}>
          <Typography variant="h5" gutterBottom>
            Large padding
          </Typography>
          <Typography variant="body1">
            More spacious layout for important content
          </Typography>
        </Box>
      </Card>
    </Box>
  ),
  parameters: {
    controls: { disable: true },
  },
};