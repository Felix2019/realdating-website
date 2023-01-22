<template>
  <form
    v-if="!isSubmitted"
    @submit.prevent="submit"
    class="flex flex-col space-y-4"
  >
    <p class="text-white text-lg font-bold">Get the alpha version.</p>

    <div class="inline-flex space-x-6">
      <!-- email form -->
      <div class="">
        <input
          v-model="email"
          type="email"
          id="email"
          class="bg-secondary text-white text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Email"
          required
        />
      </div>

      <!-- os picker -->
      <select
        v-model="selectedOS"
        id="os"
        required
        class="bg-secondary text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 placeholder-white"
      >
        <option disabled selected value="">OS</option>
        <option value="android">Android</option>
        <option value="ios">IOS</option>
      </select>
    </div>

    <!-- submit button -->
    <button
      type="submit"
      class="text-white focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 bg-accent hover:bg-blue-700"
    >
      Send
    </button>
  </form>

  <p v-else class="text-white text-lg">Thank you for participating.</p>
</template>

<script lang="ts" setup>
import { doc, setDoc, collection } from "@firebase/firestore";
import { ref } from "vue";
import { db } from "../../firebase";
import { nanoid } from "nanoid";

const email = ref("");
const selectedOS = ref("");
const isSubmitted = ref(false);

const users = collection(db, "testusers");

const submit = async () => {
  const newUser = {
    email: email.value,
    os: selectedOS.value,
  };

  await setDoc(doc(users, nanoid()), newUser)
    .then(() => {
      isSubmitted.value = true;
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
};
</script>
