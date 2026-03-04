import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { describe, it, expect, vi } from 'vitest';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import { TextField } from './TextField.js';
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

describe('TextField', () => {
  describe('Rendering', () => {
    it('renders with label correctly', () => {
      renderWithTheme(<TextField label="Test Label" />);
      expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
    });

    it('renders with placeholder correctly', () => {
      renderWithTheme(<TextField placeholder="Test placeholder" />);
      expect(screen.getByPlaceholderText('Test placeholder')).toBeInTheDocument();
    });

    it('renders all variant types correctly', () => {
      const variants = ['outlined', 'filled', 'standard'] as const;

      variants.forEach(variant => {
        const { unmount } = renderWithTheme(
          <TextField variant={variant} label={`${variant} TextField`} />
        );
        expect(screen.getByLabelText(`${variant} TextField`)).toBeInTheDocument();
        unmount();
      });
    });

    it('renders all size types correctly', () => {
      const sizes = ['small', 'medium'] as const;

      sizes.forEach(size => {
        const { unmount } = renderWithTheme(
          <TextField size={size} label={`${size} TextField`} />
        );
        expect(screen.getByLabelText(`${size} TextField`)).toBeInTheDocument();
        unmount();
      });
    });

    it('renders with helper text', () => {
      renderWithTheme(
        <TextField label="Test" helperText="This is helper text" />
      );
      expect(screen.getByText('This is helper text')).toBeInTheDocument();
    });

    it('applies disabled state correctly', () => {
      renderWithTheme(<TextField disabled label="Disabled Field" />);
      const textfield = screen.getByLabelText('Disabled Field');
      expect(textfield).toBeDisabled();
    });

    it('applies error state correctly', () => {
      renderWithTheme(<TextField error label="Error Field" />);
      const textfield = screen.getByLabelText('Error Field');
      expect(textfield).toBeInvalid();
    });

    it('applies required state correctly', () => {
      renderWithTheme(<TextField required label="Required Field" />);
      const textfield = screen.getByLabelText('Required Field *');
      expect(textfield).toBeRequired();
    });

    it('renders as multiline when specified', () => {
      renderWithTheme(<TextField multiline rows={4} label="Multiline Field" />);
      const textfield = screen.getByLabelText('Multiline Field');
      expect(textfield.tagName).toBe('TEXTAREA');
    });
  });

  describe('Interaction', () => {
    it('allows text input', async () => {
      const user = userEvent.setup();
      renderWithTheme(<TextField label="Input Test" />);

      const textfield = screen.getByLabelText('Input Test');
      await user.type(textfield, 'Hello World');

      expect(textfield).toHaveValue('Hello World');
    });

    it('calls onChange handler when text changes', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();

      renderWithTheme(<TextField label="Change Test" onChange={handleChange} />);
      const textfield = screen.getByLabelText('Change Test');

      await user.type(textfield, 'test');
      expect(handleChange).toHaveBeenCalled();
    });

    it('calls onFocus handler when focused', async () => {
      const user = userEvent.setup();
      const handleFocus = vi.fn();

      renderWithTheme(<TextField label="Focus Test" onFocus={handleFocus} />);
      const textfield = screen.getByLabelText('Focus Test');

      await user.click(textfield);
      expect(handleFocus).toHaveBeenCalledTimes(1);
    });

    it('calls onBlur handler when blurred', async () => {
      const user = userEvent.setup();
      const handleBlur = vi.fn();

      renderWithTheme(<TextField label="Blur Test" onBlur={handleBlur} />);
      const textfield = screen.getByLabelText('Blur Test');

      await user.click(textfield);
      await user.tab(); // Move focus away
      expect(handleBlur).toHaveBeenCalledTimes(1);
    });

    it('does not allow input when disabled', async () => {
      const user = userEvent.setup();
      renderWithTheme(<TextField disabled label="Disabled Test" />);

      const textfield = screen.getByLabelText('Disabled Test');
      await user.type(textfield, 'should not work');

      expect(textfield).toHaveValue('');
    });
  });

  describe('Input Types', () => {
    it('handles password input type', () => {
      renderWithTheme(<TextField type="password" label="Password" />);
      const textfield = screen.getByLabelText('Password');
      expect(textfield).toHaveAttribute('type', 'password');
    });

    it('handles email input type', () => {
      renderWithTheme(<TextField type="email" label="Email" />);
      const textfield = screen.getByLabelText('Email');
      expect(textfield).toHaveAttribute('type', 'email');
    });

    it('handles number input type', () => {
      renderWithTheme(<TextField type="number" label="Number" />);
      const textfield = screen.getByLabelText('Number');
      expect(textfield).toHaveAttribute('type', 'number');
    });
  });

  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = renderWithTheme(
        <TextField label="Accessible TextField" />
      );
      const results = await axe(container);
      expect(results.violations).toEqual([]);
    });

    it('has no accessibility violations when disabled', async () => {
      const { container } = renderWithTheme(
        <TextField disabled label="Disabled TextField" />
      );
      const results = await axe(container);
      expect(results.violations).toEqual([]);
    });

    it('has no accessibility violations with error state', async () => {
      const { container } = renderWithTheme(
        <TextField error label="Error TextField" helperText="Error message" />
      );
      const results = await axe(container);
      expect(results.violations).toEqual([]);
    });

    it('supports aria-label', () => {
      renderWithTheme(<TextField aria-label="Custom aria label" />);
      const textfield = screen.getByLabelText('Custom aria label');
      expect(textfield).toBeInTheDocument();
    });

    it('supports aria-describedby with helper text', () => {
      renderWithTheme(
        <TextField label="Field" helperText="This is a helper text" />
      );
      const textfield = screen.getByLabelText('Field');
      const helperText = screen.getByText('This is a helper text');

      // MUI automatically associates helper text with the input
      expect(textfield).toHaveAttribute('aria-describedby', helperText.id);
    });

    it('is focusable by default', () => {
      renderWithTheme(<TextField label="Focusable TextField" />);
      const textfield = screen.getByLabelText('Focusable TextField');
      expect(textfield).not.toHaveAttribute('tabindex', '-1');
    });

    it('is not focusable when disabled', () => {
      renderWithTheme(<TextField disabled label="Non-focusable TextField" />);
      const textfield = screen.getByLabelText('Non-focusable TextField');
      expect(textfield).toBeDisabled();
    });

  });

  describe('Props and Attributes', () => {
    it('forwards ref correctly', () => {
      let textFieldRef: HTMLDivElement | null = null;

      renderWithTheme(
        <TextField
          ref={(ref: HTMLDivElement | null) => { textFieldRef = ref; }}
          label="Ref TextField"
        />
      );

      expect(textFieldRef).toBeInstanceOf(HTMLDivElement);
    });

    it('spreads additional props', () => {
      renderWithTheme(
        <TextField
          data-testid="custom-textfield"
          className="custom-class"
          label="Custom Props"
        />
      );
      const container = screen.getByTestId('custom-textfield');
      expect(container).toHaveClass('custom-class');
    });

    it('accepts defaultValue', () => {
      renderWithTheme(<TextField defaultValue="Default text" label="Default Value" />);
      const textfield = screen.getByLabelText('Default Value');
      expect(textfield).toHaveValue('Default text');
    });

    it('accepts controlled value', () => {
      renderWithTheme(<TextField value="Controlled text" onChange={() => {}} label="Controlled" />);
      const textfield = screen.getByLabelText('Controlled');
      expect(textfield).toHaveValue('Controlled text');
    });
  });
});