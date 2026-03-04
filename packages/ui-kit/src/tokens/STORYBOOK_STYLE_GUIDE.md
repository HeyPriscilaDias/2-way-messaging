# Storybook Page Style Guide

This document defines the consistent layout and styling standards for all Storybook documentation pages in the Willow Design System.

## Layout Standards

### Page Structure

```tsx
export const StoryName: Story = {
  render: () => (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px' }}>
      {/* Page content */}
    </div>
  ),
};
```

### Meta Configuration

```tsx
const meta = {
  title: 'Foundations/PageName', // Use 'Foundations/' prefix for design tokens
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;
```

## Typography Hierarchy

### H1 - Page Title
```tsx
<h1 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '16px', color: '#111827' }}>
  Page Title
</h1>
```

### H2 - Section Title
```tsx
<h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '16px', color: '#111827' }}>
  Section Title
</h2>
```

### H3 - Subsection Title
```tsx
<h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', color: '#111827' }}>
  Subsection Title
</h3>
```

### Body Text
```tsx
// Large description (after H1)
<p style={{ fontSize: '16px', color: '#4b5563', marginBottom: '32px' }}>
  Page description text
</p>

// Standard description (after H2/H3)
<p style={{ fontSize: '14px', color: '#4b5563', marginBottom: '24px', lineHeight: '1.5' }}>
  Section description text
</p>

// Small helper text
<p style={{ fontSize: '11px', color: '#6b7280', marginBottom: '2px' }}>
  Helper text
</p>
```

## Color Palette

Use these colors consistently across all pages:

- **Headings**: `#111827` (neutral-800)
- **Body text**: `#4b5563` (neutral-600)
- **Helper text**: `#6b7280` (neutral-500)
- **Code text**: `#374151` (neutral-700)
- **Borders**: `#e5e7eb` (neutral-200)
- **Backgrounds**:
  - White: `#fff`
  - Light gray: `#f9fafb` (neutral-50)

## Common Components

### Code Block / Technical Details

```tsx
<div
  style={{
    padding: '16px',
    backgroundColor: '#f9fafb',
    borderRadius: '8px',
    fontSize: '13px',
    fontFamily: 'monospace',
    border: '1px solid #e5e7eb',
  }}
>
  <div style={{ fontWeight: 600, marginBottom: '12px', color: '#111827' }}>
    Label:
  </div>
  <code style={{ color: '#374151' }}>Code content here</code>
</div>
```

### Example Container

```tsx
<div
  style={{
    padding: '32px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
  }}
>
  {/* Examples */}
</div>
```

### Table (if needed)

```tsx
<table style={{
  width: '100%',
  borderCollapse: 'collapse',
  backgroundColor: '#fff',
  border: '1px solid #e5e7eb',
  borderRadius: '8px',
}}>
  <thead>
    <tr style={{ borderBottom: '2px solid #e5e7eb' }}>
      <th style={{
        padding: '12px 16px',
        textAlign: 'left',
        fontWeight: 600,
        fontSize: '13px',
        color: '#374151',
        backgroundColor: '#f9fafb',
      }}>
        Header
      </th>
    </tr>
  </thead>
  <tbody>
    <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
      <td style={{
        padding: '16px',
        fontSize: '13px',
        color: '#4b5563',
        verticalAlign: 'top',
      }}>
        Cell content
      </td>
    </tr>
  </tbody>
</table>
```

## Spacing Standards

- **Container padding**: `24px`
- **Max width**: `1200px`
- **Section spacing**: `48px` (margin between major sections)
- **Subsection spacing**: `32px` (margin between subsections)
- **Element spacing**: `24px`, `16px`, `8px` (depending on relationship)
- **Grid gap**: `32px` for 2-column layouts

## Examples

See these files for reference implementations:
- `Typography.stories.tsx` - Table-based layout
- `ColorPalette.stories.tsx` - Grid-based layout
- `Effects.stories.tsx` - Mixed layout with examples

## Checklist for New Pages

- [ ] Use `maxWidth: '1200px'` container
- [ ] Use `layout: 'padded'` in meta
- [ ] H1 uses 28px, weight 700, color #111827
- [ ] H2 uses 20px, weight 700, color #111827
- [ ] H3 uses 18px, weight 600, color #111827
- [ ] Body text uses #4b5563
- [ ] Code blocks use #f9fafb background with #e5e7eb border
- [ ] Consistent spacing (48px between sections, 32px for subsections)
- [ ] Page title starts with "Foundations/" for design tokens
