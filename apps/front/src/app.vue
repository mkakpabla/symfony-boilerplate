<template>
  <div>
    <NuxtPage />
  </div>
</template>
<script setup>
  const {data, pending, error} = await useFetch("/api/1.0/auth/me");
  console.log(data, error, pending);
</script>