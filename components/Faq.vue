
<script setup>
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
</script>
<template>
  <div class="container">
    <div class="faq_container">
      <div class="faq_title">
        <h1>Frequently asked questions</h1>
        <p>Have questions? We’re here to help.</p>
      </div>
      <div class="questions_container">
        <Accordion class="accordion" :multiple="true" :activeIndex="[0]">
          <div>
            <AccordionTab>
              <template #header>
                <span
                  >What payment methods are accepted for the subscription?</span
                >
              </template>
              <p>
                We accept various payment methods, including credit cards, debit
                cards, and popular digital payment platforms such as PayPal.
                During the subscription process, you will be able to select your
                preferred payment method and provide the necessary details.
              </p>
            </AccordionTab>
          </div>
          <AccordionTab>
            <template #header>
              <span>Is my data secure and private?</span>
            </template>
            <p>
              Yes, we prioritize the security and privacy of your data. Our app
              uses encryption protocols to protect your information, and we
              adhere to strict privacy policies. Rest assured that your data is
              stored securely and is only accessible to you unless you choose to
              share it with others.
            </p>
          </AccordionTab>
          <AccordionTab>
            <template #header>
              <span>Can I use the QuickTask on multiple devices?</span>
            </template>
            <p>
              Yes, you can access the Task Management App on multiple devices.
              Once you create an account, you can log in from any supported
              device using your credentials to access and manage your tasks.
            </p>
          </AccordionTab>
          <AccordionTab>
            <template #header>
              <span
                >How can I upgrade to a premium or paid version of the
                app?</span
              >
            </template>
            <p>
              To upgrade to a premium or paid version, log in to your account
              and navigate to the app's settings or account section. Look for
              the "Upgrade" or "Subscription" option, choose the desired plan,
              and follow the prompts to complete the upgrade process.
            </p>
          </AccordionTab>
          <AccordionTab>
            <template #header>
              <span>How can I get customer support or assistance?</span>
            </template>
            <p>
              We provide customer support and assistance for our Task Management
              App. You can reach out to our support team through various
              channels, such as email, social media, phone number. We are here
              to help you with any questions or issues you may encounter.
            </p>
          </AccordionTab>
          <AccordionTab>
            <template #header>
              <span
                >Is it possible to sync my data across multiple devices?</span
              >
            </template>
            <p>
              Yes, syncing your data across multiple devices is usually
              supported. You can log in to your account from different devices,
              ensuring that your tasks and lists are always up to date.
            </p>
          </AccordionTab>
        </Accordion>
      </div>
    </div>
    <div id="contact" class="contactContainer">
      <div class="contactSection">
        <h1>Still have questions?</h1>
        <p>
          Can’t find the answer you’re looking for? Plealse send us a message.
        </p>
        <a href="mailto:radestojicicsd@gmail.com?">Contact</a>
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
  width: 80%;
}

.questions_container p {
  color: #767a94;
  font-size: 0.95em;
}

.questions_container span {
  color: rgb(54, 63, 78);
}

.contactContainer {
  width: 100%;
  background: linear-gradient(to bottom, rgba(20, 23, 57, 0.973), #12152cf8),
    url("../assets/images/background_questions.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
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

.contactSection a {
  margin-top: 30px;
  padding: 10px;
  width: 150px;
  border: 3px white solid;
  background-color: transparent;
  color: white;
  border-radius: 50px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
}

.contactSection a:hover {
  background-color: #53566217;
}

@media screen and (max-width: 767px) {
  .faq_container {
    width: 90%;
    margin: auto;
  }
  .questions_container {
    width: 100%;
  }
  .faq_title h1 {
    margin-top: 150px;
  }
  .contactContainer {
    margin-top: 150px;
    width: 100%;
  }
  .contactSection {
    width: 90%;
    margin: auto;
  }
}
</style>