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
const { calculatePercentual, formAddTransactions, percentualColor } = storeToRefs(transactionStoreInstance);
/* Variables Transactions */

const percentualDynamicColor = computed(() => {
    // A função transactionColor agora recebe o tipo da transação (income ou expense)
    const transactionAmount = formAddTransactions.value.transaction_amount; // Substitua 'transaction_type' pelo campo correto
    return transactionStoreInstance.percentualColor( transactionAmount );
});


</script>


<template>
    <div>
        <div id="percentualStyle" :class="percentualColor">{{ calculatePercentual }} <span>%</span> </div>
    </div>
</template>


<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components{

    #percentualStyle{
        @apply
        absolute 
        top-[45rem] right-[16.5rem] 
        text-6xl font-semibold
        flex items-end;
    }

    .percentualColor > span{
        @apply text-5xl font-bold;
    }
    
    .income{
        @apply text-[green];
    }
    .expense{
        @apply text-[crimson];
    }

}

</style>