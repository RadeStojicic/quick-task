<script setup>
const props = defineProps({
  numberOfTasks: {
    type: Number,
    required: true,
  },
});
const user = useSupabaseUser();

const authClient = useSupabaseClient();
const handleLogOut = async () => {
  await authClient.auth.signOut();
  navigateTo("/auth");
};
</script>
<template>
  <div class="container">
    <div class="sideNavContainer">
      <div class="sideNavLinks">
        <NuxtLink class="link" to="/todo"
          ><div>
            <i class="pi pi-inbox"></i>
            All Tasks
          </div>
          <p>{{ numberOfTasks }}</p>
        </NuxtLink>
        <NuxtLink class="link" to="/todo/today"
          ><div>
            <i class="pi pi-table"></i>
            Today
          </div>
          <p>0</p>
        </NuxtLink>
        <NuxtLink class="link" to="/"
          ><div>
            <i class="pi pi-star"></i>
            Important
          </div>
          <p>0</p>
        </NuxtLink>
        <NuxtLink class="link" to="/"
          ><div>
            <i class="pi pi-calendar"></i>
            Planned
          </div>
          <p>0</p>
        </NuxtLink>
        <NuxtLink class="link" to="/"
          ><div>
            <i class="pi pi-calendar-times"></i>
            Upcoming
          </div>
          <p>5</p>
        </NuxtLink>
        <NuxtLink class="link" to="/todo/completed"
          ><div>
            <i class="pi pi-check-square"></i>
            Completed
          </div>
          <p>0</p>
        </NuxtLink>
        <NuxtLink class="link" to="/"
          ><div>
            <i class="pi pi-trash"></i>
            Deleted
          </div>
          <p>0</p>
        </NuxtLink>
      </div>
      <NuxtLink @click="handleLogOut()" class="logout">
        <div><i class="pi pi-user"></i>Log Out</div>
        <i class="pi pi-sign-out"></i
      ></NuxtLink>
    </div>
  </div>
</template>


<style scoped>
.container {
  position: fixed;
  left: 0;
  width: 300px;
  display: flex;
  height: 100vh;
  background-color: rgb(255, 255, 255);
  border-right: 1px rgb(232, 232, 232) solid;
}

.sideNavLinks {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
}
.sideNavLinks a {
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px 12px 20px;
  color: #0e1c48;
  font-size: 0.95em;
  overflow: hidden;
  width: 300px;
  border-bottom: 1px #f6f8ff solid;
}

.sideNavLinks a:hover {
  background-color: #f6f8ff;
}

.sideNavLinks a div {
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
.sideNavLinks i {
  color: #20263b;
  font-size: 1em;
  font-weight: bold;
}

.link p {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
}

.logout {
  position: absolute;
  bottom: 0;
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px 12px 20px;
  color: #0e1c48;
  font-size: 0.95em;
  overflow: hidden;
  width: 300px;
  border-top: 1px #f6f8ff solid;
  cursor: pointer;
}

.logout div {
  display: flex;
  align-items: center;
  gap: 15px;
}

.pi-user {
  font-weight: bold;
}
.pi-sign-out {
  font-weight: bold;
}
</style>