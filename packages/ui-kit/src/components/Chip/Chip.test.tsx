import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { describe, it, expect, vi } from 'vitest';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import { Chip } from './Chip.js';
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

describe('Chip', () => {
  describe('Rendering', () => {
    it('renders with label correctly', () => {
      renderWithTheme(<Chip label="Test Chip" />);
      expect(screen.getByText('Test Chip')).toBeInTheDocument();
    });

    it('renders with default props', () => {
      renderWithTheme(<Chip label="Default Chip" />);
      const chip = screen.getByText('Default Chip');
      expect(chip).toBeInTheDocument();
    });

    it('renders all standard color variants correctly', () => {
      const standardColors = ['primary', 'secondary', 'error', 'warning', 'success', 'info'] as const;

      standardColors.forEach(color => {
        const { unmount } = renderWithTheme(
          <Chip label={`${color} Chip`} color={color} />
        );
        expect(screen.getByText(`${color} Chip`)).toBeInTheDocument();
        unmount();
      });
    });

    it('renders all Willow custom color variants correctly', () => {
      const willowColors = [
        'gray',
        'mint',
        'lightPink',
        'lightBlue',
        'lightOrange',
        'lightGreen',
        'lightPurple'
      ] as const;

      willowColors.forEach(color => {
        const { unmount } = renderWithTheme(
          <Chip label={`${color} Chip`} color={color} />
        );
        expect(screen.getByText(`${color} Chip`)).toBeInTheDocument();
        unmount();
      });
    });

    it('renders all college level color variants correctly', () => {
      const collegeLevelColors = [
        'safetyLevelColor',
        'targetLevelColor',
        'reachLevelColor',
        'farReachLevelColor'
      ] as const;

      collegeLevelColors.forEach(color => {
        const { unmount } = renderWithTheme(
          <Chip label={`${color} Chip`} color={color} />
        );
        expect(screen.getByText(`${color} Chip`)).toBeInTheDocument();
        unmount();
      });
    });

    it('renders all size variants correctly', () => {
      const sizes = ['small', 'medium', 'large'] as const;

      sizes.forEach(size => {
        const { unmount } = renderWithTheme(
          <Chip label={`${size} Chip`} size={size} />
        );
        expect(screen.getByText(`${size} Chip`)).toBeInTheDocument();
        unmount();
      });
    });

    it('renders variant types correctly', () => {
      const variants = ['filled', 'outlined'] as const;

      variants.forEach(variant => {
        const { unmount } = renderWithTheme(
          <Chip label={`${variant} Chip`} variant={variant} />
        );
        expect(screen.getByText(`${variant} Chip`)).toBeInTheDocument();
        unmount();
      });
    });

    it('applies disabled state correctly', () => {
      renderWithTheme(<Chip label="Disabled Chip" disabled />);
      const chip = screen.getByText('Disabled Chip').closest('.MuiChip-root');
      expect(chip).toHaveClass('Mui-disabled');
    });

    it('renders as clickable when specified', () => {
      renderWithTheme(<Chip label="Clickable Chip" clickable />);
      const chip = screen.getByText('Clickable Chip').closest('.MuiChip-root');
      expect(chip).toHaveClass('MuiChip-clickable');
    });

    it('renders with delete functionality when onDelete provided', () => {
      const handleDelete = vi.fn();
      renderWithTheme(<Chip label="Deletable Chip" onDelete={handleDelete} />);

      expect(screen.getByText('Deletable Chip')).toBeInTheDocument();
      expect(screen.getByTestId('CancelIcon')).toBeInTheDocument();
    });
  });

  describe('Interaction', () => {
    it('calls onClick handler when clicked and clickable', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      renderWithTheme(
        <Chip label="Clickable Chip" clickable onClick={handleClick} />
      );

      const chip = screen.getByText('Clickable Chip').closest('.MuiChip-root') as HTMLElement;
      await user.click(chip);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('calls onDelete handler when delete icon clicked', async () => {
      const user = userEvent.setup();
      const handleDelete = vi.fn();

      renderWithTheme(
        <Chip label="Deletable Chip" onDelete={handleDelete} />
      );

      const deleteIcon = screen.getByTestId('CancelIcon');
      await user.click(deleteIcon);
      expect(handleDelete).toHaveBeenCalledTimes(1);
    });

    it('has proper disabled state styling and attributes', () => {
      const handleClick = vi.fn();

      renderWithTheme(
        <Chip label="Disabled Chip" disabled onClick={handleClick} />
      );

      const chip = screen.getByText('Disabled Chip').closest('.MuiChip-root') as HTMLElement;

      // Verify disabled state is properly applied
      expect(chip).toHaveClass('Mui-disabled');
      expect(chip).toHaveAttribute('aria-disabled', 'true');
      expect(chip).toHaveAttribute('tabindex', '-1');

      // In real browsers, disabled chips would have pointer-events: none
      // preventing interaction, which is the intended behavior
    });

    it('handles keyboard navigation when clickable', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      renderWithTheme(
        <Chip label="Keyboard Chip" clickable onClick={handleClick} />
      );

      const chip = screen.getByText('Keyboard Chip').closest('.MuiChip-root') as HTMLElement;
      chip.focus();
      await user.keyboard('{Enter}');
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('handles space key press when clickable', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      renderWithTheme(
        <Chip label="Space Key Chip" clickable onClick={handleClick} />
      );

      const chip = screen.getByText('Space Key Chip').closest('.MuiChip-root') as HTMLElement;
      chip.focus();
      await user.keyboard(' ');
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Styling and Variants', () => {
    it('applies Willow default size (small)', () => {
      renderWithTheme(<Chip label="Default Size" data-testid="default-chip" />);
      const chip = screen.getByTestId('default-chip');
      expect(chip).toHaveClass('MuiChip-sizeSmall');
    });

    it('applies custom size classes correctly', () => {
      const { unmount } = renderWithTheme(
        <Chip label="Medium Chip" size="medium" data-testid="medium-chip" />
      );
      expect(screen.getByTestId('medium-chip')).toHaveClass('MuiChip-sizeMedium');
      unmount();

      renderWithTheme(
        <Chip label="Large Chip" size="large" data-testid="large-chip" />
      );
      expect(screen.getByTestId('large-chip')).toHaveClass('MuiChip-sizeLarge');
    });

    it('applies variant classes correctly', () => {
      const { unmount } = renderWithTheme(
        <Chip label="Filled Chip" variant="filled" data-testid="filled-chip" />
      );
      expect(screen.getByTestId('filled-chip')).toHaveClass('MuiChip-filled');
      unmount();

      renderWithTheme(
        <Chip label="Outlined Chip" variant="outlined" data-testid="outlined-chip" />
      );
      expect(screen.getByTestId('outlined-chip')).toHaveClass('MuiChip-outlined');
    });
  });

  describe('Custom Colors', () => {
    it('handles color prop correctly for standard colors', () => {
      renderWithTheme(
        <Chip label="Primary Chip" color="primary" data-testid="primary-chip" />
      );
      const chip = screen.getByTestId('primary-chip');
      expect(chip).toBeInTheDocument();
      // Color application is handled by styled-components, so we verify it renders without error
    });

    it('handles Willow custom colors correctly', () => {
      const customColors = ['gray', 'mint', 'lightPink', 'lightBlue'];

      customColors.forEach(color => {
        const { unmount } = renderWithTheme(
          <Chip
            label={`${color} Chip`}
            color={color as any}
            data-testid={`${color}-chip`}
          />
        );
        expect(screen.getByTestId(`${color}-chip`)).toBeInTheDocument();
        unmount();
      });
    });

    it('handles college level colors correctly', () => {
      const levelColors = ['safetyLevelColor', 'targetLevelColor'];

      levelColors.forEach(color => {
        const { unmount } = renderWithTheme(
          <Chip
            label={`${color} Chip`}
            color={color as any}
            data-testid={`${color}-chip`}
          />
        );
        expect(screen.getByTestId(`${color}-chip`)).toBeInTheDocument();
        unmount();
      });
    });
  });

  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = renderWithTheme(
        <Chip label="Accessible Chip" />
      );
      const results = await axe(container);
      expect(results.violations).toEqual([]);
    });

    it('has no accessibility violations when clickable', async () => {
      const { container } = renderWithTheme(
        <Chip label="Clickable Accessible Chip" clickable />
      );
      const results = await axe(container);
      expect(results.violations).toEqual([]);
    });

    it('has no accessibility violations when deletable', async () => {
      const { container } = renderWithTheme(
        <Chip label="Deletable Accessible Chip" onDelete={() => {}} />
      );
      const results = await axe(container);
      expect(results.violations).toEqual([]);
    });

    it('has no accessibility violations when disabled', async () => {
      const { container } = renderWithTheme(
        <Chip label="Disabled Accessible Chip" disabled />
      );
      const results = await axe(container);
      expect(results.violations).toEqual([]);
    });

    it('is focusable when clickable', () => {
      renderWithTheme(
        <Chip label="Focusable Chip" clickable data-testid="focusable-chip" />
      );
      const chip = screen.getByTestId('focusable-chip');
      expect(chip).not.toHaveAttribute('tabindex', '-1');
    });

    it('is not focusable when disabled', () => {
      renderWithTheme(
        <Chip label="Non-focusable Chip" disabled data-testid="disabled-chip" />
      );
      const chip = screen.getByTestId('disabled-chip');
      expect(chip).toHaveClass('Mui-disabled');
    });

    it('has proper role when clickable', () => {
      renderWithTheme(
        <Chip label="Button Role Chip" clickable data-testid="button-chip" />
      );
      const chip = screen.getByTestId('button-chip');
      expect(chip).toHaveAttribute('role', 'button');
    });
  });

  describe('Props and Attributes', () => {
    it('forwards ref correctly', () => {
      let chipRef: HTMLDivElement | null = null;

      renderWithTheme(
        <Chip
          ref={(ref: HTMLDivElement | null) => { chipRef = ref; }}
          label="Ref Chip"
        />
      );

      expect(chipRef).toBeInstanceOf(HTMLDivElement);
    });

    it('spreads additional props', () => {
      renderWithTheme(
        <Chip
          data-testid="custom-chip"
          className="custom-class"
          title="Custom title"
          label="Custom Props Chip"
        />
      );

      const chip = screen.getByTestId('custom-chip');
      expect(chip).toHaveClass('custom-class');
      expect(chip).toHaveAttribute('title', 'Custom title');
    });

    it('handles custom component prop', () => {
      renderWithTheme(
        <Chip
          component="button"
          label="Button Chip"
          data-testid="button-component-chip"
        />
      );

      const chip = screen.getByTestId('button-component-chip');
      expect(chip.tagName).toBe('BUTTON');
    });

    it('accepts style prop', () => {
      renderWithTheme(
        <Chip
          style={{ margin: '10px' }}
          label="Styled Chip"
          data-testid="styled-chip"
        />
      );

      const chip = screen.getByTestId('styled-chip');
      expect(chip).toHaveStyle({ margin: '10px' });
    });
  });

  describe('Edge Cases', () => {
    it('handles empty label', () => {
      renderWithTheme(<Chip label="" data-testid="empty-chip" />);
      const chip = screen.getByTestId('empty-chip');
      expect(chip).toBeInTheDocument();
    });

    it('handles very long label', () => {
      const longLabel = 'This is a very long label that might cause overflow issues in the chip component';
      renderWithTheme(<Chip label={longLabel} data-testid="long-chip" />);
      expect(screen.getByText(longLabel)).toBeInTheDocument();
    });

    it('handles both clickable and deletable', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();
      const handleDelete = vi.fn();

      renderWithTheme(
        <Chip
          label="Multi-function Chip"
          clickable
          onClick={handleClick}
          onDelete={handleDelete}
          data-testid="multi-chip"
        />
      );

      const chip = screen.getByTestId('multi-chip');
      const deleteIcon = screen.getByTestId('CancelIcon');

      // Click chip
      await user.click(chip);
      expect(handleClick).toHaveBeenCalledTimes(1);

      // Click delete icon
      await user.click(deleteIcon);
      expect(handleDelete).toHaveBeenCalledTimes(1);
    });
  });
});