import { TabsProps } from './Tabs.types.js';
/**
 * Tabs Component
 *
 * Navigation tabs for switching between views or content within the same page.
 * Follows Willow design system styling with consistent colors, spacing, and interactions.
 *
 * @example
 * ```tsx
 * const [activeTab, setActiveTab] = useState('overview');
 *
 * <Tabs
 *   value={activeTab}
 *   onChange={setActiveTab}
 *   tabs={[
 *     { value: 'overview', label: 'Overview' },
 *     { value: 'details', label: 'Details' },
 *     { value: 'settings', label: 'Settings', icon: <SettingsIcon /> },
 *   ]}
 * />
 * ```
 */
export declare const Tabs: import("react").ForwardRefExoticComponent<TabsProps & import("react").RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Tabs.d.ts.map