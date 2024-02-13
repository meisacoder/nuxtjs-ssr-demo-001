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
