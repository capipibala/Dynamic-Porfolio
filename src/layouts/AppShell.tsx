import type { ReactNode } from 'react';
import type { NavItem, SocialLink } from '../types/portfolio';
import { Container } from '../components/ui/Container';

type AppShellProps = {
    siteName: string;
    navigation: NavItem[];
    socialLinks: SocialLink[];
    children: ReactNode;
};

export function AppShell({ siteName, navigation, socialLinks, children }: AppShellProps) {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-white">
            <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-slate-50/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
                <Container className="flex min-h-16 items-center justify-between gap-4">
                    <a href="#top" className="text-sm font-semibold tracking-[0.2em] text-slate-900 uppercase dark:text-white">
                        {siteName}
                    </a>
                    <nav aria-label="Primary navigation" className="hidden md:block">
                        <ul className="flex items-center gap-6 text-sm text-slate-600 dark:text-slate-300">
                            {navigation.map((item) => (
                                <li key={item.href}>
                                    <a className="transition hover:text-sky-500" href={item.href}>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </Container>
            </header>

            <main id="top">{children}</main>

            <footer className="border-t border-slate-200 dark:border-slate-800">
                <Container className="flex flex-col gap-4 py-8 text-sm text-slate-600 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
                    <p>© {new Date().getFullYear()} {siteName}. Built with a custom component system.</p>
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
