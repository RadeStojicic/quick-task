<script setup>
import { Icon } from "@iconify/vue";
</script>


<template>
  <div class="container">
    <div class="footer_container">
      <div class="first_column">
        <div class="first_left">
          <NuxtLink to="/"
            ><img src="../assets/images/logo.png" alt="logo"
          /></NuxtLink>
          <div class="footer_links">
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/">Feautures</NuxtLink>
            <NuxtLink to="/">Pricing</NuxtLink>
            <NuxtLink to="/">FAQ</NuxtLink>
            <NuxtLink to="/">Contact</NuxtLink>
          </div>
          <div class="footer_icons">
            <a target="_blank" href="https://www.instagram.com/">
              <Icon width="25px" color="white" icon="mdi:instagram" />
            </a>
            <a target="_blank" href="https://www.facebook.com/">
              <Icon width="25px" color="white" icon="mdi:facebook" />
            </a>

            <a target="_blank" href="https://www.twitter.com/">
              <Icon width="25px" color="white" icon="mdi:twitter" />
            </a>
            <a target="_blank" href="https://www.linkedin.com/">
              <Icon width="25px" color="white" icon="mdi:linkedin" />
            </a>
          </div>
        </div>
        <div class="first_right">
          <p>Join our newsletter</p>
          <div>
            <input type="text" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div class="second_column">
        <div class="second_left">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_158_700)">
              <path
                d="M7 1.3125C8.50842 1.3125 9.95506 1.91172 11.0217 2.97833C12.0883 4.04494 12.6875 5.49158 12.6875 7C12.6875 8.50842 12.0883 9.95506 11.0217 11.0217C9.95506 12.0883 8.50842 12.6875 7 12.6875C5.49158 12.6875 4.04494 12.0883 2.97833 11.0217C1.91172 9.95506 1.3125 8.50842 1.3125 7C1.3125 5.49158 1.91172 4.04494 2.97833 2.97833C4.04494 1.91172 5.49158 1.3125 7 1.3125ZM7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 8.85652 0.737498 10.637 2.05025 11.9497C3.36301 13.2625 5.14348 14 7 14ZM5.45234 8.54766C4.59922 7.69453 4.59922 6.3082 5.45234 5.45508C6.30547 4.60195 7.6918 4.60195 8.54492 5.45508C8.80195 5.71211 9.21758 5.71211 9.47187 5.45508C9.72617 5.19805 9.72891 4.78242 9.47187 4.52813C8.10469 3.16094 5.88984 3.16094 4.52266 4.52813C3.15547 5.89531 3.15547 8.11016 4.52266 9.47734C5.88984 10.8445 8.10469 10.8445 9.47187 9.47734C9.72891 9.22031 9.72891 8.80469 9.47187 8.55039C9.21484 8.29609 8.79922 8.29336 8.54492 8.55039C7.6918 9.40352 6.30547 9.40352 5.45234 8.55039V8.54766Z"
                fill="#FBF7F7"
              />
            </g>
            <defs>
              <clipPath id="clip0_158_700">
                <rect width="14" height="14" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p>2023 QuickTask. All rights reserved.</p>
        </div>
        <div class="second_right">
          <p>Terms</p>
          <p>Privacy</p>
          <p>Cookies</p>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
.container {
  width: 100%;
  background-color: #07081c;
  padding-top: 90px;
  height: auto;
  padding-bottom: 30px;
}

.footer_container {
  max-width: 1500px;
  margin: auto;
}

.first_column {
  display: flex;
  justify-content: space-between;
}

.first_left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.footer_icons {
  display: flex;
  gap: 15px;
  margin-top: 30px;
}

.footer_icons icon {
  font-size: 1.3em;
  color: #d8d8d8;
}

.first_left img {
  width: 150px;
}

.footer_links {
  display: flex;
  gap: 40px;
  margin-top: 20px;
}

.footer_links a {
  text-decoration: none;
  color: #d8d8d8;
}

.first_right {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
}

.first_right p {
  color: white;
}

.first_right input {
  padding: 12px;
  width: 250px;
  border-radius: 5px;
  border: none;
}

.first_right button {
  background-color: #3850ff;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 5px;
}

.first_right div {
  display: flex;
  gap: 20px;
}

.second_column {
  max-width: 1500px;
  margin: auto;
  margin-top: 90px;
  display: flex;
  justify-content: space-between;
  border-top: 1px #5056821e solid;
  padding-top: 30px;
}

.second_left img {
  width: 16px;
  fill: red;
}

.second_left {
  display: flex;
  align-items: center;
  gap: 5px;
  color: #d8d8d8;
}

.second_right {
  display: flex;
  gap: 20px;
  color: #d8d8d8;
}

@media screen and (max-width: 1600px) {
  .container {
    padding-bottom: 0px;
  }
  .footer_container {
    width: 90%;
    margin: auto;
  }
  .first_column {
    display: flex;
    width: 100%;
    margin: auto;
    gap: 50px;
  }
  .second_column {
    width: 100%;
    padding-bottom: 20px;
    font-size: 0.95em;
    flex-wrap: wrap;
    gap: 10px;
  }
  .footer_links {
    gap: 20px;
    font-size: 14px;
    flex-wrap: wrap;
  }
  .first_right input {
    width: 90%;
    flex-wrap: wrap;
  }
}

@media screen and (max-width: 767px) {
  .container {
    padding-bottom: 0px;
  }
  .footer_container {
    width: 90%;
    margin: auto;
  }
  .first_column {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: auto;
    gap: 50px;
  }
  .second_column {
    width: 100%;
    padding-bottom: 20px;
    font-size: 0.95em;
    flex-wrap: wrap;
    gap: 10px;
  }
  .footer_links {
    gap: 20px;
    font-size: 14px;
    flex-wrap: wrap;
  }
  .first_right input {
    width: 90%;
    flex-wrap: wrap;
  }
}
</style>