// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    app: {
        head: {
            title: 'QuickTask - Manage your tasks efficiently',
            meta: [
                {
                    name: 'description',
                    content: 'Manage your tasks and todos efficiently with QuickTask. Stay organized and boost your productivity.'
                },
                {
                charset: 'utf-8',
                viewport: 'width=device-width, initial-scale=1',
                }
            ]
        }
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