<script setup lang="ts">
    definePageMeta({
      middleware: 'auth'
    })

    import { useAuthStore } from '@/stores/auth/authStore';
    const authStoreInstance = useAuthStore();
</script>


<template>
    <div>
      Dashboard Page
      <NuxtLink to="/">Voltar Para Home</NuxtLink>
      <button @click="authStoreInstance.logout()">Logout</button>
    </div>
</template>


<style scoped>
    
</style>