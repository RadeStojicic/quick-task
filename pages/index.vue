<script setup>
import HeaderVue from "../components/Header.vue";
import FeauturesVue from "../components/Feautures.vue";
import PricingVue from "../components/Pricing.vue";
import FaqVue from "../components/Faq.vue";
import TrustedVue from "../components/TrustedBy.vue";
import FooterVue from "../components/Footer.vue";

useHead({
  title: "QuickTask",
});
</script>

<template>
  <div class="container">
    <div id="home" class="headerAndHero">
      <img class="shade" src="../assets/images/shade.svg" alt="" />
      <HeaderVue />
      <div class="heroContainer">
        <div
          data-aos="fade-right"
          data-aos-duration="400"
          data-aos-easing="ease-in-out-cubic"
          class="leftHero"
        >
          <h1>
            <span style="color: #eb3967; font-weight: bold">Unlock</span> your
            Productivity and conquer your tasks with ease<span
              style="color: #eb3967; font-weight: bold"
              >.</span
            >
          </h1>
          <p>
            Welcome to a world of efficient task management, where your goals
            become achievable realities
          </p>
          <div class="heroButtons">
            <NuxtLink to="/todo"
              ><button class="getStarted">Get Started</button>
            </NuxtLink>
            <NuxtLink to="/#feautures"
              ><button class="learnMore">Learn More</button>
            </NuxtLink>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="400"
          data-aos-easing="ease-in-out-cubic"
          class="rightHero"
        >
          <img src="../assets/images/qt_illustration.png" alt="illustration" />
        </div>
      </div>
    </div>
    <TrustedVue />
    <FeauturesVue id="feautures" />
    <PricingVue id="pricing" />
    <FaqVue id="faq" />
    <FooterVue />
  </div>
</template>


<style scoped>
.container {
  width: 100%;
  max-width: 100%;
}

.headerAndHero {
  background: linear-gradient(90deg, #0e1836 0%, #0a1227 100%);
}
.heroContainer {
  max-width: 1500px;
  height: 100vh;
  width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 80px;
  position: relative;
  z-index: 1;
}

.shade {
  position: absolute;
  width: 1200px;
  z-index: 0;
  filter: opacity(0.2);
}

.leftHero h1 {
  font-size: 3.4em;
  width: 100%;
  color: #ffffff;
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
  border: 2px #3850ff solid;
  font-weight: 500;
  font-size: 0.9em;
  border-radius: 5px;
  margin-top: 60px;
  cursor: pointer;
}

.learnMore {
  background-color: transparent;
  width: 150px;
  padding: 15px;
  color: white;
  border: 2px white solid;
  font-weight: 500;
  font-size: 0.9em;
  border-radius: 5px;
  margin-top: 60px;
  cursor: pointer;
}
.rightHero img {
  width: 100%;
}

.heroButtons {
  display: flex;
  gap: 20px;
}

@media (max-width: 600px) {
  .shade {
    width: 100%;
  }
  .rightHero {
    display: none;
  }
  .heroContainer {
    width: 90%;
    text-align: center;
    gap: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
  }
  .leftHero {
    width: 100%;
  }
  .leftHero p {
    width: 100%;
  }
  .heroButtons {
    display: flex;
    justify-content: center;
  }
}
</style>