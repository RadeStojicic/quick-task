
<script setup>
const supabaseAuth = useSupabaseAuthClient();

definePageMeta({
  layout: "formslayout",
});

// login via google

const handleGoogleLogin = () => {
  supabaseAuth.auth.signInWithOAuth({
    provider: "google",
  });
};

const form = reactive({
  email: "",
  password: "",
});

const errors = ref("");

const handleSignUp = async () => {
  const { data, error } = await supabaseAuth.auth.signUp({
    email: form.email,
    password: form.password,
  });
  if (error) {
    errors.value = error.massage;
    return;
  }
  if (data) {
    console.log(data);
  }
};
</script>

<template>
  <main>
    <div>
      <form @submit.prevent="handleSignUp()" action="">
        <div class="formContainer">
          <h1 class="titleAcc">Sign Up</h1>
          <p class="subtitleAcc">Start managing your time faster and better!</p>
          <div class="inputsButtonContainer">
            <div class="inputs">
              <div>
                <p>Email</p>
                <input
                  v-model="form.email"
                  placeholder="you@example.com"
                  type="email"
                />
              </div>
              <div>
                <p>Password</p>
                <input
                  v-model="form.password"
                  placeholder="At least 8 characters"
                  type="password"
                />
              </div>
            </div>
            <button type="submit" class="createButton">
              Create an Account
            </button>
            <p class="errors">{{ errors }}</p>
          </div>
        </div>
      </form>
      <p class="separator">Or</p>
      <div @click="handleGoogleLogin()" class="google-btn">
        <div class="google-icon-wrapper">
          <img
            class="google-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          />
        </div>
        <p class="btn-text">Continue with Google</p>
      </div>
      <div class="formQuestion">
        <p>Already have an account?</p>
        <NuxtLink to="/auth/login">Log in</NuxtLink>
      </div>
    </div>
  </main>
</template>


<style  scoped>
main {
  display: flex;
  flex-direction: column;
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
  margin: 15px 0px 30px 0px;
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
  cursor: pointer;
}

.errors {
  color: rgb(231, 35, 35);
  text-align: center;
  position: relative;
  top: -30px;
}

.separator {
  display: flex;
  align-items: center;
  text-align: center;
  margin-top: 0px;
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

.google-btn {
  width: 100%;
  height: 50px;
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px rgb(233, 233, 233) solid;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}

.google-icon-wrapper {
  display: flex;
  align-items: center;
}
.google-btn img {
  width: 18px;
  height: 18px;
}

.google-btn p {
  font-size: 0.95em;
}
</style>