<template>
  <div v-if="computedWindowWidth >= 1024">
    <Carousel :items-to-show="2.5" :wrap-around="false" class="w-full" :slide-width="420">
      <!--  -->
      <Slide index="1">
        <div class="carousel__item">
          <TradingGuideCarouselSlideItem :guide="1" description-text="" />
        </div>
      </Slide>
      <Slide index="2">
        <div class="carousel__item">
          <TradingGuideCarouselSlideItem :guide="2" description-text="" />
        </div>
      </Slide>
      <Slide index="3">
        <div class="carousel__item">
          <TradingGuideCarouselSlideItem :guide="3" description-text="" />
        </div>
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>

  <div v-if="computedWindowWidth <1024">
    <Carousel :items-to-show="1" :wrap-around="false" class="w-full" :slide-width="420">
      <!--  -->
      <Slide index="1">
        <div class="carousel__item">
          <TradingGuideCarouselSlideItem :guide="1" description-text="" />
        </div>
      </Slide>
      <Slide index="2">
        <div class="carousel__item">
          <TradingGuideCarouselSlideItem :guide="2" description-text="" />
        </div>
      </Slide>
      <Slide index="3">
        <div class="carousel__item">
          <TradingGuideCarouselSlideItem :guide="3" description-text="" />
        </div>
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

//const myGlobalObject = useMyGlobalObject();
//const computedWindowWidth = computed(() => myGlobalObject.windowWidth.value);

// const itemsToShow = ref(0);
// const instance = getCurrentInstance();
// watch(computedWindowWidth, () => {
//   //console.log(computedWindowWidth.value)
//   if (computedWindowWidth.value > 640) {
//     itemsToShow.value = 2.5;
//     console.log(itemsToShow.value)

//   instance.proxy.forceUpdate()
//   } else {
//     itemsToShow.value = 1;
//   }
// })

export default defineComponent({
  name: 'WrapAround',
  components: {
    Carousel,
    Slide,
    Navigation
  },
  data() {
    return {
      myGlobalObject: useMyGlobalObject(),
      age: 0,
      aboveAge: false
    }
  },
  computed: {
    computedWindowWidth() {
      return this.myGlobalObject.windowWidth.valueOf();
    }
  },
})
</script>