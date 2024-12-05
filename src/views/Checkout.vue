<script setup lang="ts">
import { ref } from 'vue';
import { loadStripe } from '@stripe/stripe-js';

const loading = ref(false);
const error = ref<string | null>(null);

const handlePayment = async () => {
  loading.value = true;
  error.value = null;
  
  try {
    const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
    if (!stripe) throw new Error('Stripe failed to load');

    // TODO: Call your backend to create a Stripe session
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: [
          // Add cart items here
        ],
      }),
    });

    const session = await response.json();
    
    // Redirect to Stripe checkout
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      throw new Error(result.error.message);
    }
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Payment failed';
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-16">
    <h1 class="section-title">Checkout</h1>
    
    <div class="max-w-2xl mx-auto">
      <div class="bg-white shadow-md rounded-lg overflow-hidden">
        <div class="p-6">
          <h2 class="text-xl font-light uppercase tracking-wider mb-6">Order Summary</h2>
          
          <!-- Cart Items -->
          <div class="space-y-4 mb-6">
            <!-- TODO: Add cart items here -->
          </div>
          
          <!-- Total -->
          <div class="border-t pt-4">
            <div class="flex justify-between items-center text-lg font-medium">
              <span>Total</span>
              <span>$0.00</span>
            </div>
          </div>
        </div>
        
        <!-- Payment Button -->
        <div class="p-6 bg-gray-50">
          <button
            @click="handlePayment"
            :disabled="loading"
            class="w-full btn-primary disabled:opacity-50"
          >
            <span v-if="loading">Processing...</span>
            <span v-else>Proceed to Payment</span>
          </button>
          
          <p v-if="error" class="mt-4 text-red-600 text-center">
            {{ error }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>