<script setup>
import HeaderVue from "../components/Header.vue";
import FeauturesVue from "../components/Feautures.vue";
import PricingVue from "../components/Pricing.vue";
import FaqVue from "../components/Faq.vue";

useHead({
  title: "QuickTask",
});
</script>

<template>
  <div class="container">
    <HeaderVue />
    <div class="heroContainer">
      <div class="leftHero">
        <h1>
          <span style="color: #ff2525; font-weight: bold">Unlock</span> your
          Productivity Potential and conquer your tasks with ease.
        </h1>
        <p>
          Welcome to a world of efficient task management, where your goals
          become achievable realities
        </p>
        <NuxtLink class="getStartedContainer" to="/todo"
          ><button class="getStarted">Get Started</button>
        </NuxtLink>
      </div>
      <div class="rightHero">
        <img src="../assets/images/qt_illustration.png" alt="illustration" />
      </div>
    </div>
    <FeauturesVue />
    <PricingVue />
    <FaqVue />
  </div>
</template>


<style lang="scss" scoped>
.container {
  width: 100%;
  max-width: 100%;
}
.heroContainer {
  max-width: 1500px;
  width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  margin-top: 250px;
  gap: 80px;
}

.leftHero h1 {
  font-size: 3.4em;
  width: 100%;
  color: #0b1b50;
}

.leftHero p {
  margin-top: 30px;
  color: #a0a6ba;
  font-size: 0.95em;
  width: 90%;
}

.getStarted {
  background-color: #3850ff;
  width: 150px;
  padding: 15px;
  color: white;
  border: none;
  font-weight: 500;
  font-size: 0.9em;
  border-radius: 5px;
  margin-top: 60px;
}
.rightHero img {
  width: 100%;
}
</style>