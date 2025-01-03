import { describe, it, expect } from 'vitest';

describe('Basic Test Suite', () => {
  it('should pass basic arithmetic', () => {
    expect(1 + 1).toBe(2);
  });

  it('should handle string concatenation', () => {
    expect('Hello ' + 'World').toBe('Hello World');
  });

  it('should work with arrays', () => {
    const array = [1, 2, 3];
    expect(array).toHaveLength(3);
    expect(array).toContain(2);
  });

  it('should work with objects', () => {
    const obj = { name: 'Test', value: 42 };
    expect(obj).toHaveProperty('name');
    expect(obj.value).toBe(42);
  });

  it('should work with async functions', async () => {
    const result = await Promise.resolve('success');
    expect(result).toBe('success');
  });
});
