<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
});

import RegisterFormC from '@/components/auth-components/RegisterFormC.vue';

</script>


<template>
    <div class="login-body">

        <NavBarC></NavBarC>

        <div class="h-[93%] flex items-center justify-center">

            <RegisterFormC></RegisterFormC>
        </div>


    </div>
</template>


<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

.login-body {
    @apply h-screen bg-slate-800;
}


</style>