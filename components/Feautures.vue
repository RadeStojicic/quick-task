
<script setup>
</script>
<template>
  <div class="container">
    <div class="feautures_container">
      <div class="feautures_content">
        <div
          data-aos="fade-right"
          data-aos-duration="700"
          data-aos-easing="ease-in-out-cubic"
          class="first_content"
        >
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
        <div
          data-aos="fade-right"
          data-aos-duration="700"
          data-aos-easing="ease-in-out-cubic"
          class="second_content"
        >
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
  width: 600px;
}

.image_2 {
  position: absolute;
  width: 600px;
  bottom: 120px;
  left: 100px;
  border: 3px #e7eaf3 solid;
  border-radius: 10px;
}
@media screen and (max-width: 1600px) {
  .feautures_content {
    width: 95%;
  }
  .pattern_2 {
    width: 500px;
    top: 50%;
    transform: translateY(-50%);
  }

  .image_2 {
    width: 500px;
    left: 50px;
    top: 50%;
    transform: translateY(-50%);
  }
  .pattern_1 {
    position: absolute;
    right: 0;
    width: 500px;
    top: 50%;
    transform: translateY(-50%);
  }

  .image_1 {
    position: absolute;
    width: 500px;
    right: 50px;
    border: 3px #e7eaf3 solid;
    border-radius: 10px;
    top: 55%;
    transform: translateY(-50%);
  }
  .feautures_content {
    gap: 200px;
  }
  .second_right h1 {
    color: #05132e;
    font-size: 52px;
    font-weight: 600;
  }
  .second_right p {
    color: #525670;
    margin-top: 60px;
    width: 100%;
  }
  .first_left h1 {
    color: #05132e;
    font-size: 52px;
    font-weight: 600;
  }

  .first_left p {
    color: #525670;
    margin-top: 60px;
    width: 80%;
  }
}
@media screen and (max-width: 1280px) {
  .first_content {
    display: flex;
    flex-direction: column;
    justify-items: center;
  }
  .image_1 {
    position: relative;
    width: 60%;
    right: 0;
    top: 0;
    transform: translateY(0);
  }
  .pattern_1 {
    display: none;
  }
  .first_left {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .first_left h1 {
    width: 90%;
    margin: auto;
  }
  .first_right {
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  .second_content {
    display: flex;
    flex-direction: column;
    justify-items: center;
  }
  .image_2 {
    position: relative;
    width: 60%;
    right: 0;
    top: 0;
    left: 0;
    transform: translateY(0);
  }
  .pattern_2 {
    display: none;
  }
  .second_left {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    order: 2;
  }
  .second_right {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    order: 1;
  }
  .second_right p {
    width: 80%;
  }
  .second_right h1 {
    width: 90%;
    margin: auto;
  }
}
@media screen and (max-width: 1080px) {
  .feautures_content {
    gap: 150px;
  }
  .image_1 {
    width: 75%;
  }
  .image_2 {
    width: 75%;
  }
}
@media screen and (max-width: 767px) {
  .pattern_1 {
    display: none;
  }
  .pattern_2 {
    display: none;
  }
  .feautures_container {
    width: 95%;
    margin: 50px auto;
    padding-top: 0px;
    display: flex;
    flex-direction: column;
    gap: 300px;
    height: auto;
    padding-bottom: 620px;
  }
  .feautures_content {
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
    padding-top: 100px;
    gap: 300px;
  }
  .pattern_1 {
    position: absolute;
    right: 0;
    width: 100%;
  }

  .image_1 {
    position: absolute;
    width: 100%;
    top: 40px;
    right: 0px;
    border: 3px #e7eaf3 solid;
    border-radius: 10px;
  }

  .first_content {
    display: flex;
    position: relative;
    flex-direction: column;
    gap: 100px;
  }

  .first_left {
    flex: 1/2;
    width: 100%;
    text-align: left;
  }

  .first_left h1 {
    color: #05132e;
    font-size: 38px;
    font-weight: 600;
    width: 100%;
  }

  .first_left p {
    color: #525670;
    margin-top: 30px;
    width: 100%;
    font-size: 16px;
  }
  .first_right {
    flex: 1/2;
    width: 100%;
    position: absolute;
    bottom: -50px;
  }
  .second_content {
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 100px;
    margin-top: 380px;
  }

  .second_right {
    flex: 2;
    width: 100%;
    text-align: left;
  }

  .second_right h1 {
    color: #05132e;
    font-size: 38px;
    font-weight: 600;
    width: 100%;
  }

  .second_right p {
    color: #525670;
    margin-top: 30px;
    width: 100%;
  }
  .second_left {
    flex: 1;
    width: 100%;
    position: absolute;
    bottom: -50px;
  }

  .pattern_2 {
    position: absolute;
    left: 0;
    bottom: -290px;
    width: 100%;
  }

  .image_2 {
    position: absolute;
    width: 100%;
    top: 30px;
    left: 0px;
    border: 3px #e7eaf3 solid;
    border-radius: 10px;
  }
}
@media screen and (max-width: 620px) {
  .feautures_container {
    padding-bottom: 540px;
  }
  .second_content {
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 100px;
    margin-top: 200px;
  }
  .feautures_content {
    gap: 350px;
  }
}
@media screen and (max-width: 400px) {
  .second_content {
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 100px;
    margin-top: 130px;
  }
  .feautures_content {
    gap: 300px;
  }
}
</style>