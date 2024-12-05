<script setup lang="ts">
defineProps<{
  text: string;
  delay?: number;
}>();
</script>

<template>
  <div class="overflow-hidden">
    <div 
      class="animate-slide-up"
      :style="{ animationDelay: `${delay || 0}s` }"
    >
      {{ text }}
    </div>
  </div>
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