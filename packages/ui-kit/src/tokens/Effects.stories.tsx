import type { Meta, StoryObj } from '@storybook/react';
import { effectTokens, effects } from './effects-tokens.js';
import { Button } from '../components/Buttons/index.js';

/**
 * Effect Tokens Story
 *
 * Visualizes reusable effect tokens like focus states, shadows, etc.
 */
const meta = {
  title: 'Foundations/Effects',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Focus Effects
 * Shows all focus effect variants that can be applied to interactive components
 */
export const FocusEffects: Story = {
  render: () => (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '16px', color: '#111827' }}>
        Effect Tokens
      </h1>
      <p style={{ fontSize: '16px', color: '#4b5563', marginBottom: '32px' }}>
        Reusable effect tokens like focus states, shadows, and other visual effects that combine multiple CSS properties.
      </p>

      {/* Focus Effects Section */}
      <div>
        <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '16px', color: '#111827' }}>
          Focus Effects
        </h2>
        <p style={{ fontSize: '14px', color: '#4b5563', marginBottom: '24px' }}>
          Focus indicators for interactive components. These combine multiple shadow layers to create accessible, visible focus states.
        </p>

        {/* Blue Focus Effect */}
        <div style={{ marginBottom: '48px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', color: '#111827' }}>
            {effectTokens.focus.blue.name}
          </h3>
          <p style={{ fontSize: '14px', color: '#4b5563', marginBottom: '24px', lineHeight: '1.5' }}>
            {effectTokens.focus.blue.description}
          </p>

          {/* Button examples */}
          <div
            style={{
              display: 'flex',
              gap: '24px',
              padding: '32px',
              backgroundColor: '#fff',
              borderRadius: '8px',
              border: '1px solid #e5e7eb',
              alignItems: 'center',
              marginBottom: '24px',
            }}
          >
            {/* Primary Willow Button with focus */}
            <Button
              variant="primary"
              sx={{
                boxShadow: effects.focusBlue,
              }}
            >
              Primary Button (Focused)
            </Button>

            {/* Secondary Willow Button with focus */}
            <Button
              variant="secondary"
              sx={{
                boxShadow: effects.focusBlue,
              }}
            >
              Secondary Button (Focused)
            </Button>

            {/* Tertiary Willow Button with focus */}
            <Button
              variant="tertiary"
              sx={{
                boxShadow: effects.focusBlue,
              }}
            >
              Tertiary Button (Focused)
            </Button>
          </div>

          {/* Technical Details */}
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
            <div style={{ fontWeight: 600, marginBottom: '12px', color: '#111827' }}>CSS Value:</div>
            <code style={{ color: '#374151' }}>{effectTokens.focus.blue.cssValue}</code>
            <div style={{ fontWeight: 600, marginTop: '16px', marginBottom: '8px', color: '#111827' }}>
              Shadow Layers:
            </div>
            {effectTokens.focus.blue.shadows.map((shadow, index) => (
              <div key={index} style={{ marginBottom: '8px', paddingLeft: '12px' }}>
                <div style={{ color: '#6b7280', fontSize: '11px' }}>Layer {index + 1}:</div>
                <code style={{ color: '#374151', fontSize: '12px' }}>
                  x: {shadow.x}px, y: {shadow.y}px, blur: {shadow.blur}px, spread:{' '}
                  {shadow.spread}px, color: {shadow.color}
                </code>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Usage Examples */}
      <div style={{ marginTop: '48px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '16px', color: '#111827' }}>
          Usage Examples
        </h2>
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
          <div style={{ marginBottom: '16px' }}>
            <div style={{ fontWeight: 600, marginBottom: '8px', color: '#111827' }}>Styled Components:</div>
            <code style={{ color: '#374151' }}>
              {`import { effects } from '@willow/ui-kit';

const Button = styled.button\`
  &:focus-visible {
    box-shadow: \${effects.focusBlue};
    outline: none;
  }
\`;`}
            </code>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <div style={{ fontWeight: 600, marginBottom: '8px', color: '#111827' }}>MUI sx prop:</div>
            <code style={{ color: '#374151' }}>
              {`import { effects } from '@willow/ui-kit';

<Button
  sx={{
    '&:focus-visible': {
      boxShadow: effects.focusBlue,
      outline: 'none',
    }
  }}
>
  Button
</Button>`}
            </code>
          </div>

          <div>
            <div style={{ fontWeight: 600, marginBottom: '8px', color: '#111827' }}>Helper Function:</div>
            <code style={{ color: '#374151' }}>
              {`import { getFocusEffect } from '@willow/ui-kit';

const focusShadow = getFocusEffect('blue');`}
            </code>
          </div>
        </div>
      </div>
    </div>
  ),
};
