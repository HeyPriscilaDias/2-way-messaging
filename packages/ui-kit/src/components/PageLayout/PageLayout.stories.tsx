/**
 * LLM USAGE GUIDE - PageLayout
 *
 * WHEN TO USE THIS COMPONENT:
 * - Use PageLayout inside AppShell to arrange breadcrumbs + main content + optional side panel
 * - Handles the inner content layout (breadcrumbs bar, main column, side panel)
 *
 * STRUCTURE:
 * ```tsx
 * <AppShell sidebar={<Sidebar />}>
 *   <PageLayout
 *     breadcrumbs={<Breadcrumbs items={items} />}
 *     sidePanel={<AlmaPanel />}
 *   >
 *     <Box sx={{ maxWidth: 900, mx: 'auto', px: 4, py: 3 }}>
 *       {/* page content *\/}
 *     </Box>
 *   </PageLayout>
 * </AppShell>
 * ```
 *
 * PROPS:
 * - breadcrumbs: Rendered in a 56px-tall Surface bar at the top
 * - sidePanel: Rendered in a 350px Surface column on the right
 * - sidePanelWidth: Override the default 350px side panel width
 * - children: Main content area (wrapped in a Surface)
 */
import type { Meta, StoryObj } from '@storybook/react';
import { PageLayout } from './PageLayout.js';
import { Box, Typography } from '@mui/material';

const meta: Meta<typeof PageLayout> = {
  title: 'Layout/PageLayout',
  component: PageLayout,
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'gray', values: [{ name: 'gray', value: '#F5F5F5' }] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    breadcrumbs: (
      <Typography variant="body2" color="text.secondary">
        Home / Students / Jane Doe
      </Typography>
    ),
    children: (
      <Box sx={{ maxWidth: 900, mx: 'auto', px: 4, py: 3 }}>
        <Typography variant="h4">Student Profile</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Main content area. This Surface scrolls independently.
        </Typography>
      </Box>
    ),
  },
  decorators: [
    (Story) => (
      <Box sx={{ height: '100vh', bgcolor: '#F5F5F5', p: 1.5 }}>
        <Story />
      </Box>
    ),
  ],
};

export const WithSidePanel: Story = {
  args: {
    breadcrumbs: (
      <Typography variant="body2" color="text.secondary">
        Home / Students / Jane Doe
      </Typography>
    ),
    sidePanel: (
      <Box sx={{ p: 3 }}>
        <Typography variant="h6">Side Panel</Typography>
        <Typography variant="body2" color="text.secondary">
          e.g. Alma chat panel or student details
        </Typography>
      </Box>
    ),
    children: (
      <Box sx={{ maxWidth: 900, mx: 'auto', px: 4, py: 3 }}>
        <Typography variant="h4">Student Profile</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Main content with a side panel on the right.
        </Typography>
      </Box>
    ),
  },
  decorators: [
    (Story) => (
      <Box sx={{ height: '100vh', bgcolor: '#F5F5F5', p: 1.5 }}>
        <Story />
      </Box>
    ),
  ],
};

export const NoBreadcrumbs: Story = {
  args: {
    children: (
      <Box sx={{ maxWidth: 900, mx: 'auto', px: 4, py: 3 }}>
        <Typography variant="h4">No Breadcrumbs</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          PageLayout without a breadcrumbs bar — just the content surface.
        </Typography>
      </Box>
    ),
  },
  decorators: [
    (Story) => (
      <Box sx={{ height: '100vh', bgcolor: '#F5F5F5', p: 1.5 }}>
        <Story />
      </Box>
    ),
  ],
};
