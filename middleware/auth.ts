
import { useAuthStore } from '@/stores/auth/authStore';
import { storeToRefs } from 'pinia';

export default defineNuxtRouteMiddleware( (to, from)=>{
    const authStoreInstance = useAuthStore();
    const { token } = storeToRefs(authStoreInstance);

    if(!token.value){
        return navigateTo('/auth/login');
    }

})