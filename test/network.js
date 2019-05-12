const chai = require('chai');

const { expect } = chai;

const network = require('../commands/network');

describe('Network', function() {
  describe('WiFi', function() {
    it('should return a string', async function() {
      const result = await network.wifi({});
      expect(result).to.be.an('string');
    });
  });

  describe('ON/OFF', function() {
    it('should return a string', async function() {
      const result = await network.status('on');
      expect(result).to.be.an('string');
    });
  });

  describe('Toggle', function() {
    it('should return a string', async function() {
      const result = await network.toggle();
      expect(result).to.be.an('string');
    });
  });
});
