<script setup>
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";
import TodoApp from "../components/TodoApp.vue";
import TodoItem from "../components/TodoItem.vue";
import { useConfirm } from "primevue/useconfirm";

const client = useSupabaseClient();
const user = useSupabaseUser();

const items = ref([]);

const { data, refresh } = useAsyncData("todos", async () => {
  const { data, error } = await client
    .from("todos")
    .select("*")
    .eq("user_id", user.value?.id);

  /*data.forEach((todo) => {
    items.value.push(todo);
  });*/
  
 items.value = [...data];
 return data;
});
definePageMeta({
  layout: "todolayout",
  middleware: "auth",
});

const current = new Date();
// create todo
const todoForm = reactive({
  key: "",
  todo: "",
  category: "Uncompleted",
  // isCompleted: false,
  // isEditing: false,
  customSettings: false,
  // dueToDate: current,
});

const createTodo = async (todo) => {
  //items.value = [];
  todoForm.todo = todo;
  todoForm.key = uuidv4();
  const newTodo = {
      key: todoForm.key,
      todo: todoForm.todo,
      category: todoForm.category,
      customSettings: todoForm.customSettings,
      user_id: user.value?.id,
      // isCompleted: todoForm.isCompleted,
      // isEditing: todoForm.isEditing,
      // dueToDate: todoForm.dueToDate,
    };
  try {
    const { data, error } = await client.from("todos").insert(newTodo);
    if (error) {
      console.log(error.message);
      return;
    }
    items.value=[...items.value, newTodo];
  } catch (err) {
    console.log(err);
  }
};

// let category = ref("");
// const completeState = (index) => {
//   todoList.value[index].isCompleted = !todoList.value[index].isCompleted;
//   if (todoList.value[index].category == "Uncompleted") {
//     todoList.value[index].category = "Completed";
//   } else {
//     todoList.value[index].category = "Uncompleted";
//   }
// };

// show settings
const showSettings = (index) => {
  items.value.forEach((todo) => {
    if (todo.key === index) {
      todo.customSettings = !todo.customSettings;
    } else {
      todo.customSettings = false;
    }
  });
};

// delete Todo

const confirm = useConfirm();
const deleteTodo = async (index) => {
  confirm.require({
    message: "Do you want to delete this task?",
    header: "Delete Confirmation",
    icon: "pi pi-info-circle",
    acceptClass: "p-button-danger",
    accept: async () => {
      const { data, error } = await client
        .from("todos")
        .delete()
        .eq("key", index);

      items.value.forEach((todo) => {
        if (todo.key === index) {
          items.value = items.value.filter((item) => item.key !== index);
        }
      });

      if (error) {
        console.log(error);
      }
    },
    reject: () => {
      console.log("Rejected.");
    },
  });
};
</script>

<template>
  <main>
    <NuxtPage />
    <div class="todoTasks">
      <TodoApp @create-todo="createTodo" @updated-data="refresh" />
      <ul>
        <li>
          <TodoItem
            v-for="todo in items"
            :key="todo.id"
            :index="todo.key"
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
.todoTasks {
  background-color: whitesmoke;
  padding-bottom: 50px;
}

.todoTasks ul li {
  list-style: none;
}
</style>
