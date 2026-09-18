import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, expect, it, vi } from 'vitest';
import { ThemeToggle } from './ThemeToggle';
import { AppShell } from '../layouts/AppShell';

beforeEach(() => {
    localStorage.clear();
    vi.stubGlobal(
        'matchMedia',
        vi.fn(() => ({ matches: true, addEventListener: vi.fn(), removeEventListener: vi.fn() })),
    );
});
afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
    document.documentElement.classList.remove('dark');
});

it('follows system preference and persists an explicit selection across mounts', async () => {
    const user = userEvent.setup();
    const { unmount } = render(<ThemeToggle />);
    expect(document.documentElement).toHaveClass('dark');
    await user.click(screen.getByRole('button', { name: /Theme: system/ }));
    expect(document.documentElement).not.toHaveClass('dark');
    expect(localStorage.getItem('portfolio-theme')).toBe('light');
    unmount();
    render(<ThemeToggle />);
    expect(screen.getByRole('button', { name: /Theme: light/ })).toBeInTheDocument();
    await user.click(screen.getByRole('button'));
    expect(document.documentElement).toHaveClass('dark');
    await user.click(screen.getByRole('button'));
    expect(screen.getByRole('button', { name: /Theme: system/ })).toBeInTheDocument();
});

it('works when browser storage is blocked', async () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
        throw new Error('blocked');
    });
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
        throw new Error('blocked');
    });
    render(<ThemeToggle />);
    await userEvent.click(screen.getByRole('button'));
    expect(document.documentElement).not.toHaveClass('dark');
});

it('closes mobile navigation after choosing a link or pressing Escape', async () => {
    const user = userEvent.setup();
    render(
        <AppShell siteName="Portfolio" navigation={[{ label: 'Projects', href: '#projects' }]} socialLinks={[]}>
            <section id="projects">Projects content</section>
        </AppShell>,
    );
    const menu = screen.getByRole('button', { name: 'Menu' });
    await user.click(menu);
    expect(menu).toHaveAttribute('aria-expanded', 'true');
    await user.click(screen.getByRole('link', { name: 'Projects' }));
    expect(menu).toHaveAttribute('aria-expanded', 'false');
    await user.click(menu);
    fireEvent.keyDown(screen.getByRole('navigation'), { key: 'Escape' });
    expect(menu).toHaveAttribute('aria-expanded', 'false');
    expect(menu).toHaveFocus();
});
