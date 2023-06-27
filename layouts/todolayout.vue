
<script setup>
import { onMounted } from "vue";
import NavApp from "../components/NavApp.vue";
import Sidenav from "../components/Sidenav.vue";
import { ref, defineProps } from "vue";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const numberOfTasks = ref(2);
</script>
<template>
  <div>
    <NavApp :user_name="user_profile" />
    <div class="container">
      <div class="sidenavContainer">
        <Sidenav :numberOfTasks="numberOfTasks" />
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

@media (max-width: 1280px) {
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