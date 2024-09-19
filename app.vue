<script setup lang="ts">
  import { useAuthStore } from '@/stores/auth/authStore';
  import { storeToRefs } from 'pinia';


  const authStoreInstance = useAuthStore();
  const {  } = storeToRefs(authStoreInstance);

  
</script>


<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>


<style scoped>
  
</style>