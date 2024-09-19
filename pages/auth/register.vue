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
    <div>

        <form @submit.prevent="submitRegister">
            <div>
                <label for="name"></label>
                <input type="text" name="name" id="name" v-model="formRegister.name" placeholder="Register Name" />
            </div>

            <div>
                <label for="email"></label>
                <input type="email" name="email" id="email" v-model="formRegister.email" placeholder="Register Email" />
            </div>

            <div>
                <label for="password"></label>
                <input type="password" name="password" id="password" v-model="formRegister.password"
                    placeholder="Register Password" />
            </div>

            <div>
                <label for="password_confirmation"></label>
                <input type="password" name="password_confirmation" id="password_confirmation"
                    v-model="formRegister.password_confirmation" placeholder="Register Password Confirmation" />
            </div>

            <button type="submit">Register</button>
        </form>

    </div>
</template>


<style scoped></style>