<script lang="ts" setup>
import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useAuthStore } from '~/store/my-auth'; // import the auth store we just created
import { useMyGlobalObject } from '~/composables/myglobalobject'
import { type MyCustomGlobalObject } from '~/types/types';

// Router
const router = useRouter();

const { logUserOut } = useAuthStore(); // use authenticateUser action from  auth store
const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

const logout = () => {
  logUserOut();
  router.push('/login');
};

onMounted(() => {
  //console.log("befor" + authenticated.value)
  authenticated.value = getCookie("authenticated") == "true";
  //console.log("after" + authenticated.value)
})

function getCookie(cname: string) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// // Props
// const props = defineProps({
//     windowWidth: {
//         type: Number,
//         default: 640
//     }
// })

// // Exports
// const computedWindowWidth = computed(() => props.windowWidth)

const myGlobalObject = useMyGlobalObject();

const computedWindowWidth = computed(() => myGlobalObject.windowWidth.value);

// watch(myGlobalObject.windowWidth, () => {
//   console.log(myGlobalObject.windowWidth.value)
//   console.log(computedWindowWidth.value)
// })

</script>

<template>
  <!-- Navbar -->
  <nav
    class="blackwell-dark-bg-color flex-no-wrap relative flex w-full items-center justify-between bg-neutral-100 py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4">

    <!-- Here add a container -->
    <div class="lg:container mx-auto flex w-full flex-wrap items-center justify-between px-3">
      <img src="~/assets/images/logo-white.png" class="w-[100px]" />
      <div class="flex flex-row items-center justify-center ml-10" v-if="computedWindowWidth.valueOf() >= 640">
        <div class="text-center text-white">
          <p>PROMOTION</p>
          <p>ENDS IN</p>
        </div>
        <CountDownTimer last-day="December 30, 2024 23:59:59"/>
      </div>
      <div class="ml-auto flex flex-row items-center">
        <OrangeButton buttonText="REGISTER" class="mr-1"/>
        <div class="dropdown inline-block relative">
          <button class="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
            <span class="m-auto">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20px" height="20px">
                <!-- Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                <path
                  d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7H162.5c0 0 0 0 .1 0H168 280h5.5c0 0 0 0 .1 0H417.3c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2H224 204.3c-12.4 0-20.1 13.6-13.7 24.2z" />
              </svg>
            </span>
          </button>
          <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
            <!--rounded-b-->
            <li><nuxt-link to="/"
                class="w-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Home</nuxt-link></li>
            <li><nuxt-link to="/about"
                class="w-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">About</nuxt-link></li>
            <!-- class="loginBtn  -->
            <li v-if="!authenticated" class="w-full  bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              style="float: right">
              <nuxt-link to="/login">Login</nuxt-link>
            </li>
            <!-- class="loginBtn  -->
            <li v-if="authenticated" class="w-full  bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              style="float: right">
              <nuxt-link @click="logout">Logout</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <!-- <ul class="list-style-none ml-auto flex flex-col pr-0 lg:flex-row">

      </ul> -->
    </div>
  </nav>
</template>

<style lang="scss" scoped >
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>
