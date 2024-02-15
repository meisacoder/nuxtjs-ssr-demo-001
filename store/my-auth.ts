import { defineStore } from "pinia";

// Types...

interface UserPayloadInterface {
  email: string;
  password: string;
}
interface RequestState {
  loading: boolean;
  error: Error | null;
}

type SignInSuccessJson = {
  id: string;
  name: string;
  token: string;
  status: string;
};

type CodeMsgStatus = {
  code: string;
  message: string;
  status: string;
};

type SignInResponse = SignInSuccessJson | CodeMsgStatus;

// Export

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authenticated: false,
    loading: false,
  }),
  actions: {
    async authenticateUser({
      email,
      password,
    }: UserPayloadInterface): Promise<{
      data: SignInResponse;
      requestState: RequestState;
    }> {
      const requestState: RequestState = {
        loading: true,
        error: null,
      };

      const runtimeConfig = useRuntimeConfig();
      const API_BASE: string = <string> runtimeConfig.public.apiBase;
      const SIGN_IN_URL: string = API_BASE + "users/signin";

      // useFetch from nuxt 3
      try {
        const response: any = await useFetch(SIGN_IN_URL, {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: {
            email,
            password,
          },
        });

        //this.loading = response.pending; // unused

        // //debug
        // console.log("my-auth :: Data:")
        // if (response.status.value === "success") console.log(response.data.value.id);
        // if (response.status.value === "error") console.log(response.error.value.data);
        // console.log("end my-auth");

        if (response.status.value === "success") {
          const token = useCookie("token"); // useCookie new hook in nuxt 3
          token.value = response.data?.value?.token; // set token to cookie
          this.authenticated = true; // set authenticated  state value to true
          console.log("my-auth::success");

        } else if (response.status.value === "error"){
          this.authenticated = false;
          console.log(response.data.value.message);
        }

        let data = response.data;

        requestState.loading = false;
        return { data, requestState };

      } catch (e) {
        requestState.loading = false;
        //requestState.error = error;
        return { data: {} as SignInResponse, requestState };
      }
    },
    logUserOut() {
      const token = useCookie("token"); // useCookie new hook in nuxt 3
      this.authenticated = false; // set authenticated  state value to false
      token.value = null; // clear the token cookie
    },
  },
});
