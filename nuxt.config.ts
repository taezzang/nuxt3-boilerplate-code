// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-8',
            title: 'Nuxt BoilerPlate',
            meta: [
                // <meta name="description" content="My amazing site">
                { name: 'description', content: 'This is Nuxt3 BolierPlate' },
            ],
        },
    },
});
