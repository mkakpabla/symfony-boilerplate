export default defineNuxtPlugin(async (nuxtApp) => {
    // Here you can handle your errors globally
    nuxtApp.hook('vue:error', (..._args) => {
        console.log('vue:error')
        console.log(..._args)
        // if (process.client) {
        //   console.log(..._args)
        // }
    })
    nuxtApp.hook('app:error', (..._args) => {
        console.log('app:error');
        // if (process.client) {
        //   console.log(..._args)
        // }
    })
    nuxtApp.vueApp.config.errorHandler = (..._args) => {
        console.log('global error handler')
        // if (process.client) {
        //   console.log(..._args)
        // }
    }
})