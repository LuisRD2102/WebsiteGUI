<template>
    <Navbar class="absolute top-0 left-0 right-0 z-10" />

    <div class="relative h-screen overflow-hidden bg-contain bg-[50%] bg-no-repeat bg-light">
        <img
        src="../assets/img/LandingSM.png"
        class="h-screen m-0 w-full lg:hidden"
        />
        <img
          src="../assets/img/Landing4.png"
          class="h-screen m-0 w-full hidden lg:block"
        />

        <div class="transform -translate-y-full flex flex-col justify-center min-h-screen overflow-hidden border-1">
          <div class="w-full p-6 m-auto bg-transparent rounded shadow-lg lg:max-w-md">
              <h1 class="text-3xl font-semibold text-center c-primary">LOGO</h1>
      
              <form class="mt-6">
                  <div class="relative mb-3" data-te-input-wrapper-init>
                    
                    <input
                      type="text"
                      class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlInputText"
                      placeholder="Example label"
                      style="outline: none; border: 1px solid #cccccc;"
                    />
                    <label
                      for="exampleFormControlInputText"
                      class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] 
                      text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] 
                      peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:bg-light z-1
                       peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary peer-focus:bg-light"
                      >Username
                    </label>
                  </div>
                  <div class="mt-4">
                    <div class="relative mb-3" data-te-input-wrapper-init>
                    
                      <input
                        type="password"
                        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleFormControlInputText"
                        placeholder="Example label"
                        style="outline: none; border: 1px solid #cccccc;"
                      />
                      <label
                        for="exampleFormControlInputText"
                        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] 
                        text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] 
                        peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:bg-light z-1
                         peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary peer-focus:bg-light"
                        >Password
                      </label>
                    </div>
                      <!-- <a href="#" class="text-xs text-gray-600 hover:underline">Forget Password?</a> -->
                      <div class="mt-6">
                          <Button label="Login" class="w-full"></Button>
                      </div>
                  </div>
              </form>
              <p class="mt-8 text-xs font-light text-center text-gray-700"> Don't have an account? <a href="#"
                      class="font-medium c-primary hover:underline">Sign up</a></p>
          </div>
      </div>

    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Button from '../components/Button.vue'

export default {
  components: {
    Navbar,
    Button
  },
};

// Initialization for ES Users
import {
  Input,
  initTE,
} from "tw-elements";

initTE({ Input });
</script>

<style>

input:focus + label,
input:active + label {
  background-color: #f8f4f1;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
}


@media (min-width: 768px) {
  .transform-middle{
    transform: translateY(-926px) !important;
  }
}



</style>