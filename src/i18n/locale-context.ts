import { createContext, useContext } from 'react';
import { messages, type Locale, type Messages } from './messages';

export const LocaleContext = createContext<{
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: Messages;
}>({ locale: 'en', setLocale: () => {}, t: messages.en });

export function useLocale() {
    return useContext(LocaleContext);
}
