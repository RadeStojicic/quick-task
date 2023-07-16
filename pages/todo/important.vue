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
</script>

<template>
  <div class="importantContainer">
    <div class="important_menu">
      <p class="pathText">{{ path }}</p>
      <button class="deleteAll">Delete All</button>
    </div>
    <div v-for="(todo, index) in todos" :key="index">
      <p class="newTask" v-if="todo.category === 'Important'">
        {{ todo.todo }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.importantContainer {
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
.important_menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 30px auto;
}
.pathText {
  color: rgb(114, 114, 128);
  font-size: 0.9em;
  font-weight: 600;
  text-decoration: underline;
}

.deleteAll {
  color: rgb(255, 255, 255);
  font-size: 0.9em;
  cursor: pointer;
  border: none;
  border-radius: 50px;
  padding: 8px;
  background-color: red;
  width: 100px;
}
</style>
