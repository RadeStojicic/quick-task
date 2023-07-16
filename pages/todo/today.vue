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
  <div class="todayContainer">
    <div class="today_menu">
      <h1>Today's Tasks</h1>
    </div>
    <div class="todayTasks" v-for="(todo, index) in todos" :key="index">
      <div
        class="newTask"
        v-if="todo.category === 'Today'"
        :class="{ disabled: todo.category === 'Completed' }"
      >
        <div class="todayTaskLeft">
          <input
            type="checkbox"
            class="myCheckbox"
            :checked="todo.category === 'Completed'"
            :disabled="todo.category === 'Completed'"
            @click="handleCheckboxClick(todo)"
          />
          <p>{{ todo.todo }}</p>
        </div>
        <p>{{ todo.created_at.split("T")[0] }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.todayContainer {
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
.todayTasks {
  display: flex;
  align-items: center;
}

.todayTaskLeft {
  display: flex;
  align-items: center;
  gap: 15px;
}
.myCheckbox {
  transform: scale(1.3);
  cursor: pointer;
}
.today_menu {
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

.disabled {
  opacity: 0.5;
}
</style>
