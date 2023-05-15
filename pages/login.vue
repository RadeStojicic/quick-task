<script setup>
const accountState = ref(false);

definePageMeta({
  layout: "formslayout",
});
</script>
<template>
  <main>
    <form action="">
      <div class="formContainer">
        <h1 class="titleAcc">Login</h1>
        <p class="subtitleAcc">Start managing your time faster and better!</p>
        <div class="inputsButtonContainer">
          <div class="inputs">
            <div>
              <p>Email</p>
              <input placeholder="you@example.com" type="email" />
            </div>
            <div>
              <p>Password</p>
              <input placeholder="At least 8 characters" type="password" />
            </div>
          </div>
          <button class="createButton">Login</button>
        </div>
        <p class="separator">Or</p>
        <div class="formQuestion">
          <p>Don't you have an account?</p>
          <NuxtLink to="/signup">Sign Up</NuxtLink>
        </div>
      </div>
    </form>
  </main>
</template>


<style  scoped>
main {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1.5;
}
.inputsButtonContainer {
  display: flex;
  flex-direction: column;
  gap: 50px;
}
.inputs {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.inputs div p {
  margin-bottom: 10px;
}

.titleAcc {
  font-size: 2.2em;
  font-weight: bold;
  color: rgb(14, 16, 22);
}

.subtitleAcc {
  font-size: 1em;
  color: gray;
  margin: 10px 0px 50px 0px;
  font-weight: 400;
}

.formContainer {
  width: 400px;
}

.inputs input {
  width: 100%;
  padding: 15px;
  border-radius: 10px;
  border: none;
  outline: none;
  background-color: whitesmoke;
  font-size: 1em;
}

.inputs input::placeholder {
  color: rgb(170, 170, 170);
}

.createButton {
  padding: 15px;
  background-color: #157afe;
  border-radius: 10px;
  border: none;
  color: white;
  font-size: 1em;
}

.separator {
  display: flex;
  align-items: center;
  text-align: center;
  margin-top: 30px;
  color: rgba(45, 45, 45, 0.583);
}

.separator::before,
.separator::after {
  content: "";
  flex: 1;
  border-bottom: 1px solid rgb(221, 221, 221);
}

.separator:not(:empty)::before {
  margin-right: 0.25em;
}

.separator:not(:empty)::after {
  margin-left: 0.25em;
}

.formQuestion {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}

.formQuestion a {
  text-decoration: none;
  color: #157afe;
}
</style>