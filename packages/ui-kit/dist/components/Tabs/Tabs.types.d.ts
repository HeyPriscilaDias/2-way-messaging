/**
 * Tab Item Configuration
 * Defines a single tab in the tab list
 */
export interface TabItem {
    /**
     * Unique value for the tab (used for tracking active tab)
     */
    value: string;
    /**
     * Display label for the tab
     */
    label: string;
    /**
     * Optional icon to display before the label
     * Must be a React element (e.g., <DashboardIcon />)
     */
    icon?: React.ReactElement;
    /**
     * Whether the tab is disabled
     */
    disabled?: boolean;
}
/**
 * Tabs Component Props
 * Navigation tabs for switching between views or content within the same page
 */
export interface TabsProps {
    /**
     * Currently active tab value
     */
    value: string;
    /**
     * Callback when active tab changes
     */
    onChange: (value: string) => void;
    /**
     * Array of tab configurations
     */
    tabs: TabItem[];
    /**
     * Whether tabs should take full width
     * When true, tabs are evenly distributed across the container
     * @default false
     */
    fullWidth?: boolean;
}
//# sourceMappingURL=Tabs.types.d.ts.map