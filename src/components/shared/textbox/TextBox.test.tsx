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

it('gives each field a unique label and combines external descriptions with errors', () => {
    render(
        <>
            <TextBox label="First name" hint="Given name" />
            <TextBox label="Last name" error="Required" aria-describedby="policy" />
            <p id="policy">Privacy policy</p>
        </>,
    );
    const first = screen.getByLabelText('First name');
    const last = screen.getByLabelText('Last name');
    expect(first.id).not.toBe(last.id);
    expect(first).toHaveAccessibleDescription('Given name');
    expect(last).toHaveAccessibleDescription('Privacy policy Required');
    expect(last).toHaveAttribute('aria-invalid', 'true');
});
