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
const deleteVisible = ref(false);

// edit
const editValue = ref("");

const checkForError = () => {
  if (editValue.value != "") {
    return true;
  } else {
    return false;
  }
};
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
            <div class="settings">
              <section @click="visible = true">
                <div class="settingsContainer">
                  <div class="settingsSubContainer">
                    <svg
                      width="26"
                      height="23"
                      viewBox="0 0 26 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 2.875C0 1.28926 1.29549 0 2.88889 0H10.1111V5.75C10.1111 6.54512 10.7566 7.1875 11.5556 7.1875H17.3333V12.8342L13.4153 16.7334C12.9503 17.1961 12.6253 17.7711 12.4674 18.4045L11.6233 21.7691C11.5194 22.1824 11.542 22.6137 11.6819 23.0045H2.88889C1.29549 23.0045 0 21.7152 0 20.1295V2.875ZM17.3333 5.75H11.5556V0L17.3333 5.75ZM24.8174 10.5881L25.4674 11.235C26.1715 11.9357 26.1715 13.0723 25.4674 13.7775L24.1403 15.0982L20.9354 11.9088L22.2625 10.5881C22.9667 9.8873 24.1087 9.8873 24.8174 10.5881ZM14.0788 18.7324L19.9108 12.9285L23.1156 16.118L17.2837 21.9174C17.0986 22.1016 16.8684 22.2318 16.6111 22.2947L13.8983 22.9686C13.65 23.0314 13.3927 22.9596 13.2122 22.7799C13.0316 22.6002 12.9594 22.3441 13.0226 22.0971L13.6997 19.3973C13.7628 19.1457 13.8937 18.9121 14.0788 18.7279V18.7324Z"
                        fill="#0F225F"
                      />
                    </svg>
                  </div>
                </div>
              </section>

              <section @click="deleteVisible = true">
                <div
                  @click="$emit('delete-todo', index)"
                  class="settingsContainer"
                  label="Delete"
                >
                  <div class="settingsSubContainer">
                    <svg
                      width="20"
                      height="23"
                      viewBox="0 0 20 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.03571 0.795117C6.27679 0.305469 6.77232 0 7.3125 0H12.6875C13.2277 0 13.7232 0.305469 13.9643 0.795117L14.2857 1.4375H18.5714C19.3616 1.4375 20 2.07988 20 2.875C20 3.67012 19.3616 4.3125 18.5714 4.3125H1.42857C0.638393 4.3125 0 3.67012 0 2.875C0 2.07988 0.638393 1.4375 1.42857 1.4375H5.71429L6.03571 0.795117ZM1.42857 5.75H18.5714V20.125C18.5714 21.7107 17.2902 23 15.7143 23H4.28571C2.70982 23 1.42857 21.7107 1.42857 20.125V5.75ZM5.71429 8.625C5.32143 8.625 5 8.94844 5 9.34375V19.4062C5 19.8016 5.32143 20.125 5.71429 20.125C6.10714 20.125 6.42857 19.8016 6.42857 19.4062V9.34375C6.42857 8.94844 6.10714 8.625 5.71429 8.625ZM10 8.625C9.60714 8.625 9.28571 8.94844 9.28571 9.34375V19.4062C9.28571 19.8016 9.60714 20.125 10 20.125C10.3929 20.125 10.7143 19.8016 10.7143 19.4062V9.34375C10.7143 8.94844 10.3929 8.625 10 8.625ZM14.2857 8.625C13.8929 8.625 13.5714 8.94844 13.5714 9.34375V19.4062C13.5714 19.8016 13.8929 20.125 14.2857 20.125C14.6786 20.125 15 19.8016 15 19.4062V9.34375C15 8.94844 14.6786 8.625 14.2857 8.625Z"
                        fill="#0F225F"
                      />
                    </svg>
                  </div>
                </div>
              </section>
            </div>
            <ConfirmDialog v-model:visible="deleteVisible"></ConfirmDialog>

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

.taskRight {
  display: flex;
  align-items: center;
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

.settings {
  z-index: 0;
  background-color: white;
  display: flex;
  gap: 5px;
}

.settings section div {
  text-decoration: none;
  color: rgb(31, 31, 31);
}

.settings section {
  text-decoration: none;
}

.settings i {
  font-size: 1.2em;
  color: #122565;
}

.settingsContainer {
  width: 100%;
  padding: 2px;
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
