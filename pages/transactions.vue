<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
});

import InputDateInfo from '@/components/transactions-components/InputDateInfo.vue';
import TableInfoC from '@/components/transactions-components/TableInfoC.vue';

import { useAuthStore } from '@/stores/auth/authStore';
const authStoreInstance = useAuthStore();

import { useTransactionsStore } from '@/stores/transactions/transactionsStore';
const transactionStoreInstance = useTransactionsStore();

onMounted(async () => {
  // Carregar todas as transações
  await transactionStoreInstance.loadAllTransactions();

  // Aplicar filtragem se necessário
  transactionStoreInstance.updateFilteredList();
});
</script>

<template>
  <div class="transactions-body">
    <NavBarC></NavBarC>

    <div class="transactions-list">
      <InputDateInfo></InputDateInfo>
      <TableInfoC></TableInfoC>
    </div>
  </div>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

.transactions-body {
  @apply h-screen bg-slate-800;
}

.transactions-list {
  @apply mt-24 w-full flex flex-col items-center justify-between;
}
</style>
