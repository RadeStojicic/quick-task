
<script setup>
</script>
<template>
  <div class="container">
    <div class="trustedContainer">
      <p class="trustedByText">Trusted By</p>
      <div class="logos">
        <nuxt-img
          quality="80"
          format="webp"
          src="/images/trustedByLogos/1.svg"
          alt="trustedByLogo1"
        />
        <nuxt-img
          quality="80"
          format="webp"
          src="/images/trustedByLogos/2.svg"
          alt="trustedByLogo2"
        />
        <nuxt-img
          quality="80"
          format="webp"
          src="/images/trustedByLogos/3.svg"
          alt="trustedByLogo3"
        />
        <nuxt-img
          quality="80"
          format="webp"
          src="/images/trustedByLogos/4.svg"
          alt="trustedByLogo4"
        />
        <nuxt-img
          quality="80"
          format="webp"
          src="/images/trustedByLogos/5.svg"
          alt="trustedByLogo5"
        />
        <nuxt-img
          quality="80"
          format="webp"
          src="/images/trustedByLogos/6.svg"
          alt="trustedByLogo6"
        />
      </div>
    </div>
  </div>
</template>

<style  scoped>
.container {
  width: 100%;
  height: 300px;
  background-color: rgb(255, 255, 255);
}
.trustedContainer {
  max-width: 1500px;
  margin: auto;
  display: flex;
  width: 100%;
  justify-content: center;
  height: 100%;
  flex-direction: column;
  align-items: center;
}

.trustedByText {
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 2px;
  color: #bfbcca;
}
.logos {
  display: flex;
  gap: 60px;
  margin-top: 50px;
}

.logos img {
  width: 120px;
}

@media screen and (max-width: 1250px) {
  .logos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .container {
    width: 100%;
    margin: auto;
  }
  .trustedContainer {
    width: 95%;
    margin-top: 50px;
  }
}
@media screen and (max-width: 767px) {
  .logos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .container {
    width: 100%;
    margin: auto;
    height: auto;
  }
  .trustedContainer {
    width: 90%;
    margin-top: 50px;
  }
}
</style>