<script setup>
import { ref, onMounted } from "vue";
import { useConfirm } from "primevue/useconfirm";

const props = defineProps({
  todo: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
  dueToDate: {
    type: Date,
    required: true,
  },
});

const visible = ref(false);
const settingsRef = ref(null);

// edit
const editValue = ref("");

const checkForError = () => {
  if (editValue.value != "") {
    return true;
  } else {
    return false;
  }
};

const handleClickOutside = (event) => {
  if (settingsRef.value && !settingsRef.value == event.target) {
    visible.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

const visibleDialog = ref(false);
</script>

<template>
  <div>
    <div>
      <div class="tasksContainer">
        <div class="newTask">
          <div class="taskLeft">
            <input
              type="checkbox"
              class="myCheckbox"
              :value="todo.isCompleted"
              @input="$emit('complete-state', index)"
              :disabled="todo.category == 'Completed'"
            />

            <p :class="{ checked: todo.isCompleted }">{{ todo.todo }}</p>
          </div>
          <div class="taskRight">
            <font-awesome-icon
              class="seeMoreTodo"
              icon="fa-solid
            fa-ellipsis-vertical"
              @click="$emit('show-settings', index)"
              v-if="todo.category !== 'Completed'"
            />

            <div v-if="todo.customSettings == true" class="settings">
              <section
                @click="
                  visible = true;
                  settingsRef = true;
                "
              >
                <div class="settingsContainer">
                  <div class="settingsSubContainer">
                    <font-awesome-icon icon="fa-solid fa-file-pen" />
                    <div>Edit</div>
                  </div>
                </div>
              </section>
              <section @click="visibleDialog = true">
                <div class="settingsContainer">
                  <div class="settingsSubContainer">
                    <font-awesome-icon icon="fa-solid fa-circle-info" />
                    <div>Info</div>
                  </div>
                </div>
                <Dialog
                  v-model:visible="visibleDialog"
                  modal
                  header="Additional information"
                  :style="{ width: '50vw' }"
                  class="infoDialog"
                >
                  <p>Name: {{ todo.todo }}</p>
                  <p>Created: {{ todo.time }}</p>
                  <p
                    :class="{
                      categoryDone: todo.category == 'Completed',
                      categoryUndone: todo.category == 'Uncompleted',
                    }"
                  >
                    Status: {{ todo.category }}
                  </p>
                </Dialog>
              </section>
              <section>
                <div
                  @click="$emit('delete-todo', index)"
                  class="settingsContainer"
                  label="Delete"
                >
                  <div class="settingsSubContainer">
                    <font-awesome-icon icon="fa-solid fa-box-archive" />
                    <div>Archive</div>
                  </div>
                </div>
                <ConfirmDialog></ConfirmDialog>
              </section>
            </div>
            <Dialog
              v-model:visible="visible"
              modal
              header="Edit your task"
              :style="{ width: '40vw' }"
            >
              <div class="dialogContent">
                <input
                  v-model="editValue"
                  @keyup.enter="
                    checkForError()
                      ? (todo.todo = editValue) && (visible = false)
                      : (visible = false)
                  "
                  class="editInput"
                  type="text"
                  placeholder="Type something..."
                />
                <button
                  @click="
                    checkForError()
                      ? (todo.todo = editValue) && (visible = false)
                      : (visible = false)
                  "
                  type="submit"
                >
                  Confirm
                </button>
              </div>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tasksContainer {
  width: 95%;
  margin: 12px auto;
  display: flex;
  justify-content: center;
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

.taskLeft {
  display: flex;
  align-items: center;
  gap: 15px;
  user-select: none;
}

.fa-ellipsis {
  font-size: 1.5em;
  color: rgb(41, 41, 41);
}

.taskRight {
  display: flex;
  align-items: center;
  gap: 30px;
  margin-right: 30px;
}

.taskRight p {
  color: gray;
}

.checked {
  text-decoration: line-through;
}

.categoryUndone {
  background-color: rgba(255, 171, 203, 0.524);
  user-select: none;
}

.categoryDone {
  background-color: rgba(155, 197, 255, 0.524);
  user-select: none;
}

.myCheckbox {
  transform: scale(1.3);
  cursor: pointer;
}

.seeMoreTodo {
  color: rgb(131, 131, 131);
  padding: 10px;
  display: block;
  position: absolute;
  right: 20px;
}

.settings {
  position: absolute;
  right: 20px;
  top: 40px;
  width: 160px;
  z-index: 1;
  background-color: white;
  box-shadow: 0px 0px 10px 5px #f1f1f13e;
  border: 1px rgb(220, 220, 220) solid;
  border-radius: 10px;
}

.settings section div {
  text-decoration: none;
  color: rgb(31, 31, 31);
  padding: 6px 6px 6px 10px;
  width: 100%;
  margin: auto;
}

.settings section {
  text-decoration: none;
  font-size: 0.95em;
}
.fa-box-archive {
  color: rgb(59, 59, 59);
  font-size: 0.95em;
}
.fa-file-pen {
  color: rgb(59, 59, 59);
  font-size: 0.95em;
}
.fa-circle-info {
  color: rgb(59, 59, 59);
  font-size: 0.95em;
}
.settingsContainer {
  width: 100%;
}
.settingsContainer:hover {
  width: 100%;
  background-color: rgb(237, 237, 237);
}

.settingsSubContainer {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 80%;
  margin: auto;
}

.dialogContent {
  display: flex;
  gap: 10px;
}
.dialogContent button {
  padding: 10px;
  border: none;
  background-color: #335af3;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  width: 20%;
}

.dialogContent button:hover {
  background-color: #375beb;
}
.editInput {
  padding: 15px;
  width: 100%;
  border-radius: 10px;
  background-color: whitesmoke;
  border: none;
  outline: none;
  font-size: 0.95em;
}

.infoDialog p {
  padding: 12px;
  border-bottom: 1px rgba(128, 128, 128, 0.217) solid;
}
</style>
