<script setup lang="ts">
defineProps<{
  shape: 'circle' | 'square' | 'triangle';
  delay: number;
  duration: number;
  size: number;
  position: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
}>();
</script>

<template>
  <div 
    class="absolute opacity-30"
    :class="[shape]"
    :style="{
      ...position,
      width: `${size}px`,
      height: `${size}px`,
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`
    }"
  ></div>
</template>

<style scoped>
.circle {
  @apply rounded-full bg-white;
  animation: float infinite ease-in-out;
}

.square {
  @apply bg-white rotate-45;
  animation: float-rotate infinite ease-in-out;
}

.triangle {
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  @apply bg-white;
  animation: float infinite ease-in-out;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-20px) scale(1.1);
  }
}

@keyframes float-rotate {
  0%, 100% {
    transform: translateY(0) rotate(45deg) scale(1);
  }
  50% {
    transform: translateY(-20px) rotate(90deg) scale(1.1);
  }
}
</style>