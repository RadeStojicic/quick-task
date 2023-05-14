<script setup>
</script>
<template>
  <div class="container">
    <div class="sideNavContainer">
      <div class="sideNavLinks">
        <NuxtLink to="/todo/all"
          ><div>
            <span>
              <font-awesome-icon icon="fa-solid fa-inbox" />
            </span>
            All Tasks
          </div>
          <p>0</p>
        </NuxtLink>
        <NuxtLink to="/todo/today"
          ><div>
            <span>
              <font-awesome-icon icon="fas-regular fa-calendar-days" />
            </span>
            Today
          </div>
          <p>0</p>
        </NuxtLink>
        <NuxtLink to="/todo/important"
          ><div>
            <span>
              <font-awesome-icon icon="fab-regular fa-star" />
            </span>
            Important
          </div>
          <p>0</p>
        </NuxtLink>
        <NuxtLink to="/todo/planned"
          ><div>
            <span>
              <font-awesome-icon icon="fab-regular fa-clipboard" />
            </span>
            Planned
          </div>
          <p>0</p>
        </NuxtLink>
        <NuxtLink to="/todo/completed"
          ><div>
            <span>
              <font-awesome-icon icon="fab-regular fa-calendar-check" />
            </span>
            Completed
          </div>
          <p>0</p>
        </NuxtLink>
        <NuxtLink to="/todo/deleted"
          ><div>
            <span> <font-awesome-icon icon="fab-regular fa-trash-can" /> </span
            >Deleted
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