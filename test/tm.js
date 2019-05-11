const chai = require('chai');

const { expect } = chai;

const tm = require('../commands/tm');

describe('Time Machine', function() {
  it('should return a number', async function() {
    const result = await tm.status();
    expect(parseInt(result)).to.be.within(0, 1);
  });
});
