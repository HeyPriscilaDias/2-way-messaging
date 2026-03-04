/**
 * LLM USAGE GUIDE - Surface
 *
 * WHEN TO USE THIS COMPONENT:
 * - Use Surface as the white container primitive on the off-white (#F5F5F5) background
 * - Replaces ad-hoc Paper/Box usage for content areas
 * - Use inside AppShell/PageLayout or anywhere you need a white rounded container
 *
 * STYLING:
 * - White background, 12px border radius, 24px padding by default
 * - No border, no shadow (clean surface)
 * - Set disablePadding={true} when you need custom padding
 *
 * COMMON PATTERNS:
 * ```tsx
 * // Basic content surface
 * <Surface>
 *   <Typography>Content here</Typography>
 * </Surface>
 *
 * // No padding (e.g., for breadcrumbs bar)
 * <Surface disablePadding sx={{ px: 3, display: 'flex', alignItems: 'center', height: 56 }}>
 *   <Breadcrumbs />
 * </Surface>
 *
 * // With custom sx
 * <Surface sx={{ flex: 1, overflowY: 'auto' }}>
 *   <PageContent />
 * </Surface>
 * ```
 */
import type { Meta, StoryObj } from '@storybook/react';
import { Surface } from './Surface.js';
import { Box, Typography } from '@mui/material';

const meta: Meta<typeof Surface> = {
  title: 'Layout/Surface',
  component: Surface,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'gray', values: [{ name: 'gray', value: '#F5F5F5' }] },
  },
  argTypes: {
    disablePadding: {
      control: { type: 'boolean' },
      description: 'Remove default 24px padding',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <Box sx={{ width: 400 }}>
        <Typography variant="h6">Surface</Typography>
        <Typography variant="body2" color="text.secondary">
          White container with 12px border radius and 24px padding.
        </Typography>
      </Box>
    ),
  },
};

export const NoPadding: Story = {
  args: {
    disablePadding: true,
    children: (
      <Box sx={{ width: 400, px: 3, py: 2 }}>
        <Typography variant="body2">
          Surface with disablePadding — padding controlled via sx.
        </Typography>
      </Box>
    ),
  },
};
