import { MultiSelectProps } from './MultiSelect.types.js';
/**
 * MultiSelect component for selecting multiple options from a dropdown.
 *
 * ## When to use
 * - Use when users need to select multiple items from a predefined list
 * - Common use cases: filtering by multiple statuses, selecting multiple tags, choosing multiple categories
 *
 * ## When NOT to use
 * - For single selection, use the regular `Select` component
 * - For a small number of always-visible options (2-4), consider `Checkbox` group instead
 *
 * ## Examples
 *
 * Basic usage:
 * ```tsx
 * <MultiSelect
 *   label="Status"
 *   value={selectedStatuses}
 *   onChange={setSelectedStatuses}
 *   options={[
 *     { value: 'active', label: 'Active' },
 *     { value: 'pending', label: 'Pending' },
 *     { value: 'inactive', label: 'Inactive' },
 *   ]}
 * />
 * ```
 *
 * With placeholder and helper text:
 * ```tsx
 * <MultiSelect
 *   label="Categories"
 *   placeholder="Select categories"
 *   helperText="Choose one or more categories"
 *   value={selectedCategories}
 *   onChange={setSelectedCategories}
 *   options={categoryOptions}
 * />
 * ```
 */
export declare const MultiSelect: import("react").ForwardRefExoticComponent<MultiSelectProps & import("react").RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=MultiSelect.d.ts.map