// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        '@/assets/css/main.css',  
        "primevue/resources/themes/lara-light-blue/theme.css",
        "primevue/resources/primevue.css",
        "primeicons/primeicons.css",
        '@fortawesome/fontawesome-svg-core/styles.css',

    ],
	build: {
		transpile: ["primevue"]
	},
    loading: false
  
})