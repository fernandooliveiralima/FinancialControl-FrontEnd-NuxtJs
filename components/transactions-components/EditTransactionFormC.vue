<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useTransactionsStore } from '@/stores/transactions/transactionsStore';

// Acessar a store de transações
const transactionStoreInstance = useTransactionsStore();
const { currentTransaction } = storeToRefs(transactionStoreInstance);

/* Imports Toast */
import { useToast } from 'vue-toastification';

const toast = useToast();
/* Imports Toast */

const props = defineProps({
    closeModal:{
        type: Function,
        required: true
    },
    showModal:{
        type: Boolean,
        required: true
    }
})

// Função para atualizar a transação
const updateTransaction = () => {
    transactionStoreInstance.updateTransaction();
    props.closeModal();
    props.showModal
    
};



</script>

<template>
    <div v-if="currentTransaction"> <!-- Verificação se currentTransaction não é null -->
        <form class="form" @submit.prevent="updateTransaction()">
            <h3>Edit Transaction</h3>
            <div class="form-inputs">
                <label for="name">Name</label>
                <input type="text" v-model="currentTransaction.transaction_name" />
            </div>
            <div class="form-inputs">
                <label for="date">Date</label>
                <input type="date" v-model="currentTransaction.transaction_date" />
            </div>
            <div class="form-inputs">
                <label for="category">Category</label>
                <input type="text" v-model="currentTransaction.transaction_category" />
            </div>
            <div class="form-inputs">
                <label for="amount">Amount</label>
                <input step="0.01" type="number" placeholder="0,00"
                    v-model.number="currentTransaction.transaction_amount" />
            </div>
            <div class="form-inputs">
                <label for="type">Type</label>
                <select class="rounded bg-slate-600" v-model="currentTransaction.transaction_type">
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
            </div>
            <button type="submit">Update Transaction</button>
        </form>
    </div>
    
</template>



<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components{
    .form{
        @apply
        bg-slate-700 rounded-md h-[30rem] flex flex-col items-start justify-between px-10 py-3;
    }

    .form-inputs{
        @apply flex flex-col;
    }

    .form-inputs>label {
        @apply text-white text-lg font-semibold;
    }

    .form-inputs>input {
        @apply w-64 bg-slate-600 p-1 outline-none rounded-md mt-1;
    }

    form>button {
        @apply bg-blue-700 px-16 py-1 rounded-md font-semibold text-white text-base;
    }

}


</style>