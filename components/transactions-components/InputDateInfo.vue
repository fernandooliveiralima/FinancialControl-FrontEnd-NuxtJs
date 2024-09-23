<script setup>
import { storeToRefs } from 'pinia';
import { useTransactionsStore } from '@/stores/transactions/transactionsStore';

const transactionStoreInstance = useTransactionsStore();
const { formAddTransactions } = storeToRefs(transactionStoreInstance);
</script>


<template>
  <div class="input-date">
    <input type="date" name="" id="" v-model="formAddTransactions.transaction_date"/>
  </div>
</template>


<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;


@layer components {

  .input-date {
    @apply w-[100rem];
  }

  .input-date>input[type="date"] {
    @apply w-40 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500;
  }

}
</style>