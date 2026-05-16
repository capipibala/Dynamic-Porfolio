import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Button } from './Button';

describe('Button component', () => {
    it('renders with label', () => {
        render(<Button label="Click me" />);
        expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
    });

    it('calls onClick when clicked', () => {
        const handleClick = vi.fn();
        render(<Button label="Hit me" onClick={handleClick} />);
        fireEvent.click(screen.getByRole('button', { name: 'Hit me' }));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('applies default primary styles', () => {
        render(<Button label="Styled" />);
        const button = screen.getByRole('button', { name: 'Styled' });
        expect(button).toHaveClass('bg-sky-500');
    });

    it('renders as a link when href is provided', () => {
        render(<Button label="Open" href="/projects" />);
        expect(screen.getByRole('link', { name: 'Open' })).toHaveAttribute('href', '/projects');
    });
});
