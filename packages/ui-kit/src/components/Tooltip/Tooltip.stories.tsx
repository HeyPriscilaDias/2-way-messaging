import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip.js';
import { TextButton } from '../Buttons/TextButton/index.js';
import { IconButton } from '../Buttons/IconButton/index.js';
import { Trash, Info, HelpCircle } from '@willow/icons';
import { Box, Typography } from '@mui/material';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Tooltip Component

A styled tooltip component for displaying supplementary information on hover.

## LLM USAGE GUIDE

### When to Use
- Provide supplementary information on hover for interactive elements
- Label icon buttons without visible text
- Reveal truncated or abbreviated text
- Add contextual hints for form fields or complex UI elements
- Explain the purpose of buttons or controls

### Best Practices
- **Always use with interactive elements** (buttons, icons, inputs) - tooltips need a hover target
- **Keep text concise**: 1-2 sentences maximum
- **Use for clarification, not critical information**: Users may not discover tooltips
- **Placement**: Choose based on context (top/bottom/left/right) to avoid covering content
- **Arrow**: Enabled by default to point to the target element

### Common Patterns

**Icon Button Labels:**
\`\`\`tsx
<Tooltip title="Delete item">
  <IconButton>
    <DeleteIcon />
  </IconButton>
</Tooltip>
\`\`\`

**Truncated Text Reveal:**
\`\`\`tsx
<Tooltip title={fullText}>
  <Typography noWrap>{fullText}</Typography>
</Tooltip>
\`\`\`

**Form Field Hints:**
\`\`\`tsx
<Tooltip title="Must be 8+ characters with numbers and symbols">
  <TextField label="Password" type="password" />
</Tooltip>
\`\`\`

**Button Explanations:**
\`\`\`tsx
<Tooltip title="Save your changes before continuing">
  <Button>Save Draft</Button>
</Tooltip>
\`\`\`

### Placement Options
- \`top\`: Default, appears above element
- \`bottom\`: Appears below element
- \`left\`: Appears to the left
- \`right\`: Appears to the right
- \`top-start\`, \`top-end\`, etc. for alignment control

### Advanced Usage
\`\`\`tsx
// Custom delay
<Tooltip title="Info" enterDelay={500} leaveDelay={200}>
  <Button>Hover me</Button>
</Tooltip>

// Always visible (for demos/onboarding)
<Tooltip title="Click here to start" open={true}>
  <Button>Start</Button>
</Tooltip>

// Disable arrow
<Tooltip title="Simple tooltip" arrow={false}>
  <Button>No arrow</Button>
</Tooltip>
\`\`\`

### Accessibility
- Tooltips are automatically announced by screen readers
- Use \`title\` for simple text, \`children\` for complex content
- Ensure tooltip content supplements but doesn't replace visible labels
        `,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'This is a helpful tooltip',
  },
  render: (args) => (
    <Tooltip {...args}>
      <TextButton>Hover me</TextButton>
    </Tooltip>
  ),
};

export const IconButtonLabel: Story = {
  name: 'Icon Button Label',
  render: () => (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Tooltip title="Delete">
        <IconButton variant="ghost" icon={<Trash />} aria-label="Delete" />
      </Tooltip>
      <Tooltip title="More information">
        <IconButton variant="ghost" icon={<Info />} aria-label="Info" />
      </Tooltip>
      <Tooltip title="Get help">
        <IconButton variant="ghost" icon={<HelpCircle />} aria-label="Help" />
      </Tooltip>
    </Box>
  ),
};

export const Placements: Story = {
  name: 'All Placements',
  render: () => (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 2,
        alignItems: 'center',
        justifyItems: 'center',
        width: 400,
        height: 300,
      }}
    >
      <div />
      <Tooltip title="Top" placement="top">
        <TextButton>Top</TextButton>
      </Tooltip>
      <div />

      <Tooltip title="Left" placement="left">
        <TextButton>Left</TextButton>
      </Tooltip>
      <div />
      <Tooltip title="Right" placement="right">
        <TextButton>Right</TextButton>
      </Tooltip>

      <div />
      <Tooltip title="Bottom" placement="bottom">
        <TextButton>Bottom</TextButton>
      </Tooltip>
      <div />
    </Box>
  ),
};

export const LongText: Story = {
  name: 'Long Text',
  render: () => (
    <Tooltip title="This is a longer tooltip with multiple words that will wrap to multiple lines when it exceeds the maximum width of 300 pixels.">
      <TextButton>Hover for long tooltip</TextButton>
    </Tooltip>
  ),
};

export const WithoutArrow: Story = {
  name: 'Without Arrow',
  args: {
    title: 'Tooltip without arrow',
    arrow: false,
  },
  render: (args) => (
    <Tooltip {...args}>
      <TextButton>No arrow</TextButton>
    </Tooltip>
  ),
};

export const CustomDelay: Story = {
  name: 'Custom Delay',
  render: () => (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Tooltip title="Fast open (100ms)" enterDelay={100}>
        <TextButton>Fast</TextButton>
      </Tooltip>
      <Tooltip title="Default timing">
        <TextButton>Default</TextButton>
      </Tooltip>
      <Tooltip title="Slow open (1000ms)" enterDelay={1000}>
        <TextButton>Slow</TextButton>
      </Tooltip>
    </Box>
  ),
};

export const InteractiveDemo: Story = {
  name: 'Interactive Demo',
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'center' }}>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Tooltip title="Save your work">
          <TextButton variant="primary">Save</TextButton>
        </Tooltip>
        <Tooltip title="Discard changes and go back">
          <TextButton variant="secondary">Cancel</TextButton>
        </Tooltip>
      </Box>

      <Box sx={{ display: 'flex', gap: 2 }}>
        <Tooltip title="More info" placement="top">
          <IconButton variant="ghost" icon={<Info />} aria-label="Info" />
        </Tooltip>
        <Tooltip title="Delete permanently" placement="top">
          <IconButton variant="ghost" icon={<Trash />} aria-label="Delete" />
        </Tooltip>
      </Box>

      <Tooltip title="Click for more details about this feature" placement="right">
        <Typography sx={{ cursor: 'pointer', textDecoration: 'underline' }}>
          Learn more
        </Typography>
      </Tooltip>
    </Box>
  ),
};
