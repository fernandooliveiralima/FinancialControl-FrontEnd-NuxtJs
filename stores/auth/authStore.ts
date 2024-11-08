import { defineStore } from 'pinia';
import { useCookie, useRuntimeConfig, useRouter } from '#app';

import type { RegisterType } from '@/types/registerType';
import type { LoginType } from '@/types/loginType';
import type { UserType } from '@/types/asyncDataTypes/userModel';

/* Imports Toast */
import { useToast } from 'vue-toastification';

const toast = useToast();
/* Imports Toast */

export const useAuthStore = defineStore('authStore', () => {

    let user = ref( useCookie('user', { maxAge: 60 * 60 * 24 * 7 }) );// 7 dias de expiração
    
    let token = ref(useCookie('token', {maxAge: 60 * 60 * 24 * 7 })); // Expiração do Cookie: de 7 dias
    
    const router = useRouter(); // Obtenha o roteador do Nuxt
    
    
    const register = async (userRegister: RegisterType) => {
        try {
            /* const config = useRuntimeConfig();
            const apiUrl: string = config.public.myValue as string; // Forçar o tipo string */

            const response: any = await $fetch(`http://localhost:8000/api/register`, {
                method: 'POST',
                body: userRegister
            });

            user.value = response
            
            toast.success('Registered User!');

            console.log('Register Response ->', response);
        } catch (error: unknown) {
            console.error('Erro ao registrar:', error);
        }
    };

    const login = async (userLogin: LoginType) => {
        try {
            
            const response: any = await $fetch(`http://localhost:8000/api/login`, {
                method: 'POST',
                body: userLogin
            });
    
            user.value = response.user;
            token.value = response.token;  // Salvando o token no cookie
            
            router.push('/dashboard');
            if(response.messageErrorLogin === 'The Provide Credentials Are Incorrect'){
                toast.error('Invalid Credentials!');
            }else{
                toast.success('Logged in user!'); //toast.success('Logged in user!');
            }

        } catch (error: unknown) {
            toast.error('User does not exist!');
            console.error('Erro ao fazer login:', error);
        }
    };
    

    const logout = async () => {
        try {

            /* const config = useRuntimeConfig();
            const apiUrl: string = config.public.myValue as string; */

            const response: any = await $fetch(`http://localhost:8000/api/logout`, {
                method: 'POST',
                headers:{
                    'Authorization': `Bearer ${token.value}`
                }
                
            })

            user.value = null;
            token.value = null;
            
            toast.success(`${response.message}`);

            router.push('/auth/login');

        } catch (error: any) {
            console.error('Erro ao fazer login:', error);
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
