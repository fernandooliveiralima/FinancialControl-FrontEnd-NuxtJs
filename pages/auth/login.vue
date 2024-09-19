<script setup lang="ts">
    import { storeToRefs } from 'pinia';
    import { useAuthStore } from '@/stores/auth/authStore';
    const authStoreInstance = useAuthStore();

    import type { LoginType } from '@/types/loginType'

    const {token} = storeToRefs(authStoreInstance);

    const formLogin = reactive<LoginType>({
        email: '',
        password: ''
    });

    const submitLogin = async ()=>{
      await authStoreInstance.login(formLogin)
    }

    onMounted(()=>{
        console.log('token', token.value)
    })
</script>


<template>
    <div>
    
        <form @submit.prevent="submitLogin">
            <div>
                <label for="email"></label>
                <input type="email" name="email" id="email" v-model="formLogin.email" placeholder="Email Login"/>
            </div>

            <div>
                <label for="password"></label>
                <input type="password" name="password" id="password" v-model="formLogin.password" placeholder="Password Login"/>
            </div>

            <button type="submit">Login</button>
        </form>
        <NuxtLink to="/dashboard">Dashboard</NuxtLink>
        <br>
        <NuxtLink to="/">Home</NuxtLink>
    </div>
</template>


<style scoped>
    
</style>