const volume = require('../commands/volume');

describe('Volume', function() {
  it('should return a number', async function() {
    const result = await volume.volume({ P: false });
    expect(typeof result).toBe('number');
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(100);
  });

  it('should return string', async function() {
    const result = await volume.volume({ P: true });
    expect(typeof result).toBe('string');
    expect(result).toMatch('%');
  });
});
