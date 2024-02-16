<script lang="ts" setup>
const myGlobalObject = useMyGlobalObject();
const computedWindowWidth = computed(() => myGlobalObject.windowWidth.value);
</script>

<template>
  <div class="blackwell-dark-bg-color">
    <div class="lg:container mx-auto flex w-full flex-wrap items-center justify-between px-3">
      <div v-if="computedWindowWidth.valueOf() < 640">
        <CountDownTimer last-day="December 30, 2024 23:59:59" />
      </div>
    </div>
    <!-- Trading header start-->
    <div class="trading-header-bg-img bg-center">
      <div class="lg:container mx-auto flex w-full flex-wrap items-center justify-center px-3">
        <HeroBanner />
        <div class="flex flex-col items-center justify-center ml-5">
          <h1 class="text-2xl md:text-6xl blackwell-text-light-blue ">TRADING TANGO</h1>
          <h2 class="blackwell-text-light-blue text-xl md:text-4xl">VALENTINE'S DAY PROMOTION</h2>
          <h2 class="blackwell-text-light-blue text-xl md:text-4xl">1 - 29 February 2024</h2>
          <p class="blackwell-text-light-blue"><a href="#" class="blackwell-text-orange">Terms & conditions</a> apply.</p>
        </div>
      </div>
      <div class="lg:container mx-auto flex w-full flex-wrap items-center justify-center px-3">
        <div>
          <div class="flex justify-center items-center ">
            <p class="md:text-4xl blackwell-text-orange text-2xl">Collect All Rewards</p>
          </div>
          <div class="grid md:grid-cols-2 grid-cols-1">
            <RewardCardTextOnly class="m-2 blackwell-text-orange" card-text="US$200 credits" />
            <RewardCardTextOnly class="m-2 blackwell-text-orange" card-text="INR₹2000 credits" />
            <RewardCardTextOnly class="m-2 blackwell-text-orange" card-text="US$400 credits" />
            <RewardCardTextOnly class="m-2 blackwell-text-orange" card-text="INR₹20,000 gift card" />
          </div>
        </div>
      </div>
    </div>
    <!-- Trading header end -->
  </div>
  <div class="blackwell-light-bg-color">
    <div class="lg:container mx-auto flex flex-col w-full flex-wrap items-center justify-center px-3">
      <div>
        <PromoCardWithPicOneTwo />
        <PromoCardWithPicThreeFour />
      </div>
    </div>
  </div>

  <div class="blackwell-dark-bg-color step-bg-img py-10 bg-center">
    <div class="lg:container mx-auto flex w-full flex-wrap items-center justify-center px-3"> <!-- not j-betw-->
      <div class="flex flex-col md:flex-row items-center justify-center">
        <Step class="" :step="1"
          description-text="Create an account with Blackwell Global & log in to the Client Portal." />
        <div v-if="computedWindowWidth.valueOf() >= 640"><i class="w3c-arrow w3c-right w-[15px] h-[15px]"></i></div>
        <div v-else><i class="w3c-arrow w3c-down w-[15px] h-[15px]"></i></div>
        <Step :step="2"
          description-text='Under the "Promotion" tab, copy your unique referral link & send it to your referee, or get your referee to scan your unique QR code to create an account with us.' />
        <div v-if="computedWindowWidth.valueOf() >= 640"><i class="w3c-arrow w3c-right w-[15px] h-[15px]"></i></div>
        <div v-else><i class="w3c-arrow w3c-down w-[15px] h-[15px]"></i></div>
        <Step :step="3"
          description-text="Monitor your referees in the Referral Activity section to track whether you've fulfilled the requirements for various rewards!" />
      </div>
    </div>
  </div>

  <div class="blackwell-light-bg-color">
    <div class="lg:container mx-auto flex w-full flex-wrap items-center justify-center px-3"> <!-- not j-betw-->
      <RegisterNowForm />
    </div>
  </div>
  <div class="blackwell-light-bg-color">
    <!-- <div class="lg:container mx-auto flex w-full flex-wrap items-center justify-center px-3"> -->
    <div>
      <CarouselArea class="w-[400px] h-[400px]" />
    </div>
    <!-- </div> -->
  </div>
</template>

<style lang="scss" scoped>
.trading-header-bg-img {
  background-image: url("~/assets/images/Trading Tango header.png");
}

.step-bg-img {
  background-image: url("~/assets/images/easy_step_bg.png")
}</style>