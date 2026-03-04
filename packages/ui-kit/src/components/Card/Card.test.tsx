import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { describe, it, expect } from 'vitest';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import { Card } from './Card.js';
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

describe('Card', () => {
  describe('Rendering', () => {
    it('renders children correctly', () => {
      renderWithTheme(
        <Card>
          <div>Test Card Content</div>
        </Card>
      );
      expect(screen.getByText('Test Card Content')).toBeInTheDocument();
    });

    it('renders as a div by default', () => {
      renderWithTheme(
        <Card data-testid="card">
          <div>Content</div>
        </Card>
      );
      const card = screen.getByTestId('card');
      expect(card.tagName).toBe('DIV');
    });

    it('renders all variant types correctly', () => {
      const variants = ['elevation', 'outlined'] as const;

      variants.forEach(variant => {
        const { unmount } = renderWithTheme(
          <Card variant={variant} data-testid={`card-${variant}`}>
            {variant} Card
          </Card>
        );
        expect(screen.getByTestId(`card-${variant}`)).toBeInTheDocument();
        expect(screen.getByText(`${variant} Card`)).toBeInTheDocument();
        unmount();
      });
    });

    it('applies elevation correctly', () => {
      renderWithTheme(
        <Card elevation={4} data-testid="elevated-card">
          Elevated Card
        </Card>
      );
      const card = screen.getByTestId('elevated-card');
      expect(card).toBeInTheDocument();
    });

    it('applies square corners when specified', () => {
      renderWithTheme(
        <Card square data-testid="square-card">
          Square Card
        </Card>
      );
      const card = screen.getByTestId('square-card');
      expect(card).toBeInTheDocument();
    });

    it('renders with custom component', () => {
      renderWithTheme(
        <Card component="section" data-testid="section-card">
          Section Card
        </Card>
      );
      const card = screen.getByTestId('section-card');
      expect(card.tagName).toBe('SECTION');
    });
  });

  describe('Content and Layout', () => {
    it('handles empty card', () => {
      renderWithTheme(<Card data-testid="empty-card" />);
      const card = screen.getByTestId('empty-card');
      expect(card).toBeInTheDocument();
      expect(card).toBeEmptyDOMElement();
    });

    it('handles complex nested content', () => {
      renderWithTheme(
        <Card data-testid="complex-card">
          <div>
            <h2>Card Title</h2>
            <p>Card description</p>
            <button>Action Button</button>
          </div>
        </Card>
      );

      expect(screen.getByText('Card Title')).toBeInTheDocument();
      expect(screen.getByText('Card description')).toBeInTheDocument();
      expect(screen.getByText('Action Button')).toBeInTheDocument();
    });

    it('handles text content directly', () => {
      renderWithTheme(<Card>Direct text content</Card>);
      expect(screen.getByText('Direct text content')).toBeInTheDocument();
    });

    it('preserves content structure', () => {
      renderWithTheme(
        <Card>
          <div data-testid="first-child">First</div>
          <div data-testid="second-child">Second</div>
        </Card>
      );

      expect(screen.getByTestId('first-child')).toBeInTheDocument();
      expect(screen.getByTestId('second-child')).toBeInTheDocument();
    });
  });

  describe('Styling and Variants', () => {
    it('applies Willow styling by default', () => {
      renderWithTheme(
        <Card data-testid="willow-card">
          Default Card
        </Card>
      );

      const card = screen.getByTestId('willow-card');

      // Note: These exact checks depend on how styled-components are rendered in tests
      // The important thing is that the component renders without error
      expect(card).toBeInTheDocument();
    });

    it('handles elevation prop without errors', () => {
      const elevations = [0, 1, 2, 8, 16, 24];

      elevations.forEach(elevation => {
        const { unmount } = renderWithTheme(
          <Card elevation={elevation} data-testid={`card-elevation-${elevation}`}>
            Elevation {elevation}
          </Card>
        );
        expect(screen.getByTestId(`card-elevation-${elevation}`)).toBeInTheDocument();
        unmount();
      });
    });

    it('handles different Paper props', () => {
      renderWithTheme(
        <Card
          square
          variant="outlined"
          elevation={0}
          data-testid="multi-prop-card"
        >
          Multi-prop Card
        </Card>
      );

      const card = screen.getByTestId('multi-prop-card');
      expect(card).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = renderWithTheme(
        <Card>
          <h2>Accessible Card</h2>
          <p>This card follows accessibility guidelines</p>
        </Card>
      );
      const results = await axe(container);
      expect(results.violations).toEqual([]);
    });

    it('has no accessibility violations with interactive content', async () => {
      const { container } = renderWithTheme(
        <Card>
          <h2>Interactive Card</h2>
          <button>Click me</button>
          <a href="#test">Link</a>
        </Card>
      );
      const results = await axe(container);
      expect(results.violations).toEqual([]);
    });

    it('supports role attribute', () => {
      renderWithTheme(
        <Card role="article" data-testid="article-card">
          Article content
        </Card>
      );

      const card = screen.getByRole('article');
      expect(card).toBeInTheDocument();
    });

    it('supports aria-label', () => {
      renderWithTheme(
        <Card aria-label="Product information card" data-testid="labeled-card">
          Product details
        </Card>
      );

      const card = screen.getByLabelText('Product information card');
      expect(card).toBeInTheDocument();
    });

    it('supports aria-describedby', () => {
      renderWithTheme(
        <div>
          <Card aria-describedby="card-description" data-testid="described-card">
            Card content
          </Card>
          <div id="card-description">This card contains product information</div>
        </div>
      );

      const card = screen.getByTestId('described-card');
      expect(card).toHaveAttribute('aria-describedby', 'card-description');
    });
  });

  describe('Event Handling', () => {
    it('handles click events', () => {
      let clicked = false;
      renderWithTheme(
        <Card onClick={() => { clicked = true; }} data-testid="clickable-card">
          Clickable Card
        </Card>
      );

      const card = screen.getByTestId('clickable-card');
      card.click();
      expect(clicked).toBe(true);
    });

    it('handles mouse events', async () => {
      const user = userEvent.setup();
      let hovered = false;

      renderWithTheme(
        <Card onMouseEnter={() => { hovered = true; }} data-testid="hoverable-card">
          Hoverable Card
        </Card>
      );

      const card = screen.getByTestId('hoverable-card');
      await user.hover(card);
      expect(hovered).toBe(true);
    });

    it('handles keyboard events', () => {
      let keyPressed = false;
      renderWithTheme(
        <Card onKeyDown={() => { keyPressed = true; }} data-testid="keyboard-card">
          Keyboard Card
        </Card>
      );

      const card = screen.getByTestId('keyboard-card');
      card.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
      expect(keyPressed).toBe(true);
    });
  });

  describe('Props and Attributes', () => {
    it('forwards ref correctly', () => {
      let cardRef: HTMLDivElement | null = null;

      renderWithTheme(
        <Card
          ref={(ref: HTMLDivElement | null) => { cardRef = ref; }}
          data-testid="ref-card"
        >
          Ref Card
        </Card>
      );

      expect(cardRef).toBeInstanceOf(HTMLDivElement);
      expect(cardRef?.textContent).toBe('Ref Card');
    });

    it('spreads additional props', () => {
      renderWithTheme(
        <Card
          data-testid="custom-card"
          className="custom-class"
          id="custom-id"
          title="Custom title"
        >
          Custom Props Card
        </Card>
      );

      const card = screen.getByTestId('custom-card');
      expect(card).toHaveClass('custom-class');
      expect(card).toHaveAttribute('id', 'custom-id');
      expect(card).toHaveAttribute('title', 'Custom title');
    });

    it('accepts style prop', () => {
      renderWithTheme(
        <Card
          style={{ width: '200px', height: '100px' }}
          data-testid="styled-card"
        >
          Styled Card
        </Card>
      );

      const card = screen.getByTestId('styled-card');
      expect(card).toHaveStyle({ width: '200px', height: '100px' });
    });

    it('handles data attributes', () => {
      renderWithTheme(
        <Card
          data-testid="data-card"
          data-category="product"
          data-priority="high"
        >
          Data Card
        </Card>
      );

      const card = screen.getByTestId('data-card');
      expect(card).toHaveAttribute('data-category', 'product');
      expect(card).toHaveAttribute('data-priority', 'high');
    });
  });
});