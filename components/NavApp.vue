<script setup>
const props = defineProps({
  user_name: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="containerNav">
    <nav>
      <div class="navLeft">
        <NuxtLink class="logo" to="/"
          ><img src="../assets/images/logo.png" alt="logo"
        /></NuxtLink>
      </div>
      <div class="navRight">
        <p class="userName">
          Hi, <span style="font-weight: bold">{{ user_name }}</span
          >.
        </p>
      </div>
    </nav>
  </div>
</template>


<style scoped>
.containerNav {
  position: fixed;
  width: 100%;
  background-color: #335af3;
  display: flex;
  align-items: center;
  z-index: 1;
  height: 50px;
}
.containerNav nav {
  width: 98%;
  margin: auto;
  display: flex;
  justify-content: space-between;
}

.containerNav nav a {
  color: white;
  text-decoration: none;
  font-weight: 400;
}
.logo {
  display: flex;
  align-items: center;
}
.logo img {
  width: 120px;
}
.navRight {
  display: flex;
  align-items: center;
}

.userName {
  color: white;
}
</style>