// import { type MyCustomGlobalObject } from '~/types/types';

// export const useMyGlobalObject = () => {

//   const globalData = useState<MyCustomGlobalObject>('global', () => {
//     const global:MyCustomGlobalObject = { windowWidth: 640 }
//     return toRef(global)
//   })

//   const setGlobalData = (global: MyCustomGlobalObject) => {
//     globalData.value = global
//   }

//   return {
//     globalData,
//     setGlobalData
//   };

// }

import { type MyCustomGlobalObject } from "~/types/types";

const windowWidth: Ref<number> = ref(640);

export const useMyGlobalObject: () => MyCustomGlobalObject = () => {
  const setWindowWidth = (width: number) => {
    windowWidth.value = width;
  };
  return {
    windowWidth,
    setWindowWidth,
  };
};
