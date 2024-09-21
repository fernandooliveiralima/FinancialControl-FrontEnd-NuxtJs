<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})

import { storeToRefs } from 'pinia';



import InfoCardsC from '@/components/transactions-components/InfoCardsC.vue';
import LineChartC from '~/components/transactions-components/LineChartC.vue';
import FormTransactionsInfoC from '@/components/transactions-components/FormTransactionsInfoC.vue';
import DoughnutChartC from '@/components/transactions-components/DoughnutChartC.vue';

import { useAuthStore } from '@/stores/auth/authStore';
const authStoreInstance = useAuthStore();

import { useTransactionsStore } from '@/stores/transactions/transactionsStore';
const transactionsStoreInstance = useTransactionsStore();
const { count } = storeToRefs(transactionsStoreInstance);


</script>


<template>
  <div class="dashboard-body">
    <NavBarC></NavBarC>

    <div class="transactions-info">

      <div class="transactions-components">

        <InfoCardsC></InfoCardsC>
        
        <LineChartC></LineChartC>

      </div>

      <div class=" w-full flex items-center justify-between">
        
        <FormTransactionsInfoC></FormTransactionsInfoC>

        <DoughnutChartC></DoughnutChartC>
        
      </div>

    </div>
    
    
  </div>
</template>


<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

.dashboard-body {
  @apply h-screen bg-slate-800;
}

.transactions-info{
  @apply
  /* border border-pink-500 */
  flex flex-col items-center;
}

.transactions-components{
  @apply w-full 
   
  flex items-center justify-between;
}
</style>