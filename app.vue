<template>
  <div>
    <NuxtLayout>
      <LandingPageHeader #header :window-width="windowWidth.valueOf()" />
      <NuxtPage />
      <LandingPageFooter #footer />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useMyGlobalObject } from '~/composables/myglobalobject';
import { type MyCustomGlobalObject } from './types/types';
import { storeToRefs } from 'pinia';
import { useAuthStore } from '~/store/my-auth';

const windowWidth: Ref<Number> = ref(640);
const myGlobalObject: MyCustomGlobalObject = useMyGlobalObject();

if (process.browser) {
  // screenWidth.value = screen.width;
  windowWidth.value = window.innerWidth;
  const handleResize = () => {
    windowWidth.value = window.innerWidth;
    myGlobalObject.setWindowWidth(window.innerWidth);
  }

  onMounted(() => {
    window.addEventListener('resize', handleResize)
    windowWidth.value = window.innerWidth;
    myGlobalObject.setWindowWidth(window.innerWidth);
    const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive
    const token = useCookie("token"); // get token from cookies
    if (token.value) {
      console.log("app.vue::" + token.value); // check if value exists
      authenticated.value = true; // update the state to authenticated
    } else {
      console.log("app.vue::no token seen" + token.value || "null");
    }
  })

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })
}
</script>