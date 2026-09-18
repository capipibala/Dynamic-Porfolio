import { useEffect, useState, type ReactNode } from 'react';
import { LocaleContext } from './locale-context';
import { messages, type Locale } from './messages';

function initialLocale(): Locale {
    try {
        const saved = localStorage.getItem('portfolio-language');
        if (saved === 'vi' || saved === 'en') return saved;
    } catch {
        /* Browser preferences still work when storage is blocked. */
    }
    const preferred = navigator.languages?.[0] || navigator.language;
    return preferred?.toLowerCase().startsWith('vi') ? 'vi' : 'en';
}

export function LocaleProvider({ children }: { children: ReactNode }) {
    const [locale, updateLocale] = useState<Locale>(initialLocale);
    const t = messages[locale];
    function setLocale(next: Locale) {
        updateLocale(next);
        try {
            localStorage.setItem('portfolio-language', next);
        } catch {
            /* Switching remains available. */
        }
    }
    useEffect(() => {
        document.documentElement.lang = locale;
        document.title = t.metaTitle;
        document.querySelector('meta[name="description"]')?.setAttribute('content', t.metaDescription);
    }, [locale, t]);
    return <LocaleContext.Provider value={{ locale, setLocale, t }}>{children}</LocaleContext.Provider>;
}
