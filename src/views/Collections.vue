<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const collections = ref([
  { id: 1, name: 'Digital Art', image: '/src/assets/image/Digital Art.jpg' },
  { id: 2, name: 'E-Books', image: '/src/assets/image/ebooks.png' },
  { id: 3, name: 'Music', image: '/src/assets/image/music.jpg' },
  { id: 4, name: 'Templates', image: '/src/assets/image/template.jpg' },
  { id: 5, name: 'Fashion clothing', image: '/src/assets/image/Fashionclothing.webp' },
  { id: 6, name: 'Sports apparel', image: '/src/assets/image/sportsApparel.jpg' }
]);

// Função para redirecionar para a página de produtos da coleção
const goToCollection = (id: number) => {
  router.push(`/collection/${id}`);
};



</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-16">
    <h1 class="section-title">Collections</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div 
        v-for="collection in collections" 
        :key="collection.id"
        class="group relative h-[300px] overflow-hidden"
      >
      <img 
          :src="collection.image" 
          :alt="collection.name"
          class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          @click="goToCollection(collection.id)"  
        >
        <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h3 class="text-white text-2xl font-light uppercase tracking-wider">
            {{ collection.name }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>
