import { describe, it, expect } from 'vitest';
import sort from './sort';

describe('sort function', () => {
  it('should return "STANDARD" for neither bulky nor heavy packages', () => {
    expect(sort(99.9, 99.9, 99.9, 19.9)).toBe("STANDARD");
  });
  it('should return "SPECIAL" for heavy packages', () => {
    expect(sort(10, 10, 10, 20)).toBe("SPECIAL");
  });
  it('should return "SPECIAL" for bulky but not heavy packages', () => {
    expect(sort(100.1, 100.1, 100.1, 19.9)).toBe("SPECIAL");
  });

  it('should return "SPECIAL" for heavy but not bulky packages', () => {
    expect(sort(99.9, 99.9, 99.9, 20)).toBe("SPECIAL");
  });
  
  it('should return "SPECIAL" for packages with volume equal 1,000,000', () => {
    expect(sort(100, 100, 100, 10)).toBe("SPECIAL");
  });
  it('should return "SPECIAL" for packages with weight equal 20', () => {
    expect(sort(10, 10, 10, 20)).toBe("SPECIAL");
  });
  it('should return "REJECTED" for bulky and heavy packages', () => {
    expect(sort(101, 101, 101, 21)).toBe("REJECTED");
  });

  
});

