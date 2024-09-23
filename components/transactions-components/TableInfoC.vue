<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import {useTransactionsStore} from '@/stores/transactions/transactionsStore';
  
  import EditInfoC from './EditInfoC.vue';
  import RemoveInfoC from './RemoveInfoC.vue';

  const transactionStoreInstance = useTransactionsStore();
  const {filteredList, formAddTransactions, total, incomes, expenses } = storeToRefs(transactionStoreInstance);

  

  onMounted(()=>{
    transactionStoreInstance.updateFilteredList();
  })
</script>


<template>
  <div>

    <section class="mt-10">
      <div class="w-[100rem] bg-slate-700 p-3 text-2xl font-semibold rounded-md flex items-center justify-between ">
        <span>description</span>
        <span>Date</span>
        <span>Amount</span>
        <span>Category</span>
        <span>Type</span>
        <span>Action</span>
      </div>
      <div v-for="(iterator) in filteredList" :key="iterator.id" class="default-style table-content"> <!-- V-for -->

        <span>{{ iterator.transaction_name }}</span>

        <div class="text-xl">{{ transactionStoreInstance.formatDate(iterator.transaction_date) }}</div class="text-xl">

        <span 
          :class="transactionStoreInstance.transactionColor(iterator)" 
          id="amount-style">
          {{ transactionStoreInstance.formatAmounts(Number(iterator.transaction_amount)) }}
        </span>

        <span>{{ iterator.transaction_category }}</span>

        <span 
          :class="transactionStoreInstance.transactionColor(iterator)"
          id="type-style">
          {{ iterator.transaction_type }}
        </span>

        <div class="flex flex-col text-xl">
          <span @click="transactionStoreInstance.editTransaction(iterator)" class="text-base cursor-pointer">
            <EditInfoC></EditInfoC>
          </span>
          <span @click="transactionStoreInstance.removeTransaction(iterator.id)" class="text-base mt-5 cursor-pointer">
            <RemoveInfoC></RemoveInfoC>
          </span>
        </div>

      </div>
    </section>

    <!-- Formulário para Edição -->
    <form @submit.prevent="transactionStoreInstance.updateTransaction()" v-if="transactionStoreInstance.currentTransaction">
            <h3>Edit Transaction</h3>
            <div>
                <label for="name">Name</label>
                <input type="text" v-model="transactionStoreInstance.currentTransaction.transaction_name" />
            </div>
            <div>
                <label for="date">Date</label>
                <input type="date" v-model="transactionStoreInstance.currentTransaction.transaction_date" />
            </div>
            <div>
                <label for="category">Category</label>
                <input type="text" v-model="transactionStoreInstance.currentTransaction.transaction_category" />
            </div>
            <div>
                <label for="amount">Amount</label>
                <input 
                    step="0.01" 
                    type="number" 
                    placeholder="0,00" 
                    v-model.number="transactionStoreInstance.currentTransaction.transaction_amount" />
            </div>
            <div>
                <label for="type">Type</label>
                <select v-model="transactionStoreInstance.currentTransaction.transaction_type">
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
            </div>
            <input class="cursor-pointer" type="submit" value="Update Transaction">
        </form>

    </div>
</template>


<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

.default-style > span{
  @apply text-2xl;
}

.table-content{
  @apply
  w-[100rem] bg-slate-600 flex items-center rounded-md justify-between mt-20 py-3 px-3;
}

.income{
  @apply text-green-600;
}
.expense{
  @apply text-red-600;
}

#amount-style{
  @apply font-semibold;
}

#type-style{
  @apply font-semibold;
}
</style>