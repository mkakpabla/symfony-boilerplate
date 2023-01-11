<template>
  <div>
    <NuxtErrorBoundary @error="mHandleError">
      <RedirectToLogin />
      <NuxtPage />
    </NuxtErrorBoundary>
  </div>
</template>
<script setup>
  const mHandleError = (e) => {
    console.log("Primary error boundary");
  }
</script>