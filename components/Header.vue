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
          <i class="pi pi-list listIcon"></i>
          <a class="siteName" href="#">Quick Task</a>
        </div>
        <ul class="navLinks">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/">Features</NuxtLink>
          <NuxtLink to="/pircing">Pricing</NuxtLink>
          <NuxtLink to="/contact">Contact</NuxtLink>
          <NuxtLink v-if="!user" class="login" to="/auth">Log In</NuxtLink>
          <button v-else @click="handleLogOut()" class="logout">Log Out</button>
        </ul>
      </div>
    </nav>
    <hr class="line" />
  </header>
</template>

<style scoped>
header {
  width: 100%;
  background-color: #ffffff;
}

.siteName {
  text-decoration: none;
  font-size: 1.4em;
  font-weight: 600;
  width: 100%;
  color: rgb(19, 19, 21);
  text-decoration: line-through 2px #335af3;
  font-weight: 700;
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
  font-size: 1em;
  font-weight: 300;
}
.linksContainer {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1300px;
  width: 80%;
  margin: auto;
}

.router-link-active {
  color: #335af3;
}

.login {
  color: white;
  background-color: #335af3;
  border-radius: 20px;
  width: 100px;
  cursor: pointer;
}

.logout {
  color: white;
  background-color: #335af3;
  border-radius: 5px;
  width: 100px;
  cursor: pointer;
  border: none;
}

.navLinks a:hover {
  color: #8da3ff;
}

.line {
  border: 1px rgba(239, 239, 239, 0.388) solid;
}
</style>
