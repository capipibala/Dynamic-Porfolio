import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextBox } from './TextBox';

describe('TextBox component', () => {
    it('renders correctly', () => {
        render(<TextBox />);
        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();
    });

    it('allows typing', async () => {
        const user = userEvent.setup();
        render(<TextBox />);
        const input = screen.getByRole('textbox');
        await user.type(input, 'Vitest works!');
        expect((input as HTMLInputElement).value).toBe('Vitest works!');
    });

    it('renders label and hint text', () => {
        render(<TextBox label="Email" hint="We only use this to reply." />);
        expect(screen.getByLabelText('Email')).toBeInTheDocument();
        expect(screen.getByText('We only use this to reply.')).toBeInTheDocument();
    });
});
