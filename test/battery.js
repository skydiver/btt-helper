const chai = require('chai');

const { expect } = chai;

const battery = require('../commands/battery');

describe('Battery', function() {
  describe('Mouse', function() {
    it('should return a number', async function() {
      const result = await battery.mouse({ P: false });
      expect(result).to.be.an('number');
    });

    it('should return string', async function() {
      const result = await battery.mouse({ P: true });
      expect(result).to.be.an('string');
      expect(result).to.be.include('%');
    });
  });
});
