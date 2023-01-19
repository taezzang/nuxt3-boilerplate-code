import messages from './i18n/messages';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/i18n'],
    i18n: {
        // strategy: 'no_prefix',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root', // recommended
        },
        locales: [
            {
                code: 'kr',
                name: 'Korean',
            },
            {
                code: 'en',
                name: 'English',
            },
        ], // used in URL path prefix
        // defaultLocale: 'kr', // default locale of your project for Nuxt pages and routings
        vueI18n: {
            legacy: false,
            locale: 'kr',
            messages,
        },
    },
    app: {
        head: {
            charset: 'utf-8',
            title: 'Nuxt BoilerPlate',
            meta: [
                // <meta name="description" content="My amazing site">
                { name: 'description', content: 'This i s Nuxt3 BolierPlate' },
            ],
        },
    },
});
