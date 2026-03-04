/**
 * LLM USAGE GUIDE - AppShell
 *
 * WHEN TO USE THIS COMPONENT:
 * - Use AppShell as the outermost page frame for all authenticated pages
 * - Sets the page background color, positions the fixed sidebar, and wraps the content area
 *
 * STRUCTURE:
 * ```tsx
 * <AppShell sidebar={<Sidebar />}>
 *   <PageLayout breadcrumbs={...} sidePanel={...}>
 *     {/* page content *\/}
 *   </PageLayout>
 * </AppShell>
 * ```
 *
 * PROPS:
 * - sidebar: ReactNode rendered in a fixed 220px column on the left
 * - sidebarWidth: Override the default 220px sidebar width
 * - children: Main content area (offset by sidebar width + 12px padding)
 */
import type { Meta, StoryObj } from '@storybook/react';
import { AppShell } from './AppShell.js';
import { Box, Typography } from '@mui/material';

const meta: Meta<typeof AppShell> = {
  title: 'Layout/AppShell',
  component: AppShell,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    sidebar: (
      <Box sx={{ bgcolor: 'primary.main', height: '100%', p: 2, color: 'white' }}>
        <Typography variant="h6">Sidebar</Typography>
      </Box>
    ),
    children: (
      <Box sx={{ bgcolor: 'background.paper', borderRadius: '12px', p: 3, minHeight: 400 }}>
        <Typography variant="h6">Content Area</Typography>
        <Typography variant="body2" color="text.secondary">
          This area is offset by the sidebar width with 12px padding around it.
        </Typography>
      </Box>
    ),
  },
};
