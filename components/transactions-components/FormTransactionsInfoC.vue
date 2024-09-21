<script setup>

</script>


<template>
    <div>

        <form class="bg-slate-700 mt-16 ml-3 rounded-md">

            <div class="w-full flex items-center justify-between">
                <span class="text-3xl">Form Transactions</span>
                <div class="w-64 flex items-center justify-between">
                    <div class="section-income">
                        <label class="text-2xl text-green-600 font-semibold" for="income">Income</label>
                        <input class=" ml-1 accent-green-600" type="radio" name="income" id="income" value="income">
                    </div>

                    <div class="section-income">
                        <label class="text-2xl text-red-600 font-semibold" for="income">Expense</label>
                        <input class="ml-1 accent-red-600" type="radio" name="income" id="income" value="income">
                    </div>
                    
                </div>
            </div>


            <div class="w-[70rem] flex items-center justify-between">

                <div class="form-inputs">
                    <label for="name">Description</label>
                    <input type="text" name="name" id="name" placeholder="description" />
                </div>
    
                <div class="form-inputs">
                    <label for="amount">Amount</label>
                    <input type="number" name="amount" id="amount" placeholder="Amount" min="0" step="0.01"/>
                </div>
    
                <div class="form-inputs">
                    <label for="date">Date</label>
                    <input type="date" name="date" id="date" placeholder="Register Password" />
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