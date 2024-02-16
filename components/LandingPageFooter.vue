<script lang="ts" setup>
const myGlobalObject = useMyGlobalObject();
const computedWindowWidth = computed(() => myGlobalObject.windowWidth.value);
</script>

<template>
  <div class="blackwell-dark-bg-color">
    <div class="lg:container mx-auto flex w-full flex-wrap items-center justify-center px-3">
      <div class="flex flex-col items-center justify-center">
        <h1 class="text-white m-4">LOG IN TO THE MT4 DESKTOP APP</h1>
        <OrangeButtonLong button-text="Download Platform" />
        <h1 class="text-white m-4">LOG IN VIA MT4 MOBILE APP</h1>
        <div class="flex flex-row items-center justify-between">
          <img src="~/assets/thirdpartyvendorbuttons/download-on-the-app-store.svg" width="120" height="40" />
          <img src="~/assets/thirdpartyvendorbuttons/google-play-badge.png" width="155" height="75" />
        </div>
      </div>
    </div>
  </div>
  <div v-if="computedWindowWidth.valueOf() < 640">
    <div class="blackwell-mid-bg-color text-white text-sm">

      <div class="container mx-auto flex w-full flex-wrap items-center justify-center px-3">
        <p class="text-justify m-5">
          Blackwell Global Investment (Cambodia) Co., Ltd is a private limited company registered in Cambodia with its
          registered
          office at No. 48, Mao Tse Toung Blvd, Sangkat Boeung Trabel, Khan Chamkarmon, Phnom Penh, Combodia. Derivative
          Broker License No. 005.

          Forex and CFDs are levereaged products and you may lose your initial deposit as well as substantial amounts of
          your investment. Trading
          leveraged products carries a high level of risk and may not be suitable for all investors, therefore please
          consider your investment
          objectives, level of experience, financial resources, risk appetite and other releveant circumstances carefully.
          Please read and understand
          the risk disclosure policy before entering any transaction with Blackwell Global Investments Limited.

          The information on this site is not direted at residents of the United State, Belgium, New Zealand, and is not
          intended for distribution
          to, or use by, any person in any country or jurisdiction where such distribution or use would be contrary to
          local
          law or regulation.
        </p>
        <hr class="h-[1px] w-full bg-white" />
        <p class="text-justify mt-5">
          This website is operated by Blackwell Global Investments Limited, a member Company of the Blackwell Global
          Group.
          Blackwell Global is the brand name used by the following member companies:
        </p>
        <div class="mt-5">
          <div class="text-left mx-5 mb-5">
            <h6 class="font-bold">Blackwell Global Investments (UK) Limited</h6>
            <p>Licensed and regulated by Financial Conduct Authority (FCA) in the United Kingdom under FCA License No.
              687576.
            </p>
            <p class="font-bold">www.blackwellglobal.co.uk</p>
          </div>
          <div class="text-left mx-5 mb-5">
            <h6 class="font-bold">Blackwell Global Investments (Cambodia) CO., Ltd</h6>
            <p> Regulated by Securities Exchange Commission of Cambodia (SECC), SECC Derivative Broker License No. 005</p>
            <p class="font-bold">www.blackwellglobal-kh.com</p>
          </div>
          <div class="text-left mx-5 mb-5">
            <h6 class="font-bold">Blackwell Global Securities Limited</h6>
            <p> Regulated by Securities and Futures Commission (SFC) of Hong Kong, C.E. No. BGX296.</p>
            <p class="font-bold">www.blackwellglobal.com.hk</p>
          </div>
          <div class="text-left mx-5 mb-5">
            <h6 class="font-bold">Blackwell Global Futures Limited</h6>
            <p> Regulated by Securities and Futures Commission (SFC) of Hong Kong, C.E. No. BGX460.</p>
            <p class="font-bold">www.blackwellglobal.com.hk</p>
          </div>
          <div class="text-left mx-5 mb-5">
            <h6 class="font-bold">Blackwell Global Asset Management Limited</h6>
            <p> Regulated by Securities and FUteres Commission (SFC) of Hong Kong, under C.E. No. BJU094.</p>
            <p class="font-bold">www.blackwellglobal.com.hk</p>
          </div>
          <div class="text-left mx-5 mb-5">
            <h6 class="font-bold">Blackwell Global Investments Limited</h6>
            <p> Regulated by Securities Exchange Commission of the Bahamas, certificate number SIA-F215. TIN. 109226376
            </p>
            <p class="font-bold">www.blackwellglobal.com</p>
          </div>
        </div>
        <div>
          <hr class="h-[1px] w-full bg-white" />
          <p class="my-5">
            Copyright 2023 Blackwell Global Investments Limited. All rights reserved.
          </p>
        </div>
      </div>
    </div>
    <div class="blackwell-dark-bg-color text-white text-sm py-5">
      Terms of Business | Product Information Document | Risk Warning Notice | Privacy Policy | AML/KYC Policy | Security
      & Fraud Awarenes
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
