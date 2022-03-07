export function getLocale() {
    let locale;
    if (
    // @ts-ignore
    global.chrome &&
        // @ts-ignore
        global.chrome.runtime &&
        // @ts-ignore
        typeof global.chrome.runtime.getManifest === 'function') {
        // @ts-ignore
        locale = global.chrome.runtime.getManifest();
        if (locale && locale.current_locale) {
            return locale.current_locale;
        }
    }
    locale =
        // @ts-ignore
        global.navigator &&
            // @ts-ignore
            ((global.navigator.languages && global.navigator.languages[0]) ||
                // @ts-ignore
                global.navigator.language ||
                // @ts-expect-error Not wasting any more time on this TS shit
                global.navigator.userLanguage);
    // @ts-ignore
    if (!locale && global.navigator && global.navigator.userAgent) {
        // @ts-ignore
        locale = global.navigator.userAgent.match(/;.(\w+-\w+)/);
        if (locale)
            return locale[1];
    }
    if (!locale) {
        // @ts-ignore
        locale = (global.clientInformation || Object.create(null)).language;
    }
    if (!locale) {
        // @ts-ignore
        if (global.Intl && typeof global.Intl.DateTimeFormat === 'function') {
            locale =
                // @ts-ignore
                global.Intl.DateTimeFormat().resolvedOptions &&
                    // @ts-ignore
                    global.Intl.DateTimeFormat().resolvedOptions().locale;
        }
        if (!locale &&
            // @ts-ignore
            ['LANG', 'LANGUAGE'].some(Object.hasOwnProperty, process.env)) {
            // @ts-ignore
            return (process.env.LANG || process.env.LANGUAGE || String())
                .replace(/[.:].*/, '')
                .replace('_', '-');
        }
    }
    return locale;
}
export function formatLocale(langLocale) {
    // 'en-US-u-VA-posix'.split('-').slice(0, 2)
    // ["en", "US"]
    return langLocale
        .split('-')
        .slice(0, 2)
        .map((chunk, index) => {
        // en[0]-US[1] <- chunk[1].toUpperCase()
        if (index !== 0 && chunk.length === 2)
            return chunk.toUpperCase();
        return chunk;
    })
        .join('-');
}
export function getFormattedLocale() {
    return formatLocale(getLocale());
}
//# sourceMappingURL=index.js.map