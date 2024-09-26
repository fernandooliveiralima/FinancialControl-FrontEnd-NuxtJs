<script setup lang="ts">
/* Pinia Imports */
import { storeToRefs } from 'pinia';
/* Pinia Imports */

/* Imports Toast */
import { useToast } from 'vue-toastification';

const toast = useToast();
/* Imports Toast */


/* Variables Pinia */
import { useTransactionsStore } from '@/stores/transactions/transactionsStore';

const transactionStoreInstance = useTransactionsStore();
const { formAddTransactions, filteredList, containerAllTransactions, percentualColor } = storeToRefs(transactionStoreInstance);
/* Variables Pinia */

/* Actions */

/* Action Save Transaction */
const saveTransaction = () => {
    if (formAddTransactions.value.transaction_name === '' || formAddTransactions.value.transaction_amount === undefined) {
        toast.warning('Fill in all the fields!');
        return;

    } else if (formAddTransactions.value.transaction_type === 'expense' && formAddTransactions.value.transaction_amount) {
        formAddTransactions.value.transaction_amount *= -1;
    }

    const transaction = {
        id: formAddTransactions.value.id++,
        transaction_name: formAddTransactions.value.transaction_name,
        transaction_date: formAddTransactions.value.transaction_date,
        transaction_category: formAddTransactions.value.transaction_category,
        transaction_amount: formAddTransactions.value.transaction_amount,
        transaction_type: formAddTransactions.value.transaction_type
    };

    transactionStoreInstance.addTransactions(transaction);

    // Limpar o formulário
    formAddTransactions.value.transaction_name = '';
    formAddTransactions.value.transaction_amount = undefined;
    formAddTransactions.value.transaction_type = 'income';

    toast.success('Transaction Added!');
    
};
/* Action Save Transaction */

/* Actions */

watch([filteredList], ()=>{
    console.log('percentualColor ->', percentualColor.value);
    console.log('store filteredList ->', filteredList.value);
} )
</script>


<template>
    <div>

        <form @submit.prevent="saveTransaction" class="bg-slate-700 mt-16 ml-3 rounded-md">

            <div class="w-full flex items-center justify-between">
                <span class="text-3xl">Form Transactions</span>
                <div class="w-64 flex items-center justify-between">
                    <div class="section-income">
                        <label class="text-2xl text-green-600 font-semibold" for="income">Income</label>
                        <input class=" ml-1 accent-green-600" type="radio" name="income" id="income" value="income"
                            v-model="formAddTransactions.transaction_type" />
                    </div>

                    <div class="section-expense">
                        <label class="text-2xl text-red-600 font-semibold" for="expense">Expense</label>
                        <input class="ml-1 accent-red-600" type="radio" name="expense" id="expense" value="expense"
                            v-model="formAddTransactions.transaction_type" />
                    </div>

                </div>
            </div>


            <div class="w-[70rem] flex items-center justify-between">

                <div class="form-inputs">
                    <label for="name">Description</label>
                    <input type="text" name="name" id="name" placeholder="description"
                        v-model="formAddTransactions.transaction_name" />
                </div>

                <div class="form-inputs">
                    <label for="amount">Amount</label>
                    <input type="number" name="amount" id="amount" placeholder="Amount" min="0" step="0.01"
                        v-model.number="formAddTransactions.transaction_amount" />
                </div>

                <div class="form-inputs">
                    <label for="date">Date</label>
                    <input type="date" name="date" id="date" placeholder="Register Password"
                        v-model="formAddTransactions.transaction_date" />
                </div>


            </div>
            <button class="w-full" type="submit">Add Transaction</button>
        </form>

    </div>
</template>


<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
    .form-container {
        @apply h-full flex flex-col items-center justify-center;
    }

    form {
        @apply h-[20rem] flex flex-col items-start justify-between px-10 py-3;
    }

    .form-inputs {
        @apply flex flex-col;
    }

    .form-inputs>label {
        @apply text-white text-lg font-semibold;
    }

    .form-inputs>input {
        @apply w-64 bg-slate-500 p-1 outline-none rounded-md mt-1;
    }

    form>button {
        @apply bg-blue-700 px-16 py-1 rounded-md font-semibold text-white text-lg;
    }
}

@layer utilities {
    .form-inputs>input {
        @apply placeholder:text-black;
    }
}
</style>