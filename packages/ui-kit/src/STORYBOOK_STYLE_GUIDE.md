# Storybook Style Guide

This guide ensures all stories use the Willow Design System theme consistently. All typography, colors, spacing, and component styling should come from the MUI theme defined in `src/theme/createWillowTheme.ts`.

## Quick Start

### 1. Always use MUI components, not HTML elements

**✅ DO THIS:**
```tsx
import { Typography, Box } from '@mui/material';

<Typography variant="h1">Page Title</Typography>
<Typography variant="body2">Description text</Typography>
<Box sx={{ padding: '24px' }}>Content</Box>
```

**❌ DON'T DO THIS:**
```tsx
<h1>Page Title</h1>
<p>Description text</p>
<div style={{ padding: '24px' }}>Content</div>
```

### 2. Use the `sx` prop for styling, not inline `style` prop

**✅ DO THIS:**
```tsx
<Box sx={{
  padding: '24px',
  backgroundColor: '#f9f9f9',
  borderRadius: '8px'
}}>
  Content
</Box>
```

**❌ DON'T DO THIS:**
```tsx
<div style={{
  padding: '24px',
  backgroundColor: '#f9f9f9',
  borderRadius: '8px'
}}>
  Content
</div>
```

## Typography Variants

Use these variants from the theme for all text:

| Variant | Use Case | Font | Size | Weight |
|---------|----------|------|------|--------|
| `h1` | Page titles, main headings | Poppins | 30px | 600 |
| `h2` | Section headings | Poppins | 26px | 600 |
| `h3` | Subsection headings | Poppins | 22px | 600 |
| `h4` | Body headings | Poppins | 18px | 600 |
| `h5` | Group/card headings | Poppins | 14px | 600 |
| `h6` | Small headings (backward compat) | Poppins | 14px | 600 |
| `body1` | Large body text | Inter | 13px | 400 |
| `body2` | Standard body text | Inter | 12px | 400 |
| `bodyLarge` | Large text | Inter | 16px | 400 |
| `bodyLargeSemibold` | Large text, bold | Inter | 16px | 600 |
| `bodyDefault` | Standard text | Inter | 14px | 400 |
| `bodyDefaultSemibold` | Standard text, bold | Inter | 14px | 600 |
| `bodySmall` | Small text | Inter | 12px | 400 |
| `bodySmallSemibold` | Small text, bold | Inter | 12px | 600 |
| `caption` | Captions and hints | Inter | 12px | 400 |

### Typography Examples

```tsx
import { Typography } from '@mui/material';

// Headings
<Typography variant="h1">Page Title</Typography>
<Typography variant="h2">Section Title</Typography>
<Typography variant="h3">Subsection</Typography>
<Typography variant="h5">Card Title</Typography>

// Body text
<Typography variant="body2" color="text.secondary">
  Secondary text description
</Typography>
<Typography variant="bodyDefault">
  Standard paragraph text
</Typography>
<Typography variant="bodySmallSemibold">
  Small bold text
</Typography>

// Using color from theme
<Typography variant="body2" sx={{ color: '#666' }}>
  Gray text
</Typography>
```

## Layout Components

Always use `Box` for layouts instead of `div`:

```tsx
import { Box, Typography } from '@mui/material';

// Container with padding and max-width
<Box sx={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
  <Typography variant="h1">Title</Typography>
  <Typography variant="body2">Description</Typography>
</Box>

// Flex layouts
<Box sx={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
  <Box>Item 1</Box>
  <Box>Item 2</Box>
</Box>

// Grid layouts
<Box sx={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '24px'
}}>
  {items.map(item => <Box key={item.id}>{item.name}</Box>)}
</Box>

// Sections
<Box component="section" sx={{ marginBottom: '48px' }}>
  <Typography variant="h2">Section Title</Typography>
  {/* Section content */}
</Box>
```

## Color Usage

Colors come from the theme palette. Avoid hardcoded colors:

```tsx
// ✅ DO THIS - Use theme colors
<Box sx={{ backgroundColor: 'background.default' }}>
  <Typography sx={{ color: 'text.primary' }}>Text</Typography>
</Box>

// Or use specific palette colors
<Box sx={{ backgroundColor: '#f9f9f9' }}>
  <Typography sx={{ color: '#666' }}>Text</Typography>
</Box>

// ❌ DON'T DO THIS
<div style={{ backgroundColor: 'purple', color: 'lime' }}>
  Random colors not in theme
</div>
```

### Common Theme Colors

```tsx
// Text colors
color: 'text.primary'    // Main text
color: 'text.secondary'  // Secondary/muted text
color: 'text.disabled'   // Disabled text

// Background colors
backgroundColor: 'background.default'  // Page background
backgroundColor: 'background.paper'    // Card/paper background

// Status colors
sx={{ color: 'error.main' }}     // Error red
sx={{ color: 'warning.main' }}   // Warning yellow
sx={{ color: 'success.main' }}   // Success green
sx={{ color: 'info.main' }}      // Info blue
```

## Story Structure Pattern

Here's the recommended structure for component documentation stories:

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
  argTypes: {
    // Define control props
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Individual variant stories
export const Default: Story = {
  args: { /* ... */ },
};

export const Documentation: Story = {
  render: () => (
    <Box sx={{ padding: '24px' }}>
      {/* Use Typography and Box for all content */}
      <Typography variant="h1" sx={{ marginBottom: '32px' }}>
        MyComponent
      </Typography>

      <Box sx={{ marginBottom: '48px' }}>
        <Typography variant="h2" sx={{ marginBottom: '16px' }}>
          Section Title
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Description of section
        </Typography>
      </Box>

      {/* Component examples */}
      <Box sx={{ display: 'grid', gap: '24px' }}>
        <MyComponent />
      </Box>
    </Box>
  ),
  parameters: {
    controls: { disable: true },
    layout: 'padded',
  },
};
```

## Common Spacing Values

Use these spacing values for consistency (from the theme):

```tsx
// Padding/Margin values (in px)
2    // 2px
4    // 4px
8    // 8px
12   // 12px
16   // 16px
24   // 24px
32   // 32px
48   // 48px
64   // 64px

// Usage examples
sx={{ padding: '24px' }}
sx={{ marginBottom: '32px' }}
sx={{ gap: '16px' }}
```

## Component Examples

### Documentation Page with Variants

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Typography, Box } from '@mui/material';
import { Button } from './Button.js';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Documentation: Story = {
  render: () => (
    <Box sx={{ padding: '24px' }}>
      <Typography variant="h1" sx={{ marginBottom: '32px' }}>
        Button
      </Typography>

      {/* Variants Section */}
      <Box component="section" sx={{ marginBottom: '48px' }}>
        <Typography variant="h2" sx={{ marginBottom: '16px' }}>
          All Variants
        </Typography>
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px'
        }}>
          <Box sx={{ padding: '16px', border: '1px solid #e0e0e0' }}>
            <Typography variant="h5" sx={{ marginBottom: '8px' }}>
              Primary
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Main action button
            </Typography>
            <Button variant="primary">Primary</Button>
          </Box>
          {/* More variants... */}
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

## DO's and DON'Ts

### DO's
✅ Use `Typography` for all text
✅ Use `Box` for all containers
✅ Use `sx` prop for styling
✅ Reference theme colors and spacing
✅ Use consistent typography variants
✅ Keep stories well-documented
✅ Test stories in Storybook before committing

### DON'Ts
❌ Don't use `<h1>`, `<p>`, `<div>` HTML elements
❌ Don't use inline `style` prop
❌ Don't hardcode colors (use theme palette)
❌ Don't use arbitrary spacing values
❌ Don't mix styled-components or emotion with theme
❌ Don't ignore TypeScript errors
❌ Don't commit stories with inconsistent styling

## Imports Checklist

Every documentation story should import:

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Typography, Box } from '@mui/material';
import { YourComponent } from './YourComponent.js';
```

## Questions?

Refer to:
- MUI documentation: https://mui.com/material-ui/
- Theme definition: `src/theme/createWillowTheme.ts`
- Existing stories in `src/components/` for examples
- Figma design system for visual references
