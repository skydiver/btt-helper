const cmd = require('node-cmd');
const helpers = require('../lib/helpers');

const level = async (options) => {
  cmd.get('ioreg -c AppleBacklightDisplay | grep brightness', (err, data) => {
    const regex = /"brightness"=\{"max"=([0-9]{1,4}),"min"=([0-9]{1,4}),"value"=([0-9]{1,4})/;
    const output = data.trim();
    const result = output.match(regex);
    const value = Math.round(result[3] * 100 / result[1]);
    console.log(helpers.appendPercentSymbol(value, options.P));
  });
};

module.exports = { level };