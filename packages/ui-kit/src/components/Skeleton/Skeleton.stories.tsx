/**
 * LLM USAGE GUIDE - Skeleton
 *
 * WHEN TO USE THIS COMPONENT:
 * - Display placeholder loading states before content is available
 * - NEVER use MUI Skeleton directly - always use this component
 * - Use while fetching data from APIs, loading images, or rendering async content
 * - Shows users that content is loading (better UX than blank space or spinners alone)
 *
 * VARIANT SELECTION:
 * - text: For text placeholders (headings, paragraphs, labels, single lines)
 * - rectangular: For images, cards, charts, content blocks with defined shape
 * - circular: For avatars, profile pictures, circular icons
 *
 * ANIMATION OPTIONS:
 * - pulse (default): Subtle breathing effect, modern, less distracting
 * - wave: Shimmering wave effect, classic loading pattern
 * - false: No animation, static placeholder (use sparingly, animation provides better feedback)
 *
 * COMMON PATTERNS:
 * ```tsx
 * // Loading card skeleton
 * <Card>
 *   <CardContent>
 *     <Skeleton variant="circular" width={40} height={40} />
 *     <Skeleton variant="text" width="60%" />
 *     <Skeleton variant="rectangular" height={200} />
 *     <Skeleton variant="text" />
 *     <Skeleton variant="text" width="80%" />
 *   </CardContent>
 * </Card>
 *
 * // Loading list skeleton
 * {Array.from({ length: 5 }).map((_, i) => (
 *   <Box key={i} sx={{ display: 'flex', gap: 2, mb: 2 }}>
 *     <Skeleton variant="circular" width={40} height={40} />
 *     <Box sx={{ flex: 1 }}>
 *       <Skeleton variant="text" width="70%" />
 *       <Skeleton variant="text" width="40%" />
 *     </Box>
 *   </Box>
 * ))}
 *
 * // Loading profile header
 * <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
 *   <Skeleton variant="circular" width={80} height={80} />
 *   <Box sx={{ flex: 1 }}>
 *     <Skeleton variant="text" width={200} height={32} />
 *     <Skeleton variant="text" width={150} />
 *   </Box>
 * </Box>
 *
 * // Loading table rows
 * {Array.from({ length: 10 }).map((_, i) => (
 *   <TableRow key={i}>
 *     <TableCell><Skeleton variant="text" /></TableCell>
 *     <TableCell><Skeleton variant="text" /></TableCell>
 *     <TableCell><Skeleton variant="text" width="60%" /></TableCell>
 *   </TableRow>
 * ))}
 * ```
 *
 * SIZING:
 * - Text variant: Height auto-adjusts to font size (like real text)
 * - Rectangular/Circular: Always specify explicit width and height
 * - Use percentages for responsive width ('60%', '80%')
 * - Match skeleton dimensions to actual content dimensions
 *
 * BEST PRACTICES:
 * - Match skeleton structure to actual content layout (same number of elements)
 * - Use slightly varied widths for text lines (60%, 80%, 70%) to look more natural
 * - Group skeletons with actual spacing/layout (flex, grid, padding)
 * - Show skeletons immediately when loading starts (don't wait for timeout)
 * - Replace skeletons with real content as soon as available
 * - Consider wrapping multiple skeletons in a container that matches real layout
 *
 * ACCESSIBILITY:
 * - Skeleton automatically includes aria-busy="true" and proper ARIA labels
 * - Animation provides visual feedback that loading is in progress
 * - Don't rely solely on skeleton - combine with text status if needed
 *
 * WHEN UPDATING THIS FILE:
 * - Add new story variations for common loading patterns discovered in frontend
 * - Keep comments updated when new patterns emerge
 * - Add examples that help LLMs understand when to use skeletons vs spinners vs empty states
 */
import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton.js';
import { Box, Card, CardContent, Typography } from '@mui/material';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Feedback/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Skeleton displays placeholder loading states before content is available. Use to improve perceived performance and provide feedback during data fetching.',
      },
    },
  },
  argTypes: {
    variant: {
      options: ['text', 'rectangular', 'circular'],
      control: { type: 'radio' },
      description: 'The shape variant of the skeleton',
    },
    animation: {
      options: ['pulse', 'wave', false],
      control: { type: 'radio' },
      description: 'The animation type',
    },
    width: {
      control: { type: 'text' },
      description: 'Width of the skeleton (number or CSS string)',
    },
    height: {
      control: { type: 'text' },
      description: 'Height of the skeleton (number or CSS string)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SkeletonStory: Story = {
  args: {
    variant: 'text',
    animation: 'pulse',
    width: 210,
  },
};

export const TextVariants: Story = {
  render: () => (
    <Box sx={{ width: 400 }}>
      <Typography variant="h6" gutterBottom>
        Text Skeleton Variants
      </Typography>
      <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
      <Skeleton variant="text" sx={{ fontSize: '1.5rem' }} />
      <Skeleton variant="text" />
      <Skeleton variant="text" width="60%" />
      <Skeleton variant="text" width="80%" />
    </Box>
  ),
};

export const ShapeVariants: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
      <Box>
        <Typography variant="caption" display="block" gutterBottom>
          Circular
        </Typography>
        <Skeleton variant="circular" width={60} height={60} />
      </Box>
      <Box>
        <Typography variant="caption" display="block" gutterBottom>
          Rectangular
        </Typography>
        <Skeleton variant="rectangular" width={200} height={120} />
      </Box>
      <Box>
        <Typography variant="caption" display="block" gutterBottom>
          Text
        </Typography>
        <Skeleton variant="text" width={200} height={20} />
      </Box>
    </Box>
  ),
};

export const AnimationTypes: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Box>
        <Typography variant="caption" display="block" gutterBottom>
          Pulse Animation (Default)
        </Typography>
        <Skeleton variant="rectangular" width={300} height={100} animation="pulse" />
      </Box>
      <Box>
        <Typography variant="caption" display="block" gutterBottom>
          Wave Animation
        </Typography>
        <Skeleton variant="rectangular" width={300} height={100} animation="wave" />
      </Box>
      <Box>
        <Typography variant="caption" display="block" gutterBottom>
          No Animation
        </Typography>
        <Skeleton variant="rectangular" width={300} height={100} animation={false} />
      </Box>
    </Box>
  ),
};

export const LoadingCard: Story = {
  render: () => (
    <Card sx={{ maxWidth: 345 }}>
      <Skeleton variant="rectangular" height={200} />
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <Skeleton variant="circular" width={40} height={40} />
          <Box sx={{ flex: 1 }}>
            <Skeleton variant="text" width="60%" />
            <Skeleton variant="text" width="40%" />
          </Box>
        </Box>
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" width="80%" />
      </CardContent>
    </Card>
  ),
};

export const LoadingList: Story = {
  render: () => (
    <Box sx={{ width: 400 }}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Box
          key={index}
          sx={{ display: 'flex', gap: 2, mb: 2, alignItems: 'center' }}
        >
          <Skeleton variant="circular" width={40} height={40} />
          <Box sx={{ flex: 1 }}>
            <Skeleton variant="text" width="70%" />
            <Skeleton variant="text" width="40%" />
          </Box>
        </Box>
      ))}
    </Box>
  ),
};

export const LoadingProfile: Story = {
  render: () => (
    <Box sx={{ width: 500 }}>
      <Box sx={{ display: 'flex', gap: 3, alignItems: 'center', mb: 4 }}>
        <Skeleton variant="circular" width={100} height={100} />
        <Box sx={{ flex: 1 }}>
          <Skeleton variant="text" width={250} height={40} />
          <Skeleton variant="text" width={180} />
          <Skeleton variant="text" width={200} />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <Skeleton variant="rectangular" width={120} height={36} />
        <Skeleton variant="rectangular" width={120} height={36} />
      </Box>
      <Skeleton variant="rectangular" height={200} />
    </Box>
  ),
};

export const LoadingGrid: Story = {
  render: () => (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 2,
        width: 600,
      }}
    >
      {Array.from({ length: 6 }).map((_, index) => (
        <Box key={index}>
          <Skeleton variant="rectangular" height={150} />
          <Skeleton variant="text" sx={{ mt: 1 }} />
          <Skeleton variant="text" width="60%" />
        </Box>
      ))}
    </Box>
  ),
};
