import { config } from '@vue/test-utils';
import { vi } from 'vitest';

config.global.stubs = {
  NuxtLink: true,
  NuxtPage: true,
  NuxtLayout: true,
};

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
