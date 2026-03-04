# UI Kit - Claude Instructions

## CRITICAL: Modification Protection

**NEVER modify any file in this package without EXPLICIT consent from the user.**

Before making ANY change to ui-kit, you MUST:
1. Explain exactly what you want to change and why
2. Wait for the user to explicitly say "yes" or approve the change
3. Never assume consent - silence is NOT approval

This applies to ALL files: components, types, styles, stories, tests, and exports.

---

This package provides Willow's design system components. **Always prefer ui-kit components over raw MUI.**

## Quick Reference

| Need | Use | Never Use |
|------|-----|-----------|
| Button with text | `TextButton` | `MUI Button` |
| Icon-only button | `IconButton` | `MUI IconButton` |
| Text input (new code) | `TextInput` | `MUI TextField` |
| Text input (legacy) | `TextField` | (MUI wrapper, use `TextInput` for new code) |
| Raw input element | `Input` | `<input>` |
| Card container | `Card` | `MUI Card` |
| Status tag | `Chip` | `MUI Chip` |
| Dialog/popup | `Modal` | `MUI Dialog` |
| Text display | `WillowTypography` | (MUI `Typography` also available for backwards compat) |
| Loading placeholder | `Skeleton` | `MUI Skeleton` |
| Alert message | `Alert` | `MUI Alert` |
| Hover tip | `Tooltip` | `MUI Tooltip` |
| Boolean input | `Checkbox` | `MUI Checkbox` |
| Single select list | `RadioGroup` | `MUI Radio` |
| Dropdown select | `Select` | `MUI Select` |
| Tab navigation | `Tabs` | `MUI Tabs` |
| Data table | `Table` | `MUI Table` |

## Button Variants

```tsx
// Primary action (submit, save, confirm)
<TextButton variant="primary">Save</TextButton>

// Secondary action (cancel, back, alternative)
<TextButton variant="secondary">Cancel</TextButton>

// Destructive action (delete, remove)
<TextButton variant="critical">Delete</TextButton>

// Subtle action (links, tertiary)
<TextButton variant="ghost">Learn more</TextButton>

// On dark backgrounds only
<TextButton variant="on-dark">Action</TextButton>

// Icon-only buttons
<IconButton variant="secondary" icon={<CloseIcon />} />
```

## Component Selection Rules

1. **Forms**: Use `TextInput` for all new text inputs. It provides label, hint text, error states, and icon support built-in. Legacy code uses `TextField` (MUI wrapper).
   - **TextInput**: Native input with label, hint text, icons - use for new code
   - **Input**: Just the input element without label - use for inline editing, search bars
   - **TextField**: Legacy MUI wrapper - keep for backwards compatibility

2. **Feedback**: Use `Chip` for status indicators. Match color to meaning:
   - `success` = completed, approved
   - `info` = informational
   - `warning` = needs attention
   - `error` = failed, rejected
   - `gray` = default/inactive

3. **Dialogs**: Use `Modal` with `ModalTitle`, `ModalContent`, `ModalActions` compound components.

4. **Cards**: Use `Card` with `variant="elevated"` for interactive cards, `variant="outlined"` for static content.

5. **Typography**: Use `WillowTypography` for new components (constrained variants). MUI's `Typography` is still available for backwards compatibility. `WillowTypography` variants:
   - `display` = page titles (30px Poppins)
   - `heading` = section headers (22px Poppins)
   - `subheading` = subsection headers (18px Poppins)
   - `body` = default text (14px Inter)
   - `body-lg` = larger body text (16px Inter)
   - `body-sm` = smaller body text (12px Inter)
   - `caption` = help text, metadata (12px Inter)
   - `label` = form labels (14px Inter semibold)

6. **Alerts**: Use `Alert` for user messages. Variants: `error`, `warning`, `info`, `success`.

7. **Form Controls**:
   - `Checkbox` for boolean inputs (with optional label)
   - `RadioGroup` for single selection from options (variants: `default`, `card`)
   - `Select` for dropdown selection (variants: `outlined`, `filled`)

8. **Tabs**: Use `Tabs` for navigation between views. Pass `tabs` array with value/label/icon.

9. **Tables**: Use `Table` for data grids. Variants: `default`, `striped`. Sizes: `sm`, `md`.

## Common Patterns

```tsx
// Form with validation (new code - use TextInput)
<TextInput
  label="Email"
  placeholder="Enter your email"
  state={errors.email ? 'error' : 'default'}
  hintText={errors.email || 'We will never share your email'}
  required
/>

// Form with icons
<TextInput
  label="Search"
  placeholder="Search..."
  leadingIcon={<SearchIcon />}
/>

// Legacy form (TextField - MUI wrapper, for backwards compatibility)
<TextField
  label="Email"
  error={!!errors.email}
  helperText={errors.email}
/>

// Checkbox with label
<Checkbox
  label="I agree to terms"
  checked={agreed}
  onChange={(e) => setAgreed(e.target.checked)}
/>

// Radio options
<RadioGroup
  value={selected}
  onChange={(value) => setSelected(value)}
  options={[
    { value: 'opt1', label: 'Option 1' },
    { value: 'opt2', label: 'Option 2' },
  ]}
/>

// Select dropdown
<Select
  label="Role"
  value={role}
  onChange={(e) => setRole(e.target.value)}
  options={[
    { value: 'admin', label: 'Admin' },
    { value: 'user', label: 'User' },
  ]}
/>

// Tab navigation
<Tabs
  value={activeTab}
  onChange={(value) => setActiveTab(value)}
  tabs={[
    { value: 'overview', label: 'Overview' },
    { value: 'details', label: 'Details' },
  ]}
/>

// Data table
<Table
  columns={[
    { id: 'name', label: 'Name', accessor: 'name' },
    { id: 'email', label: 'Email', accessor: 'email' },
  ]}
  data={users}
  variant="striped"
  onRowClick={(row) => navigate(`/users/${row.id}`)}
/>
```

## Imports

```tsx
// Correct - from ui-kit
import {
  TextButton, TextInput, Input, Card, Chip, Modal,
  WillowTypography, Skeleton, Alert, Tooltip,
  Checkbox, RadioGroup, Select, Tabs, Table,
  TextField,   // Legacy MUI wrapper (for backwards compat)
  Typography   // MUI Typography (backwards compat)
} from '@willow/ui-kit';

// Wrong - raw MUI (will cause inconsistent styling)
import { Button, TextField } from '@mui/material';
```

## Design Tokens

Access colors and spacing through semantic tokens, not raw values:

```tsx
import { resolvedSemanticTokens } from '@willow/ui-kit';

// Use semantic tokens
backgroundColor: resolvedSemanticTokens.action['bg-action-primary-default']

// Don't hardcode colors
backgroundColor: '#1E3A5F' // Wrong
```

## Detailed Documentation

See `docs/project-wide/ui-kit.md` for:
- Full component API reference
- Design token documentation
- When to use each variant
- Accessibility guidelines

## Adding New Components

When building new ui-kit components:

1. Follow the file structure:
   ```
   ComponentName/
   ├── ComponentName.tsx        # Component with forwardRef
   ├── ComponentName.types.ts   # TypeScript interfaces
   ├── ComponentName.styled.ts  # Styled components with $ props
   ├── ComponentName.stories.tsx # Storybook with LLM comments
   ├── ComponentName.test.tsx   # Unit tests
   └── index.ts                 # Barrel export
   ```

2. Use transient props (`$variant`, `$size`) in styled components to prevent DOM warnings

3. Add comprehensive comments in `.stories.tsx` for LLM consumption - these comments teach future Claude sessions when/how to use the component

4. Export from `src/index.ts` and add to this CLAUDE.md quick reference table
