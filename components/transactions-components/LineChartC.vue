<script setup lang="ts">

import {storeToRefs} from 'pinia';
import {useTransactionsStore} from '@/stores/transactions/transactionsStore';

/* External Libraries */
import { Chart } from 'chart.js/auto';
/* External Libraries */

/* Variables Pinia */
const transactionStoreInstance = useTransactionsStore();
const {filteredList, total, incomes, expenses } = storeToRefs(transactionStoreInstance);
/* Variables Pinia */

/* Variables ChartJs */
const myChart = ref < HTMLCanvasElement | null > (null);
let lineChart: Chart<"line", number[], string> | null = null;
/* Variables ChartJs */


/* Functions */

/* Function Create Line Chart */
const createLineChart = () => {
  if (myChart.value) {
    const ctx = myChart.value;
    lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [], // Inicialmente vazio
        datasets: [{
          label: 'Behavior Transactions',
          data: [],
          fill: false,
          backgroundColor: [],
          tension: 0.1,
          borderColor: []
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            ticks: { display: false },
            grid: { color: '#000' }
          },
          x: { grid: { color: '#000' } }
        }
      }
    });
  }
}
/* Function Create Line Chart */

/* Function Update Doughnut Chart */
const updateLineChart = () => {
        if (lineChart && filteredList.value) {
            let allTransactions = [...filteredList.value];
            allTransactions.sort((a, b) => Number(new Date(a.transaction_date)) - Number(new Date(b.transaction_date)));

            let totalAmount = 0;
            let datesTransactions: Array<string> = [];
            let amountsTransactions: Array<number> = [];
            let borderColorGraph: Array<string> = [];

            allTransactions.forEach(transaction => {
                datesTransactions.push(transaction.transaction_date);
                totalAmount += Number(transaction.transaction_amount);
                amountsTransactions.push(totalAmount);

                // Define a cor da linha com base no tipo de transação
                if (transaction.transaction_type === 'income') {
                    borderColorGraph.push('green');
                } else if (transaction.transaction_type === 'expense') {
                    borderColorGraph.push('red');
                }
            });

            lineChart.data.labels = datesTransactions;
            lineChart.data.datasets[0].data = amountsTransactions;
            lineChart.data.datasets[0].borderColor = borderColorGraph;

            lineChart.update();
        }
    }
/* Function Update Doughnut Chart */

/* Functions */

/* Vue Functions */

/* watch() */
watch([filteredList, total, incomes, expenses], () => {
        updateLineChart();
    });
/* watch() */

onMounted(()=>{
  createLineChart();
  updateLineChart();
})
/* Vue Functions */
</script>


<template>
  <div class="transactions-info-total">

    <section class="line-chart">
      <div class="chart">
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

  .transactions-info-total {
    @apply h-[30rem] w-[50rem] border border-pink-500 px-2;
  }

  .line-chart{
    @apply
    
    h-full
    w-full
    flex items-center justify-center;
  }

  .chart{
    @apply
    
    h-full
    w-full
    flex items-center justify-center;
  }

}


</style>