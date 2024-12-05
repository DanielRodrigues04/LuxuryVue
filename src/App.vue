<script setup lang="ts">
import TheNavbar from './components/TheNavbar.vue';
import HeroSection from './components/HeroSection.vue';
</script>

<template>
  <div class="min-h-screen">
    <TheNavbar />
    <main>
      <HeroSection />
      <RouterView />
    </main>
    <footer class="bg-black text-white py-12">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <div class="text-2xl font-light tracking-widest uppercase mb-8">Luxe</div>
        <div class="flex justify-center space-x-8 mb-8">
          <a href="#" v-for="link in ['About', 'Contact', 'Terms', 'Privacy']" :key="link"
            class="text-sm uppercase tracking-wider hover:text-gray-300 transition-colors duration-300">
            {{ link }}
          </a>
        </div>
        <div class="text-sm text-gray-400">
          © {{ new Date().getFullYear() }} Luxe. All rights reserved.
        </div>
      </div>
    </footer>
  </div>
</template>