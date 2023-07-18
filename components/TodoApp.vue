<script setup>
import { reactive, ref } from "vue";
import { Icon } from "@iconify/vue";

const emit = defineEmits(["create-todo"]);
const taskState = reactive({
  todo: "",
  invalid: null,
  errorMessage: "",
});

const createTask = () => {
  taskState.invalid = null;
  if (taskState.todo !== "") {
    emit("create-todo", taskState.todo);
    taskState.todo = "";
    return;
  }
  taskState.invalid = true;
  taskState.errorMessage = "Todo value cannot be empty.";
};
</script>
<template>
  <div class="container">
    <div class="todoContainer">
      <div class="addTask">
        <input
          :class="{ showError: taskState.invalid }"
          v-model="taskState.todo"
          placeholder="Type something..."
          type="text"
          maxlength="60"
          @keyup.enter="createTask"
        />

        <button class="createTask" @click="createTask">
          <Icon class="addIcon" icon="ph:plus-bold" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.todoContainer {
  width: 95%;
  margin: 50px auto 10px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
}

.addTask {
  width: 100%;
  display: flex;
  gap: 10px;
}

.dueTo {
  margin-bottom: 10px;
  color: rgb(70, 70, 70);
}

.addTask input {
  width: 100%;
  padding: 15px;
  border-radius: 10px;
  border: none;
  outline: none;
  background-color: rgb(255, 255, 255);
  font-size: 1em;
}

.addTask button {
  padding: 0px 20px 0px 20px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background-color: rgb(255, 255, 255);
}

.addIcon {
  font-size: 1.6em;
  color: rgb(67, 67, 67);
}
.showError {
  box-shadow: 0px 1px 0px 0px #ff0022;
  transition: 0.3s;
}
</style>
