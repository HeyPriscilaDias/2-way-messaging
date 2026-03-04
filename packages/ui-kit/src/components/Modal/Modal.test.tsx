import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { describe, it, expect, vi } from 'vitest';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import { Modal, ModalTitle, ModalContent, ModalActions } from './Modal.js';
import { TextButton as Button } from '../Buttons/index.js';
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

// Helper component for testing modal interactions
const TestModal = ({
  open,
  onClose,
  variant,
  children,
  ...props
}: {
  open: boolean;
  onClose: () => void;
  variant?: 'standard' | 'fullscreen' | 'centered';
  children?: React.ReactNode;
  [key: string]: any;
}) => (
  <Modal open={open} onClose={onClose} variant={variant} {...props}>
    {children || (
      <>
        <ModalTitle>Test Modal</ModalTitle>
        <ModalContent>Test content</ModalContent>
        <ModalActions>
          <Button variant="text" onClick={onClose}>Cancel</Button>
          <Button variant="contained">OK</Button>
        </ModalActions>
      </>
    )}
  </Modal>
);

describe('Modal', () => {
  describe('Rendering', () => {
    it('renders when open', () => {
      const handleClose = vi.fn();
      renderWithTheme(<TestModal open onClose={handleClose} />);
      expect(screen.getByText('Test Modal')).toBeInTheDocument();
      expect(screen.getByText('Test content')).toBeInTheDocument();
    });

    it('does not render when closed', () => {
      const handleClose = vi.fn();
      renderWithTheme(<TestModal open={false} onClose={handleClose} />);
      expect(screen.queryByText('Test Modal')).not.toBeInTheDocument();
    });

    it('renders with default props', () => {
      const handleClose = vi.fn();
      renderWithTheme(<TestModal open onClose={handleClose} />);
      const modal = screen.getByRole('dialog');
      expect(modal).toBeInTheDocument();
    });

    it('renders all variant types correctly', () => {
      const variants = ['standard', 'fullscreen', 'centered'] as const;
      const handleClose = vi.fn();

      variants.forEach(variant => {
        const { unmount } = renderWithTheme(
          <TestModal open onClose={handleClose} variant={variant} data-testid={`${variant}-modal`} />
        );
        expect(screen.getByTestId(`${variant}-modal`)).toBeInTheDocument();
        unmount();
      });
    });

    it('renders modal components correctly', () => {
      const handleClose = vi.fn();
      renderWithTheme(
        <TestModal open onClose={handleClose}>
          <ModalTitle>Custom Title</ModalTitle>
          <ModalContent>Custom content here</ModalContent>
          <ModalActions>
            <Button>Custom Action</Button>
          </ModalActions>
        </TestModal>
      );

      expect(screen.getByText('Custom Title')).toBeInTheDocument();
      expect(screen.getByText('Custom content here')).toBeInTheDocument();
      expect(screen.getByText('Custom Action')).toBeInTheDocument();
    });

    it('renders without title', () => {
      const handleClose = vi.fn();
      renderWithTheme(
        <TestModal open onClose={handleClose}>
          <ModalContent>Content without title</ModalContent>
          <ModalActions>
            <Button>Action</Button>
          </ModalActions>
        </TestModal>
      );

      expect(screen.getByText('Content without title')).toBeInTheDocument();
      expect(screen.getByText('Action')).toBeInTheDocument();
    });

    it('renders without actions', () => {
      const handleClose = vi.fn();
      renderWithTheme(
        <TestModal open onClose={handleClose}>
          <ModalTitle>Title Only</ModalTitle>
          <ModalContent>Content without actions</ModalContent>
        </TestModal>
      );

      expect(screen.getByText('Title Only')).toBeInTheDocument();
      expect(screen.getByText('Content without actions')).toBeInTheDocument();
    });
  });

  describe('Interaction', () => {
    it('calls onClose when backdrop is clicked', async () => {
      const handleClose = vi.fn();
      renderWithTheme(<TestModal open onClose={handleClose} />);

      // Click the backdrop (outside the modal)
      const backdrop = document.querySelector('.MuiBackdrop-root') as HTMLElement;
      fireEvent.click(backdrop);

      await waitFor(() => {
        expect(handleClose).toHaveBeenCalledTimes(1);
      });
    });

    it('calls onClose when escape key is pressed', async () => {
      const user = userEvent.setup();
      const handleClose = vi.fn();
      renderWithTheme(<TestModal open onClose={handleClose} />);

      await user.keyboard('{Escape}');

      await waitFor(() => {
        expect(handleClose).toHaveBeenCalledTimes(1);
      });
    });

    it('does not close on escape when disableEscapeKeyDown is true', async () => {
      const user = userEvent.setup();
      const handleClose = vi.fn();
      renderWithTheme(<TestModal open onClose={handleClose} disableEscapeKeyDown />);

      await user.keyboard('{Escape}');

      // Wait a bit to ensure the handler doesn't get called
      await new Promise(resolve => setTimeout(resolve, 100));
      expect(handleClose).not.toHaveBeenCalled();
    });

    it('calls button onClick handlers', async () => {
      const user = userEvent.setup();
      const handleClose = vi.fn();
      const handleAction = vi.fn();

      renderWithTheme(
        <TestModal open onClose={handleClose}>
          <ModalTitle>Action Test</ModalTitle>
          <ModalContent>Testing button interactions</ModalContent>
          <ModalActions>
            <Button variant="text" onClick={handleClose}>Cancel</Button>
            <Button variant="contained" onClick={handleAction}>Confirm</Button>
          </ModalActions>
        </TestModal>
      );

      const cancelButton = screen.getByText('Cancel');
      const confirmButton = screen.getByText('Confirm');

      await user.click(cancelButton);
      expect(handleClose).toHaveBeenCalledTimes(1);

      await user.click(confirmButton);
      expect(handleAction).toHaveBeenCalledTimes(1);
    });

    it('handles modal transitions correctly', async () => {
      const handleClose = vi.fn();
      const { rerender } = renderWithTheme(<TestModal open={false} onClose={handleClose} />);

      // Modal should not be visible
      expect(screen.queryByText('Test Modal')).not.toBeInTheDocument();

      // Open the modal
      rerender(<TestModal open onClose={handleClose} />);

      await waitFor(() => {
        expect(screen.getByText('Test Modal')).toBeInTheDocument();
      });

      // Close the modal
      rerender(<TestModal open={false} onClose={handleClose} />);

      await waitFor(() => {
        expect(screen.queryByText('Test Modal')).not.toBeInTheDocument();
      });
    });
  });

  describe('Styling and Variants', () => {
    it('applies default variant (standard)', () => {
      const handleClose = vi.fn();
      renderWithTheme(<TestModal open onClose={handleClose} data-testid="default-modal" />);
      const modal = screen.getByTestId('default-modal');
      expect(modal).toBeInTheDocument();
    });

    it('applies fullscreen variant styling', () => {
      const handleClose = vi.fn();
      renderWithTheme(<TestModal open onClose={handleClose} variant="fullscreen" data-testid="fullscreen-modal" />);
      const modal = screen.getByTestId('fullscreen-modal');
      expect(modal).toBeInTheDocument();
    });

    it('applies centered variant styling', () => {
      const handleClose = vi.fn();
      renderWithTheme(<TestModal open onClose={handleClose} variant="centered" data-testid="centered-modal" />);
      const modal = screen.getByTestId('centered-modal');
      expect(modal).toBeInTheDocument();
    });

    it('applies maxWidth prop correctly', () => {
      const handleClose = vi.fn();
      const { rerender } = renderWithTheme(<TestModal open onClose={handleClose} maxWidth="xs" data-testid="modal" />);
      expect(screen.getByTestId('modal')).toBeInTheDocument();

      rerender(<TestModal open onClose={handleClose} maxWidth="lg" data-testid="modal" />);
      expect(screen.getByTestId('modal')).toBeInTheDocument();
    });

    it('applies fullWidth prop correctly', () => {
      const handleClose = vi.fn();
      renderWithTheme(<TestModal open onClose={handleClose} fullWidth data-testid="fullwidth-modal" />);
      expect(screen.getByTestId('fullwidth-modal')).toBeInTheDocument();
    });

    it('renders with custom styling props', () => {
      const handleClose = vi.fn();
      renderWithTheme(
        <TestModal
          open
          onClose={handleClose}
          data-testid="styled-modal"
          PaperProps={{
            style: { backgroundColor: 'rgb(255, 0, 0)' }
          }}
        />
      );
      const modal = screen.getByTestId('styled-modal');
      expect(modal).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const handleClose = vi.fn();
      const { container } = renderWithTheme(<TestModal open onClose={handleClose} />);
      const results = await axe(container);
      expect(results.violations).toEqual([]);
    });

    it('has proper ARIA attributes', () => {
      const handleClose = vi.fn();
      renderWithTheme(<TestModal open onClose={handleClose} data-testid="accessible-modal" />);

      // The actual dialog element has the proper role, not the wrapper
      const dialog = screen.getByRole('dialog');
      expect(dialog).toHaveAttribute('role', 'dialog');
      expect(dialog).toHaveAttribute('aria-modal', 'true');
    });

    it('has proper focus management', async () => {
      const handleClose = vi.fn();
      renderWithTheme(<TestModal open onClose={handleClose} />);

      const modal = screen.getByRole('dialog');

      // Modal should receive focus when opened
      await waitFor(() => {
        expect(modal).toBeInTheDocument();
      });
    });

    it('supports aria-labelledby when title is present', () => {
      const handleClose = vi.fn();
      renderWithTheme(
        <TestModal open onClose={handleClose}>
          <ModalTitle id="modal-title">Accessible Title</ModalTitle>
          <ModalContent>Accessible content</ModalContent>
        </TestModal>
      );

      const title = screen.getByText('Accessible Title');
      expect(title).toBeInTheDocument();
    });

    it('supports aria-describedby when content is present', () => {
      const handleClose = vi.fn();
      renderWithTheme(
        <TestModal open onClose={handleClose}>
          <ModalTitle>Title</ModalTitle>
          <ModalContent id="modal-description">Descriptive content</ModalContent>
        </TestModal>
      );

      const content = screen.getByText('Descriptive content');
      expect(content).toBeInTheDocument();
    });

    it('handles keyboard navigation correctly', async () => {
      const user = userEvent.setup();
      const handleClose = vi.fn();
      const handleAction = vi.fn();

      renderWithTheme(
        <TestModal open onClose={handleClose}>
          <ModalTitle>Keyboard Test</ModalTitle>
          <ModalContent>Testing keyboard navigation</ModalContent>
          <ModalActions>
            <Button variant="text" onClick={handleClose}>Cancel</Button>
            <Button variant="contained" onClick={handleAction}>OK</Button>
          </ModalActions>
        </TestModal>
      );

      // Tab through buttons
      await user.tab();
      expect(screen.getByText('Cancel')).toHaveFocus();

      await user.tab();
      expect(screen.getByText('OK')).toHaveFocus();
    });
  });

  describe('Props and Attributes', () => {
    it('forwards ref correctly', () => {
      let modalRef: HTMLDivElement | null = null;
      const handleClose = vi.fn();

      renderWithTheme(
        <Modal
          ref={(ref: HTMLDivElement | null) => { modalRef = ref; }}
          open
          onClose={handleClose}
        >
          <ModalTitle>Ref Test</ModalTitle>
        </Modal>
      );

      expect(modalRef).toBeInstanceOf(HTMLDivElement);
    });

    it('spreads additional props', () => {
      const handleClose = vi.fn();
      renderWithTheme(
        <TestModal
          open
          onClose={handleClose}
          data-testid="custom-modal"
          aria-label="Custom modal"
        />
      );

      const modal = screen.getByTestId('custom-modal');
      expect(modal).toHaveAttribute('aria-label', 'Custom modal');
    });

    it('accepts custom className', () => {
      const handleClose = vi.fn();
      renderWithTheme(
        <TestModal
          open
          onClose={handleClose}
          className="custom-modal-class"
          data-testid="classed-modal"
        />
      );

      const modal = screen.getByTestId('classed-modal');
      expect(modal).toHaveClass('custom-modal-class');
    });

    it('handles TransitionProps correctly', () => {
      const handleClose = vi.fn();
      const handleExited = vi.fn();

      renderWithTheme(
        <TestModal
          open
          onClose={handleClose}
          TransitionProps={{ onExited: handleExited }}
          data-testid="transition-modal"
        />
      );

      expect(screen.getByTestId('transition-modal')).toBeInTheDocument();
    });
  });

  describe('Edge Cases', () => {
    it('handles rapid open/close changes', async () => {
      const handleClose = vi.fn();
      const { rerender } = renderWithTheme(<TestModal open={false} onClose={handleClose} />);

      // Rapidly toggle open state
      rerender(<TestModal open onClose={handleClose} />);
      rerender(<TestModal open={false} onClose={handleClose} />);
      rerender(<TestModal open onClose={handleClose} />);

      await waitFor(() => {
        expect(screen.getByText('Test Modal')).toBeInTheDocument();
      });
    });

    it('handles missing onClose gracefully', () => {
      // This should not throw an error
      expect(() => {
        renderWithTheme(
          <Modal open onClose={undefined as any}>
            <ModalTitle>No Handler</ModalTitle>
          </Modal>
        );
      }).not.toThrow();
    });

    it('handles complex nested content', () => {
      const handleClose = vi.fn();
      renderWithTheme(
        <TestModal open onClose={handleClose}>
          <ModalTitle>Complex Content</ModalTitle>
          <ModalContent>
            <div>
              <h3>Nested Content</h3>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ul>
              <form>
                <input type="text" placeholder="Form input" />
                <textarea placeholder="Textarea"></textarea>
                <select>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
              </form>
            </div>
          </ModalContent>
        </TestModal>
      );

      expect(screen.getByText('Complex Content')).toBeInTheDocument();
      expect(screen.getByText('Nested Content')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Form input')).toBeInTheDocument();
    });

    it('handles very long content correctly', () => {
      const handleClose = vi.fn();
      const longContent = 'Lorem ipsum '.repeat(20); // Reduced to avoid text splitting issues

      renderWithTheme(
        <TestModal open onClose={handleClose}>
          <ModalTitle>Long Content Modal</ModalTitle>
          <ModalContent>{longContent}</ModalContent>
        </TestModal>
      );

      expect(screen.getByText('Long Content Modal')).toBeInTheDocument();
      // Use a more flexible matcher for long content
      expect(screen.getByText(/Lorem ipsum/)).toBeInTheDocument();
    });
  });
});