const isValid = require('date-fns/isValid');
const parseISO = require('date-fns/parseISO');

const tm = require('../commands/tm');

describe('Time Machine', function() {
  test('should return a number', async function() {
    const result = await tm.status();
    expect(typeof result).toBe('number');
    expect([0, 1]).toContain(result);
  });

  test('should return latest backup date', async function() {
    const result = await tm.latestbackup();
    const isValidDate = isValid(parseISO(result));
    expect(typeof result).toBe('string');
    expect(isValidDate).toBe(true);
  });

  test('should return latest backup with custom date', async function() {
    const result = await tm.latestbackup({ F: 'yyyy-MM-dd' });
    const isValidDate = isValid(parseISO(result));
    expect(typeof result).toBe('string');
    expect(isValidDate).toBe(true);
  });
});
