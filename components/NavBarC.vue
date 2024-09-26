<script setup>
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/auth/authStore';
const authStoreInstance = useAuthStore();

const { user } = storeToRefs(authStoreInstance);

import UserC from '@/components/auth-components/UserC.vue';

onMounted(()=>{
    
})
</script>


<template>
    <div class="navBar-body">

        <ul class="h-16 w-[100%] bg-slate-600 flex items-center justify-between">
            <div class="text-4xl font-sans font-semibold ml-8">Logo</div>

            <div class="w-[50%] mr-8 flex items-center justify-between font-sans font-semibold text-xl">

                <div class="w-[80%] flex items-center justify-between">

                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li v-if="!user">
                        <NuxtLink to="/auth/login">Login</NuxtLink>
                    </li>
                    <li v-if="!user">
                        <NuxtLink to="/auth/register">Register</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/" @click="authStoreInstance.logout()">Logout</NuxtLink>
                    </li>

                    <li>
                        <NuxtLink to="/dashboard">Dashboard</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/transactions">Transactions</NuxtLink>
                    </li>

                </div>

                <li v-if="user" class="w-[10%] flex items-center justify-between">
                    <small class="text-black">{{ user.name }}</small>
                    <small>
                        <UserC></UserC>
                    </small>
                </li>

            </div>

        </ul>

    </div>
</template>


<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

.navBar-body {
    @apply bg-slate-800;
}
</style>