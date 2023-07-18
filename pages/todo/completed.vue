<script setup>
import { useTodoStore } from "/stores/todo";
import { storeToRefs } from "pinia";
import { Icon } from "@iconify/vue";
import { useConfirm } from "primevue/useconfirm";

const props = defineProps({
  todos: {
    type: Array,
    required: true,
  },
});
const route = useRoute();
const path = route.path.slice(1);
const { todos } = storeToRefs(useTodoStore());

const deleteVisible = ref(false);
const client = useSupabaseClient();
const confirm = useConfirm();

const deleteAllCompleted = async () => {
  confirm.require({
    message: "Do you want to delete all?",
    header: "Delete Confirmation",
    acceptClass: "p-button-danger",
    accept: async () => {
      try {
        const { data, error } = await client
          .from("todos")
          .delete()
          .match({ category: "Completed" });

        if (error) {
          console.log(error);
          return;
        }
        todos.value = todos.value.filter(
          (todo) => todo.category !== "Completed"
        );
        deleteVisible.value = false;
      } catch (error) {
        console.log(error);
      }
    },
    reject: () => {
      console.log("Rejected.");
      deleteVisible.value = false;
    },
  });
};
</script>

<template>
  <div class="completedContainer">
    <div class="completed_menu_container">
      <div class="completed_menu">
        <div class="completed_left">
          <Icon class="iconSidenav" icon="mingcute:schedule-line" />
          <p>Completed Tasks</p>
        </div>
        <section @click="deleteVisible = true">
          <div
            @click="deleteAllCompleted"
            class="settingsContainer"
            label="Delete"
          >
            <p>Delete All</p>
          </div>
        </section>
      </div>
      <ConfirmDialog v-model:visible="deleteVisible"></ConfirmDialog>
    </div>
    <div class="completedTasks" v-for="(todo, index) in todos" :key="index">
      <div
        class="newTask"
        v-if="todo.category === 'Completed'"
        :class="{ disabled: todo.category === 'Completed' }"
      >
        <div class="completedTaskLeft">
          <input type="checkbox" checked class="myCheckbox" disabled />
          <p>{{ todo.todo }}</p>
        </div>
        <div class="completedTaskRight"><p>Completed</p></div>
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
  text-decoration: line-through;
}

.completedTaskRight p {
  text-decoration: none;
  font-size: 0.85em;
}
.myCheckbox {
  transform: scale(1.3);
  cursor: pointer;
}
.completed_menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 30px auto;
  color: #2569d1;
}

.completed_left {
  font-size: 1.1em;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
}

.completed_menu_container {
  display: flex;
  align-items: center;
}

.settingsContainer p {
  font-size: 0.85em;
  color: #2569d1;
}

.iconSidenav {
  font-size: 21px;
}
.disabled {
  opacity: 0.5;
}

.completed_left {
  display: flex;
  align-items: center;
}

.settingsContainer {
  padding: 10px 20px 10px 20px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  color: rgb(45, 45, 53);
  font-weight: 400;
  background-color: transparent;
  height: 43px;
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
