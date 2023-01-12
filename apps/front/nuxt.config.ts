// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    srcDir: "src/",
    modules: [

        '@pinia/nuxt',
    ],
    runtimeConfig: {
        API_URL: process.env.API_URL
    }
})
