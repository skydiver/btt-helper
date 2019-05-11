const chai = require('chai');

const { expect } = chai;

const volume = require('../commands/volume');

describe('Volume', function() {
  it('should return a number', async function() {
    const result = await volume.volume({ P: false });
    expect(result).to.be.an('number');
  });

  it('should return string', async function() {
    const result = await volume.volume({ P: true });
    expect(result).to.be.an('string');
    expect(result).to.be.include('%');
  });
});
