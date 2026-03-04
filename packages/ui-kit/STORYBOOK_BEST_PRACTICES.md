# Storybook Best Practices

This document summarizes the Storybook improvements made and guidelines for creating new stories.

## What Changed

All existing component stories have been updated to follow the Willow Design System theme consistently:

### Updated Stories

1. **Button** (`src/components/Button/Button.stories.tsx`)
   - Replaced all `<h1>`, `<h2>`, `<h3>` with `Typography` components
   - Replaced all `<div>` with `Box` components
   - Removed inline font-family styles (now uses Poppins from theme)

2. **Card** (`src/components/Card/Card.stories.tsx`)
   - Replaced `<div>` with `Box` in all renders
   - Updated action buttons from raw HTML `<button>` to `Button` components
   - Replaced inline `style` props with `sx` prop

3. **Chip** (`src/components/Chip/Chip.stories.tsx`)
   - Replaced all `<div>` with `Box` in interactive demos

4. **Modal** (`src/components/Modal/Modal.stories.tsx`)
   - Updated form dialog to use MUI `TextField` instead of raw `<input>` and `<textarea>`
   - Replaced `<div>` with `Box` for layout

5. **TextField** (`src/components/TextField/TextField.stories.tsx`)
   - Replaced `<div>` with `Box` in interactive demos

## Key Files

### 1. Theme Definition
**File:** `src/theme/createWillowTheme.ts`
- Defines all typography variants (h1-h6, body styles)
- Defines color palette and semantic colors
- Defines spacing and component overrides
- This is the single source of truth for styling

### 2. Style Guide (NEW)
**File:** `src/STORYBOOK_STYLE_GUIDE.md`
- Comprehensive guide for creating consistent stories
- Shows examples for each typography variant
- Explains color usage and layout patterns
- Documents common spacing values
- Includes dos and don'ts

### 3. Best Practices (NEW)
**File:** `STORYBOOK_BEST_PRACTICES.md` (this file)
- Summarizes changes made
- Points to relevant documentation
- Explains the "why" behind changes

## How to Create New Stories

### 1. Always Import MUI Components

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Typography, Box } from '@mui/material';
import { MyComponent } from './MyComponent.js';
```

### 2. Use MUI Components, Not HTML Elements

```tsx
// ✅ GOOD
<Box sx={{ padding: '24px' }}>
  <Typography variant="h1">Title</Typography>
  <Typography variant="body2">Description</Typography>
</Box>

// ❌ BAD
<div style={{ padding: '24px' }}>
  <h1>Title</h1>
  <p>Description</p>
</div>
```

### 3. Use `sx` Prop, Not `style` Prop

```tsx
// ✅ GOOD
<Box sx={{
  padding: '24px',
  backgroundColor: '#f9f9f9',
  borderRadius: '8px',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '24px'
}}>
  Content
</Box>

// ❌ BAD
<div style={{
  padding: '24px',
  backgroundColor: '#f9f9f9',
  borderRadius: '8px',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '24px'
}}>
  Content
</div>
```

### 4. Use Typography Variants for All Text

All these have font, size, weight, and color defined in the theme:

```tsx
<Typography variant="h1">Page title</Typography>
<Typography variant="h2">Section title</Typography>
<Typography variant="h5">Card title</Typography>
<Typography variant="body2">Body text</Typography>
<Typography variant="bodyDefault">Standard text</Typography>
<Typography variant="bodySmallSemibold">Small bold text</Typography>
```

### 5. Document Stories Consistently

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Typography, Box } from '@mui/material';
import { MyComponent } from './MyComponent.js';

const meta: Meta<typeof MyComponent> = {
  title: 'Components/MyComponent',
  component: MyComponent,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Individual variant stories
export const Default: Story = {
  args: { /* ... */ },
};

// Documentation story
export const Documentation: Story = {
  render: () => (
    <Box sx={{ padding: '24px' }}>
      <Typography variant="h1" sx={{ marginBottom: '32px' }}>
        MyComponent
      </Typography>

      <Box component="section" sx={{ marginBottom: '48px' }}>
        <Typography variant="h2" sx={{ marginBottom: '16px' }}>
          Section Title
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Section description
        </Typography>

        {/* Component examples */}
        <Box sx={{ display: 'grid', gap: '24px', marginTop: '16px' }}>
          <MyComponent />
        </Box>
      </Box>
    </Box>
  ),
  parameters: {
    controls: { disable: true },
    layout: 'padded',
  },
};
```

## Typography Available in Theme

| Variant | Use Case | Font | Size |
|---------|----------|------|------|
| `h1` | Page titles | Poppins 600 | 30px |
| `h2` | Section headings | Poppins 600 | 26px |
| `h3` | Subsection headings | Poppins 600 | 22px |
| `h4` | Body headings | Poppins 600 | 18px |
| `h5` | Group/card titles | Poppins 600 | 14px |
| `body1` | Large body | Inter 400 | 13px |
| `body2` | Standard body | Inter 400 | 12px |
| `bodyLarge` | Large text | Inter 400 | 16px |
| `bodyDefault` | Standard text | Inter 400 | 14px |
| `bodySmall` | Small text | Inter 400 | 12px |

**All with semibold variants available** (e.g., `bodyLargeSemibold`, `bodyDefaultSemibold`)

## Common Layout Patterns

### Container with Max Width
```tsx
<Box sx={{ maxWidth: '1200px', margin: '0 auto', padding: '24px' }}>
  {/* content */}
</Box>
```

### Grid of Cards
```tsx
<Box sx={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '24px'
}}>
  {/* cards */}
</Box>
```

### Flex Layout
```tsx
<Box sx={{
  display: 'flex',
  gap: '16px',
  alignItems: 'center',
  justifyContent: 'space-between'
}}>
  {/* items */}
</Box>
```

### Section with Heading
```tsx
<Box component="section" sx={{ marginBottom: '48px' }}>
  <Typography variant="h2" sx={{ marginBottom: '16px' }}>
    Section Title
  </Typography>
  {/* section content */}
</Box>
```

## Benefits

### 1. **Consistent Styling**
All stories now use the same typography, colors, and spacing from the theme. No more hardcoded values.

### 2. **Design System Compliance**
Stories showcase the design system as it's meant to be used - through MUI components and theme tokens.

### 3. **Easier Maintenance**
When design system tokens change, all stories automatically update without needing individual edits.

### 4. **Better Documentation**
Stories serve as proper documentation of how to use components with the theme.

### 5. **Professional Appearance**
All stories have consistent, polished styling that reflects the Willow brand.

## Questions or Issues?

1. **Check the style guide:** `src/STORYBOOK_STYLE_GUIDE.md`
2. **Look at existing stories** in `src/components/` for examples
3. **Review the theme:** `src/theme/createWillowTheme.ts` for available tokens
4. **Refer to MUI docs:** https://mui.com/material-ui/

## Storybook Commands

```bash
# Start Storybook in development
pnpm run storybook

# Build Storybook for production
pnpm run build-storybook
```

## Future Improvements

- Add a custom Storybook theme that matches Willow branding
- Create reusable story templates for common patterns
- Add a component checklist for story completeness
- Document accessibility requirements for stories
