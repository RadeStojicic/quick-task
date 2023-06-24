
<script setup>
</script>
<template>
  <div class="container">
    <div class="trustedContainer">
      <p class="trustedByText">Trusted By</p>
      <div class="logos">
        <img src="../assets/images/trustedByLogos/1.svg" alt="" />
        <img src="../assets/images/trustedByLogos/2.svg" alt="" />
        <img src="../assets/images/trustedByLogos/3.svg" alt="" />
        <img src="../assets/images/trustedByLogos/4.svg" alt="" />
        <img src="../assets/images/trustedByLogos/5.svg" alt="" />
        <img src="../assets/images/trustedByLogos/6.svg" alt="" />
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
</style>