import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Tabs } from './Tabs.js';
import { TabsProps } from './Tabs.types.js';
import { Home, Settings, User, Poll, Bell } from '@willow/icons';

/**
 * LLM USAGE GUIDE: Tabs Component
 *
 * PURPOSE:
 * The Tabs component is used for navigation between different views or content sections
 * within the same page. It provides a clear visual indication of the current section and
 * allows users to switch between related content areas.
 *
 * WHEN TO USE:
 * - Switching between different views of the same dataset (e.g., table view vs card view)
 * - Organizing related content into logical sections (e.g., Profile, Settings, Notifications)
 * - Dashboard sections with distinct content areas
 * - Multi-step forms or wizards where steps can be navigated freely
 * - Settings panels with different configuration categories
 *
 * WHEN NOT TO USE:
 * - For primary navigation (use sidebar or top navigation instead)
 * - For pagination (use Pagination component)
 * - For accordion-style content (use Accordion component)
 * - For more than 5-7 tabs (consider restructuring content)
 * - For linear workflows where users shouldn't skip steps (use Stepper component)
 *
 * KEY PATTERNS:
 *
 * 1. BASIC TABS (most common):
 * ```tsx
 * const [activeTab, setActiveTab] = useState('overview');
 *
 * <Tabs
 *   value={activeTab}
 *   onChange={setActiveTab}
 *   tabs={[
 *     { value: 'overview', label: 'Overview' },
 *     { value: 'details', label: 'Details' },
 *     { value: 'history', label: 'History' },
 *   ]}
 * />
 * ```
 *
 * 2. TABS WITH ICONS:
 * Use icons to enhance recognition, but keep them consistent throughout the tab set.
 * Icons should clarify, not clutter.
 * ```tsx
 * <Tabs
 *   value={activeTab}
 *   onChange={setActiveTab}
 *   tabs={[
 *     { value: 'dashboard', label: 'Dashboard', icon: <DashboardIcon /> },
 *     { value: 'profile', label: 'Profile', icon: <PersonIcon /> },
 *     { value: 'settings', label: 'Settings', icon: <SettingsIcon /> },
 *   ]}
 * />
 * ```
 *
 * 3. FULL WIDTH TABS:
 * Use fullWidth when you want tabs to distribute evenly across the container width.
 * Best for 2-4 tabs where equal distribution makes sense.
 * ```tsx
 * <Tabs
 *   value={activeTab}
 *   onChange={setActiveTab}
 *   tabs={[
 *     { value: 'students', label: 'Students' },
 *     { value: 'staff', label: 'Staff' },
 *   ]}
 *   fullWidth
 * />
 * ```
 *
 * 4. DISABLED TABS:
 * Use disabled state when a tab is contextually unavailable (e.g., requires permission,
 * depends on another action being completed first).
 * ```tsx
 * <Tabs
 *   value={activeTab}
 *   onChange={setActiveTab}
 *   tabs={[
 *     { value: 'basic', label: 'Basic Info' },
 *     { value: 'advanced', label: 'Advanced', disabled: !userHasPermission },
 *   ]}
 * />
 * ```
 *
 * BEST PRACTICES:
 *
 * 1. TAB COUNT:
 * - Keep tabs between 2-5 for optimal usability
 * - More than 5 tabs suggests content should be reorganized
 * - Consider grouping related content or using hierarchical navigation
 *
 * 2. TAB LABELS:
 * - Use short, clear labels (1-2 words)
 * - Be consistent with capitalization (sentence case)
 * - Make labels descriptive and mutually exclusive
 *
 * 3. ICON USAGE:
 * - Use icons sparingly and consistently
 * - Either all tabs have icons or none do (mixed is confusing)
 * - Icons should be immediately recognizable
 * - Don't use icons as a crutch for poor labels
 *
 * 4. CONTENT STRATEGY:
 * - Preserve content state when switching tabs (don't lose form data)
 * - Use URL parameters to make tabs bookmarkable/shareable
 * - Load tab content lazily if it's resource-intensive
 * - Show loading states within tab content, not the tabs themselves
 *
 * 5. RESPONSIVE BEHAVIOR:
 * - On mobile, tabs will scroll horizontally if needed
 * - Consider using fullWidth for 2-3 tabs on mobile
 * - For many tabs on mobile, consider alternative navigation
 *
 * COMMON USE CASES:
 *
 * - Student Profile: Overview, Progress, Schedule, Documents
 * - Dashboard: Analytics, Recent Activity, Reports
 * - Settings: Profile, Account, Notifications, Privacy
 * - Course View: Syllabus, Lessons, Assignments, Grades
 * - Admin Panel: Users, Schools, Reports, Settings
 *
 * ACCESSIBILITY:
 * - Tabs are keyboard navigable (arrow keys to switch, Enter to activate)
 * - Screen readers announce tab labels and selected state
 * - Focus indicator is visible on keyboard navigation
 * - Disabled tabs are announced as unavailable
 */

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Navigation tabs for switching between views or content within the same page. Follows Willow design system styling.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Interactive wrapper for controlled Tabs component
 */
const TabsWrapper = (props: Partial<TabsProps>) => {
  const [value, setValue] = useState(props.value || 'overview');

  return (
    <div>
      <Tabs
        value={value}
        onChange={setValue}
        tabs={props.tabs || [
          { value: 'overview', label: 'Overview' },
          { value: 'details', label: 'Details' },
          { value: 'history', label: 'History' },
        ]}
        fullWidth={props.fullWidth}
      />
      <div style={{ padding: '24px', backgroundColor: '#f5f5f5', marginTop: '16px' }}>
        <p style={{ margin: 0, color: '#666' }}>
          Active tab: <strong>{value}</strong>
        </p>
      </div>
    </div>
  );
};

/**
 * Default tabs with three simple text tabs
 */
export const Default: Story = {
  render: () => <TabsWrapper />,
};

/**
 * Tabs with icons positioned before labels.
 * Use icons consistently across all tabs or none at all.
 */
export const WithIcons: Story = {
  render: () => (
    <TabsWrapper
      tabs={[
        { value: 'dashboard', label: 'Dashboard', icon: <Home /> },
        { value: 'profile', label: 'Profile', icon: <User /> },
        { value: 'analytics', label: 'Analytics', icon: <Poll /> },
        { value: 'settings', label: 'Settings', icon: <Settings /> },
      ]}
      value="dashboard"
    />
  ),
};

/**
 * Full width tabs distribute evenly across the container.
 * Best for 2-4 tabs where equal distribution makes sense.
 */
export const FullWidth: Story = {
  render: () => (
    <TabsWrapper
      tabs={[
        { value: 'students', label: 'Students' },
        { value: 'staff', label: 'Staff' },
      ]}
      fullWidth
    />
  ),
};

/**
 * Full width tabs with icons.
 * Combines even distribution with visual iconography.
 */
export const FullWidthWithIcons: Story = {
  render: () => (
    <TabsWrapper
      tabs={[
        { value: 'students', label: 'Students', icon: <User /> },
        { value: 'analytics', label: 'Analytics', icon: <Poll /> },
        { value: 'settings', label: 'Settings', icon: <Settings /> },
      ]}
      fullWidth
      value="students"
    />
  ),
};

/**
 * Tabs with one disabled tab.
 * Use disabled state when a tab is contextually unavailable.
 */
export const WithDisabled: Story = {
  render: () => (
    <TabsWrapper
      tabs={[
        { value: 'basic', label: 'Basic Info' },
        { value: 'advanced', label: 'Advanced Settings', disabled: true },
        { value: 'permissions', label: 'Permissions', disabled: true },
      ]}
      value="basic"
    />
  ),
};

/**
 * Many tabs example (approaching the upper limit).
 * More than 5-7 tabs suggests content should be reorganized.
 */
export const ManyTabs: Story = {
  render: () => (
    <TabsWrapper
      tabs={[
        { value: 'overview', label: 'Overview', icon: <Home /> },
        { value: 'profile', label: 'Profile', icon: <User /> },
        { value: 'analytics', label: 'Analytics', icon: <Poll /> },
        { value: 'notifications', label: 'Notifications', icon: <Bell /> },
        { value: 'settings', label: 'Settings', icon: <Settings /> },
      ]}
      value="overview"
    />
  ),
};

/**
 * Two tabs - minimal use case.
 * Often used for binary views (e.g., List vs Grid, Active vs Archived).
 */
export const TwoTabs: Story = {
  render: () => (
    <TabsWrapper
      tabs={[
        { value: 'list', label: 'List View' },
        { value: 'grid', label: 'Grid View' },
      ]}
      value="list"
    />
  ),
};
