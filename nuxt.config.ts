import messages from './i18n/messages';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['@/assets/css/reset.css'],
    modules: [
        '@nuxtjs/i18n',
        '@pinia/nuxt',
        ['@nuxtjs/robots', { configPath: './robots.config' }],
        'nuxt-simple-sitemap',
        '@pinia-plugin-persistedstate/nuxt', // https://prazdevs.github.io/pinia-plugin-persistedstate/frameworks/nuxt-3.html
    ],
    // https://greeng00se.tistory.com/110
    // 쿠키를 사용하도록 설정도 가능
    // SSR 사용, 또는 만료 시간 설정하고싶은 경우 다음과 같이 설정
    piniaPersistedstate: {
        cookieOptions: {
            maxAge: 3600,
            sameSite: 'strict',
        },
    },
    // https://nuxt.com/modules/simple-sitemap
    sitemap: {
        // sitemap.xml 생성 시 사이트 호스트를 제공해야함
        hostname: 'http://localhost:3000', // 임시 설정, 실 배포 시엔 변경 필요
    },
    // 다이내믹 루트 처리
    // 기본적으로 모든 스태틱 루트는 sitemap.xml에 포함됨
    // 다이내믹 루트를 포함할 있도록 설정 추가
    nitro: {
        // 자동 동적 URL 설정 <- Simple-sitemap 모듈 권장 설정
        // 사이트에 동적 링크가 연결되어 있는 경우 Nitro Crawler가 자동으로 링크를 포함하도록 설정
        prerender: {
            crawlLinks: true,
            routes: ['/'],
        },
    },
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
