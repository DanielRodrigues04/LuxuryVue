<script setup lang="ts">
import FloatingShape from './animations/FloatingShape.vue';
import AnimatedText from './animations/AnimatedText.vue';
</script>

<template>
  <section class="relative h-[80vh] bg-gray-900 overflow-hidden">
    <div class="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-50"></div>
    
    <!-- Animated Shapes -->
    <FloatingShape 
      shape="circle"
      :size="40"
      :delay="0"
      :duration="4"
      :position="{ top: '20%', left: '10%' }"
    />
    <FloatingShape 
      shape="square"
      :size="30"
      :delay="1"
      :duration="5"
      :position="{ top: '60%', right: '15%' }"
    />
    <FloatingShape 
      shape="triangle"
      :size="35"
      :delay="2"
      :duration="6"
      :position="{ bottom: '20%', left: '20%' }"
    />
    <FloatingShape 
      shape="circle"
      :size="25"
      :delay="0.5"
      :duration="7"
      :position="{ top: '30%', right: '25%' }"
    />
    
    <!-- Content -->
    <div class="relative h-full flex items-center justify-center text-white text-center">
      <div class="max-w-3xl px-4">
        <h1 class="text-5xl md:text-6xl font-light tracking-wider uppercase mb-6 flex flex-col items-center gap-4">
          <AnimatedText text="Discover" :delay="0.2" />
          <AnimatedText text="Luxury" :delay="0.4" />
        </h1>
        <div class="overflow-hidden">
          <p class="text-lg md:text-xl font-light mb-8 animate-slide-up" style="animation-delay: 0.6s">
            Curated collection of premium digital products
          </p>
        </div>
        <div class="overflow-hidden">
          <router-link 
            to="/products" 
            class="btn-primary inline-block animate-slide-up" 
            style="animation-delay: 0.8s"
          >
            Explore Collection
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-slide-up {
  animation: slideUp 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  transform: translateY(100%);
}

@keyframes slideUp {
  to {
    transform: translateY(0);
  }
}
</style>