<script setup lang="ts">
/* External Libraries */
import { Chart } from 'chart.js/auto';
/* External Libraries */

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
        labels: ['2024-02-23', '2023-04-17'], // Inicialmente vazio
        datasets: [{
          label: 'Behavior Transactions',
          data: [5, 10, 15],
          fill: false,
          backgroundColor: [],
          tension: 0.1,
          borderColor: ['green']
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

/* Functions */

/* Vue Functions */
onMounted(()=>{
  createLineChart();
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