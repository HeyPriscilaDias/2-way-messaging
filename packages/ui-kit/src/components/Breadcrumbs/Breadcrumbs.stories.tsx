/**
 * LLM USAGE GUIDE - Breadcrumbs
 *
 * WHEN TO USE THIS COMPONENT:
 * - Use Breadcrumbs to show the user's current location in the site hierarchy
 * - Helps users understand where they are and navigate back to parent pages
 * - Place at the top of pages, below the header/navigation
 *
 * COMPONENT STRUCTURE:
 * - Breadcrumbs: Container component that handles layout and truncation
 * - BreadcrumbItem: Individual breadcrumb element (link or current page)
 *
 * BREADCRUMB ITEM PROPS:
 * - href: Optional. When provided, renders as a link. Omit for current page.
 * - icon: Optional. Icon component to display before the label.
 * - component: Optional. Custom link component (e.g., React Router's Link)
 * - children: The label text (ignored when isHome is true)
 * - isHome: Optional. When true, renders only the Home icon with no text.
 *
 * ROUTER INTEGRATION:
 * For React Router, pass the Link component:
 * ```tsx
 * import { Link } from 'react-router-dom';
 *
 * <BreadcrumbItem href="/courses" component={Link}>Courses</BreadcrumbItem>
 * ```
 *
 * TRUNCATION BEHAVIOR:
 * - When more than 5 items (configurable via maxItems), middle items collapse
 * - Shows: first item, "...", last 4 items
 * - Clicking "..." expands to show all items
 *
 * COMMON PATTERNS:
 * ```tsx
 * // Basic breadcrumb trail with home icon (RECOMMENDED)
 * <Breadcrumbs>
 *   <BreadcrumbItem href="/" isHome />
 *   <BreadcrumbItem href="/courses">Courses</BreadcrumbItem>
 *   <BreadcrumbItem href="/courses/math">Math</BreadcrumbItem>
 *   <BreadcrumbItem>Lesson 5</BreadcrumbItem>
 * </Breadcrumbs>
 *
 * // With React Router
 * import { Link } from 'react-router-dom';
 *
 * <Breadcrumbs>
 *   <BreadcrumbItem href="/" component={Link} isHome />
 *   <BreadcrumbItem href="/courses" component={Link}>Courses</BreadcrumbItem>
 *   <BreadcrumbItem>Current Page</BreadcrumbItem>
 * </Breadcrumbs>
 *
 * // With custom icons on other items
 * import { BookOpen, Settings } from '@willow/icons';
 *
 * <Breadcrumbs>
 *   <BreadcrumbItem href="/" isHome />
 *   <BreadcrumbItem href="/courses" icon={<BookOpen size={14} />}>Courses</BreadcrumbItem>
 *   <BreadcrumbItem>Current Page</BreadcrumbItem>
 * </Breadcrumbs>
 * ```
 *
 * ACCESSIBILITY:
 * - Uses semantic <nav> element with aria-label="Breadcrumb"
 * - Separators are hidden from screen readers (aria-hidden)
 * - Last item (current page) is not a link
 * - Ellipsis button has descriptive aria-label
 * - Home icon has aria-label="Home" for screen readers
 *
 * STYLING:
 * - Typography: Body SM Regular (12px Inter)
 * - Color: Secondary text token
 * - Spacing: 8px between items
 * - Icons: 14px (including Home icon)
 * - Separator: CaretRight icon at 12px
 */
import type { Meta, StoryObj } from '@storybook/react';
import { Box, Stack } from '@mui/material';
import { BookOpen, Settings, School } from '@willow/icons';
import { Breadcrumbs, BreadcrumbItem } from './Breadcrumbs.js';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Breadcrumbs>
      <BreadcrumbItem href="/" isHome />
      <BreadcrumbItem href="/courses">Courses</BreadcrumbItem>
      <BreadcrumbItem href="/courses/math-101">Math 101</BreadcrumbItem>
      <BreadcrumbItem>Lesson 5</BreadcrumbItem>
    </Breadcrumbs>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Stack spacing={4}>
      <Box>
        <Box sx={{ mb: 1, color: 'text.secondary', fontSize: '12px' }}>
          Home uses built-in icon, other items can have custom icons
        </Box>
        <Breadcrumbs>
          <BreadcrumbItem href="/" isHome />
          <BreadcrumbItem href="/courses" icon={<BookOpen size={14} />}>
            Courses
          </BreadcrumbItem>
          <BreadcrumbItem href="/courses/math-101">Math 101</BreadcrumbItem>
          <BreadcrumbItem>Lesson 5</BreadcrumbItem>
        </Breadcrumbs>
      </Box>
      <Box>
        <Box sx={{ mb: 1, color: 'text.secondary', fontSize: '12px' }}>
          Home icon-only, other items with icons and labels
        </Box>
        <Breadcrumbs>
          <BreadcrumbItem href="/" isHome />
          <BreadcrumbItem href="/settings" icon={<Settings size={14} />}>
            Settings
          </BreadcrumbItem>
          <BreadcrumbItem icon={<School size={14} />}>School Profile</BreadcrumbItem>
        </Breadcrumbs>
      </Box>
    </Stack>
  ),
};

export const Truncated: Story = {
  render: () => (
    <Stack spacing={4}>
      <Box>
        <Box sx={{ mb: 1, color: 'text.secondary', fontSize: '12px' }}>
          More than 5 items - middle items collapse (click ... to expand)
        </Box>
        <Breadcrumbs>
          <BreadcrumbItem href="/" isHome />
          <BreadcrumbItem href="/district">District</BreadcrumbItem>
          <BreadcrumbItem href="/district/schools">Schools</BreadcrumbItem>
          <BreadcrumbItem href="/district/schools/lincoln">Lincoln High</BreadcrumbItem>
          <BreadcrumbItem href="/district/schools/lincoln/classes">Classes</BreadcrumbItem>
          <BreadcrumbItem href="/district/schools/lincoln/classes/math">Math 101</BreadcrumbItem>
          <BreadcrumbItem>Student Progress</BreadcrumbItem>
        </Breadcrumbs>
      </Box>
      <Box>
        <Box sx={{ mb: 1, color: 'text.secondary', fontSize: '12px' }}>
          Truncated with home icon and custom icons
        </Box>
        <Breadcrumbs>
          <BreadcrumbItem href="/" isHome />
          <BreadcrumbItem href="/district">District</BreadcrumbItem>
          <BreadcrumbItem href="/district/schools">Schools</BreadcrumbItem>
          <BreadcrumbItem href="/district/schools/lincoln">Lincoln High</BreadcrumbItem>
          <BreadcrumbItem href="/district/schools/lincoln/classes">Classes</BreadcrumbItem>
          <BreadcrumbItem href="/district/schools/lincoln/classes/math" icon={<BookOpen size={14} />}>
            Math 101
          </BreadcrumbItem>
          <BreadcrumbItem>Student Progress</BreadcrumbItem>
        </Breadcrumbs>
      </Box>
    </Stack>
  ),
};

export const EdgeCases: Story = {
  render: () => (
    <Stack spacing={4}>
      <Box>
        <Box sx={{ mb: 1, color: 'text.secondary', fontSize: '12px' }}>
          Single item - home as current page (icon only)
        </Box>
        <Breadcrumbs>
          <BreadcrumbItem isHome />
        </Breadcrumbs>
      </Box>
      <Box>
        <Box sx={{ mb: 1, color: 'text.secondary', fontSize: '12px' }}>
          Two items
        </Box>
        <Breadcrumbs>
          <BreadcrumbItem href="/" isHome />
          <BreadcrumbItem>Dashboard</BreadcrumbItem>
        </Breadcrumbs>
      </Box>
      <Box>
        <Box sx={{ mb: 1, color: 'text.secondary', fontSize: '12px' }}>
          All items are links (no current page indicator)
        </Box>
        <Breadcrumbs>
          <BreadcrumbItem href="/" isHome />
          <BreadcrumbItem href="/courses">Courses</BreadcrumbItem>
          <BreadcrumbItem href="/courses/math">Math</BreadcrumbItem>
        </Breadcrumbs>
      </Box>
    </Stack>
  ),
};
