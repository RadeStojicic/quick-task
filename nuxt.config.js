// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    head: {
        title: 'QuickTask - Task Management',
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { hid: 'description', name: 'description', content: 'Manage your tasks and todos efficiently with QuickTask. Stay organized and boost your productivity.' },
        ],
    },
    modules: ['@nuxtjs/supabase', '@pinia/nuxt', '@nuxt/image'],
    css: [
        "@/assets/css/main.css",  
        "primevue/resources/themes/mira/theme.css",
        "primevue/resources/primevue.css",
    ],
	build: {
		transpile: ["primevue"]
	},
    loading: false,
      image: {
        provider: 'netlify'
    }
   
})