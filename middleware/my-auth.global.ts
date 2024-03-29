import { storeToRefs } from "pinia";
import { useAuthStore } from "~/store/my-auth";

export default defineNuxtRouteMiddleware((to) => {
  const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive
  const token = useCookie("token"); // get token from cookies

  if (token.value) {
    // check if value exists
    console.log(token.value);
    authenticated.value = true; // update the state to authenticated
  } else {
    console.log("my-auth-middlewar::no token seen" + token.value);
  }

  // if token exists and url is /login redirect to homepage
  if (token.value && to?.name === "login") {
    return navigateTo("/");
  }

  // if token doesn't exist redirect to log in
  // if (!token.value && to?.name !== "login") {
  //   abortNavigation();
  //   return navigateTo("/login");
  // }
});
