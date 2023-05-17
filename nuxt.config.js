// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    modules: ['@nuxtjs/supabase'],
    css: [
        "@/assets/css/main.css",  
        "primevue/resources/themes/lara-light-blue/theme.css",
        "primevue/resources/primevue.css",
        "primeicons/primeicons.css",
    ],
	build: {
		transpile: ["primevue"]
	},
    loading: false,
  
})