import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { Product } from '../types/product';

export const useCartStore = defineStore('cart', () => {
  const items = ref<Array<{ product: Product; quantity: number }>>([]);
  
  const isEmpty = computed(() => items.value.length === 0);
  
  const total = computed(() => {
    return items.value.reduce((sum, item) => {
      return sum + (item.product.price * item.quantity);
    }, 0);
  });
  
  function addItem(product: Product, quantity: number = 1) {
    const existingItem = items.value.find(item => item.product.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      items.value.push({ product, quantity });
    }
  }
  
  function removeItem(productId: string) {
    items.value = items.value.filter(item => item.product.id !== productId);
  }
  
  function clearCart() {
    items.value = [];
  }
  
  return {
    items,
    isEmpty,
    total,
    addItem,
    removeItem,
    clearCart
  };
});