<script setup>

</script>


<template>
    <div>

        <div class="cards-container">

            <div class="card-default-style balance-card">
                <h4>Balance</h4>
                <span>0,00</span>
            </div>

            <div class="card-default-style income-card">
                <h4>Income</h4>
                <span>0,00</span>
            </div>

            <div class="card-default-style expense-card">
                <h4>Expense</h4>
                <span>0,00</span>
            </div>

        </div>

    </div>
</template>


<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Cards Container */
.cards-container {
    @apply w-[130%] 
    
    flex items-center justify-between
    px-2;
}

/* Cards Container */

/* Default Style */
.card-default-style {
    @apply 
    h-[20rem] w-64 
    flex flex-col items-start justify-between 
    p-2
    rounded-md;
}
/* Default Style */

/* Balance Card */

.balance-card {
    @apply bg-gradient-to-t from-blue-500 to-black;
}

.balance-card h4 {
    @apply text-blue-500 text-4xl font-semibold;
}

.balance-card span {
    @apply text-white text-2xl;
}

/* Balance Card */

/* Income Card */
.income-card {
    @apply bg-gradient-to-t from-green-500 to-black;
}

.income-card h4 {
    @apply text-green-500 text-4xl font-semibold;
}

.income-card span {
    @apply text-white text-2xl;
}

/* Income Card */

/* Expense Card */
.expense-card {
    @apply bg-gradient-to-t from-red-500 to-black;
}

.expense-card h4 {
    @apply text-red-500 text-4xl font-semibold;
}

.expense-card span {
    @apply text-white text-2xl;
}

/* Expense Card */
</style>