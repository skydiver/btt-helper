const cmd = require('../lib/async-cmd');
const { appendPercentSymbol } = require('../lib/helpers');

const level = async options => {
  const exec = 'ioreg -c AppleBacklightDisplay | grep brightness';
  const data = await cmd(exec);
  const regex = /"brightness"=\{"max"=([0-9]{1,4}),"min"=([0-9]{1,4}),"value"=([0-9]{1,4})/;
  const output = data.trim();
  const result = output.match(regex);
  const value = Math.round((result[3] * 100) / result[1]);
  return appendPercentSymbol(value, options.P);
};

module.exports = { level };
