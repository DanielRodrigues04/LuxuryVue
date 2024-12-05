<script setup lang="ts">
import { computed } from 'vue';
import type { Product } from '../types/product';

const props = defineProps<{
  product: Product;
}>();

const formattedPrice = computed(() => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(props.product.price);
});
</script>

<template>
  <div class="group">
    <div class="relative overflow-hidden">
      <img 
        :src="product.imageUrl" 
        :alt="product.title" 
        class="w-full aspect-[3/4] object-cover transform group-hover:scale-105 transition-transform duration-700"
      >
      <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300">
        <button class="absolute bottom-4 left-4 right-4 btn-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          View Details
        </button>
      </div>
    </div>
    <div class="mt-4 text-center">
      <h3 class="text-lg font-light uppercase tracking-wider">{{ product.title }}</h3>
      <p class="mt-1 text-gray-600 font-light">{{ formattedPrice }}</p>
    </div>
  </div>
</template>