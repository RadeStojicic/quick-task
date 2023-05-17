<script setup>
const supabaseAuth = useSupabaseAuthClient();
const isLoggingIn = ref(true);
definePageMeta({
  layout: "formslayout",
});

const form = reactive({
  email: "",
  password: "",
});

const errors = ref("");

// login
const accountLogin = async () => {
  if (!form.email || !form.password) {
    errors.value = "Please fill all the fields.";
    return;
  } else {
    errors.value = "";
  }

  if (!isLoggingIn.value) {
    return accountRegister();
  }

  try {
    const { data, error } = await supabaseAuth.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    });
    if (error) {
      errors.value = error.message;
      return;
    }
    console.log(data);
    errors.value = "";
    if (data) {
      useRouter().push("/todo/all");
    }
  } catch (err) {
    errors.value = "Something went wrong.";
  }
};

// -- login via google
const handleGoogleLogin = () => {
  supabaseAuth.auth.signInWithOAuth({
    provider: "google",
  });
};

// register
const accountRegister = async () => {
  try {
    const { data, error } = await supabaseAuth.auth.signUp({
      email: form.email,
      password: form.password,
    });
    if (error) {
      errors.value = error.message;
      console.log(error);
      return;
    }
    console.log(data);
  } catch (err) {
    errors.value = "Something went wrong.";
  }
};
</script>

<template>
  <main>
    <div>
      <form @submit.prevent="accountLogin()" action="">
        <div class="formContainer">
          <h1 v-if="isLoggingIn" class="titleAcc">Login</h1>
          <h1 v-else class="titleAcc">Sign Up</h1>
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
              <template v-if="isLoggingIn">Log In</template>
              <template v-else>Sign Up</template>
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
      <template v-if="isLoggingIn">
        <div class="formQuestion">
          <p>Don't you have an account?</p>
          <span @click="isLoggingIn = false">Sign Up</span>
        </div>
      </template>
      <template v-else>
        <div class="formQuestion">
          <p>Already have an account?</p>
          <span @click="isLoggingIn = true">Log In</span>
        </div>
      </template>
    </div>
  </main>
</template>


<style  scoped>
main {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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

.formQuestion span {
  text-decoration: none;
  color: #157afe;
  cursor: pointer;
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