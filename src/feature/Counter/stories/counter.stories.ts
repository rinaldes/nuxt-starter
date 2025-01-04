import type { Meta, StoryObj } from '@storybook/vue3';
import Counter from '@/feature/Counter/index.vue';
import { setActivePinia, createPinia } from 'pinia';
import { useCounterStore } from '@/feature/Counter/stores/counter';

const pinia = createPinia();
setActivePinia(pinia);

// Define the metadata for the story
const meta: Meta<typeof Counter> = {
  title: 'Components/Counter', // The title of your story in Storybook
  component: Counter, // The component being tested
  tags: ['autodocs'], // Optional: Adds documentation automatically
  decorators: [
    // Provide Pinia to the component
    () => ({
      template: '<div><story /></div>',
      setup() {
        return { pinia };
      },
    }),
  ],
};

export default meta;

// Define the template for the story
type Story = StoryObj<typeof Counter>;

// Default story
export const Default: Story = {
  render: (args) => ({
    components: { Counter },
    setup() {
      // Initialize the store
      const counter = useCounterStore();
      counter.count = 0; // Reset the count for testing
      return { args };
    },
    template: '<Counter v-bind="args" />',
  }),
};

// Story with a specific initial count
export const WithInitialCount: Story = {
  ...Default,
  args: {},
  render: (args) => ({
    components: { Counter },
    setup() {
      // Initialize the store with a specific count
      const counter = useCounterStore();
      counter.count = 10; // Set an initial count
      return { args };
    },
    template: '<Counter v-bind="args" />',
  }),
};

// Story to test the increment functionality
export const IncrementCount: Story = {
  ...Default,
  args: {},
  play: async ({ canvasElement }) => {
    // Simulate clicking the increment button
    const incrementButton = canvasElement.querySelector(
      '.increment-button',
    ) as HTMLButtonElement; // Adjust the selector
    if (incrementButton) {
      incrementButton.click();
    }
  },
};

// Story to test the decrement functionality
export const DecrementCount: Story = {
  ...Default,
  args: {},
  play: async ({ canvasElement }) => {
    // Simulate clicking the decrement button
    const decrementButton = canvasElement.querySelector(
      '.decrement-button',
    ) as HTMLButtonElement; // Adjust the selector
    if (decrementButton) {
      decrementButton.click();
    }
  },
};

// Story to test the error trigger functionality
export const TriggerError: Story = {
  ...Default,
  args: {},
  play: async ({ canvasElement }) => {
    // Simulate clicking the error button
    const errorButton = canvasElement.querySelector(
      '.error-button',
    ) as HTMLButtonElement;
    if (errorButton) {
      errorButton.click();
    }
  },
};
