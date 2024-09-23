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
const { calculatePercentual, formAddTransactions } = storeToRefs(transactionStoreInstance);
/* Variables Transactions */

const percentualDynamicColor = computed(() => {
    // A função transactionColor agora recebe o tipo da transação (income ou expense)
    const transactionAmount = formAddTransactions.value.transaction_amount; // Substitua 'transaction_type' pelo campo correto
    return transactionStoreInstance.percentualColor( transactionAmount );
});

</script>


<template>
    <div>
        <span class="percentualColor">{{ calculatePercentual }}%</span>
    </div>
</template>


<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components{

    .percentualColor{
        @apply text-blue-700 absolute top-[45rem] right-[16.5rem] text-6xl font-semibold;
    }

}

</style>