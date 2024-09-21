<script setup>
 import { useAuthStore } from '@/stores/auth/authStore';
 const authStoreInstance = useAuthStore();
</script>


<template>
    <div class="navBar-body">
        
        <ul class="h-16 bg-slate-600 flex items-center justify-between">
            <div class="text-4xl font-sans font-semibold ml-8">Logo</div>

            <div class="w-[35%] mr-8 flex items-center justify-between font-sans font-semibold text-xl">

                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/auth/login">Login</NuxtLink>
                </li>
                <li>
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
        </ul>
        
    </div>
</template>


<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

.navBar-body{
    @apply
    bg-slate-800;
}
</style>