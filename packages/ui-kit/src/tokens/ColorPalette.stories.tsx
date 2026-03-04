import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { figmaTokens, getContrastColor } from './figma-tokens.js';

/**
 * Color Palette
 *
 * This page displays all color tokens from the Willow design system,
 * sourced from Figma file: q0ZgDEswbJLXOerrCYUp1M
 *
 * ## Color Organization
 * - **Primitives**: Base color scales (neutral, slate, mint, green, blue, lavender, pink, red, yellow)
 * - **Semantic**: Purpose-driven colors (brand, surface, text, status) - coming soon
 * - **Special**: Unique colors for specific use cases (essentials, ui) - coming soon
 *
 * ## Usage
 * Import colors from `@willow/ui-kit/tokens` or use the MUI theme.
 */
const meta: Meta = {
  title: 'Foundations/Color Palette',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Complete color palette from the Willow design system',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Color swatch component - full width bar
const ColorSwatch = ({
  value,
  tokenPath,
}: {
  value: string;
  tokenPath: string;
}) => {
  const textColor = getContrastColor(value);
  const [copied, setCopied] = React.useState(false);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (_err) {
      console.error('Failed to copy:', _err);
    }
  };

  return (
    <div
      onClick={handleClick}
      style={{
        backgroundColor: value,
        color: textColor,
        padding: '16px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '14px',
        fontWeight: 500,
        cursor: 'pointer',
        transition: 'opacity 0.2s',
        position: 'relative',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
    >
      <span>{tokenPath}</span>
      <span style={{ fontFamily: 'monospace' }}>
        {copied ? 'Copied!' : value}
      </span>
    </div>
  );
};

// Color scale component
const ColorScale = ({
  title,
  scale,
  category,
  description,
}: {
  title: string;
  scale: Record<string, { value: string; name: string; source?: string }>;
  category: string;
  description?: string;
}) => {
  return (
    <div>
      <h3 style={{ marginBottom: '8px', fontSize: '18px', fontWeight: 600, color: '#111827' }}>{title}</h3>
      {description && (
        <p style={{ marginBottom: '16px', fontSize: '14px', color: '#4b5563', lineHeight: '1.5' }}>
          {description}
        </p>
      )}
      <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid #e5e7eb' }}>
        {Object.entries(scale).map(([key, token]) => (
          <ColorSwatch
            key={key}
            value={token.value}
            tokenPath={`${category}-${key}`}
          />
        ))}
      </div>
    </div>
  );
};

// Section component
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <div style={{ marginBottom: '48px' }}>
      <h2
        style={{
          fontSize: '20px',
          fontWeight: 700,
          marginBottom: '16px',
          color: '#111827',
        }}
      >
        {title}
      </h2>
      {children}
    </div>
  );
};

export const ColorPalette: Story = {
  render: () => (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '16px', color: '#111827' }}>
        Color Palette
      </h1>
      <p style={{ fontSize: '16px', color: '#4b5563', marginBottom: '32px' }}>
        All color tokens from the Willow design system, sourced from Figma.
      </p>

      {/* Primitive Colors Section */}
      <div>
        <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '16px', color: '#111827' }}>
          Primitive Colors
        </h2>
        <p style={{ fontSize: '14px', color: '#4b5563', marginBottom: '24px' }}>
          Base color scales that form the foundation of the design system.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '48px' }}>
          <ColorScale
            title="Neutral"
            scale={figmaTokens.primitives.neutral}
            category="neutral"
            description="Base color for text, borders, backgrounds, icons, and some buttons. Provides a clean, readable, and consistent foundation."
          />
          <ColorScale
            title="Slate"
            scale={figmaTokens.primitives.slate}
            category="slate"
            description="Core brand color for headings, titles, and some interactive elements, adding emphasis and reinforcing identity."
          />
          <ColorScale
            title="Mint"
            scale={figmaTokens.primitives.mint}
            category="mint"
            description="Vibrant accent for interactive elements, calls-to-action, and success states like completed tasks or confirmations."
          />
          <ColorScale
            title="Green"
            scale={figmaTokens.primitives.green}
            category="green"
            description="Sentiment color for positive messaging and successful actions."
          />
          <ColorScale
            title="Blue"
            scale={figmaTokens.primitives.blue}
            category="blue"
            description="Informational and decorative color for details and non-sentiment backgrounds (it does not convey neither a positive nor a negative message). It should be used only for neutral messaging."
          />
          <ColorScale
            title="Lavender"
            scale={figmaTokens.primitives.lavender}
            category="lavender"
            description="Complementary color for decorative details and non-sentiment backgrounds (it does not convey neither a positive nor a negative message)."
          />
          <ColorScale
            title="Pink"
            scale={figmaTokens.primitives.pink}
            category="pink"
            description="Complementary color for decorative details and non-sentiment backgrounds (it does not convey neither a positive nor a negative message)."
          />
          <ColorScale
            title="Red"
            scale={figmaTokens.primitives.red}
            category="red"
            description="Sentiment color for errors, alerts, and destructive actions such as deletions."
          />
          <ColorScale
            title="Yellow"
            scale={figmaTokens.primitives.yellow}
            category="yellow"
            description="Sentiment color for warning messages, alerts, and pending or in-progress states."
          />
        </div>
      </div>

      {/* Semantic Colors (if available) */}
      {figmaTokens.semantic && Object.values(figmaTokens.semantic).some(Boolean) && (
        <Section title="Semantic Colors">
          <p style={{ marginBottom: '24px', fontSize: '14px', color: '#4b5563' }}>
            Purpose-driven colors for consistent UI patterns
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            {figmaTokens.semantic.brand && <ColorScale title="Brand" scale={figmaTokens.semantic.brand} category="brand" />}
            {figmaTokens.semantic.surface && <ColorScale title="Surface" scale={figmaTokens.semantic.surface} category="surface" />}
            {figmaTokens.semantic.text && <ColorScale title="Text" scale={figmaTokens.semantic.text} category="text" />}
            {figmaTokens.semantic.status && <ColorScale title="Status" scale={figmaTokens.semantic.status} category="status" />}
          </div>
        </Section>
      )}

      {/* Special Colors (if available) */}
      {figmaTokens.special && Object.values(figmaTokens.special).some(Boolean) && (
        <Section title="Special Colors">
          <p style={{ marginBottom: '24px', fontSize: '14px', color: '#4b5563' }}>
            Unique colors for specific use cases
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            {figmaTokens.special.essentials && <ColorScale title="Essentials" scale={figmaTokens.special.essentials} category="essentials" />}
            {figmaTokens.special.ui && <ColorScale title="UI" scale={figmaTokens.special.ui} category="ui" />}
          </div>
        </Section>
      )}
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};
