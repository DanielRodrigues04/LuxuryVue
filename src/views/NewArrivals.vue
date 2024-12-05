<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Product } from '../types/product';
import ProductCard from '../components/ProductCard.vue';

const newArrivals = ref<Product[]>([]);
const loading = ref(true);

onMounted(async () => {
  // TODO: Implement Firebase fetch for new arrivals
  loading.value = false;
});
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-16">
    <h1 class="section-title">New Arrivals</h1>
    
    <div v-if="loading" class="text-center py-12">
      <div class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-black border-r-transparent"></div>
    </div>
    
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      <ProductCard
        v-for="product in newArrivals"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>