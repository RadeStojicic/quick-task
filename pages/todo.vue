<script setup>
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";
import TodoApp from "../components/TodoApp.vue";
import TodoItem from "../components/TodoItem.vue";
import Dialog from "primevue/dialog";
import { useConfirm } from "primevue/useconfirm";
import { useTodoStore } from "../stores/todo";
import { storeToRefs } from "pinia";

const client = useSupabaseClient();
const user = useSupabaseUser();

const { todos: items } = storeToRefs(useTodoStore());
const visible = ref(false);
const route = useRoute();

definePageMeta({
  layout: "todolayout",
  middleware: "auth",
});

// date

const minDate = ref(new Date());
minDate.value.setDate(minDate.value.getDate() + 1);

const date = ref(minDate.value);

// create todo
const todoForm = reactive({
  key: "",
  todo: "",
  category: "Today",
  dueToDate: date || "",
});
const createTodo = async (todo) => {
  todoForm.todo = todo;
  todoForm.key = uuidv4();
  const newTodo = {
    key: todoForm.key,
    todo: todoForm.todo,
    category: todoForm.category,
    dueToDate: todoForm.dueToDate,
    user_id: user.value?.id,
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
  <main class="mainParent">
    <NuxtPage />
    <div v-if="route.name == 'todo'" class="todoTasks">
      <div class="todo_menu">
        <TodoApp @create-todo="createTodo" />

        <div class="todosMenu">
          <div class="chooseCategory">
            <button @click="visible = true">{{ todoForm.category }}</button>
            <Dialog v-model:visible="visible" modal header="Categories">
              <div class="categoriesContainer">
                <button
                  class="categoryBtn"
                  @click="(visible = false), (todoForm.category = 'Today')"
                >
                  Today
                </button>
                <button
                  class="categoryBtn"
                  @click="(visible = false), (todoForm.category = 'Important')"
                >
                  Important
                </button>
                <button
                  class="categoryBtn"
                  @click="(visible = false), (todoForm.category = 'Planned')"
                >
                  Planned
                </button>
              </div>
            </Dialog>
          </div>
          <div v-if="todoForm.category == 'Planned'" class="calendarContainer">
            <Calendar
              :minDate="minDate"
              class="calendarCard"
              :dueToDate="date"
              v-model="date"
              dateFormat="dd/mm/yy"
              showIcon
            />
          </div>
        </div>
      </div>

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
.mainParent {
  background-color: whitesmoke;
  padding-bottom: 50px;
}

.todoTasks ul li {
  list-style: none;
}

.chooseCategory {
  display: flex;
  align-items: center;
  border-radius: 10px;
  border: none;
  cursor: pointer;
}

.chooseCategory button {
  padding: 10px 20px 10px 20px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background-color: rgb(227, 240, 255);
  font-weight: 400;
  margin-bottom: 30px;
  height: 43px;
}

.todo_menu {
  display: flex;
  flex-direction: column;
  margin: auto;
}

.categoriesContainer {
  display: flex;
  gap: 5px;
}

.categoryBtn {
  border: none;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
}
.categoryBtn:hover {
  background-color: rgb(235, 235, 238);
}

.todosMenu {
  display: flex;
  align-items: flex-start;
  width: 95%;
  margin: auto;
  gap: 20px;
}

.date {
  color: white;
}

.calendarContainer {
  width: 100%;
}
.calendarCard {
  width: 40%;
}

.disabled {
  opacity: 0.5;
}

@media screen and (max-width: 768px) {
  .calendarCard {
    width: 100%;
  }
}
</style>
