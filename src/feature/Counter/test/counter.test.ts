import { describe, test, expect, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useCounterStore } from '@/feature/Counter/stores/counter';

describe('Counter Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test('increments counter', () => {
    const counter = useCounterStore();
    expect(counter.count).toBe(0);
    counter.increment();
    expect(counter.count).toBe(1);
  });

  test('decrements counter', () => {
    const counter = useCounterStore();
    expect(counter.count).toBe(0);
    counter.decrement();
    expect(counter.count).toBe(-1);
  });
});
