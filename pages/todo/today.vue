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
const { todos } = storeToRefs(useTodoStore());
const client = useSupabaseClient();

const updateTable = async (todo) => {
  const { data, error } = await client
    .from("todos")
    .update({ category: "Completed" })
    .eq("id", todo.id);
  if (error) {
    console.log(error);
  } else {
    todo.category = "Completed";
  }
};
</script>

<template>
  <div>
    <div class="todayContainer">
      <div class="today_menu_container">
        <div class="today_menu">
          <Icon class="iconSidenav" icon="mdi:table" />
          <p>Today's Tasks</p>
        </div>
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
              @click="() => updateTable(todo)"
            />
            <p>{{ todo.todo }}</p>
          </div>
        </div>
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
  align-items: center;
  width: 100%;
  margin: 30px auto;
  gap: 10px;
  font-weight: 500;
  color: #2569d1;
  font-size: 1.1em;
}

.today_menu_container {
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
  font-size: 20px;
}
.disabled {
  opacity: 0.5;
  text-decoration: line-through;
}

@media screen and (max-width: 1400px) {
  .newTask {
    padding: 12px;
  }
  .myCheckbox {
    transform: scale(1.15);
    cursor: pointer;
  }
  .todayTaskLeft p {
    font-size: 0.9em;
  }
}
</style>
