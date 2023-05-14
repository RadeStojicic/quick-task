import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Calendar from "primevue/calendar";
import ConfirmDialog from 'primevue/confirmdialog';
import Dialog from "primevue/dialog";

import ConfirmationService from 'primevue/confirmationservice';
import { useConfirm } from "primevue/useconfirm";

export default defineNuxtPlugin((nuxtApp) => {  
    buildModules:['@nuxtjs/fontawesome'],
    nuxtApp.vueApp.use(PrimeVue, { ripple: true });
    nuxtApp.vueApp.component("Calendar", Calendar);
    nuxtApp.vueApp.component("ConfirmDialog", ConfirmDialog);
    nuxtApp.vueApp.component("Dialog", Dialog);
    nuxtApp.vueApp.use(ConfirmationService);
    
});


