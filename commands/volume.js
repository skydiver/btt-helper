const cmd = require('../lib/async-cmd');
const { appendPercentSymbol } = require('../lib/helpers');

const volume = async options => {
  const exec = 'osascript -e "get volume settings"';
  const data = await cmd(exec);
  const regex = /([0-9]{1,4})/gm;
  const output = data.trim();
  const result = output.match(regex);
  return appendPercentSymbol(result[0], options.P);
};

module.exports = { volume };
