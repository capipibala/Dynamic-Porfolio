import { useLocale } from '../i18n/locale-context';
import { useEffect, useState } from 'react';
import { Button } from './shared/button/Button';

type Theme = 'system' | 'light' | 'dark';

function readTheme(): Theme {
    try {
        const saved = localStorage.getItem('portfolio-theme');
        if (saved === 'light' || saved === 'dark') return saved;
    } catch {
        /* Storage may be unavailable in private browsing. */
    }
    return 'system';
}

export function ThemeToggle() {
    const { t } = useLocale();
    const [theme, setTheme] = useState<Theme>(readTheme);
    useEffect(() => {
        const media = window.matchMedia('(prefers-color-scheme: dark)');
        const apply = () => {
            const dark = theme === 'dark' || (theme === 'system' && media.matches);
            document.documentElement.classList.toggle('dark', dark);
            document.documentElement.style.colorScheme = dark ? 'dark' : 'light';
        };
        apply();
        media.addEventListener('change', apply);
        return () => media.removeEventListener('change', apply);
    }, [theme]);

    function cycleTheme() {
        const next = theme === 'system' ? 'light' : theme === 'light' ? 'dark' : 'system';
        setTheme(next);
        try {
            localStorage.setItem('portfolio-theme', next);
        } catch {
            /* Keep the toggle usable without persistence. */
        }
    }

    return (
        <Button
            label={`${t.theme}: ${t[theme]}`}
            aria-label={`${t.theme}: ${t[theme]}. ${t.switchTheme.replace('{theme}', t[theme === 'system' ? 'light' : theme === 'light' ? 'dark' : 'system'])}`}
            variant="secondary"
            size="sm"
            onClick={cycleTheme}
        />
    );
}
