<template>
  <div>
    <NuxtErrorBoundary @error="mHandleError">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </NuxtErrorBoundary>
  </div>
</template>
<script setup lang="ts">
import { watchEffect } from 'vue';
import { useAuthUser } from '~/store/auth';

const authStore = useAuthUser();

const route = useRoute();

const mHandleError = (e) => {
  logger.error('Primary error boundary', e);
};

// Doing this here instead than in the middleware allow reactivity on the auth user
watchEffect(async () => {
  if (authStore.isPending) {
    return;
  }
  if (!authStore.isAuthenticated && route.name !== 'auth-login') {
    await navigateTo('/auth/login');
  }
  if (authStore.isAuthenticated && route.name === 'auth-login') {
    await navigateTo('/');
  }
});
</script>
