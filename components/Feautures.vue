
<script setup>
</script>
<template>
  <div class="container">
    <div class="feautures_container">
      <div class="feautures_content">
        <div class="first_content">
          <div class="first_left">
            <h1>What is QuickTask and how to use it</h1>
            <p>
              QuickTask is a task management app designed to help users organize
              and keep track of their tasks and to-do lists. It provides a
              convenient way to manage your tasks efficiently and improve
              productivity. <br /><br />Start by creating tasks based on your
              needs. Enter a title for the task, assign a due date or deadline,
              and add any necessary details or notes.
            </p>
          </div>
          <div class="first_right">
            <img
              class="pattern_1"
              src="../assets/images/pattern_content_1.png"
              alt=""
            />
            <img
              class="image_1"
              src="../assets/images/image_content_1.png"
              alt=""
            />
          </div>
        </div>
        <div class="second_content">
          <div class="second_left">
            <img
              class="pattern_2"
              src="../assets/images/pattern_content_2.png"
              alt=""
            />
            <img
              class="image_2"
              src="../assets/images/image_content_2.png"
              alt=""
            />
          </div>
          <div class="second_right">
            <h1>
              Get Started for <span style="color: #3850ff">Free</span> Start
              your journey right now
            </h1>
            <p>
              Getting started with the free online version of QuickTask is a
              breeze. Simply
              <NuxtLink
                style="text-decoration: none; color: #677cf0"
                to="/auth"
              >
                sign up</NuxtLink
              >
              for an account. Once you're logged in, you can begin adding tasks,
              setting due dates, and providing additional details. <br /><br />
              The intuitive and user-friendly interface ensures a seamless
              experience, allowing you to focus on your tasks rather than
              navigating complex menus.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
}

.feautures_container {
  width: 95%;
  border-radius: 10px;
  margin: auto;
  background-color: #f9f9fc;
  height: auto;
  padding-bottom: 200px;
}

.feautures_content {
  max-width: 1500px;
  width: 100%;
  margin: auto;
  padding-top: 150px;
  display: flex;
  flex-direction: column;
  gap: 300px;
}

.first_content {
  display: flex;
  position: relative;
  gap: 100px;
}

.first_left {
  flex: 1/2;
  width: 100%;
  text-align: left;
}

.first_left h1 {
  color: #05132e;
  font-size: 70px;
  font-weight: 600;
}

.first_left p {
  color: #525670;
  margin-top: 60px;
  width: 80%;
}
.first_right {
  flex: 1/2;
  width: 100%;
}

.pattern_1 {
  position: absolute;
  right: 0;
  width: 600px;
}

.image_1 {
  position: absolute;
  width: 600px;
  top: 100px;
  right: 100px;
  border: 3px #e7eaf3 solid;
  border-radius: 10px;
}

.second_content {
  display: flex;
  position: relative;
  gap: 100px;
}

.second_right {
  flex: 1/2;
  width: 100%;
}

.second_right h1 {
  color: #05132e;
  font-size: 70px;
  font-weight: 600;
}

.second_right p {
  color: #525670;
  margin-top: 60px;
  width: 80%;
}
.second_left {
  flex: 1/2;
  width: 100%;
}

.pattern_2 {
  position: absolute;
  left: 0;
  width: 650px;
}

.image_2 {
  position: absolute;
  width: 600px;
  bottom: 80px;
  left: 100px;
  border: 3px #e7eaf3 solid;
  border-radius: 10px;
}
</style>