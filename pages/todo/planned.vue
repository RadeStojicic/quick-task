<script setup>
import { useTodoStore } from "/stores/todo";
import { storeToRefs } from "pinia";
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
  <div class="plannedContainer">
    <div class="planned_menu">
      <p>{{ path }}</p>
      <h1>Planned Tasks</h1>
    </div>
    <div class="plannedTasks" v-for="(todo, index) in todos" :key="index">
      <div
        class="newTask"
        v-if="todo.category === 'Planned'"
        :class="{ disabled: todo.category === 'Completed' }"
      >
        <div class="plannedTaskLeft">
          <input
            type="checkbox"
            class="myCheckbox"
            :checked="todo.category === 'Completed'"
            :disabled="todo.category === 'Completed'"
            @click="handleCheckboxClick(todo)"
          />
          <p>{{ todo.todo }}</p>
        </div>
        <p class="dueToDate">{{ todo.dueToDate.split("T")[0] }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.plannedContainer {
  width: 95%;
  margin: 12px auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
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
}

.newTask:hover {
  cursor: pointer;
  background-color: rgb(253, 253, 253);
}
.plannedTasks {
  display: flex;
  align-items: center;
}

.plannedTaskLeft {
  display: flex;
  align-items: center;
  gap: 15px;
}
.myCheckbox {
  transform: scale(1.3);
  cursor: pointer;
}
.planned_menu {
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  width: 100%;
  margin: 30px auto;
}
.pathText {
  color: rgb(114, 114, 128);
  font-size: 0.9em;
  font-weight: 600;
  text-decoration: underline;
}

.disabled {
  opacity: 0.5;
}

.dueToDate {
  color: rgb(114, 114, 128);
  font-size: 0.9em;
}
</style>
