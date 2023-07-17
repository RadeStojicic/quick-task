<script setup>
import { Icon } from "@iconify/vue";

const props = defineProps({
  todos: {
    type: Array,
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
            <Icon class="iconSidenav" icon="mingcute:inbox-fill" />
            All Tasks
          </div>
          <p>{{ todos ? todos.length : 0 }}</p>
        </NuxtLink>
        <NuxtLink class="link" to="/todo/today"
          ><div><Icon class="iconSidenav" icon="mdi:table" />Today</div>
          <p>{{ todos?.filter((e) => e.category === "Today").length || 0 }}</p>
        </NuxtLink>
        <NuxtLink class="link" to="/todo/important"
          ><div>
            <Icon class="iconSidenav" icon="iconamoon:star-bold" />Important
          </div>
          <p>
            {{ todos?.filter((e) => e.category === "Important").length || 0 }}
          </p>
        </NuxtLink>
        <NuxtLink class="link" to="/todo/planned"
          ><div>
            <Icon
              class="iconSidenav"
              icon="material-symbols:date-range"
            />Planned
          </div>
          <p>
            {{ todos?.filter((e) => e.category === "Planned").length || 0 }}
          </p>
        </NuxtLink>
        <NuxtLink class="link" to="/todo/completed"
          ><div>
            <Icon class="iconSidenav" icon="mingcute:schedule-line" />Completed
          </div>
          <p>
            {{ todos?.filter((e) => e.category === "Completed").length || 0 }}
          </p>
        </NuxtLink>
        <NuxtLink class="link" to="/todo/deleted"
          ><div><Icon class="iconSidenav" icon="bi:trash-fill" />Deleted</div>
          <p>
            {{ todos?.filter((e) => e.category === "Deleted").length || 0 }}
          </p>
        </NuxtLink>
      </div>
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
  border-top: 1px #e5e7eb solid;
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
.iconSidenav {
  color: #20263b;
  font-size: 1.2em;
  font-weight: bold;
}

.link p {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
}

@media screen and (max-width: 1400px) {
  .sideNavLinks a {
    font-size: 0.8em;
    padding: 10px 20px 10px 20px;
  }
}
</style>