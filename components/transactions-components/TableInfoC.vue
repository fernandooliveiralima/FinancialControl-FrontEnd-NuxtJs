<script setup>
  import EditInfoC from './EditInfoC.vue';
  import RemoveInfoC from './RemoveInfoC.vue';
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
      <div class="default-style w-[100rem] bg-slate-600 flex items-center rounded-md justify-between mt-20 py-3 px-3"> <!-- V-for -->
        <span>salario</span>
        <span>2024-02-05</span>
        <span>R$ 2.500</span>
        <span>General</span>
        <span>Income</span>
        <div class="flex flex-col text-xl">
          <span class="text-base">
            <EditInfoC></EditInfoC>
          </span>
          <span class="text-base mt-5">
            <RemoveInfoC></RemoveInfoC>
          </span>
        </div>
      </div>
    </section>

    </div>
</template>


<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

.default-style > span{
  @apply text-2xl;
}
</style>