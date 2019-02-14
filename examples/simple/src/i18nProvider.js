import englishMessages from './i18n/en';

const messages = {
    fr: () => import('./i18n/fa.js').then(messages => messages.default),
};

export default locale => {
    if (locale === 'fa') {
        return messages[locale]();
    }

    // Always fallback on english
    return englishMessages;
};
