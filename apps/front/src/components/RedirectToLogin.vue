<template>
  <div></div>
</template>
<script setup>

import {useAuthUser} from "~/store/auth";

const authStore = useAuthUser();

const route = useRoute();

if (!authStore.isAuthenticated && route.name !== "auth-login") {
  await navigateTo('/auth/login');
}
</script>