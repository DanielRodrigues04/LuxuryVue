<script setup lang="ts">
import { onMounted } from 'vue';
import { useProductStore } from '../stores/productStore';
import ProductCard from './ProductCard.vue';

const productStore = useProductStore();

onMounted(() => {
  productStore.fetchProducts();
});
</script>

<template>
  <section class="py-16 px-4">
    <h2 class="section-title">Featured Products</h2>
    
    <div v-if="productStore.loading" class="text-center py-12">
      <div class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-black border-r-transparent"></div>
    </div>
    
    <div v-else-if="productStore.error" class="text-center text-red-600 py-12">
      {{ productStore.error }}
    </div>
    
    <div v-else class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      <ProductCard
        v-for="product in productStore.products"
        :key="product.id"
        :product="product"
      />
    </div>
  </section>
</template>