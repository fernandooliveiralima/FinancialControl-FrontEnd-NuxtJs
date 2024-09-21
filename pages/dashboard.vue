<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})

import { storeToRefs } from 'pinia';

import { useAuthStore } from '@/stores/auth/authStore';
const authStoreInstance = useAuthStore();

import { useTransactionsStore } from '@/stores/transactions/transactionsStore';
const transactionsStoreInstance = useTransactionsStore();
const { count } = storeToRefs(transactionsStoreInstance);

const addCount = () => {
  count.value++;
}
</script>


<template>
  <div class="dashboard-body">
    <NavBarC></NavBarC>
    
  </div>
</template>


<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

.dashboard-body {
  @apply h-screen bg-slate-800;
}
</style>