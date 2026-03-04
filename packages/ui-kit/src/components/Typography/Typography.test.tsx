import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { describe, it, expect } from 'vitest';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import { Typography } from './Typography.js';
import { theme } from '../../theme/createWillowTheme.js';

// Test wrapper with theme
const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <CssVarsProvider theme={theme}>
    {children}
  </CssVarsProvider>
);

const renderWithTheme = (ui: React.ReactElement) => {
  return render(ui, { wrapper: TestWrapper });
};

describe('Typography', () => {
  describe('Rendering', () => {
    it('renders with children correctly', () => {
      renderWithTheme(<Typography>Test Text</Typography>);
      expect(screen.getByText('Test Text')).toBeInTheDocument();
    });

    it('renders with default props', () => {
      renderWithTheme(<Typography>Default Typography</Typography>);
      const element = screen.getByText('Default Typography');
      expect(element).toBeInTheDocument();
      // Default variant is 'body' which renders as <p>
      expect(element.tagName).toBe('P');
    });

    it('renders all variant types correctly', () => {
      const variants = [
        'display',
        'heading',
        'subheading',
        'body',
        'body-lg',
        'body-sm',
        'caption',
        'label',
      ] as const;

      variants.forEach(variant => {
        const { unmount } = renderWithTheme(
          <Typography variant={variant}>{variant} text</Typography>
        );
        expect(screen.getByText(`${variant} text`)).toBeInTheDocument();
        unmount();
      });
    });

    it('renders all color variants correctly', () => {
      const colors = ['primary', 'secondary', 'muted', 'inherit'] as const;

      colors.forEach(color => {
        const { unmount } = renderWithTheme(
          <Typography color={color}>{color} color</Typography>
        );
        expect(screen.getByText(`${color} color`)).toBeInTheDocument();
        unmount();
      });
    });

    it('renders all weight variants correctly', () => {
      const weights = ['regular', 'medium', 'semibold'] as const;

      weights.forEach(weight => {
        const { unmount } = renderWithTheme(
          <Typography weight={weight}>{weight} weight</Typography>
        );
        expect(screen.getByText(`${weight} weight`)).toBeInTheDocument();
        unmount();
      });
    });

    it('renders all alignment variants correctly', () => {
      const alignments = ['left', 'center', 'right', 'inherit'] as const;

      alignments.forEach(align => {
        const { unmount } = renderWithTheme(
          <Typography align={align}>{align} aligned</Typography>
        );
        expect(screen.getByText(`${align} aligned`)).toBeInTheDocument();
        unmount();
      });
    });
  });

  describe('Semantic HTML Elements', () => {
    it('renders display variant as h1 by default', () => {
      renderWithTheme(<Typography variant="display">Display Text</Typography>);
      expect(screen.getByText('Display Text').tagName).toBe('H1');
    });

    it('renders heading variant as h2 by default', () => {
      renderWithTheme(<Typography variant="heading">Heading Text</Typography>);
      expect(screen.getByText('Heading Text').tagName).toBe('H2');
    });

    it('renders subheading variant as h3 by default', () => {
      renderWithTheme(<Typography variant="subheading">Subheading Text</Typography>);
      expect(screen.getByText('Subheading Text').tagName).toBe('H3');
    });

    it('renders body variant as p by default', () => {
      renderWithTheme(<Typography variant="body">Body Text</Typography>);
      expect(screen.getByText('Body Text').tagName).toBe('P');
    });

    it('renders body-lg variant as p by default', () => {
      renderWithTheme(<Typography variant="body-lg">Body Large Text</Typography>);
      expect(screen.getByText('Body Large Text').tagName).toBe('P');
    });

    it('renders body-sm variant as p by default', () => {
      renderWithTheme(<Typography variant="body-sm">Body Small Text</Typography>);
      expect(screen.getByText('Body Small Text').tagName).toBe('P');
    });

    it('renders caption variant as span by default', () => {
      renderWithTheme(<Typography variant="caption">Caption Text</Typography>);
      expect(screen.getByText('Caption Text').tagName).toBe('SPAN');
    });

    it('renders label variant as label by default', () => {
      renderWithTheme(<Typography variant="label">Label Text</Typography>);
      expect(screen.getByText('Label Text').tagName).toBe('LABEL');
    });

    it('allows overriding the default element with component prop', () => {
      renderWithTheme(
        <Typography variant="display" component="h2">
          Override to H2
        </Typography>
      );
      expect(screen.getByText('Override to H2').tagName).toBe('H2');
    });

    it('allows rendering as span via component prop', () => {
      renderWithTheme(
        <Typography variant="body" component="span">
          Inline Text
        </Typography>
      );
      expect(screen.getByText('Inline Text').tagName).toBe('SPAN');
    });

    it('allows rendering as div via component prop', () => {
      renderWithTheme(
        <Typography variant="body" component="div">
          Div Text
        </Typography>
      );
      expect(screen.getByText('Div Text').tagName).toBe('DIV');
    });
  });

  describe('Truncation', () => {
    it('applies truncate styles when truncate is true', () => {
      renderWithTheme(
        <Typography truncate data-testid="truncated">
          Very long text that should be truncated
        </Typography>
      );
      const element = screen.getByTestId('truncated');
      expect(element).toHaveStyle({
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      });
    });

    it('does not apply truncate styles when truncate is false', () => {
      renderWithTheme(
        <Typography truncate={false} data-testid="not-truncated">
          Normal text
        </Typography>
      );
      const element = screen.getByTestId('not-truncated');
      expect(element).not.toHaveStyle({ overflow: 'hidden' });
    });
  });

  describe('Accessibility', () => {
    it('has no accessibility violations with default props', async () => {
      const { container } = renderWithTheme(
        <Typography>Accessible Text</Typography>
      );
      const results = await axe(container);
      expect(results.violations).toEqual([]);
    });

    it('has no accessibility violations with display variant', async () => {
      const { container } = renderWithTheme(
        <Typography variant="display">Page Title</Typography>
      );
      const results = await axe(container);
      expect(results.violations).toEqual([]);
    });

    it('has no accessibility violations with heading variant', async () => {
      const { container } = renderWithTheme(
        <main>
          <Typography variant="display">Main Title</Typography>
          <Typography variant="heading">Section Title</Typography>
        </main>
      );
      const results = await axe(container);
      expect(results.violations).toEqual([]);
    });

    it('has no accessibility violations with all color variants', async () => {
      const { container } = renderWithTheme(
        <div>
          <Typography color="primary">Primary</Typography>
          <Typography color="secondary">Secondary</Typography>
          <Typography color="muted">Muted</Typography>
        </div>
      );
      const results = await axe(container);
      expect(results.violations).toEqual([]);
    });

    it('has no accessibility violations with label variant', async () => {
      const { container } = renderWithTheme(
        <div>
          <Typography variant="label" component="label" htmlFor="test-input">
            Email Address
          </Typography>
          <input id="test-input" type="email" />
        </div>
      );
      const results = await axe(container);
      expect(results.violations).toEqual([]);
    });
  });

  describe('Props and Attributes', () => {
    it('forwards ref correctly', () => {
      let typographyRef: HTMLElement | null = null;

      renderWithTheme(
        <Typography
          ref={(ref: HTMLElement | null) => { typographyRef = ref; }}
        >
          Ref Text
        </Typography>
      );

      expect(typographyRef).toBeInstanceOf(HTMLElement);
      expect(typographyRef?.tagName).toBe('P');
    });

    it('forwards ref with correct element type based on variant', () => {
      let typographyRef: HTMLElement | null = null;

      renderWithTheme(
        <Typography
          variant="display"
          ref={(ref: HTMLElement | null) => { typographyRef = ref; }}
        >
          Display Ref
        </Typography>
      );

      expect(typographyRef).toBeInstanceOf(HTMLHeadingElement);
      expect(typographyRef?.tagName).toBe('H1');
    });

    it('spreads additional props', () => {
      renderWithTheme(
        <Typography
          data-testid="custom-typography"
          className="custom-class"
          title="Custom title"
        >
          Custom Props
        </Typography>
      );

      const element = screen.getByTestId('custom-typography');
      expect(element).toHaveClass('custom-class');
      expect(element).toHaveAttribute('title', 'Custom title');
    });

    it('accepts style prop', () => {
      renderWithTheme(
        <Typography
          style={{ marginTop: '10px' }}
          data-testid="styled-typography"
        >
          Styled Text
        </Typography>
      );

      const element = screen.getByTestId('styled-typography');
      expect(element).toHaveStyle({ marginTop: '10px' });
    });

    it('accepts sx prop', () => {
      renderWithTheme(
        <Typography
          sx={{ mt: 2 }}
          data-testid="sx-typography"
        >
          SX Styled Text
        </Typography>
      );

      const element = screen.getByTestId('sx-typography');
      expect(element).toBeInTheDocument();
    });
  });

  describe('Edge Cases', () => {
    it('handles empty children', () => {
      renderWithTheme(<Typography data-testid="empty-typography">{''}</Typography>);
      const element = screen.getByTestId('empty-typography');
      expect(element).toBeInTheDocument();
    });

    it('handles very long text', () => {
      const longText = 'This is a very long text that might cause issues. '.repeat(20).trim();
      renderWithTheme(<Typography data-testid="long-text">{longText}</Typography>);
      const element = screen.getByTestId('long-text');
      expect(element).toBeInTheDocument();
      expect(element.textContent).toBe(longText);
    });

    it('handles special characters', () => {
      const specialText = '<script>alert("xss")</script> & "quotes" \'apostrophes\'';
      renderWithTheme(<Typography>{specialText}</Typography>);
      expect(screen.getByText(specialText)).toBeInTheDocument();
    });

    it('handles multiple children', () => {
      renderWithTheme(
        <Typography data-testid="multi-child">
          First part <strong>bold</strong> last part
        </Typography>
      );
      const element = screen.getByTestId('multi-child');
      expect(element).toContainHTML('<strong>bold</strong>');
    });

    it('handles number children', () => {
      renderWithTheme(<Typography>{12345}</Typography>);
      expect(screen.getByText('12345')).toBeInTheDocument();
    });

    it('combines multiple props correctly', () => {
      renderWithTheme(
        <Typography
          variant="heading"
          color="secondary"
          weight="medium"
          align="center"
          truncate
          component="h3"
          data-testid="combined-props"
        >
          Combined Props Text
        </Typography>
      );

      const element = screen.getByTestId('combined-props');
      expect(element.tagName).toBe('H3');
      expect(element).toHaveStyle({
        textAlign: 'center',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      });
    });
  });

  describe('displayName', () => {
    it('has correct displayName', () => {
      expect(Typography.displayName).toBe('WillowTypography');
    });
  });
});
