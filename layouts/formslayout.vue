<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="container">
    <div class="navBar">
      <div class="subNav">
        <div class="logoContainer">
          <NuxtLink class="logo" to="/"
            ><img src="../assets/images/logo.png" alt="logo"
          /></NuxtLink>
        </div>
        <NuxtLink to="/">
          <span class="exitIcon">
            <Icon icon="ic:baseline-close" />
          </span>
        </NuxtLink>
      </div>
    </div>
    <div class="leftSection"></div>

    <slot />
  </div>
</template>



<style scoped>
.container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  background-color: rgb(255, 255, 255);
}
.navBar {
  height: 80px;
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
}
.subNav {
  display: flex;
  width: 95%;
  margin: auto;
  justify-content: space-between;
}

.leftSection {
  background-image: linear-gradient(to left, #3a4ddeb2, #3a4ddeb2),
    url("./assets/images/robot.jpg");
  background-size: cover;
  background-position: left;
  background-repeat: no-repeat;
  flex: 1;
}
.exitIcon {
  font-size: 1.8em;
  cursor: pointer;
  color: rgb(23, 23, 23);
}

.logoContainer {
  z-index: 1;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
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

@media (max-width: 1280px) {
  .leftSection {
    display: none;
  }

  .container {
    padding-bottom: 50px;
  }
  .exitIcon {
    color: rgb(255, 255, 255);
  }
  .navBar {
    background-color: #3850ff;
  }
  .subNav {
    width: 90%;
  }
}
</style>