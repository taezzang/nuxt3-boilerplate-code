import messages from './i18n/messages';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/i18n'],
    i18n: {
        // strategy: 'no_prefix', // 해당 옵션 활성화 시 root 도메인 바로 앞에 /ko 또는, /en 형식으로 locale이 따라 붙지 않음
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root', // recommended
        },
        defaultLocale: 'ko', // default locale of your project for Nuxt pages and routings
        locales: [
            {
                code: 'ko',
                name: 'Korean',
            },
            {
                code: 'en',
                name: 'English',
            },
        ], // used in URL path prefix

        vueI18n: {
            fallbackLocale: 'en',
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
