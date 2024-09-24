import { useAuthStore } from '@/stores/auth/authStore';
import { storeToRefs } from 'pinia';

export default defineNuxtRouteMiddleware((to, from) => {
  const authStoreInstance = useAuthStore();
  const { token } = storeToRefs(authStoreInstance);

  // Se o usuário já estiver logado e tentar acessar a página de login
  if (token.value && to.path === '/auth/login') {
    return navigateTo('/dashboard'); // Redireciona para o dashboard ou outra rota adequada
  }

  // Se o usuário já estiver logado e tentar acessar a página de registro
  if (token.value && to.path === '/auth/register') {
    return navigateTo('/dashboard'); // Redireciona para o dashboard ou outra rota adequada
  }

  // Se o usuário não estiver autenticado e tentar acessar uma rota protegida, exceto o registro
  if (!token.value && to.path !== '/auth/login' && to.path !== '/auth/register') {
    return navigateTo('/auth/login'); // Redireciona para a página de login se a rota for protegida
  }
});
