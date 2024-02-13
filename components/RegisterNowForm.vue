<script lang="ts" setup>
import useVuelidate from '@vuelidate/core';
import { required, minLength, email, sameAs } from '@vuelidate/validators';

const formData = reactive({
  firstName: "",
  lastName: "",
  email: "",
  countryPhoneNumberPrefix: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
  metMinAge: "",
  agreedToTermsAndConditions: ""
})

const rules = computed(() => {
  return {
    firstName: { required },
    lastName: { required },
    email: { required, email },
    countryPhoneNumberPrefix: { required },
    phoneNumber: { required },
    password: { required, minLength: minLength(10) },
    confirmPassword: { required, sameAs: sameAs(formData.password) },
    metMinAge: { required },
    agreedToTermsAndConditions: { required }
  }
});

const v$ = useVuelidate(rules, formData);
// watch(formData, () => {
//   console.log(formData.firstName);
// })

const submitForm = async () => {
  const result = await v$.value.$validate();
  if (result) {
    alert("success, form submitted!");
  } else {
    console.log(result);
    alert("error, form not submitted!");
  }
}

</script>

<template>
  <div class="lg:container mx-auto flex w-full flex-wrap items-center justify-center px-3"> <!-- not j-betw-->
    <div class="flex items-center justify-center">
      <div class="text-center text-white p-6 w-full "> <!-- sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] -->
        <h1 class="text-2xl mb-3">Register Now</h1>
        <form @submit.prevent="submitForm" class="flex flex-col">
          <input type="text" placeholder="First Name" v-model="formData.firstName"
            class="bg-[#377AB1] text-white border-b-2 border-neutral-50 w-full px-3 py-2 mt-2" />
          <span class="text-left" v-for="error in v$.firstName.$errors" :key="error.$uid">
            {{ error.$message }}
          </span>
          <input type="text" placeholder="Last Name" v-model="formData.lastName"
            class="bg-[#377AB1] text-white border-b-2 border-neutral-50 w-full px-3 py-2 mt-2" />
          <span class="text-left" v-for="error in v$.lastName.$errors" :key="error.$uid">
            {{ error.$message }}
          </span>
          <input type="email" placeholder="Email" v-model="formData.email"
            class="bg-[#377AB1] text-white border-b-2 border-neutral-50 w-full px-3 py-2 mt-2" />
          <span class="text-left" v-for="error in v$.email.$errors" :key="error.$uid">
            {{ error.$message }}
          </span>
          <div class="flex">
            <div
              class="bg-[#377AB1] text-[#9DA3AE] border-b-2 border-neutral-50 w-full px-3 py-2 mt-2 max-w-[100px] select-wrap text-left">
              <label for="country">Country</label>
              <select class="flex w-full h-full bg-[#377AB1]" name="country" v-model="formData.countryPhoneNumberPrefix">
                <option value=""> </option>
                <option value="65">+65</option>
                <option value="66">+66</option>
                <option value="67">+67</option>
              </select>
            </div>
            <input type="text" placeholder="Phone" v-model="formData.phoneNumber"
              class="bg-[#377AB1] text-white border-b-2 border-neutral-50 w-full px-3 py-2 mt-2" />
          </div>
          <span class="text-left" v-for="error in v$.countryPhoneNumberPrefix.$errors" :key="error.$uid">
            {{ error.$message }}
          </span>
          <span class="text-left" v-for="error in v$.phoneNumber.$errors" :key="error.$uid">
            {{ error.$message }}
          </span>
          <input type="password" placeholder="Password" v-model="formData.password"
            class="bg-[#377AB1] text-white border-b-2 border-neutral-50 w-full px-3 py-2 mt-2" />
          <span class="text-left" v-for="error in v$.password.$errors" :key="error.$uid">
            {{ error.$message }}
          </span>
          <input type="password" placeholder="Confirm Password" v-model="formData.confirmPassword"
            class="bg-[#377AB1] text-white border-b-2 border-neutral-50 w-full px-3 py-2 mt-2" />
          <span class="text-left" v-for="error in v$.confirmPassword.$errors" :key="error.$uid">
            {{ error.$message }}
          </span>
          <label for="min-age" class="flex items-center text-white mb-4">
            <input name="metMinAge" id="min-age" type="checkbox" class="mr-3" v-model="formData.metMinAge" />
            <p>I confirm that I am at least 18 years old.</p>

          </label>
          <span class="text-left" v-for="error in v$.metMinAge.$errors" :key="error.$uid">
            {{ error.$message }}
          </span>
          <label for="terms-and-conditions" class="flex items-center text-white mb-4">
            <input type="checkbox" id="agreedToTermsAndConditions" name="terms-and-conditions" class="mr-3"
              v-model="formData.agreedToTermsAndConditions" />
            <p class="text-left">By joining and participating in the Competition, I acknowledge and confirm that I have
              read, understood and agreed to be bound by the <a href="#">Terms and Conditions</a> of the Competition.</p>

          </label>
          <span class="text-left" v-for="error in v$.metMinAge.$errors" :key="error.$uid">
            {{ error.$message }}
          </span>
          <button type="submit"
            class="bg-stone-300 transition-all duration-100 hover:bg-stone-100 text-black px-6 py-2 mt-4">
            Submit
          </button>
<!--           <p class="text-red-500">Error:</p>
          <span class="text-left" v-for="error in v$.$errors" :key="error.$uid">
            {{ error.$property }} - {{ error.$message }}
          </span> -->
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.select-wrap {
  /* border: 1px solid #777;
  border-radius: 4px; */
  padding: 0 5px;
  /* width: 200px; */
  /* background-color:#fff; */
  position: relative;
}

.select-wrap label {
  font-size: 8px;
  /* text-transform: uppercase; */
  /* color: #777; */
  padding: 0 8px;
  position: absolute;
  top: 6px;
}
</style>