<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})

import { useAuthStore } from '@/stores/auth/authStore';
const authStoreInstance = useAuthStore();
</script>


<template>
  <div class="transactions-body">
    <NavBarC></NavBarC> 
    

    
  </div>
</template>


<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

.transactions-body{
    @apply
    h-screen
    bg-slate-800;
}
</style>
