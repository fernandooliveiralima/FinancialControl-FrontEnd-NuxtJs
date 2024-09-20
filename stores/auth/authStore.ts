import { defineStore } from 'pinia';
import { useCookie, useRuntimeConfig } from '#app';

import type { RegisterType } from '@/types/registerType'
import type { LoginType } from '@/types/loginType'

export const useAuthStore = defineStore('authStore', () => {

    let user = ref(null);
    let token = ref(useCookie('token', {maxAge: 60 * 60 * 24 * 7 })); // Expiração do Cookie: de 7 dias
    
    const register = async (userRegister: RegisterType) => {
        try {
            const config = useRuntimeConfig();
            const apiUrl: string = config.public.myValue as string; // Forçar o tipo string

            const response: any = await $fetch(`${apiUrl}/register`, {
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
            const config = useRuntimeConfig();
            const apiUrl: string = config.public.myValue as string;
            
    
            const response: any = await $fetch(`${apiUrl}/login`, {
                method: 'POST',
                body: userLogin
            });
    
            user.value = response.user;
            token.value = response.token;  // Salvando o token no cookie
    
            console.log('Login Response ->', response);
            console.log('Token após login ->', token.value); // Verificar se o token foi salvo corretamente
            console.log('Auth Store Api Url ->', `${apiUrl}`);
    
        } catch (error) {
            console.error('Erro ao fazer login:', error);
        }
    };
    

    const logout = async () => {
        try {

            const config = useRuntimeConfig();
            const apiUrl: string = config.public.myValue as string;

            const response: any = await $fetch(`${apiUrl}/logout`, {
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
