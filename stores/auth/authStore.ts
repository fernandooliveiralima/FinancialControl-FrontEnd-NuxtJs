import { defineStore } from 'pinia';
import { useCookie, useRuntimeConfig } from '#app';

import type { RegisterType } from '@/types/registerType'
import type { LoginType } from '@/types/loginType'

export const useAuthStore = defineStore('authStore', () => {

    let user = ref(null);
    let token = ref(useCookie('token'));
    
    const register = async (userRegister: RegisterType) => {
        try {
            const config = useRuntimeConfig();
            const apiUrl: string = config.public.API_URL as string; // Forçar o tipo string

            const response: any = await $fetch('/register', {
                baseURL: apiUrl,
                method: 'POST',
                body: userRegister
            });

            user.value = response
            
            console.log('Register Response ->', response);

        } catch (error) {
            console.error('Erro ao registrar:', error);
        }
    };

    const login = async (userLogin: LoginType) => {
        try {
            /* const config = useRuntimeConfig();
            const apiUrl: string = config.public.apiBase as string; */
    
            const response: any = await $fetch('http://localhost:8000/api/login', {
                method: 'POST',
                body: userLogin
            });
    
            user.value = response.user;
            token.value = response.token;  // Salvando o token no cookie
    
            console.log('Login Response ->', response);
            console.log('Token após login ->', token.value); // Verificar se o token foi salvo corretamente
    
        } catch (error) {
            console.error('Erro ao fazer login:', error);
        }
    };
    

    const logout = async () => {
        try {

            /* const config = useRuntimeConfig();
            const apiUrl: string = config.public.API_URL as string; // Forçar o tipo string */

            const response: any = await $fetch('http://localhost:8000/api/logout', {
                method: 'POST',
                headers:{
                    'Authorization': `Bearer ${token.value}`
                }
                
            })

            user.value = null;
            token.value = null;
            
            console.log('Logout Response ->', response);

        } catch (error) {
            
        }
    };

    return {
        user,
        token,

        register,
        login,
        logout,
    };
});
