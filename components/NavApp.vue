<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";

const props = defineProps({
  user_name: {
    type: String,
    required: true,
  },
});

const openNav = ref(false);
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
        <div class="nav-container">
          <input
            @click="openNav = !openNav"
            class="checkbox"
            type="checkbox"
            name=""
            id=""
          />
          <div :class="{ active: openNav }" class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
          </div>
        </div>

        <p class="userName">
          Hi, <span style="font-weight: bold">{{ user_name }}</span
          >.
        </p>
      </div>
    </nav>
    <div
      data-aos="fade-left"
      data-aos-duration="400"
      v-if="openNav == true"
      class="responsive_nav"
    >
      <ul class="responsiveLinks">
        <NuxtLink @click="openNav = false" class="link" to="/todo"
          ><div>
            <Icon class="iconSidenav" icon="mingcute:inbox-fill" /> All Tasks
          </div>
          <p>0</p>
        </NuxtLink>
        <NuxtLink @click="openNav = false" class="respLink" to="/todo/today"
          ><div><Icon class="iconSidenav" icon="mdi:table" />Today</div>
          <p>0</p>
        </NuxtLink>
        <NuxtLink @click="openNav = false" class="respLink" to="/"
          ><div>
            <Icon class="iconSidenav" icon="iconamoon:star-bold" /> Important
          </div>
          <p>0</p>
        </NuxtLink>
        <NuxtLink @click="openNav = false" class="respLink" to="/"
          ><div>
            <Icon class="iconSidenav" icon="material-symbols:date-range" />
            Planned
          </div>
          <p>0</p>
        </NuxtLink>
        <NuxtLink @click="openNav = false" class="respLink" to="/"
          ><div><Icon class="iconSidenav" icon="uis:schedule" /> Upcoming</div>
          <p>5</p>
        </NuxtLink>
        <NuxtLink @click="openNav = false" class="respLink" to="/todo/completed"
          ><div>
            <Icon class="iconSidenav" icon="mingcute:schedule-line" /> Completed
          </div>
          <p>0</p>
        </NuxtLink>
        <NuxtLink @click="openNav = false" class="respLink" to="/"
          ><div><Icon class="iconSidenav" icon="bi:trash-fill" /> Deleted</div>
          <p>0</p>
        </NuxtLink>
        <NuxtLink @click="handleLogOut()" class="respLink logout">
          <div><Icon class="iconSidenav" icon="mdi:user-outline" />Log Out</div>
          <Icon class="iconSidenav" icon="mingcute:exit-line" />
        </NuxtLink>
      </ul>
    </div>
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
  align-items: center;
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
  justify-content: center;
}

.userName {
  color: white;
}
.responsive_nav {
  height: 100vh;
  overflow-y: hidden;
}
.responsiveLinks {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  position: relative;
  top: 0px;
  background-color: rgb(255, 255, 255);
  z-index: 1000;
}
.respLink {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  text-align: center;
  color: #0f225f;
  padding: 20px;
  width: 100%;
  cursor: pointer;
  user-select: none;
}
.respLink:hover {
  background-color: #f6f8ff;
}

.nav-container {
  display: none;
  position: absolute;
  right: 10px;
  top: 18px;
}

.nav-container .checkbox {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
  position: absolute;
  top: 0px;
  z-index: 5;
  opacity: 0;
  cursor: pointer;
}

.nav-container .hamburger-lines {
  display: block;
  height: 22px;
  width: 28px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.nav-container .hamburger-lines .line {
  display: block;
  height: 4px;
  width: 100%;
  border-radius: 10px;
  background: #ffffff;
}

.nav-container .hamburger-lines .line1 {
  transform-origin: 0% 0%;
  transition: transform 0.4s ease-in-out;
}

.nav-container .hamburger-lines .line2 {
  transition: transform 0.2s ease-in-out;
}

.nav-container .hamburger-lines .line3 {
  transform-origin: 0% 100%;
  transition: transform 0.4s ease-in-out;
}

.active .line1 {
  transform: rotate(45deg);
}

.active .line2 {
  transform: scaleY(0);
}

.active .line3 {
  transform: rotate(-45deg);
}

.responsiveLinks a {
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 20px 18px 20px;
  color: #0e1c48;
  font-size: 0.95em;
  width: 100%;
  border-bottom: 1px #e5e7eb solid;
}

.responsiveLinks a:hover {
  background-color: #f6f8ff;
}

.responsiveLinks a div {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

.router-link-exact-active {
  background-color: #f6f8ff;
  position: relative;
}

.router-link-exact-active::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 2px;
  background-image: linear-gradient(to bottom, #eb3868, #f7705c);
}

.router-link-exact-active p {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50px;
  color: white;
  background-color: #3850ff;
  font-size: 0.9em;
  transition: 0.1s;
}
.iconSidenav {
  color: #20263b;
  font-size: 1.3em;
  font-weight: bold;
}

.respLink p {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
}

.logout {
  text-decoration: none;
  display: block;
  color: #20263b;
  font-size: 0.95em;
  border-bottom: 1px #e5e7eb solid;
  cursor: pointer;
}

.logout p {
  color: #20263b;
}

.logout div {
  display: flex;
  align-items: center;
  gap: 15px;
  color: #20263b;
}

.pi-user {
  font-weight: bold;
  color: white;
}
.pi-sign-out {
  font-weight: bold;
  color: white;
}

@media (max-width: 1280px) {
  .nav-container {
    display: block;
  }
  .userName {
    display: none;
  }
  .containerNav {
    height: 60px;
  }
  .containerNav nav {
    width: 95%;
    margin: auto;
  }
  .responsive_nav {
    position: absolute;
    width: 100%;
    left: 0;
    top: 60px;
  }
}
</style>