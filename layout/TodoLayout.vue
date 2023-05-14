
<script setup>
import { onMounted } from "vue";
import NavApp from "../components/NavApp.vue";
import Sidenav from "../components/Sidenav.vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

onMounted(() => {
  if (route.path === "/todo") {
    router.push("/todo/all-tasks");
  }
});
</script>
<template>
  <div>
    <NavApp />
    <div class="container">
      <div><Sidenav /></div>
      <div>
        <!-- <router-view></router-view> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 300px 1fr;
}
</style>