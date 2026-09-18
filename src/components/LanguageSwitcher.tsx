import { useId } from 'react';
import { useLocale } from '../i18n/locale-context';

export function LanguageSwitcher() {
    const { locale, setLocale, t } = useLocale();
    const id = useId();
    return (
        <div>
            <label htmlFor={id} className="sr-only">
                {t.language}
            </label>
            <select
                id={id}
                value={locale}
                onChange={(event) => setLocale(event.target.value === 'vi' ? 'vi' : 'en')}
                className="min-h-10 rounded-xl border border-slate-300 bg-white px-2 text-sm dark:border-slate-700 dark:bg-slate-900"
            >
                <option value="vi" lang="vi">
                    Tiếng Việt
                </option>
                <option value="en" lang="en">
                    English
                </option>
            </select>
        </div>
    );
}
