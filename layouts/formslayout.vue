<script setup>
</script>

<template>
  <div class="container">
    <div class="logoContainer">
      <NuxtLink class="logo" to="/"
        ><img src="../assets/images/logo.png" alt="logo"
      /></NuxtLink>
    </div>
    <NuxtLink to="/"><i class="pi pi-times closeIcon"></i></NuxtLink>
    <div class="leftSection"></div>

    <slot />
  </div>
</template>



<style scoped>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: rgb(255, 255, 255);
  display: flex;
}
.leftSection {
  background-image: linear-gradient(to left, #3a4ddeb2, #3a4ddeb2),
    url("./assets/images/robot.jpg");
  background-size: cover;
  background-position: left;
  background-repeat: no-repeat;
  flex: 1;
}
.closeIcon {
  position: absolute;
  right: 30px;
  top: 30px;
  font-size: 1.8em;
  padding: 10px;
  cursor: pointer;
  color: rgb(23, 23, 23);
}

.logoContainer {
  position: absolute;
  left: 30px;
  top: 30px;
  z-index: 1;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  padding: 10px;
}

.logoAcc {
  color: rgb(255, 255, 255);
}

.logoContainer a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}
.logo img {
  width: 130px;
}
</style>