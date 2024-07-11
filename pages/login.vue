<template>
  <main class="wrapper flex">
    <div class="flex-col max-w-md m-auto padding__v-xl">
      <Type variant="headline-large" class="mb-4">Restricted content</Type>
      <Type variant="body-large" class="mb-8 text-onSurfaceSubdued"
                >Sorry, this content is currently restricted.  Please enter the password to continue.</Type
              >
      <form @submit.prevent="submitPassword" class="m-w-96">
        <Type variant="label-medium" :class="{ 'text-error' : showError || showEmptyError }" class="mb-2">Password</Type>
        <span class="text-field mb-8 block">
          <input 
            v-model="password" 
            type="password" 
            placeholder="Enter password" 
            :class="{ 'border-error shake' : showError || showEmptyError }"
            class="p-4 border border-onSurfaceVariantBorder rounded-xl w-full hover:border-onSurface focus:outline-none focus:border-onSurface focus:ring-1 focus:ring-onSurface" 
          />
          <span class="support mt-2 block ">
            <Type variant="body-small" v-if="showError" class="error-message">Invalid password. Please try again</Type>
            <Type variant="body-small" v-if="showEmptyError" class="error-message">Please enter a password</Type>
          </span>
        </span>
        <div class="button-group flex flex-col flex-col-reverse md:flex-row justify-end gap-x-2 gap-y-2">
          <button @click="goBack" type="submit" class="button button-secondary">Go back</button>
          <button type="submit" class="button button-primary">Submit</button>
        </div>
      </form>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const password = ref('');
const showError = ref(false); // Controls the visibility of the error message for incorrect password
const showEmptyError = ref(false); // Controls the visibility of the error message for empty input

const correctPassword = 'application2024'; // Your predefined password
const accessGrantedKey = 'accessGrantedForRoomControl';

function submitPassword() {
  // Hide the error messages on every submit attempt
  showError.value = false;
  showEmptyError.value = false;

  if (password.value === '') {
    showEmptyError.value = true; // Show error if password is empty
  } else if (password.value === correctPassword) {
    sessionStorage.setItem(accessGrantedKey, 'true');
    const redirectPath = route.query.redirect || '/';
    router.push(redirectPath);
  } else {
    showError.value = true; // Show error if password is incorrect
  }
}

function goBack(event) {
  event.preventDefault(); // Prevent the default behavior
  router.back();
}
</script>

<style scoped>

@keyframes shake {
  0% { transform: translateX(0) }
 25% { transform: translateX(5px) }
 50% { transform: translateX(-5px) }
 75% { transform: translateX(5px) }
 100% { transform: translateX(0) }
}

.shake {
  animation: shake 0.3s ease-in-out;
}

.error-message {
  @apply text-error;
  opacity: 1; /* Make error message fully visible by default */
  transition: opacity 0.5s ease-in-out;
}

.button {
  display: inline-block;
  @apply px-8 py-4;
  @apply rounded-full;
  @apply text-base;
  @apply tracking-tight;
  @apply font-medium;
  cursor: pointer;
  transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.button-primary {
  @apply bg-backgroundVariant;
  @apply text-onBackgroundVariant;

  &:hover {
    @apply bg-onBackgroundVariantBorder;
    @apply text-onBackgroundVariant;
  }
}

.button-secondary {
  @apply bg-surface;
  @apply text-onSurface;

  &:hover {
    @apply bg-surfaceVariant;
    @apply text-onSurfaceVariant;
  }
}
</style>