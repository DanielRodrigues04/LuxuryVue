import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const user = ref<any>(null);
  
  const isAuthenticated = computed(() => !!user.value);
  
  function setUser(newUser: any) {
    user.value = newUser;
  }
  
  function clearUser() {
    user.value = null;
  }
  
  return {
    user,
    isAuthenticated,
    setUser,
    clearUser
  };
});