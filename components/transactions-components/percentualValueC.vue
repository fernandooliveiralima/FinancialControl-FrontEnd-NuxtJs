<script setup>
/* Pinia Imports */
import { storeToRefs } from 'pinia';
/* Pinia Imports */

/* App Imports */
import { useTransactionsStore } from '@/stores/transactions/transactionsStore';
/* App Imports */

/* Variables Pinia */
const transactionStoreInstance = useTransactionsStore();
/* Variables Pinia */

/* Variables Transactions */
const { calculatePercentual } = storeToRefs(transactionStoreInstance);
/* Variables Transactions */
</script>


<template>
    <div>
        <ul>
            <li>{{ calculatePercentual }}%</li>
        </ul>
    </div>
</template>


<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>