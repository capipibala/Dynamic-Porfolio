import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, expect, it, vi } from 'vitest';
import App from '../App';

beforeEach(() => {
    localStorage.clear();
    vi.spyOn(navigator, 'languages', 'get').mockReturnValue(['en-US']);
    vi.stubGlobal(
        'matchMedia',
        vi.fn(() => ({ matches: false, addEventListener: vi.fn(), removeEventListener: vi.fn() })),
    );
    const description = document.createElement('meta');
    description.name = 'description';
    document.head.appendChild(description);
});
afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
    document.querySelector('meta[name="description"]')?.remove();
    document.documentElement.lang = 'en';
});

it('translates the full page and metadata, retains filters, and restores the saved language', async () => {
    const user = userEvent.setup();
    const { unmount } = render(<App />);
    await user.selectOptions(screen.getByLabelText('Technology'), 'React');
    await user.selectOptions(screen.getByLabelText('Language'), 'vi');
    expect(document.documentElement.lang).toBe('vi');
    expect(document.title).toBe('Capibala | Kỹ sư phần mềm');
    expect(document.querySelector('meta[name="description"]')?.getAttribute('content')).toContain('Hồ sơ của Capibala');
    expect(screen.getByRole('heading', { name: 'Dự án tiêu biểu' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Kỹ sư phần mềm cao cấp' })).toBeInTheDocument();
    expect(screen.getByText(/Một portfolio cá nhân được xây dựng/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Giao diện: hệ thống/ })).toBeInTheDocument();
    expect(screen.getByRole('status')).toHaveTextContent('1 trên 3 dự án');
    expect(screen.getByLabelText('Công nghệ')).toHaveValue('React');
    await user.type(screen.getByRole('searchbox', { name: 'Tìm kiếm dự án' }), 'not-found');
    expect(screen.getByText(/Không có dự án phù hợp/)).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Xóa bộ lọc' }));
    expect(screen.getByRole('status')).toHaveTextContent('3 trên 3 dự án');
    await user.click(screen.getByRole('button', { name: 'Danh mục' }));
    expect(
        within(screen.getByRole('navigation', { name: 'Điều hướng chính' })).getByRole('link', { name: 'Kinh nghiệm' }),
    ).toHaveAttribute('href', '#experience');
    expect(localStorage.getItem('portfolio-language')).toBe('vi');
    unmount();
    render(<App />);
    expect(screen.getByLabelText('Ngôn ngữ')).toHaveValue('vi');
    await user.selectOptions(screen.getByLabelText('Ngôn ngữ'), 'en');
    expect(document.documentElement.lang).toBe('en');
    expect(screen.getByRole('heading', { name: 'Selected work' })).toBeInTheDocument();
    expect(screen.getByText(/A personal portfolio built/)).toBeInTheDocument();
});

it('uses Vietnamese browser preference and still switches when storage is unavailable', async () => {
    vi.spyOn(navigator, 'languages', 'get').mockReturnValue(['vi-VN']);
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
        throw new Error('blocked');
    });
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
        throw new Error('blocked');
    });
    render(<App />);
    expect(screen.getByLabelText('Ngôn ngữ')).toHaveValue('vi');
    await userEvent.selectOptions(screen.getByLabelText('Ngôn ngữ'), 'en');
    expect(screen.getByLabelText('Language')).toHaveValue('en');
});

it('ignores unsupported saved languages and falls back to English for other browser languages', () => {
    localStorage.setItem('portfolio-language', 'fr');
    vi.spyOn(navigator, 'languages', 'get').mockReturnValue(['fr-FR']);
    render(<App />);
    expect(screen.getByLabelText('Language')).toHaveValue('en');
});
