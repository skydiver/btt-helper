const tm = require('../commands/tm');

describe('Time Machine', function() {
  it('should return a number', async function() {
    const result = await tm.status();
    expect(typeof result).toBe('number');
    expect([0, 1]).toContain(result);
  });
});
