<script setup>
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";
import TodoApp from "../components/TodoApp.vue";
import TodoItem from "../components/TodoItem.vue";
import Sidenav from "../components/Sidenav.vue";
import { useConfirm } from "primevue/useconfirm";

// create todo
const todoList = ref([]);
const createTodo = (todo) => {
  const current = new Date();
  const time =
    ("0" + current.getHours()).toString().slice(-2) +
    ":" +
    ("0" + current.getMinutes()).toString().slice(-2) +
    ":" +
    ("0" + +current.getSeconds()).toString().slice(-2);

  todoList.value.push({
    id: uuidv4(),
    todo,
    time,
    isCompleted: false,
    category: "Uncompleted",
    isEditing: false,
    customSettings: false,
    dueToDate: current,
  });
};

let category = ref("");
const completeState = (index) => {
  todoList.value[index].isCompleted = !todoList.value[index].isCompleted;
  if (todoList.value[index].category == "Uncompleted") {
    todoList.value[index].category = "Completed";
  } else {
    todoList.value[index].category = "Uncompleted";
  }
};

// show settings
const showSettings = (index) => {
  todoList.value.forEach((item, i) => {
    if (i === index) {
      item.customSettings = !item.customSettings;
    } else {
      item.customSettings = false;
    }
  });
};

// delete todo
const confirm = useConfirm();
const deleteTodo = (index) => {
  confirm.require({
    message: "Do you want to delete this task?",
    header: "Delete Confirmation",
    icon: "pi pi-info-circle",
    acceptClass: "p-button-danger",
    accept: () => {
      todoList.value = todoList.value.filter(
        (todo) => todo.id !== todoList.value[index].id
      );
    },
    reject: () => {
      console.log("Rejected.");
    },
  });
};
</script>

<template>
  <main>
    <div class="todoTasks">
      <TodoApp :numberOfTasks="arrayLength" @create-todo="createTodo" />
      <ul>
        <li>
          <TodoItem
            v-for="(todo, index) in todoList"
            :key="index"
            :index="index"
            :todo="todo"
            :category="category"
            @complete-state="completeState"
            @show-settings="showSettings"
            @delete-todo="deleteTodo"
          />
        </li>
      </ul>
    </div>
  </main>
</template>

<style scoped>
main {
  background-color: whitesmoke;
  height: 100vh;
  margin-top: 50px;
}

.todoTasks {
  background-color: whitesmoke;
  padding-bottom: 50px;
}

.todoTasks ul li {
  list-style: none;
}
</style>
