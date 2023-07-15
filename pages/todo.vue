<script setup>
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";
import TodoApp from "../components/TodoApp.vue";
import TodoItem from "../components/TodoItem.vue";
import { useConfirm } from "primevue/useconfirm";
import { useTodoStore } from "../stores/todo";
import { storeToRefs } from "pinia";
const client = useSupabaseClient();
const user = useSupabaseUser();

const { todos: items } = storeToRefs(useTodoStore());

definePageMeta({
  layout: "todolayout",
  middleware: "auth",
});

const current = new Date();
// create todo
const todoForm = reactive({
  key: "",
  todo: "",
  // category: "Uncompleted",
  // isCompleted: false,
  // isEditing: false,
  customSettings: false,
  // dueToDate: current,
});

const createTodo = async (todo) => {
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
    items.value = [...items.value, newTodo];
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

// delete Todo
const confirm = useConfirm();
const deleted = ref([]);
const deleteTodo = async (index) => {
  confirm.require({
    message: "Do you want to delete this task?",
    header: "Delete Confirmation",
    acceptClass: "p-button-danger",
    accept: async () => {
      const { data, error } = await client
        .from("todos")
        .delete()
        .eq("key", index);

      items.value.forEach((todo) => {
        if (todo.key === index) {
          deleted.value.push(todo.todo);
          items.value = items.value.filter((item) => item.key !== index);
        }
      });
      console.log(deleted.value);
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
    <NuxtPage :items="data" />
    <div class="todoTasks">
      <TodoApp @create-todo="createTodo" />
      <ul>
        <li>
          <TodoItem
            v-for="todo in items"
            :key="todo.id"
            :index="todo.key"
            :todo="todo"
            :category="category"
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
