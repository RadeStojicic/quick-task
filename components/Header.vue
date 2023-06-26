<script setup>
import { ref } from "vue";
const user = useSupabaseUser();
const authClient = useSupabaseClient();

const handleLogOut = async () => {
  await authClient.auth.signOut();
  navigateTo("/auth");
};

const openNav = ref(false);
</script>

<template>
  <header>
    <nav class="navContainer">
      <div class="linksContainer">
        <div class="navLeft">
          <a class="logo" href="#"
            ><img src="../assets/images/logo.png" alt=""
          /></a>
        </div>
        <div class="nav-container">
          <input
            @click="openNav = !openNav"
            class="checkbox"
            type="checkbox"
            name=""
            id=""
          />
          <div class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
          </div>
        </div>
        <ul class="navLinks">
          <NuxtLink class="link" to="/#home">Home</NuxtLink>
          <NuxtLink class="link" to="/#feautures">Features</NuxtLink>
          <NuxtLink class="link" to="/#pricing">Pricing</NuxtLink>
          <NuxtLink class="link" to="/#faq">FAQ</NuxtLink>
          <NuxtLink class="link" to="/#contact">Contact</NuxtLink>
          <NuxtLink v-if="!user" class="login" to="/auth">Log In</NuxtLink>
          <button v-else @click="handleLogOut()" class="logout">Log Out</button>
        </ul>
      </div>
    </nav>
    <nav v-if="openNav == true" class="responsive_nav">
      <ul class="responsiveLinks">
        <NuxtLink
          data-aos="fade-left"
          data-aos-duration="400"
          class="respLink"
          to="/#home"
          >Home</NuxtLink
        >
        <NuxtLink
          data-aos="fade-left"
          data-aos-duration="500"
          class="respLink"
          to="/#feautures"
          >Features</NuxtLink
        >
        <NuxtLink
          data-aos="fade-left"
          data-aos-duration="600"
          class="respLink"
          to="/#pricing"
          >Pricing</NuxtLink
        >
        <NuxtLink
          data-aos="fade-left"
          data-aos-duration="700"
          class="respLink"
          to="/#faq"
          >FAQ</NuxtLink
        >
        <NuxtLink
          data-aos="fade-left"
          data-aos-duration="800"
          class="respLink"
          to="/#contact"
          >Contact</NuxtLink
        >
        <NuxtLink
          data-aos="fade-left"
          data-aos-duration="900"
          v-if="!user"
          class="respLink"
          to="/auth"
          >Log In</NuxtLink
        >
        <NuxtLink
          data-aos="fade-left"
          data-aos-duration="900"
          v-else
          @click="handleLogOut()"
          class="respLink"
          >Log Out</NuxtLink
        >
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  border-bottom: 1px #dcdcdc15 solid;

  position: fixed;
  top: 0;
  z-index: 1000;
  background-color: #0a132efc;
}

.navContainer {
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  max-width: 1500px;
  margin: auto;
}

.linksContainer {
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo img {
  width: 150px;
}

.navLeft {
  display: flex;
  justify-content: center;
  align-content: center;
}

.navLinks {
  display: flex;
  gap: 25px;
}
.navLinks div {
  display: flex;
}
.navLinks a {
  text-decoration: none;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  padding: 10px 5px 10px 5px;
  font-size: 0.9em;
  font-weight: 400;
}

.link {
  color: #cccccc;
}

.router-link-active {
  color: #ffffff;
}

.login {
  color: white;
  background-color: #3850ff;
  border-radius: 5px;
  width: 120px;
  cursor: pointer;
}

.logout {
  color: white;
  background-color: #335af3;
  border-radius: 5px;
  width: 120px;
  cursor: pointer;
  border: none;
}

.navLinks a:hover {
  color: #8da3ff;
}

.pi-bars {
  display: none;
  color: white;
  font-size: 1.8em;
  cursor: pointer;
}

.pi-times {
  display: none;
  color: white;
  font-size: 1.8em;
  cursor: pointer;
}

.responsiveLinks {
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: auto;
  align-items: center;
  position: relative;
  top: 0px;
}
.respLink {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  text-align: center;
  color: white;
  padding: 20px;
  border-top: 1px #dcdcdc15 solid;
  width: 100%;
  cursor: pointer;
  user-select: none;
}
.respLink:hover {
  background-color: #111d3f;
}

.nav-container {
  display: none;
}

.nav-container .checkbox {
  position: absolute;
  display: block;
  height: 32px;
  width: 32px;
  top: 6px;
  right: 0px;
  z-index: 5;
  opacity: 0;
  cursor: pointer;
}

.nav-container .hamburger-lines {
  display: block;
  height: 26px;
  width: 32px;
  position: absolute;
  top: 6px;
  right: 0px;
  z-index: 2;
  display: flex;
  flex-direction: column;
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

.nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line1 {
  transform: rotate(45deg);
}

.nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line2 {
  transform: scaleY(0);
}

.nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line3 {
  transform: rotate(-45deg);
}

@media (max-width: 600px) {
  header {
    width: 100%;
  }
  .navContainer {
    width: 90%;
    justify-content: center;
    margin: auto;
  }
  .linksContainer {
    width: 100%;
  }
  .navLinks {
    display: none;
  }
  .pi-bars {
    display: block;
  }
  .pi-times {
    display: block;
  }
  .nav-container {
    display: block;
  }
}
</style>
