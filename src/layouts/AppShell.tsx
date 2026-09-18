import { useLocale } from '../i18n/locale-context';
import { LanguageSwitcher } from '../components/LanguageSwitcher';
import { useRef, useState, type ReactNode } from 'react';
import { ThemeToggle } from '../components/ThemeToggle';
import { Button } from '../components/shared/button/Button';
import type { NavItem, SocialLink } from '../types/portfolio';
import { Container } from '../components/ui/Container';

type AppShellProps = {
    siteName: string;
    navigation: NavItem[];
    socialLinks: SocialLink[];
    children: ReactNode;
};

export function AppShell({ siteName, navigation, socialLinks, children }: AppShellProps) {
    const { t } = useLocale();
    const [menuOpen, setMenuOpen] = useState(false);
    const menuButton = useRef<HTMLButtonElement>(null);
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-white">
            <a
                href="#top"
                className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:p-4 focus:text-slate-900"
            >
                {t.skip}
            </a>
            <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-slate-50/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
                <Container className="flex min-h-16 flex-wrap items-center justify-between gap-3 py-3">
                    <a
                        href="#top"
                        className="text-sm font-semibold tracking-[0.2em] text-slate-900 uppercase dark:text-white"
                    >
                        {siteName}
                    </a>
                    <div className="ml-auto flex flex-wrap items-center gap-2">
                        <LanguageSwitcher />
                        <ThemeToggle />
                        <Button
                            ref={menuButton}
                            label={menuOpen ? t.closeMenu : t.menu}
                            className="md:hidden"
                            variant="ghost"
                            aria-expanded={menuOpen}
                            aria-controls="primary-navigation"
                            onClick={() => setMenuOpen(!menuOpen)}
                        />
                    </div>
                    <nav
                        id="primary-navigation"
                        aria-label={t.navigation}
                        className={`${menuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}
                        onKeyDown={(event) => {
                            if (event.key === 'Escape') {
                                setMenuOpen(false);
                                menuButton.current?.focus();
                            }
                        }}
                    >
                        <ul className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-300">
                            {navigation.map((item) => (
                                <li key={item.href}>
                                    <a
                                        className="transition hover:text-sky-500"
                                        href={item.href}
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </Container>
            </header>

            <main id="top" tabIndex={-1}>
                {children}
            </main>

            <footer className="border-t border-slate-200 dark:border-slate-800">
                <Container className="flex flex-col gap-4 py-8 text-sm text-slate-600 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        © {new Date().getFullYear()} {siteName}. {t.footer}
                    </p>
                    <ul className="flex flex-wrap gap-4">
                        {socialLinks.map((link) => (
                            <li key={link.label}>
                                <a
                                    className="transition hover:text-sky-500"
                                    href={link.href}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </Container>
            </footer>
        </div>
    );
}
