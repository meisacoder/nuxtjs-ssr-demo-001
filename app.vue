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
// import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
// import { useAuthStore } from '~/store/my-auth'; // import the auth store we just created

const windowWidth: Ref<Number> = ref(640);
const myGlobalObject: MyCustomGlobalObject = useMyGlobalObject();

if (process.browser) {
  // screenWidth.value = screen.width;
  windowWidth.value = window.innerWidth;
  const handleResize = () => {
    windowWidth.value = window.innerWidth;
    myGlobalObject.setWindowWidth(window.innerWidth);
    //console.log(myGlobalObject.windowWidth.value);
  }

  onMounted(() => {
    window.addEventListener('resize', handleResize)
    windowWidth.value = window.innerWidth;
    myGlobalObject.setWindowWidth(window.innerWidth);
    //console.log(useCookie("authenticated").value);
  })

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })
}
</script>