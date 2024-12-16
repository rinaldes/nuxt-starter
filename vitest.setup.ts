import { config } from '@vue/test-utils';
import { vi } from 'vitest';

// Mock Nuxt components
config.global.stubs = {
  NuxtLink: true,
  NuxtPage: true,
  NuxtLayout: true,
};

// Mock Nuxt composables
vi.mock(
  '#app',
  (): Record<string, () => unknown> => ({
    useRouter: () => ({
      push: vi.fn(),
      replace: vi.fn(),
    }),
    definePageMeta: vi.fn(),
    useRuntimeConfig: () => ({}),
  }),
);
