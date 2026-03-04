import type { Meta, StoryObj } from '@storybook/react';
import {
  typographyTokens,
  getTypographyCSS,
} from './typography-tokens';

/**
 * Typography tokens from Figma
 *
 * This page showcases all typography styles defined in the Willow Design System.
 * Typography tokens include font family, size, weight, line height, and letter spacing.
 */
const meta = {
  title: 'Foundations/Typography',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Typography Tokens
 *
 * All typography tokens including headings (Poppins) and body styles (Inter)
 */
export const Typography: Story = {
  render: () => {
    const headingTokens = [
      { name: 'heading/H1', sample: 'Page heading' },
      { name: 'heading/H2', sample: 'Section heading' },
      { name: 'heading/H3', sample: 'Subsection heading' },
      { name: 'heading/H4', sample: 'Body heading' },
      { name: 'heading/H5', sample: 'Group heading' },
    ];

    const bodyTokens = [
      { name: 'body/lg-strong', sample: 'Body large strong' },
      { name: 'body/lg-regular', sample: 'Body large regular' },
      { name: 'body/lg-link', sample: 'Body large link' },
      { name: 'body/df-strong', sample: 'Body default strong' },
      { name: 'body/df-regular', sample: 'Body default regular' },
      { name: 'body/df-link', sample: 'Body default link' },
      { name: 'body/sm-strong', sample: 'Body small strong' },
      { name: 'body/sm-regular', sample: 'Body small regular' },
      { name: 'body/sm-link', sample: 'Body small link' },
    ];

    return (
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '16px', color: '#111827' }}>
          Typography Tokens
        </h1>
        <p style={{ fontSize: '16px', color: '#4b5563', marginBottom: '32px' }}>
          Headings use Poppins font family. Body text uses Inter font family.
        </p>

        {/* Headings Section */}
        <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '16px', color: '#111827' }}>
          Headings (Poppins)
        </h2>
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
                Name
              </th>
              <th style={{
                padding: '12px 16px',
                textAlign: 'left',
                fontWeight: 600,
                fontSize: '13px',
                color: '#374151',
                backgroundColor: '#f9fafb',
              }}>
                Properties
              </th>
              <th style={{
                padding: '12px 16px',
                textAlign: 'left',
                fontWeight: 600,
                fontSize: '13px',
                color: '#374151',
                backgroundColor: '#f9fafb',
              }}>
                Sample
              </th>
            </tr>
          </thead>
          <tbody>
            {headingTokens.map(({ name, sample }) => {
              const token = typographyTokens[name];
              const css = getTypographyCSS(name);
              if (!token || !css) return null;

              return (
                <tr
                  key={name}
                  style={{ borderBottom: '1px solid #e5e7eb' }}
                >
                  <td style={{
                    padding: '16px',
                    fontWeight: 500,
                    fontSize: '14px',
                    fontFamily: 'monospace',
                    color: '#111827',
                    verticalAlign: 'top',
                  }}>
                    {name}
                  </td>
                  <td style={{
                    padding: '16px',
                    fontSize: '13px',
                    color: '#4b5563',
                    verticalAlign: 'top',
                  }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {/* Font Size */}
                      <div>
                        <div style={{ fontSize: '11px', color: '#6b7280', marginBottom: '2px' }}>Font Size</div>
                        <div style={{ fontSize: '13px', color: '#111827' }}>
                          {token.primitiveRefs ? (
                            <>
                              <span style={{ fontWeight: 600, fontFamily: 'monospace' }}>{token.primitiveRefs.fontSize}</span>
                              <span style={{ color: '#6b7280' }}> = {token.fontSize}px</span>
                            </>
                          ) : (
                            `${token.fontSize}px`
                          )}
                        </div>
                      </div>

                      {/* Line Height */}
                      <div>
                        <div style={{ fontSize: '11px', color: '#6b7280', marginBottom: '2px' }}>Line Height</div>
                        <div style={{ fontSize: '13px', color: '#111827' }}>
                          {token.primitiveRefs ? (
                            <>
                              <span style={{ fontWeight: 600, fontFamily: 'monospace' }}>{token.primitiveRefs.lineHeight}</span>
                              <span style={{ color: '#6b7280' }}> = {token.lineHeightPx}px</span>
                            </>
                          ) : (
                            `${token.lineHeightPx}px`
                          )}
                        </div>
                      </div>

                      {/* Font Weight */}
                      <div>
                        <div style={{ fontSize: '11px', color: '#6b7280', marginBottom: '2px' }}>Font Weight</div>
                        <div style={{ fontSize: '13px', color: '#111827' }}>
                          {token.fontWeight}
                        </div>
                      </div>

                      {/* Letter Spacing */}
                      <div>
                        <div style={{ fontSize: '11px', color: '#6b7280', marginBottom: '2px' }}>Letter Spacing</div>
                        <div style={{ fontSize: '13px', color: '#111827' }}>
                          {token.primitiveRefs ? (
                            <>
                              <span style={{ fontWeight: 600, fontFamily: 'monospace' }}>{token.primitiveRefs.letterSpacing}</span>
                              <span style={{ color: '#6b7280' }}> = {token.letterSpacing}px</span>
                            </>
                          ) : (
                            `${token.letterSpacing}px`
                          )}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td style={{
                    padding: '16px',
                    verticalAlign: 'top',
                  }}>
                    <div style={{ ...css, color: '#111827' }}>
                      {sample}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Body Styles Section */}
        <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '16px', marginTop: '48px', color: '#111827' }}>
          Body Styles (Inter)
        </h2>
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
                Name
              </th>
              <th style={{
                padding: '12px 16px',
                textAlign: 'left',
                fontWeight: 600,
                fontSize: '13px',
                color: '#374151',
                backgroundColor: '#f9fafb',
              }}>
                Properties
              </th>
              <th style={{
                padding: '12px 16px',
                textAlign: 'left',
                fontWeight: 600,
                fontSize: '13px',
                color: '#374151',
                backgroundColor: '#f9fafb',
              }}>
                Sample
              </th>
            </tr>
          </thead>
          <tbody>
            {bodyTokens.map(({ name, sample }) => {
              const token = typographyTokens[name];
              const css = getTypographyCSS(name);
              if (!token || !css) return null;

              return (
                <tr
                  key={name}
                  style={{ borderBottom: '1px solid #e5e7eb' }}
                >
                  <td style={{
                    padding: '16px',
                    fontWeight: 500,
                    fontSize: '14px',
                    fontFamily: 'monospace',
                    color: '#111827',
                    verticalAlign: 'top',
                  }}>
                    {name}
                  </td>
                  <td style={{
                    padding: '16px',
                    fontSize: '13px',
                    color: '#4b5563',
                    verticalAlign: 'top',
                  }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {/* Font Size */}
                      <div>
                        <div style={{ fontSize: '11px', color: '#6b7280', marginBottom: '2px' }}>Font Size</div>
                        <div style={{ fontSize: '13px', color: '#111827' }}>
                          {token.primitiveRefs ? (
                            <>
                              <span style={{ fontWeight: 600, fontFamily: 'monospace' }}>{token.primitiveRefs.fontSize}</span>
                              <span style={{ color: '#6b7280' }}> = {token.fontSize}px</span>
                            </>
                          ) : (
                            `${token.fontSize}px`
                          )}
                        </div>
                      </div>

                      {/* Line Height */}
                      <div>
                        <div style={{ fontSize: '11px', color: '#6b7280', marginBottom: '2px' }}>Line Height</div>
                        <div style={{ fontSize: '13px', color: '#111827' }}>
                          {token.primitiveRefs ? (
                            <>
                              <span style={{ fontWeight: 600, fontFamily: 'monospace' }}>{token.primitiveRefs.lineHeight}</span>
                              <span style={{ color: '#6b7280' }}> = {token.lineHeightPx}px</span>
                            </>
                          ) : (
                            `${token.lineHeightPx}px`
                          )}
                        </div>
                      </div>

                      {/* Font Weight */}
                      <div>
                        <div style={{ fontSize: '11px', color: '#6b7280', marginBottom: '2px' }}>Font Weight</div>
                        <div style={{ fontSize: '13px', color: '#111827' }}>
                          {token.fontWeight}
                        </div>
                      </div>

                      {/* Letter Spacing */}
                      <div>
                        <div style={{ fontSize: '11px', color: '#6b7280', marginBottom: '2px' }}>Letter Spacing</div>
                        <div style={{ fontSize: '13px', color: '#111827' }}>
                          {token.primitiveRefs ? (
                            <>
                              <span style={{ fontWeight: 600, fontFamily: 'monospace' }}>{token.primitiveRefs.letterSpacing}</span>
                              <span style={{ color: '#6b7280' }}> = {token.letterSpacing}px</span>
                            </>
                          ) : (
                            `${token.letterSpacing}px`
                          )}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td style={{
                    padding: '16px',
                    verticalAlign: 'top',
                  }}>
                    <div style={{ ...css, color: '#111827' }}>
                      {sample}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  },
};

