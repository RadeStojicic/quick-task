// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    modules: ['@nuxtjs/supabase'],
    css: [
        "@/assets/css/main.css",  
        "primevue/resources/themes/mira/theme.css",
        "primevue/resources/primevue.css",
    ],
	build: {
		transpile: ["primevue"]
	},
    loading: false,
})