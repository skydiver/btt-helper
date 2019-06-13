const brew = require('../commands/brew');

describe('Brew', () => {
  it('should return a number', async () => {
    const result = await brew.services();
    expect(typeof result).toBe('number');
  });
});
