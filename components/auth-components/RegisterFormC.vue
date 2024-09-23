<script setup lang="ts">
import { useAuthStore } from '@/stores/auth/authStore';

import type { RegisterType } from '@/types/registerType';

const authStoreInstance = useAuthStore();

const formRegister = reactive<RegisterType>({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
});

const submitRegister = async () => {
    await authStoreInstance.register(formRegister)
};
</script>


<template>
    <div class="form-container">


        <form class="" @submit.prevent="submitRegister">
            <div class="form-inputs">
                <label for="name"></label>
                <input type="text" name="name" id="name" v-model="formRegister.name" placeholder="Register Name" />
            </div>

            <div class="form-inputs">
                <label for="email"></label>
                <input type="email" name="email" id="email" v-model="formRegister.email" placeholder="Register Email" />
            </div>

            <div class="form-inputs">
                <label for="password"></label>
                <input type="password" name="password" id="password" v-model="formRegister.password"
                    placeholder="Register Password" />
            </div>

            <div class="form-inputs">
                <label for="password_confirmation"></label>
                <input type="password" name="password_confirmation" id="password_confirmation"
                    v-model="formRegister.password_confirmation" placeholder="Register Password Confirmation" />
            </div>

            <button type="submit">Register</button>
        </form>

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

    form {
        @apply bg-slate-700 rounded-md h-[20rem] flex flex-col items-start justify-between px-10 py-3;
    }

    .form-inputs {
        @apply flex flex-col;
    }

    .form-inputs>label {
        @apply text-white text-lg font-semibold;
    }

    .form-inputs>input {
        @apply w-64 bg-slate-600 p-1 outline-none rounded-md mt-1;
    }

    form>button {
        @apply bg-blue-700 px-16 py-1 rounded-md font-semibold text-white text-lg;
    }
}

@layer utilities{
    .form-inputs>input{
        @apply placeholder:text-gray-400;
    }
}
</style>