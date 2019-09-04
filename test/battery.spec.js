const battery = require('../commands/battery');

describe('Battery', function() {
  describe('Mouse', function() {
    it('should return numeric battery level', async function() {
      const result = await battery.mouse({ P: false });
      expect(typeof result).toBe('number');
    });

    it('should return battery level with percentage', async function() {
      const result = await battery.mouse({ P: true });
      expect(typeof result).toBe('string');
      expect(result).toMatch('%');
    });
  });

  describe('Keyboard', function() {
    it('should return a number', async function() {
      const result = await battery.keyboard({ P: false });
      expect(typeof result).toBe('number');
    });

    it('should return string', async function() {
      const result = await battery.keyboard({ P: true });
      expect(typeof result).toBe('string');
      expect(result).toMatch('%');
    });
  });

  describe('Trackpad', function() {
    it('should return a number', async function() {
      const result = await battery.trackpad({ P: false });
      expect(typeof result).toBe('number');
    });

    it('should return string', async function() {
      const result = await battery.trackpad({ P: true });
      expect(typeof result).toBe('string');
      expect(result).toMatch('%');
    });
  });
});
