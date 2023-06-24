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
    <nav class="navContainer">
      <div class="linksContainer">
        <div class="navLeft">
          <a class="logo" href="#"
            ><img src="../assets/images/logo.png" alt=""
          /></a>
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
  z-index: 1000;
  background-color: #0a132ee9;
}

.logo img {
  width: 150px;
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
  font-size: 0.9em;
  font-weight: 400;
}
.linksContainer {
  max-width: 1500px;
  width: 80%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
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
</style>
