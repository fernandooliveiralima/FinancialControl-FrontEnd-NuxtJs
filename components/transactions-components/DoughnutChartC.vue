<script setup lang="ts">
/* External Libraries */
import { Chart } from 'chart.js/auto';
/* External Libraries */

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
                    data: [10, 5],  // Inicializando com valores padrão
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

/* Functions ------------------------------------------------------------------------------------------------------------------------------------------------------- */

/* Vue Functions */
onMounted(() => {
    createChart();
})
/* Vue Functions */

</script>

<template>
    <div class="percentual-value">

        <section class="doughnut-chart">
            <div class="chart">
                <div class="percentual">Percentual Value</div>
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