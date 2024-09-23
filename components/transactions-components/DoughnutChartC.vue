<script setup lang="ts">
/* Pinia Imports */
import { storeToRefs } from 'pinia';
/* Pinia Imports */

/* External Libraries */
import { Chart } from 'chart.js/auto';
/* External Libraries */

import {useTransactionsStore} from '@/stores/transactions/transactionsStore';

/* Import Components */
import percentualValueC from './percentualValueC.vue';
/* Import Components */

/* Variables Pinia */
const transactionStoreInstance = useTransactionsStore();

/* Variables Pinia */

    const {
        calculatePercentual, 
        filteredList, 
        incomes, 
        expenses
    } = storeToRefs(transactionStoreInstance);

/* Variables Chartjs */
const myChart = ref < HTMLCanvasElement | null > (null);
let doughnutChart: Chart<"doughnut", number[], string> | null = null;
/* Variables Chartjs */

/* Functions ------------------------------------------------------------------------------------------------------------------------------------------------------- */

/* Function Create Doughnut Chart */
const createChart = () => {
    if (myChart.value && !doughnutChart) {
        const ctx = myChart.value.getContext('2d');
        if (!ctx) return;

        doughnutChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Income', 'Expense'],
                datasets: [{
                    data: [0,0],  // Inicializando com valores padrão
                    borderWidth: 0,
                    hoverOffset: 5,
                    backgroundColor: ['green', 'crimson'],
                }]
            },
            options: {
                responsive: true,
                cutout: 130
            }
        });
    }
};
/* Function Create Doughnut Chart */

/* Function Update Doughnut Chart */
const updateDoughnutChart = ()=>{
    if(doughnutChart){
        let totalIncome = 0;
        let totalExpense = 0;

        filteredList.value.forEach((transaction) => {
            if (Number(transaction.transaction_amount) > 0) {
                    totalIncome += Number(transaction.transaction_amount);
            } else {
                totalExpense += Math.abs(Number(transaction.transaction_amount));
            }
        });

        doughnutChart.data.datasets[0].data = [totalIncome, totalExpense];
        doughnutChart.update();
    }
};
/* Function Update Doughnut Chart */


/* Functions ------------------------------------------------------------------------------------------------------------------------------------------------------- */

/* Vue Functions */
watch([filteredList, incomes, expenses], ()=>{
    updateDoughnutChart();
} );

onMounted(() => {
    createChart();
    updateDoughnutChart();
})
/* Vue Functions */

</script>

<template>
    <div class="percentual-value">

        <section class="doughnut-chart">
            <div class="chart">
                <percentualValueC></percentualValueC>
                <canvas ref="myChart"></canvas>
            </div>
        </section>

    </div>
</template>


<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;


@layer components{

    .doughnut-chart{
        @apply
        
        h-[23rem]
        w-[40rem]
        flex items-center justify-center;
    }

    .percentual{
        @apply
        absolute
        top-[45rem]
        text-xl
        font-semibold
        text-white;
    }

    .chart{
        @apply
    
        h-full
        w-full
        flex items-center justify-center;
    }
}
</style>