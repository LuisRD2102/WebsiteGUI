<template>
  <Navbar class="absolute top-0 left-0 right-0 z-10" />

  <div class="relative h-screen overflow-hidden bg-contain bg-[50%] bg-no-repeat inverse-gradient">
    <div class="container my-24 pt-12 md:my-16 mx-auto md:px-6 md:pt-0">
      <section class="mb-32">
        <div class="container mx-auto text-center lg:text-left xl:px-32">
          <div class="flex grid items-center lg:grid-cols-2 md:pt-24 xl:pt-0">
            <div class="mb-12 lg:mb-0">
              <div
                class="block rounded-lg custom-gradient px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14 backdrop-blur-[30px]">
                <h1 class="text-3xl font-semibold text-center c-primary hidden md:block">LOGO</h1>

                <div class="px-8 py-12 md:py-16">

                  <h1 class="text-3xl font-semibold text-center pt-2">Sign in to your account</h1>
                  <form class="mt-8">
                    <div class="relative">
                      <input type="text" v-model="username" id="small_outlined" class="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                      <label for="small_outlined" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-light dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1">Username</label>
                    </div>
                    <div class="mt-4">
                      <div class="relative">
                        <input type="password" v-model="password" id="small_outlined" class="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label for="small_outlined" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-light dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1">Password</label>
                      </div>
                      
                        <div class="mt-6">
                            <Button label="Sign in" class="w-full" @click="login"></Button>
                        </div>
                    </div>
                </form>
                <p class="mt-8 text-xs font-light text-center text-gray-700"> Don't have an account? <a href="#"
                        class="font-medium c-primary hover:underline">Sign up</a></p>
                </div>
              </div>
            </div>

            <div>
              <img src="../assets/img/solarpanels.jpg"
                class="w-full rounded-lg shadow-lg dark:shadow-black/20 hidden md:block" alt="" />
            </div>
            
          </div>
        </div>
      </section>
    </div>

  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Button from '../components/Button.vue';
import { ref } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const username = ref('');
    const password = ref('')
    const login = () => {
        const data = {
            username: username.value,
            password: password.value,
            scope: 'login',
            grant_type: 'password'
        }
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ZGFlZGE3MzVlM2Q5ODI3NGY4OGM5N2YzNjU3ODYxMzQ6YjZlNzA0OTdkMDljOTIxNTM1ZDJkYWYwNjI4ZDZkOTA2YzdmMDA3ZWRlZjZmNmQ5MTc3NjVlZmZmYjA2NzdkZQ=='
        }
        axios.post('your-api-url', data, { headers })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    };

        return { username, password, login };
  },
  components: {
    Navbar,
    Button
  },
};
</script>

<style>
@media (min-width: 768px) {
  .transform-middle {
    transform: translateY(-926px) !important;
  }

}

.custom-gradient {
  background-image: linear-gradient(to right, #f8f4f1, hsla(0,0%,100%,0.55));
} 
</style>