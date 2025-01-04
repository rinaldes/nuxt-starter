<script setup lang="ts">
  import { useCounterStore } from './stores/counter';
  const counter = useCounterStore();

  const triggerError = () => {
    throw new Error('Test Sentry Error Tracking');
  };
</script>
<template>
  <UCard>
    <h2 class="mb-4 text-xl">Counter Example</h2>
    <div class="text-center">
      <NuxtImg
        src="/images/counter.jpg"
        width="64"
        height="64"
        class="mx-auto mb-4"
      />
      <p class="mb-4 text-2xl">Count: {{ counter.count }}</p>
      <div>
        <UButton @click="counter.increment">Increment</UButton>
        <UButton color="secondary" @click="counter.decrement"
          >Decrement</UButton
        >
        <UButton color="error" @click="triggerError">Test Error</UButton>
      </div>
    </div>
  </UCard>
</template>
