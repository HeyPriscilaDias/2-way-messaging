# Design Tokens

This directory contains design tokens from the Willow design system, sourced from Figma.

## Files

- **`figma-tokens.json`** - Raw color tokens exported from Figma (file ID: `q0ZgDEswbJLXOerrCYUp1M`)
- **`figma-tokens.ts`** - TypeScript utilities for consuming the tokens
- **`ColorPalette.stories.tsx`** - Storybook documentation for viewing all colors
- **`primitives.ts`** - Legacy primitive color definitions
- **`semantic.ts`** - Legacy semantic color mappings

## Fetching Color Tokens from Figma

### Option 1: Using Figma REST API

If you have a Figma Personal Access Token:

```bash
# Set your Figma token
export FIGMA_TOKEN="your-token-here"

# Fetch the file
curl -H "X-Figma-Token: $FIGMA_TOKEN" \
  "https://api.figma.com/v1/files/q0ZgDEswbJLXOerrCYUp1M" \
  > figma-export.json

# Extract color styles
curl -H "X-Figma-Token: $FIGMA_TOKEN" \
  "https://api.figma.com/v1/files/q0ZgDEswbJLXOerrCYUp1M/styles" \
  > figma-styles.json
```

### Option 2: Using Figma MCP Server

If you have the Figma MCP server configured:

```bash
# The MCP server should already be configured at http://127.0.0.1:3845/mcp
# Use Claude Code to fetch the tokens:
# @figma Get color styles from file q0ZgDEswbJLXOerrCYUp1M
```

### Option 3: Manual Export from Figma

1. Open the Figma file: [q0ZgDEswbJLXOerrCYUp1M](https://www.figma.com/file/q0ZgDEswbJLXOerrCYUp1M)
2. Install the "Design Tokens" Figma plugin
3. Select all color styles
4. Export as JSON
5. Update `figma-tokens.json` with the exported data

### Option 4: Using the Figma Desktop App

1. Open the file in Figma Desktop
2. Go to the Design tab
3. Right-click on each color style and copy the hex value
4. Manually update `figma-tokens.json`

## Token Structure

The tokens are organized into three main categories:

### Primitives
Base color ramps (scales from 25-900):
- `neutral` - Grays and neutral tones
- `slate` - Green-tinted grays (brand colors)
- `blue` - Blues for info and interactive elements
- `red` - Reds for errors and warnings
- `yellow` - Yellows and oranges
- `green` - Greens for success states
- `purple` - Purples for special highlights

### Semantic
Purpose-driven color assignments:
- `brand` - Primary brand colors and surfaces
- `surface` - Background and surface colors
- `text` - Text color hierarchy
- `status` - Status indicators (error, warning, success, info)

### Special
Unique colors for specific use cases:
- `essentials` - Core colors (white, black, etc.)
- `ui` - Special UI colors (mint, edit backgrounds, etc.)

## Usage

### In TypeScript/React

```typescript
import { figmaPrimitives, figmaSemantic, figmaSpecial } from '@willow/ui-kit/tokens/figma-tokens';

// Use primitive colors
const myColor = figmaPrimitives.slate[600]; // "#2B4C46"

// Use semantic colors
const brandColor = figmaSemantic.brand.primary; // "#2B4C46"

// Use with metadata
import { figmaTokens } from '@willow/ui-kit/tokens/figma-tokens';
const token = figmaTokens.semantic.brand.primary;
console.log(token.value); // "#2B4C46"
console.log(token.name); // "Brand Primary"
console.log(token.source); // "slate.600"
```

### In Storybook

View the complete color palette:
```
npm run storybook
```

Navigate to **Design System > Colors** to see all color tokens with:
- Visual swatches
- Hex values
- Token paths
- Source references
- Interactive search

## Updating Tokens

When you update `figma-tokens.json`:

1. **Validate the structure** - Ensure it matches the expected format
2. **Check Storybook** - Run `npm run storybook` and verify colors display correctly
3. **Update legacy files** - If needed, update `primitives.ts` and `semantic.ts` to maintain backward compatibility
4. **Test components** - Ensure existing components still render correctly

## Migration from Legacy Tokens

The existing `primitives.ts` and `semantic.ts` files are being kept for backward compatibility.
New code should use the `figma-tokens.ts` exports for better type safety and Figma alignment.

### Migration Example

**Before:**
```typescript
import { Slate, neutral } from '@willow/ui-kit/tokens/primitives';
const brandColor = Slate[600];
```

**After:**
```typescript
import { figmaPrimitives } from '@willow/ui-kit/tokens/figma-tokens';
const brandColor = figmaPrimitives.slate[600];
```

## Contributing

When adding new colors to Figma:
1. Follow the existing naming convention (Color-Weight format)
2. Organize into appropriate primitive scales
3. Update semantic mappings if the color serves a specific purpose
4. Re-export and update `figma-tokens.json`
5. Verify in Storybook

## Resources

- [Figma File](https://www.figma.com/file/q0ZgDEswbJLXOerrCYUp1M)
- [Figma API Documentation](https://www.figma.com/developers/api)
- [Design Tokens Community Group](https://design-tokens.github.io/community-group/)
