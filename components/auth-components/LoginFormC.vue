<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useAuthStore } from '@/stores/auth/authStore';
const authStoreInstance = useAuthStore();

import type { LoginType } from '@/types/loginType';

const { token, user } = storeToRefs(authStoreInstance);

const formLogin = reactive<LoginType>({
    email: '',
    password: ''
});

const submitLogin = async () => {
    await authStoreInstance.login(formLogin)
    formLogin.email = '';
    formLogin.password = '';
}

onMounted(() => {
    console.log('token antes da auth ->', token.value);
    console.log('user antes da auth ->', user.value);
    
})
</script>


<template>
    <div>

        <div class="form-container">

            <form class="bg-slate-700 rounded-md" @submit.prevent="submitLogin">
                <div class="form-inputs">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" v-model="formLogin.email" placeholder="Email Login" />
                </div>

                <div class="form-inputs">
                    <label for="password">Login</label>
                    <input type="password" name="password" id="password" v-model="formLogin.password"
                        placeholder="Password Login" />
                </div>

                <button type="submit">Login</button>

            </form>

        </div>

    </div>
</template>


<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
    .form-container {
        @apply h-full flex flex-col items-center justify-center;
    }

    form{
        @apply
        h-64
        flex
        flex-col
        items-start
        justify-between
        px-10
        py-3;
    }
    .form-inputs{
        @apply
        flex
        flex-col;
    }
    .form-inputs > label{
        @apply
        text-white
        text-lg
        font-semibold;
    }
    .form-inputs > input{
        @apply
        w-64
        bg-slate-600
        p-1
        outline-none
        rounded-md
        mt-1;
    }
    form > button{
        @apply
        bg-blue-700
        px-16
        py-1
        rounded-md
        font-semibold
        text-white
        text-lg;
    }
}

@layer utilities{
    .form-inputs>input{
        @apply placeholder:text-gray-400;
    }
}
</style>