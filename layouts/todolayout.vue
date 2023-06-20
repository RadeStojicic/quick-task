
<script setup>
import { onMounted } from "vue";
import NavApp from "../components/NavApp.vue";
import Sidenav from "../components/Sidenav.vue";
import { ref, defineProps } from "vue";
const user_profile = useState("user_profile");

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
console.log(props.data);
const numberOfTasks = ref(0);
// if (items.value !== null) numberOfTasks.value = items.value.length;
</script>
<template>
  <div>
    <NavApp :user_name="user_profile" />
    <div class="container">
      <div><Sidenav :numberOfTasks="numberOfTasks" /></div>
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