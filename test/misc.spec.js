const cmd = require('../lib/async-cmd');

describe('Brew', () => {
  it('should return undefined while running an invalid command', async () => {
    const data = await cmd('invalid command');
    expect(data).toBe(undefined);
  });
});
