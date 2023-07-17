<script setup>
import { useTodoStore } from "/stores/todo";
import { storeToRefs } from "pinia";
import { Icon } from "@iconify/vue";

const props = defineProps({
  todos: {
    type: Array,
    required: true,
  },
});
const route = useRoute();
const path = route.path.slice(1);
const { todos } = storeToRefs(useTodoStore());

const handleCheckboxClick = (todo) => {
  if (todo.category !== "Completed") {
    todo.category = "Completed";
  } else {
    todo.category = "Today";
  }
};
</script>

<template>
  <div class="completedContainer">
    <div class="completed_menu_container">
      <div class="completed_menu">
        <Icon class="iconSidenav" icon="mingcute:schedule-line" />
        <p>Completed Tasks</p>
      </div>
    </div>
    <div class="completedTasks" v-for="(todo, index) in todos" :key="index">
      <div
        class="newTask"
        v-if="todo.category === 'Completed'"
        :class="{ disabled: todo.category === 'Completed' }"
      >
        <div class="completedTaskLeft">
          <input type="checkbox" class="myCheckbox" />
          <p>{{ todo.todo }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.completedContainer {
  width: 95%;
  margin: 12px auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.newTask {
  background-color: rgb(255, 255, 255);
  width: 100%;
  padding: 15px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-top: 12px;
}

.newTask:hover {
  cursor: pointer;
  background-color: rgb(253, 253, 253);
}
.completedTasks {
  display: flex;
  align-items: center;
}

.completedTaskLeft {
  display: flex;
  align-items: center;
  gap: 15px;
}
.myCheckbox {
  transform: scale(1.3);
  cursor: pointer;
}
.completed_menu {
  display: flex;
  align-items: center;
  width: 100%;
  margin: 30px auto;
  gap: 10px;
  font-weight: 500;
  color: #2569d1;
  font-size: 1.1em;
}

.completed_menu_container {
  display: flex;
  align-items: center;
}

.deleteAllToday {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  color: #2569d1;
  font-size: 0.9em;
}

.iconSidenav {
  font-size: 21px;
}
.disabled {
  opacity: 0.5;
}

@media screen and (max-width: 1400px) {
  .newTask {
    padding: 12px;
  }
  .myCheckbox {
    transform: scale(1.15);
    cursor: pointer;
  }
  .completedTaskLeft p {
    font-size: 0.9em;
  }
}
</style>
