<script setup>
import HeaderVue from "../components/Header.vue";
import FeauturesVue from "../components/Feautures.vue";
import PricingVue from "../components/Pricing.vue";
import FaqVue from "../components/Faq.vue";
import TrustedVue from "../components/TrustedBy.vue";
import FooterVue from "../components/Footer.vue";
</script>

<template>
  <div class="container">
    <div id="home" class="headerAndHero">
      <nuxt-img
        sizes="xs:200px md:500px lg:1200px"
        class="shade"
        src="/images/shade.svg"
        alt=""
      />
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
          <nuxt-img
            quality="100"
            format="webp"
            sizes="xs:200px md:500px lg:550px"
            src="/images/qt_illustration.png"
          />
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
  overflow-y: hidden;
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
  z-index: 0;
  filter: opacity(0.2);
  width: 1200px;
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

.rightHero img {
  max-width: 100%;
  width: 100%;
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

.heroButtons {
  display: flex;
  gap: 20px;
}
@media screen and (max-width: 1600px) {
  .heroContainer {
    width: 90%;
    height: 700px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 0;
  }

  .leftHero h1 {
    font-size: 3em;
    width: 100%;
    color: #ffffff;
  }

  .leftHero p {
    margin-top: 30px;
    color: #a0a6ba;
    font-size: 0.95em;
    width: 100%;
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

  .rightHero {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .rightHero img {
    max-width: 100%;
    width: 100%;
  }

  .heroButtons {
    display: flex;
    gap: 20px;
  }
}
@media screen and (max-width: 1400px) {
  .leftHero h1 {
    font-size: 2.5em;
  }
}
@media screen and (max-width: 1250px) {
  .heroContainer {
    width: 95%;
    display: flex;
    flex-direction: column;
    height: auto;
    padding-bottom: 150px;
  }
  .shade {
    width: 100%;
  }
  .leftHero {
    width: 100%;
    margin-top: 180px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .rightHero {
    display: none;
  }
  .rightHero img {
    display: none;
  }
}
@media screen and (max-width: 767px) {
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
    position: relative;
    top: 0px;
    height: 800px;
  }
  .leftHero {
    width: 100%;
  }
  .leftHero p {
    width: 100%;
    text-align: left;
    margin-top: 20px;
  }
  .heroButtons {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
    margin-top: 50px;
  }
  .leftHero h1 {
    font-size: 40px;
    text-align: left;
  }
  .getStarted {
    width: 100%;
    padding: 15px;
    font-weight: 500;
    font-size: 0.9em;
    margin-top: 0px;
  }

  .learnMore {
    width: 100%;
    padding: 15px;
    font-weight: 500;
    font-size: 0.9em;
    margin-top: 0px;
  }
}
</style>