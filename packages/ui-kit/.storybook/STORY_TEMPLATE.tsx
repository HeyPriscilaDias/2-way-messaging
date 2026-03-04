/**
 * COPY THIS TEMPLATE FOR NEW STORIES
 *
 * This is a template for creating new component stories that follow
 * the Willow Design System guidelines and use the theme properly.
 *
 * Just copy this file, replace "Example" with your component name,
 * and update the content to match your component.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Typography, Box } from '@mui/material';
import { Example } from './Example.js';

const meta: Meta<typeof Example> = {
  title: 'Components/Example',
  component: Example,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    // Define your control props here
    // Example:
    // variant: {
    //   options: ['primary', 'secondary'],
    //   control: { type: 'radio' },
    //   description: 'The variant of the component',
    // },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// ============================================================================
// Basic Variants
// ============================================================================

export const Default: Story = {
  args: {
    // Add default args here
  },
};

// ============================================================================
// Documentation - Comprehensive Guide
// ============================================================================

export const Documentation: Story = {
  render: () => (
    <Box sx={{ padding: '24px' }}>
      {/* Main Title */}
      <Typography variant="h1" sx={{ marginBottom: '32px' }}>
        Example Component
      </Typography>

      {/* Usage Section */}
      <Box component="section" sx={{ marginBottom: '48px' }}>
        <Typography variant="h2" sx={{ marginBottom: '16px' }}>
          Usage
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '16px' }}>
          Brief description of what this component is used for and when to use it.
        </Typography>

        <Box sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px'
        }}>
          <Box sx={{ padding: '16px', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
            <Typography variant="h5" sx={{ marginBottom: '8px' }}>
              Variant 1
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '12px' }}>
              When to use this variant
            </Typography>
            <Example />
          </Box>

          <Box sx={{ padding: '16px', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
            <Typography variant="h5" sx={{ marginBottom: '8px' }}>
              Variant 2
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '12px' }}>
              When to use this variant
            </Typography>
            <Example />
          </Box>
        </Box>
      </Box>

      {/* Props Section */}
      <Box component="section" sx={{ marginBottom: '48px' }}>
        <Typography variant="h2" sx={{ marginBottom: '16px' }}>
          Props
        </Typography>
        <Box sx={{ padding: '16px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
          <Typography component="ul" variant="body2" sx={{ margin: '0', paddingLeft: '16px' }}>
            <li><strong>prop1:</strong> description of prop1</li>
            <li><strong>prop2:</strong> description of prop2</li>
            <li><strong>prop3:</strong> description of prop3</li>
          </Typography>
        </Box>
      </Box>

      {/* Best Practices Section */}
      <Box component="section" sx={{ marginBottom: '48px' }}>
        <Typography variant="h2" sx={{ marginBottom: '16px' }}>
          Best Practices
        </Typography>
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '24px'
        }}>
          <Box sx={{ padding: '16px', backgroundColor: '#f0f9f5', borderRadius: '8px', border: '1px solid #d1f0e8' }}>
            <Typography variant="h5" sx={{ marginBottom: '8px', color: '#00a651' }}>
              ✓ Do
            </Typography>
            <Typography component="ul" variant="body2" sx={{ margin: '0', paddingLeft: '16px' }}>
              <li>Use this when...</li>
              <li>Combine with...</li>
              <li>Best for...</li>
            </Typography>
          </Box>

          <Box sx={{ padding: '16px', backgroundColor: '#fff5f5', borderRadius: '8px', border: '1px solid #f5d0d0' }}>
            <Typography variant="h5" sx={{ marginBottom: '8px', color: '#cc0000' }}>
              ✗ Don't
            </Typography>
            <Typography component="ul" variant="body2" sx={{ margin: '0', paddingLeft: '16px' }}>
              <li>Don't use this when...</li>
              <li>Avoid combining with...</li>
              <li>Not suitable for...</li>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  ),
  parameters: {
    controls: { disable: true },
    layout: 'padded',
  },
};

// ============================================================================
// Checklist for Creating New Stories
// ============================================================================
/*
 * Use this checklist when creating stories:
 *
 * [ ] Import Typography and Box from @mui/material
 * [ ] Use Typography variants for all text (h1-h6, body variants)
 * [ ] Use Box instead of <div> for all containers
 * [ ] Use sx prop instead of style prop
 * [ ] Add argTypes for interactive controls
 * [ ] Create individual variant stories for testing
 * [ ] Create a Documentation story with examples
 * [ ] Disable controls for Documentation story
 * [ ] Set layout to 'padded' for Documentation story
 * [ ] Use consistent spacing (24px padding, 48px section margins)
 * [ ] Use theme colors and spacing values
 * [ ] Test the story in Storybook before committing
 */
