
<script setup>
import { onMounted } from "vue";
import NavApp from "../components/NavApp.vue";
import Sidenav from "../components/Sidenav.vue";
</script>
<template>
  <div>
    <NavApp />
    <div class="container">
      <div><Sidenav /></div>
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
</style>