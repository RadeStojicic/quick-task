<script setup>
const props = defineProps({
  user_name: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="containerNav">
    <nav>
      <div class="navLeft">
        <span>
          <i class="pi pi-list logoIcon"></i>
        </span>
        <NuxtLink to="/"
          ><span style="text-decoration: line-through"
            >Quick Task</span
          ></NuxtLink
        >
      </div>
      <div class="navRight">
        <a class="navAddTask" href=""><i class="pi pi-plus"></i></a>
        <p>{{ user_name }}</p>
        <a href="" class="profilePic"><div></div></a>
      </div>
    </nav>
  </div>
</template>


<style scoped>
.containerNav {
  position: fixed;
  width: 100%;
  height: 50px;
  background-color: #335af3;
  display: flex;
  align-items: center;
  z-index: 1;
}
.containerNav nav {
  width: 98%;
  margin: auto;
  display: flex;
  justify-content: space-between;
}

.containerNav nav a {
  color: white;
  text-decoration: none;
  font-weight: 400;
}
.navLeft {
  display: flex;
  justify-content: center;
  align-items: center;
}
.navRight {
  display: flex;
}

.navAddTask {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navAddTask:hover {
  background-color: #2850f0;
}

.logoIcon {
  color: white;
  margin-right: 5px;
}

.profilePic {
  display: flex;
  align-items: center;
  justify-content: center;
}

.profilePic div {
  background-image: url("./assets/images/profilePic.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 35px;
  height: 35px;
  clip-path: circle(50%);
}
</style>