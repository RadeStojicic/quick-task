
<script setup>
import { onMounted } from "vue";
import NavApp from "../components/NavApp.vue";
import Sidenav from "../components/Sidenav.vue";
import { ref, defineProps } from "vue";
import { createClient } from "@supabase/supabase-js";
import { useTodoStore } from "../stores/todo";
import { storeToRefs } from "pinia";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const { todos } = storeToRefs(useTodoStore());

const supabaseAuth = useSupabaseAuthClient();
const {
  data: { user },
} = await supabaseAuth.auth.getUser();

const user_profile = ref(user.user_metadata?.full_name || user.email);
const user_image = ref(user.user_metadata?.avatar_url);
</script>
<template>
  <div>
    <NavApp :user_image="user_image" :user_name="user_profile" :todos="todos" />
    <div class="container">
      <div class="sidenavContainer">
        <Sidenav :todos="todos" />
      </div>
      <div class="main">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 300px 1fr;
}

.main {
  background-color: whitesmoke;
  height: 100vh;
  margin-top: 50px;
}

@media (max-width: 1250px) {
  .sidenavContainer {
    display: none;
  }
  .container {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
  }
}
</style>