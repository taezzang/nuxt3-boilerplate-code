import messages from './i18n/messages';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/css/global.scss" as *;',
                },
            },
        },
    },
    // dotEnv 라이브러리를 다운받을 필요 없이 이미 Nuxt 3 안에 내장이 되어있기 때문에 .env 파일 사용 or config 파일 내 runtimeConfig을 통해 설정이 가능함
    runtimeConfig: {
        apiSecret: '', // NUXT_API_SECRET <- 동일  Server Side 에서만 유효함
        public: {
            apiBase: '/test/base', // NUXT_PUBLIC_API_BASE <- 동일  Client Side에서도 사용 가능
        },
    },
    css: ['@/assets/css/reset.css'],
    modules: [
        '@nuxtjs/i18n',
        '@pinia/nuxt',
        '@nuxtjs/robots',
        'nuxt-simple-sitemap',
        '@pinia-plugin-persistedstate/nuxt',
    ],

    // 쿠키를 사용하도록 설정도 가능
    // SSR 사용, 또는 만료 시간 설정하고싶은 경우 다음과 같이 설정
    piniaPersistedstate: {
        cookieOptions: {
            maxAge: 3600,
            sameSite: 'strict',
        },
    },

    site: {
        url: 'http://localhost:3000',
    },

    // 사전 렌더링 활성화
    nitro: {
        prerender: {
            crawlLinks: true,
            routes: ['/'],
        },
    },
    i18n: {
        baseUrl: 'http://localhost:3000', // 대체 URL을 정규화하려면 프로덕션 도메인에 baseUrl 옵션을 설정해야 함
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
                iso: 'ko-KR', // html lang attribute에 적용시키는 옵션
            },
            {
                code: 'en',
                name: 'English',
                iso: 'en-US', // html lang attribute에 적용시키는 옵션
            },
        ], // used in URL path prefix
    },
    app: {
        head: {
            charset: 'utf-8',
            title: 'Nuxt BoilerPlate',
            htmlAttrs: {
                lang: 'ko',
            },
            meta: [
                // <meta name="description" content="My amazing site">
                { name: 'description', content: 'This i s Nuxt3 BolierPlate' },
            ],
        },
    },
});
