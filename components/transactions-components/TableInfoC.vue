<script setup lang="ts">
  import { ref } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useTransactionsStore } from '@/stores/transactions/transactionsStore';

  import type {transactionType} from '@/types/transactions/transactionModel';

  import EditInfoC from './EditInfoC.vue';
  import RemoveInfoC from './RemoveInfoC.vue';
  import EditTransactionFormC from './EditTransactionFormC.vue'; // Importar o novo componente

  const transactionStoreInstance = useTransactionsStore();
  const { filteredList } = storeToRefs(transactionStoreInstance);

  // Estado para controlar a exibição do modal
  const isModalOpen = ref(false);

  // Função para abrir o modal de edição
  const openEditModal = (transaction: transactionType) => {
    transactionStoreInstance.editTransaction(transaction);
    isModalOpen.value = true; // Abrir o modal
  };

  // Função para fechar o modal
  const closeEditModal = () => {
    isModalOpen.value = false;
  };

  

  onMounted(() => {
    transactionStoreInstance.updateFilteredList();
  });
</script>

<template>
  <div>
    <section class="mt-10 overflow-y-auto max-h-96">
      <div class="w-[100rem] bg-slate-700 p-3 text-2xl font-semibold rounded-md flex items-center justify-between ">
        <span>Description</span>
        <span>Date</span>
        <span>Amount</span>
        <span>Category</span>
        <span>Type</span>
        <span>Action</span>
      </div>

      <div v-for="(iterator) in filteredList" :key="iterator.id" class="default-style table-content"> 
        <div class="max-w-44 overflow-x-auto">
          <p class="text-xl whitespace-nowrap">{{ iterator.transaction_name }}</p>
        </div>
        
        <div class="text-xl">{{ transactionStoreInstance.formatDate(iterator.transaction_date) }}</div class="text-xl">

        <span :class="transactionStoreInstance.transactionColor(iterator)" id="amount-style">
          {{ transactionStoreInstance.formatAmounts(Number(iterator.transaction_amount)) }}
        </span>

        <span class="text-xl">{{ iterator.transaction_category }}</span>

        <span :class="transactionStoreInstance.transactionColor(iterator)" id="type-style">
          {{ iterator.transaction_type }}
        </span>

        <div class="flex flex-col text-xl">
          <span @click="openEditModal(iterator)" class="text-base cursor-pointer">
            <EditInfoC></EditInfoC>
          </span>
          <span @click="transactionStoreInstance.removeTransaction(iterator.id)" class="text-base mt-5 cursor-pointer">
            <RemoveInfoC></RemoveInfoC>
          </span>
        </div>
      </div>
    </section>

    <!-- Modal de Edição -->
    <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center z-50">
      <div class="modal-overlay bg-black opacity-50 absolute inset-0"></div>
      <div class="modal-container p-6 rounded-lg z-50">
        <EditTransactionFormC :closeModal="closeEditModal" :showModal="isModalOpen" /> <!-- Componente do formulário de edição -->
      </div>
    </div>
  </div>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

.default-style > span {
  @apply text-xl;
}

.table-content {
  @apply bg-slate-600 flex items-center rounded-md justify-between mt-20 py-3 px-3;
}

.income {
  @apply text-green-600;
}
.expense {
  @apply text-red-600;
}

#amount-style {
  @apply font-semibold;
}

#type-style {
  @apply font-semibold;
}

.modal-overlay {
  @apply fixed inset-0 bg-gray-600 opacity-75;
}

.modal-container {
  @apply relative p-4 w-96 rounded shadow-lg;
}
</style>
