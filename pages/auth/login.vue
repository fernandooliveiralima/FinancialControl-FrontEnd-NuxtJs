<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
});

import LoginFormC from '@/components/auth-components/LoginFormC.vue';


</script>


<template>
    <div class="login-body">

        <NavBarC></NavBarC>

        
        <div class="h-[93%] flex items-center justify-center">

            <LoginFormC></LoginFormC>
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