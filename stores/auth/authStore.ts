import { defineStore } from 'pinia';
import { useCookie, useRuntimeConfig, useRouter } from '#app';

import type { RegisterType } from '@/types/registerType'
import type { LoginType } from '@/types/loginType'

export const useAuthStore = defineStore('authStore', () => {

    let user = ref(null);
    let token = ref(useCookie('token', {maxAge: 60 * 60 * 24 * 7 })); // Expiração do Cookie: de 7 dias
    const router = useRouter(); // Obtenha o roteador do Nuxt
    let loggedIn = ref(false);
    
    const register = async (userRegister: RegisterType) => {
        try {
            /* const config = useRuntimeConfig();
            const apiUrl: string = config.public.myValue as string; // Forçar o tipo string */

            const response: any = await $fetch(`http://localhost:8000/api/register`, {
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
            const apiUrl: string = config.public.myValue as string; */
            
    
            const response: any = await $fetch(`http://localhost:8000/api/login`, {
                method: 'POST',
                body: userLogin
            });
    
            user.value = response.user;
            token.value = response.token;  // Salvando o token no cookie
            loggedIn.value = true;
    
            console.log('Login Response ->', response);
            console.log('Token após login ->', token.value); // Verificar se o token foi salvo corretamente
            //console.log('Auth Store Api Url ->', `${apiUrl}`);
            console.log('User após o login', user.value);
            console.log('LoggedIn após o login', loggedIn.value);

            router.push('/dashboard');
    
        } catch (error) {
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
            loggedIn.value = false;
            
            console.log('Logout Response ->', response);
            console.log('Token após logout ->', token.value);
            console.log('User após o logout ->', user.value);

        } catch (error) {
            
        }
    };

    return {
        user,
        token,
        loggedIn,

        register,
        login,
        logout,
    };
});
