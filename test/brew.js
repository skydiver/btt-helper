const chai = require('chai');

const { expect } = chai;

const brew = require('../commands/brew');

describe('Brew', function() {
  it('should return a number', async function() {
    const result = await brew.services();
    expect(parseInt(result)).to.be.an('number');
  });
});
