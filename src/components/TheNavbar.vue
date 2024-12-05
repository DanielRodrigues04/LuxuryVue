<script setup lang="ts">
import { ref } from 'vue';
import { Bars3Icon, XMarkIcon, ShoppingBagIcon } from '@heroicons/vue/24/outline';

const isMenuOpen = ref(false);
const navItems = [
  { name: 'New Arrivals', path: '/new-arrivals' },
  { name: 'Collections', path: '/collections' },
  { name: 'About', path: '/about' }
];
</script>

<template>
  <nav class="bg-white border-b border-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-20">
        <div class="flex items-center">
          <router-link to="/" class="text-2xl font-light tracking-widest uppercase">
            Luxe
          </router-link>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link 
            v-for="item in navItems" 
            :key="item.name"
            :to="item.path" 
            class="text-sm uppercase tracking-wider hover:text-gray-600 transition-colors duration-300"
          >
            {{ item.name }}
          </router-link>
          <router-link 
            to="/checkout"
            class="p-2 hover:text-gray-600 transition-colors duration-300"
          >
            <ShoppingBagIcon class="h-6 w-6" />
          </router-link>
        </div>

        <!-- Mobile menu button -->
        <div class="flex items-center md:hidden">
          <button 
            @click="isMenuOpen = !isMenuOpen"
            class="p-2"
          >
            <Bars3Icon v-if="!isMenuOpen" class="h-6 w-6" />
            <XMarkIcon v-else class="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="md:hidden">
      <div class="pt-2 pb-3 space-y-1">
        <router-link 
          v-for="item in navItems"
          :key="item.name"
          :to="item.path"
          class="block px-4 py-2 text-sm uppercase tracking-wider hover:bg-gray-50"
          @click="isMenuOpen = false"
        >
          {{ item.name }}
        </router-link>
        <router-link 
          to="/checkout"
          class="block px-4 py-2 text-sm uppercase tracking-wider hover:bg-gray-50"
          @click="isMenuOpen = false"
        >
          Cart
        </router-link>
      </div>
    </div>
  </nav>
</template>