import { forwardRef } from 'react';
import { StyledTabs, StyledTab } from './Tabs.styled.js';
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
export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ value, onChange, tabs, fullWidth = false }, ref) => {
    const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
      onChange(newValue);
    };

    return (
      <StyledTabs
        ref={ref}
        value={value}
        onChange={handleChange}
        variant={fullWidth ? 'fullWidth' : 'standard'}
      >
        {tabs.map((tab) => (
          <StyledTab
            key={tab.value}
            value={tab.value}
            label={tab.label}
            {...(tab.icon && { icon: tab.icon, iconPosition: "start" as const })}
            disabled={tab.disabled}
          />
        ))}
      </StyledTabs>
    );
  }
);

Tabs.displayName = 'WillowTabs';
