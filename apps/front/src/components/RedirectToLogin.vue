<template>
  <div></div>
</template>
<script setup>

import {useAuthUser} from "~/store/auth";
import {watchEffect} from "vue";

const authStore = useAuthUser();

const route = useRoute();

watchEffect(async () => {
  if (!authStore.isPending && !authStore.isAuthenticated && route.name !== "auth-login") {
    await navigateTo('/auth/login');
  }
})

</script>