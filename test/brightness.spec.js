const brightness = require('../commands/brightness');

describe('Brightness', function() {
  it('should return a number', async function() {
    const result = await brightness.level({ P: false });
    expect(typeof result).toBe('number');
  });

  it('should return string', async function() {
    const result = await brightness.level({ P: true });
    expect(typeof result).toBe('string');
    expect(result).toMatch('%');
  });
});
