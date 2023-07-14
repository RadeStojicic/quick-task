<script setup>
import { Icon } from "@iconify/vue";
</script>
<template>
  <div class="container">
    <div class="pricing_container">
      <div class="pricing_subcontainer">
        <div class="pricing_content">
          <h1 class="pricingTitle">We’ve got a plan that’s perfect for you.</h1>
          <p class="pricingSubTitle">
            Select Your Plan: Task Management Solutions for Every Bussiness Size
          </p>
        </div>
        <div class="pricingCards">
          <div
            data-aos="fade-up"
            data-aos-duration="400"
            data-aos-easing="ease-in-out-cubic"
            class="pricingCard card1"
          >
            <div class="card_title">
              <p class="plan_name">Standard Plan</p>
              <p class="plan_price">
                <span style="font-size: 2em">$</span>
                <span style="color: white; font-weight: bold; font-size: 2em"
                  >0</span
                ><span style="color: #626f89">/month</span>
              </p>
            </div>
            <div class="description_container">
              <div class="description">
                <div>
                  <span class="checked">
                    <Icon icon="fe:check" />
                  </span>
                  <p>Basic Functionality</p>
                </div>
                <div>
                  <span class="checked">
                    <Icon icon="fe:check" />
                  </span>
                  <p>Cost Savings</p>
                </div>
                <div>
                  <span class="checked">
                    <Icon icon="fe:check" />
                  </span>
                  <p>Limited Collaboration</p>
                </div>
                <div>
                  <span class="checked">
                    <Icon icon="fe:check" />
                  </span>
                  <p>Mobile Access</p>
                </div>
                <div>
                  <span class="checked">
                    <Icon icon="fe:check" />
                  </span>
                  <p>Minimal Customization</p>
                </div>
                <div>
                  <span class="checked">
                    <Icon icon="fe:check" />
                  </span>
                  <p>Support Limitations</p>
                </div>
              </div>
            </div>

            <button class="plan_getStarted">
              <NuxtLink class="standardPlan" to="/todo">Get Started</NuxtLink>
            </button>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-easing="ease-in-out-cubic"
            class="pricingCard card2"
          >
            <div class="card_title">
              <p class="plan_name">Bussiness Plan</p>
              <p class="plan_price">
                <span style="font-size: 2em">$</span>
                <span style="color: white; font-weight: bold; font-size: 2em"
                  >12</span
                ><span style="color: #626f89">/month</span>
              </p>
            </div>
            <div class="description_container">
              <div class="description">
                <div>
                  <span class="checked">
                    <Icon icon="fe:check" />
                  </span>
                  <p>Advanced Features</p>
                </div>
                <div>
                  <span class="checked">
                    <Icon icon="fe:check" />
                  </span>
                  <p>Team Collaboration</p>
                </div>
                <div>
                  <span class="checked">
                    <Icon icon="fe:check" />
                  </span>
                  <p>Reporting & Analytics</p>
                </div>
                <div>
                  <span class="checked">
                    <Icon icon="fe:check" />
                  </span>
                  <p>Integration options</p>
                </div>
                <div>
                  <span class="checked">
                    <Icon icon="fe:check" />
                  </span>
                  <p>Priority Support</p>
                </div>
                <div>
                  <span class="checked">
                    <Icon icon="fe:check" />
                  </span>
                  <p>Scalability & Growth:</p>
                </div>
              </div>
            </div>
            <button class="plan_getStarted">
              <NuxtLink class="standardPlan" to="/todo">Get Started</NuxtLink>
            </button>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-easing="ease-in-out-cubic"
            class="pricingCard card3"
          >
            <div class="card_title">
              <p class="plan_name">Premium Plan</p>
              <p class="plan_price">
                <span style="font-size: 2em">$</span>
                <span style="color: white; font-weight: bold; font-size: 2em"
                  >49</span
                ><span style="color: #626f89">/month</span>
              </p>
            </div>
            <div class="description_container">
              <div class="description">
                <div>
                  <span class="checked">
                    <Icon icon="fe:check" />
                  </span>
                  <p>Advanced Functionality</p>
                </div>
                <div>
                  <span class="checked">
                    <Icon icon="fe:check" />
                  </span>
                  <p>Customization & Branding</p>
                </div>
                <div>
                  <span class="checked">
                    <Icon icon="fe:check" />
                  </span>
                  <p>Seamless Integrations</p>
                </div>
                <div>
                  <span class="checked">
                    <Icon icon="fe:check" />
                  </span>
                  <p>Exclusive Features</p>
                </div>
                <div>
                  <span class="checked">
                    <Icon icon="fe:check" />
                  </span>
                  <p>VIP Support</p>
                </div>
                <div>
                  <span class="checked">
                    <Icon icon="fe:check" />
                  </span>
                  <p>Enhanced Security</p>
                </div>
              </div>
            </div>
            <button class="plan_getStarted">
              <NuxtLink class="standardPlan" to="/todo">Get Started</NuxtLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style  scoped>
.container {
  width: 100%;
}

.pricing_container {
  margin-top: 100px;
  background-color: #07081c;
  height: auto;
  padding-bottom: 150px;
  top: 30px;
}

.pricing_subcontainer {
  max-width: 1500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

.pricing_content {
  width: 100%;
  text-align: center;
  margin: 100px auto;
  max-width: 1500px;
}
.pricing_container {
  color: white;
}

.pricingSubTitle {
  color: rgb(217, 222, 226);
}

.pricingTitle {
  font-size: 4em;
  width: 60%;
  margin: auto auto 20px auto;
}

.pricingCards {
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 80px;
}

.pricingCard {
  background-color: #0c0d2b;
  border-radius: 20px;
  padding-top: 50px;
  padding-bottom: 30px;
  width: 100%;
}
.plan_name {
  text-align: center;
  font-weight: 500;
  font-size: 1.2em;
}

.plan_price {
  margin-top: 20px;
  text-align: center;
}

.checked {
  display: flex;
  align-items: center;
  color: white;
  background-color: #3850ff;
  border-radius: 50px;
  font-weight: bolder;
  font-size: 1.2em;
  padding: 6px;
}
.description_container {
  width: 90%;
  display: flex;
  justify-content: center;
  margin: auto;
}
.description {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin: 50px auto;
}

.description div {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  align-items: center;
  gap: 15px;
}

.description div p {
  color: #7286ac;
}

.plan_getStarted {
  margin: 50px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 50%;
  text-align: center;
  border-radius: 10px;
  background-color: #3850ff;
  color: white;
  border: none;
}

.standardPlan {
  text-decoration: none;
  cursor: pointer;
  background-color: #394cd8;
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  color: white;
}

.standardPlan:hover {
  background-color: #2739c3;
}

@media screen and (max-width: 1600px) {
  .pricingCards {
    gap: 50px;
  }
  .pricingCard {
    width: 90%;
    margin: auto;
    position: relative;
  }
  .pricingTitle {
    width: 100%;
    font-size: 3em;
  }
  .pricingSubTitle {
    font-size: 1.2em;
  }
  .pricing_content {
    width: 90%;
  }
  .pricing_subcontainer {
    width: 95%;
    margin: auto;
  }

  .pricingCard {
    background-color: #0c0d2b;
    border-radius: 20px;
    padding-top: 50px;
    padding-bottom: 100px;
    width: 100%;
  }
  .plan_name {
    text-align: center;
    font-weight: 500;
    font-size: 1.1em;
  }

  .plan_price {
    margin-top: 20px;
    text-align: center;
    font-size: 1em;
  }

  .checked {
    font-size: 1em;
    padding: 5px;
  }

  .description {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin: 50px auto;
  }

  .description div {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    align-items: center;
    gap: 15px;
  }

  .plan_getStarted {
    margin: 50px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 60%;
    text-align: center;
    border-radius: 10px;
    background-color: #3850ff;
    color: white;
    border: none;
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
  }

  .standardPlan {
    text-decoration: none;
    cursor: pointer;
    background-color: #394cd8;
    width: 100%;
    padding: 12px;
    border-radius: 10px;
    color: white;
  }

  .standardPlan:hover {
    background-color: #2739c3;
  }
}

@media screen and (max-width: 1080px) {
  .pricingCards {
    gap: 15px;
  }
  .description div p {
    color: #7286ac;
    font-size: 0.8em;
  }
}
@media screen and (max-width: 767px) {
  .pricing_content {
    width: 90%;
  }
  .pricingTitle {
    width: 100%;
    font-size: 38px;
  }
  .pricingSubTitle {
    font-size: 16px;
  }
  .pricingCards {
    display: flex;
    flex-direction: column;
    width: 70%;
    gap: 20px;
  }
  .pricing_subcontainer {
    width: 90%;
    margin: auto;
  }
  .description div p {
    color: #7286ac;
    font-size: 1em;
  }
  .plan_getStarted {
    width: 50%;
  }
}

@media screen and (max-width: 500px) {
  .pricingCards {
    width: 100%;
  }
}
</style>