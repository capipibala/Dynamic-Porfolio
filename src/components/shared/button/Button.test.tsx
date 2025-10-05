import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Button } from './Button';

describe('Button component', () => {
    it('renders with label', () => {
        render(<Button label="Click me" />);
        expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    it('calls onClick when clicked', () => {
        const handleClick = vi.fn();
        render(<Button label="Hit me" onClick={handleClick} />);
        fireEvent.click(screen.getByText('Hit me'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('applies correct styles', () => {
        render(<Button label="Styled" />);
        const btn = screen.getByText('Styled');
        expect(btn).toHaveClass('bg-blue-500');
    });
});
