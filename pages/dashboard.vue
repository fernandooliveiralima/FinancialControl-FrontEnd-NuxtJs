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
      <br>
      <button @click="authStoreInstance.logout()">Logout</button>
      <br><br>
      <div>{{ $config.public.myValue || 'No Value' }}</div>
    </div>
</template>


<style scoped>
    
</style>