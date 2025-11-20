<script setup>
import { Analytics } from '@vercel/analytics/vue';
</script>

<template>
  <Analytics />
  <router-view />
  <Toast />
</template>

<style scoped></style>
