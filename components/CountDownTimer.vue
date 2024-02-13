<template>
  <div class="flex flex-col text-white w-[300px] sm:w-[200px] md:w-[300px]">
    <div class="flex flex-row w-full">
      <div class="grow CountDown-numeral text-2xl sm:text-lg md:text-2xl flex justify-center">{{ days }}</div>
      <div class="text-2xl sm:text-lg md:text-2xl flex justify-center">:</div>
      <div class="grow CountDown-numeral text-2xl sm:text-lg md:text-2xl flex justify-center">{{ hours }}</div>
      <div class="text-2xl sm:text-lg md:text-2xl flex justify-center">:</div>
      <div class="grow CountDown-numeral text-2xl sm:text-lg md:text-2xl flex justify-center">{{ minutes }}</div>
      <div class="text-2xl sm:text-lg md:text-2xl flex justify-center">:</div>
      <div class="grow CountDown-numeral text-2xl sm:text-lg md:text-2xl flex justify-center">{{ seconds }}</div>
    </div>
    <div class="flex flex-row w-full">
      <div class="grow flex justify-center"> Days </div>
      <div> &nbsp </div>
      <div class="grow flex justify-center"> Hours </div>
      <div> &nbsp </div>
      <div class="grow flex justify-center"> Minutes </div>
      <div> &nbsp </div>
      <div class="grow flex justify-center"> Seconds </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.CountDown-numeral {
  font-family: 'Times New Roman', Times, serif;
}
</style>

<script lang="ts" setup>
import { ref } from 'vue';
// Props
const props = defineProps({
  lastDay: {
    type: String,
    default: 'December 30, 3000 23:59:59'
  }
})

// Exports
const deadline: Date = new Date(props.lastDay);
const days: Ref<Number> = ref(0);
const hours: Ref<Number> = ref(0);
const minutes: Ref<Number> = ref(0);
const seconds: Ref<Number> = ref(0);

function countDown(): void {
  const now: number = new Date().getTime();
  const timeLeft: Date = new Date(deadline.getTime() - now);
  days.value = Math.floor(timeLeft.getTime() / (1000 * 60 * 60 * 24));
  hours.value = Math.floor((timeLeft.getTime() % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes.value = Math.floor((timeLeft.getTime() % (1000 * 60 * 60)) / (1000 * 60));
  seconds.value = Math.floor((timeLeft.getTime() % (1000 * 60)) / 1000);
}

let timerId: NodeJS.Timeout;

// Lifcycle
onMounted(() => {
  timerId = setInterval(() => {
    countDown();
    //console.log("CountDown: Timer is running...");
  }, 1000);
})

onUnmounted(() => {
  clearInterval(timerId);
});

</script>
