<script setup>
const props = defineProps({
  numberOfTasks: {
    type: Number,
    required: true,
  },
});
</script>
<template>
  <div class="container">
    <div class="sideNavContainer">
      <div class="sideNavLinks">
        <NuxtLink to="/todo"
          ><div>
            <i class="pi pi-inbox"></i>
            All Tasks
          </div>
          <p>{{ numberOfTasks }}</p>
        </NuxtLink>
        <NuxtLink to="/todo/today"
          ><div>
            <i class="pi pi-table"></i>
            Today
          </div>
          <p>0</p>
        </NuxtLink>
        <NuxtLink to="/"
          ><div>
            <i class="pi pi-star"></i>
            Important
          </div>
          <p>0</p>
        </NuxtLink>
        <NuxtLink to="/"
          ><div>
            <i class="pi pi-calendar"></i>
            Planned
          </div>
          <p>0</p>
        </NuxtLink>
        <NuxtLink to="/todo/completed"
          ><div>
            <i class="pi pi-check-square"></i>
            Completed
          </div>
          <p>0</p>
        </NuxtLink>
        <NuxtLink to="/"
          ><div>
            <i class="pi pi-trash"></i>
            Deleted
          </div>
          <p>0</p>
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
  color: rgb(85, 85, 85);
  font-size: 0.95em;
  overflow: hidden;
  width: 300px;
}

.sideNavLinks a:hover {
  background-color: rgb(241, 241, 241);
  border-left: 2px #335af3 solid;
  border-right: 1px rgb(232, 232, 232) solid;
}

.sideNavLinks a div {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

.router-link-active {
  background-color: rgb(238, 245, 252);
  border-left: 2px #335af3 solid;
  border-right: 1px rgb(232, 232, 232) solid;
}
</style>