<template>
  <div class="pt-8 flex justify-center sm:pt-[150px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px]">
    <div class="flex flex-col sm:flex-row border border-orange-400 mx-3">
      <div class="flex sm:flex-col sm:flex-auto">
        <div class="text-nowrap blackwell-light-bg-color -mt-5 ml-5 w-fit text-white text-3xl">Free US$600 Credits!</div>
        <div v-if="computedWindowWidth.valueOf() >= 640">
          <PromoCardTableOneTwo :windowWidth="computedWindowWidth.valueOf()" />
        </div>
      </div>
      <div class="shrink sm:-mt-[100px] sm:flex-auto object-align-center">
        <img class="object-scale-downmax-w-[300px] sm:max-w-[300px] md:max-w-[300px] lg:max-w-[500px]" src="~/assets/images/Promo 1B.png" alt="" />
      </div>
      <div v-if="computedWindowWidth.valueOf() < 640">
        <PromoCardTableOneTwo class="mt-10" :windowWidth="computedWindowWidth.valueOf()" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// const props = defineProps({
// 	windowWidth: {
// 		type: Number,
// 		default: 640
// 	}
// })
const myGlobalObject = useMyGlobalObject();
const computedWindowWidth = computed(() => myGlobalObject.windowWidth.value);
</script>