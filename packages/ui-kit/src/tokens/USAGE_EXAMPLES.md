# Design Token Usage Examples

This guide shows how to use the updated primitive tokens in your components.

## Spacing Tokens

Use spacing tokens for consistent margins, padding, and gaps throughout your application.

### Available Spacing Values
- `0`: 0px
- `4`: 4px
- `6`: 6px
- `8`: 8px
- `12`: 12px
- `16`: 16px
- `18`: 18px
- `24`: 24px

### Usage

```typescript
import { spacingScale, getSpacing } from '@willow/ui-kit';

// Direct access
const padding = spacingScale[16]; // 16

// Using helper function
const margin = getSpacing(24); // 24

// In styled components
const StyledBox = styled(Box)(({ theme }) => ({
  padding: `${spacingScale[16]}px`,
  margin: `${spacingScale[8]}px`,
  gap: `${spacingScale[12]}px`,
}));

// In MUI sx prop
<Box sx={{ p: `${spacingScale[16]}px`, m: `${spacingScale[8]}px` }}>
  Content
</Box>
```

## Sizing Tokens

Use sizing tokens for border radius and icon sizes.

### Available Sizing Values
- `radiusSm`: 4px - Small border radius
- `radiusMd`: 8px - Medium border radius
- `radiusLg`: 10px - Large border radius
- `radiusFull`: 1000px - Full border radius (circle)
- `iconSm`: 16px - Small icon size
- `iconMd`: 24px - Medium icon size

### Usage

```typescript
import { sizingScale, getSizing } from '@willow/ui-kit';

// Direct access
const borderRadius = sizingScale.radiusMd; // 8
const iconSize = sizingScale.iconSm; // 16

// Using helper function
const radius = getSizing('radiusLg'); // 10

// In styled components
const StyledCard = styled(Card)({
  borderRadius: `${sizingScale.radiusMd}px`,
});

// For icons
<Icon sx={{ width: sizingScale.iconSm, height: sizingScale.iconSm }} />
```

## Typography Tokens

Typography tokens include font families, weights, sizes, line heights, and letter spacing.

### Available Typography Values

**Font Families:**
- `heading`: "Poppins" - For headings
- `body`: "Inter" - For body text

**Font Weights:**
- `regular`: 400 - Regular font weight
- `strong`: 600 - Semi Bold font weight

**Font Sizes:** xs (12), sm (14), md (16), lg (18), xl (22), 2xl (26), 3xl (30)

**Line Heights:** xxs (16), xs (20), sm (24), md (28), lg (32), xl (36)

**Letter Spacing:** n050 (-0.5), none (0), n100 (-1), n150 (-1.5), n200 (-2), n500 (-5)

### Usage

```typescript
import {
  fontFamilyScale,
  fontWeightScale,
  fontSizeScale,
  lineHeightScale,
  letterSpacingScale
} from '@willow/ui-kit';

// Font families
const headingFont = fontFamilyScale.heading; // "Poppins"
const bodyFont = fontFamilyScale.body; // "Inter"

// Font weights
const regularWeight = fontWeightScale.regular; // 400
const boldWeight = fontWeightScale.strong; // 600

// Font sizes
const fontSize = fontSizeScale.md; // 16

// Line heights
const lineHeight = lineHeightScale.md; // 28

// Letter spacing
const letterSpacing = letterSpacingScale.none; // 0

// In styled components
const StyledHeading = styled('h1')({
  fontFamily: fontFamilyScale.heading,
  fontWeight: fontWeightScale.strong,
  fontSize: `${fontSizeScale['2xl']}px`,
  lineHeight: `${lineHeightScale.lg}px`,
});

const StyledBody = styled('p')({
  fontFamily: fontFamilyScale.body,
  fontWeight: fontWeightScale.regular,
  fontSize: `${fontSizeScale.md}px`,
  lineHeight: `${lineHeightScale.md}px`,
});
```

## All Primitive Tokens

Access all tokens at once:

```typescript
import { primitiveTokens } from '@willow/ui-kit';

// Access any token
const spacing = primitiveTokens.spacing['16'].value; // 16
const radius = primitiveTokens.sizing.radiusMd.value; // 8
const fontSize = primitiveTokens.typography.fontSize.md.value; // 16
```

## Helper Functions

```typescript
import { getSpacings, getFontSizes } from '@willow/ui-kit';

// Get all spacing values in ascending order
const allSpacings = getSpacings(); // [0, 4, 6, 8, 12, 16, 18, 24]

// Get all font sizes in ascending order
const allFontSizes = getFontSizes(); // [12, 14, 16, 18, 22, 26, 30]
```

## Best Practices

1. **Always use tokens instead of hardcoded values**
   ```typescript
   // ❌ Bad
   <Box sx={{ padding: '16px' }} />

   // ✅ Good
   <Box sx={{ padding: `${spacingScale[16]}px` }} />
   ```

2. **Use semantic naming in your components**
   ```typescript
   // ✅ Good
   const CARD_PADDING = spacingScale[16];
   const CARD_BORDER_RADIUS = sizingScale.radiusMd;

   <Card sx={{
     padding: `${CARD_PADDING}px`,
     borderRadius: `${CARD_BORDER_RADIUS}px`
   }} />
   ```

3. **Keep your tokens in sync with Figma**
   - When Figma variables change, update `primitive-tokens.json`
   - Run the build to ensure TypeScript types are correct
   - Test your components to ensure they look correct
