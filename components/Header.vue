<script setup>
const user = useSupabaseUser();

const authClient = useSupabaseClient();

const handleLogOut = async () => {
  await authClient.auth.signOut();
  navigateTo("/auth");
};
</script>

<template>
  <header>
    <img class="waveHeader" src="../assets/images/wave_pattern.png" alt="" />

    <nav class="navContainer">
      <div class="linksContainer">
        <div class="navLeft">
          <a class="siteName" href="#">Quick Task</a>
        </div>
        <ul class="navLinks">
          <NuxtLink class="link" to="/">Home</NuxtLink>
          <NuxtLink class="link" to="/feautures">Features</NuxtLink>
          <NuxtLink class="link" to="/pircing">Pricing</NuxtLink>
          <NuxtLink class="link" to="/contact">Contact</NuxtLink>
          <NuxtLink v-if="!user" class="login" to="/auth">Log In</NuxtLink>
          <button v-else @click="handleLogOut()" class="logout">Log Out</button>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  border-bottom: 1px rgba(128, 128, 128, 0.097) solid;
  position: fixed;
  top: 0;
  background-color: white;
  z-index: 1000;
}

.siteName {
  text-decoration: none;
  font-size: 1.4em;
  font-weight: 400;
  width: 100%;
  color: rgb(255, 255, 255);
  text-decoration: line-through 2px #ffffff;
  font-weight: 700;
}

.waveHeader {
  position: absolute;
  top: 0;
  left: 0;
  width: 40%;
}

.listIcon {
  color: rgb(19, 19, 21);
  font-size: 1.8em;
  display: flex;
  align-items: center;
}
.navLeft {
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 10px;
}

.navContainer {
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  font-size: 0.95em;
  font-weight: 400;
}
.linksContainer {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1500px;
  width: 80%;
  margin: auto;
}

.link {
  color: #797979;
}

.router-link-active {
  color: #1f2e5f;
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
</style>
