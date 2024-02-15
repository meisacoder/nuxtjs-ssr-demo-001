<template>
  <div class="blackwell-light-bg-color ">
    <div class="title lg:container mx-auto flex flex-col w-full flex-wrap items-center justify-center px-3 py-10">
      <h1 class="text-2xl mb-3 text-white">Login</h1>
      <div class="form flex flex-col items-center justify-center">
        <input v-model="user.email" type="email"
          class="w-full input bg-[#377AB1] text-white border-b-2 border-neutral-50 w-full px-3 py-2 mt-2"
          placeholder="Email" name="email" required />
        <input v-model="user.password" type="password"
          class="w-full input bg-[#377AB1] text-white border-b-2 border-neutral-50 w-full px-3 py-2 mt-2"
          placeholder="Password" name="psw" required />
        <button @click.prevent="login"
          class="w-full button bg-stone-300 transition-all duration-100 hover:bg-stone-100 text-black px-6 py-2 mt-4">Login</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useAuthStore } from '~/store/my-auth';

// Authenticate
const { authenticateUser } = useAuthStore(); // use authenticateUser action from  auth store
const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

const user = ref({
  email: 'email',
  password: 'password',
});

const router = useRouter();

const login = async () => {
  await authenticateUser(user.value); // call authenticateUser and pass the user object
  // redirect to "/" if user is authenticated
  if (authenticated.value) {
    console.log(authenticated.value);
    router.push("/");
  } else {
    alert("Invalid credentials");
  }
};
</script>