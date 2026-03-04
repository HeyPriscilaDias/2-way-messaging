/**
 * LLM USAGE GUIDE - Typography
 *
 * WHEN TO USE THIS COMPONENT:
 * - Use Typography for ALL text content in the application
 * - NEVER use raw HTML elements (h1, h2, p, span) - always use this component
 * - This ensures consistent typography throughout the app
 *
 * VARIANT SELECTION:
 * - display: Largest text, page titles, hero sections (30px, Poppins, semibold)
 * - heading: Section headings, card titles, dialog titles (22px, Poppins, semibold)
 * - subheading: Subsection headings, group labels (18px, Poppins, semibold)
 * - body (default): Main body text, paragraphs, descriptions (14px, Inter, regular)
 * - body-lg: Larger body text for readability (16px, Inter, regular)
 * - body-sm: Smaller body text, metadata, secondary info (12px, Inter, regular)
 * - caption: Fine print, help text, timestamps (12px, Inter, regular)
 * - label: Form labels, bold inline text (14px, Inter, semibold)
 *
 * WEIGHT SELECTION (optional override):
 * - regular (400): Default for body text
 * - medium (500): Slightly emphasized text
 * - semibold (600): Strongly emphasized text, labels
 * Note: Each variant has a default weight. Use weight prop to override.
 *
 * COLOR SELECTION:
 * - primary (default): Main text color (neutral[900])
 * - secondary: De-emphasized text (neutral[700])
 * - muted: Subtle text, placeholders (neutral[500])
 * - inherit: Inherits color from parent element
 *
 * ALIGNMENT:
 * - left (default): Standard left alignment
 * - center: Centered text (modals, empty states)
 * - right: Right-aligned text (numbers, dates)
 * - inherit: Inherits alignment from parent
 *
 * TRUNCATE:
 * - false (default): Text wraps normally
 * - true: Single line with ellipsis overflow (table cells, compact lists)
 *
 * COMMON PATTERNS:
 * ```tsx
 * // Page title
 * <Typography variant="display">Dashboard</Typography>
 *
 * // Section heading
 * <Typography variant="heading">Recent Activity</Typography>
 *
 * // Subsection
 * <Typography variant="subheading">Student Details</Typography>
 *
 * // Body text
 * <Typography variant="body">This is the main content...</Typography>
 *
 * // Secondary info
 * <Typography variant="body-sm" color="secondary">
 *   Last updated: Jan 12, 2026
 * </Typography>
 *
 * // Form label
 * <Typography variant="label">Email Address</Typography>
 *
 * // Truncated text in table cell
 * <Typography variant="body" truncate>
 *   Very long text that will be cut off with ellipsis...
 * </Typography>
 *
 * // Custom weight override
 * <Typography variant="body" weight="semibold">
 *   Important announcement
 * </Typography>
 *
 * // Centered modal title
 * <Typography variant="heading" align="center">
 *   Confirm Action
 * </Typography>
 * ```
 *
 * ACCESSIBILITY:
 * - Semantic HTML elements are AUTOMATIC based on variant:
 *   - display → h1, heading → h2, subheading → h3
 *   - body/body-lg/body-sm → p, caption → span, label → label
 * - Override with component prop when needed: <Typography variant="heading" component="h3">
 * - Maintain proper heading hierarchy (h1 → h2 → h3)
 * - Ensure sufficient color contrast (all variants meet WCAG AA)
 *
 * COMMON MISTAKES TO AVOID:
 * - Don't use <h1>, <h2>, <p> directly - use Typography (semantic elements are automatic)
 * - Don't hardcode font sizes or colors - use variant and color props
 * - Don't nest Typography components unnecessarily
 * - Use truncate only when overflow is expected (not for all text)
 * - Don't add component prop unless you need to override the default semantic element
 *
 * WHEN UPDATING THIS FILE:
 * - Add new stories for new use cases discovered in the frontend
 * - Keep comments updated when variants or colors change
 * - Add examples that would help an LLM understand context
 */
import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography.js';
import { Box } from '@mui/material';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Typography component for all text content in Willow. Provides consistent font families, sizes, weights, and colors across all variants.',
      },
    },
  },
  argTypes: {
    variant: {
      options: ['display', 'heading', 'subheading', 'body', 'body-lg', 'body-sm', 'caption', 'label'],
      control: { type: 'radio' },
      description: 'The typographic style variant',
    },
    weight: {
      options: [undefined, 'regular', 'medium', 'semibold'],
      control: { type: 'radio' },
      description: 'Font weight override (overrides variant default)',
    },
    color: {
      options: ['primary', 'secondary', 'muted', 'inherit'],
      control: { type: 'radio' },
      description: 'Text color',
    },
    align: {
      options: [undefined, 'left', 'center', 'right', 'inherit'],
      control: { type: 'radio' },
      description: 'Text alignment',
    },
    truncate: {
      control: { type: 'boolean' },
      description: 'Enable ellipsis overflow',
    },
    children: {
      control: { type: 'text' },
      description: 'Text content',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TypographyStory: Story = {
  args: {
    variant: 'body',
    color: 'primary',
    children: 'The quick brown fox jumps over the lazy dog',
  },
};

export const AllVariants: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, maxWidth: '600px' }}>
      <Typography variant="display">Display Text - Page Titles</Typography>
      <Typography variant="heading">Heading Text - Section Titles</Typography>
      <Typography variant="subheading">Subheading Text - Subsection Titles</Typography>
      <Typography variant="body">Body Text - Main content and paragraphs</Typography>
      <Typography variant="body-lg">Body Large Text - More readable body content</Typography>
      <Typography variant="body-sm">Body Small Text - Metadata and secondary information</Typography>
      <Typography variant="caption">Caption Text - Fine print and help text</Typography>
      <Typography variant="label">Label Text - Form labels and bold inline text</Typography>
    </Box>
  ),
};

export const ColorVariants: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: '600px' }}>
      <Typography variant="body" color="primary">
        Primary color - Main text (neutral[900])
      </Typography>
      <Typography variant="body" color="secondary">
        Secondary color - De-emphasized text (neutral[700])
      </Typography>
      <Typography variant="body" color="muted">
        Muted color - Subtle text and placeholders (neutral[500])
      </Typography>
    </Box>
  ),
};

export const WeightOverrides: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: '600px' }}>
      <Typography variant="body" weight="regular">
        Regular weight (400) - Default for body text
      </Typography>
      <Typography variant="body" weight="medium">
        Medium weight (500) - Slightly emphasized
      </Typography>
      <Typography variant="body" weight="semibold">
        Semibold weight (600) - Strong emphasis
      </Typography>
    </Box>
  ),
};

export const Alignment: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: '600px' }}>
      <Typography variant="body" align="left">
        Left aligned text
      </Typography>
      <Typography variant="body" align="center">
        Center aligned text
      </Typography>
      <Typography variant="body" align="right">
        Right aligned text
      </Typography>
    </Box>
  ),
};

export const Truncated: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: '300px' }}>
      <Typography variant="body">
        Normal wrapping: This is a long text that will wrap to multiple lines when it exceeds the container width.
      </Typography>
      <Typography variant="body" truncate>
        Truncated: This is a long text that will be cut off with ellipsis when it exceeds the container width.
      </Typography>
    </Box>
  ),
};

export const SemanticHTMLAutomatic: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: '600px' }}>
      <Typography variant="display">
        Display → renders as h1 (automatic)
      </Typography>
      <Typography variant="heading">
        Heading → renders as h2 (automatic)
      </Typography>
      <Typography variant="subheading">
        Subheading → renders as h3 (automatic)
      </Typography>
      <Typography variant="body">
        Body → renders as p (automatic)
      </Typography>
      <Typography variant="caption">
        Caption → renders as span (automatic)
      </Typography>
      <Typography variant="label">
        Label → renders as label (automatic)
      </Typography>
    </Box>
  ),
};

export const SemanticHTMLOverride: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: '600px' }}>
      <Typography variant="heading" component="h3">
        Heading styled as h3 (override for nested sections)
      </Typography>
      <Typography variant="body" component="span">
        Body styled as span (for inline text)
      </Typography>
      <Typography variant="display" component="h2">
        Display styled as h2 (when h1 already exists)
      </Typography>
    </Box>
  ),
};
