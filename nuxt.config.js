// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    modules: ['@nuxtjs/supabase'],
    css: [
        "@/assets/css/main.css",  
        "primevue/resources/themes/lara-light-blue/theme.css",
        "primevue/resources/primevue.css",
        "primeicons/primeicons.css",
    ],
    head: {
        script: [{
            src: "https://apis.google.com/js/platform.js?onload=renderButton",
            async: true,
            defer: true
        }],
        meta: [{
            name:"google-signin-client_id",
            content:"749726466506-k3v67b8pq50b3n1jhvt7rcjn0t0lcv24.apps.googleusercontent.com.apps.googleusercontent.com"
        }]
    },
	build: {
		transpile: ["primevue"]
	},
    loading: false,
  
})