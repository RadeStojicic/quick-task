
<script setup>
</script>
<template>
  <div class="container">
    <div class="faq_container">
      <div class="faq_title">
        <h1>Frequently asked questions</h1>
        <p>Have questions? We’re here to help.</p>
      </div>
      <div class="questions_container">
        <div class="question">
          <p>
            What are the different pricing tiers available for your product?
          </p>
          <i class="pi pi-chevron-down"></i>
        </div>
        <div class="question">
          <p>
            What are the different pricing tiers available for your product?
          </p>
          <i class="pi pi-chevron-down"></i>
        </div>
        <div class="question">
          <p>
            What are the different pricing tiers available for your product?
          </p>
          <i class="pi pi-chevron-down"></i>
        </div>
        <div class="question">
          <p>
            What are the different pricing tiers available for your product?
          </p>
          <i class="pi pi-chevron-down"></i>
        </div>
        <div class="question">
          <p>
            What are the different pricing tiers available for your product?
          </p>
          <i class="pi pi-chevron-down"></i>
        </div>
        <div class="question">
          <p>
            What are the different pricing tiers available for your product?
          </p>
          <i class="pi pi-chevron-down"></i>
        </div>
        <div class="question">
          <p>
            What are the different pricing tiers available for your product?
          </p>
          <i class="pi pi-chevron-down"></i>
        </div>
      </div>
    </div>
    <div class="contactContainer">
      <div class="contactSection">
        <h1>Still have questions?</h1>
        <p>
          Can’t find the answer you’re looking for? Plealse send us a message.
        </p>
        <button>Contact Us</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
}
.faq_container {
  max-width: 1500px;
  margin: auto;
}

.faq_title h1 {
  margin-top: 250px;
  text-align: center;
  font-size: 3em;
  color: #05132e;
}

.faq_title p {
  font-size: 1.1em;
  text-align: center;
  margin-top: 30px;
  color: #acadb2;
}

.questions_container {
  margin: 100px auto;
  width: 70%;
}
.question {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  height: 80px;
  border-bottom: 1px rgba(232, 230, 230, 0.682) solid;
  width: 100%;
}

.contactContainer {
  width: 100%;
  background: linear-gradient(to bottom, rgba(20, 23, 57, 0.973), #12152cf8),
    url("../assets/images/background_questions.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 250px;
}

.contactSection {
  max-width: 1500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.contactSection h1 {
  color: white;
  text-align: center;
  font-weight: 600;
  font-size: 1.8em;
}
.contactSection p {
  color: #f8f5f5;
  text-align: center;
  margin-top: 10px;
}

.contactSection button {
  margin-top: 30px;
  padding: 10px;
  width: 150px;
  border: 3px white solid;
  background-color: transparent;
  color: white;
  border-radius: 50px;
  cursor: pointer;
}

.contactSection button:hover {
  background-color: #53566217;
}
</style>