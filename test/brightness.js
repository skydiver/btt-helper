const chai = require('chai');

const { expect } = chai;

const brightness = require('../commands/brightness');

describe('Brightness', function() {
  it('should return a number', async function() {
    const result = await brightness.level({ P: false });
    expect(result).to.be.an('number');
  });

  it('should return string', async function() {
    const result = await brightness.level({ P: true });
    expect(result).to.be.an('string');
    expect(result).to.be.include('%');
  });
});
