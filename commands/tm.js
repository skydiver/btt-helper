const cmd = require('../lib/async-cmd');

const status = async () => {
  const exec = 'tmutil status';
  const result = await cmd(exec);
  const regex = /^\s+Running[\s+|\D\s+]*(\d)/m;
  const match = regex.exec(result);
  const value = match ? match[1] : 0;
  return parseInt(value, 10);
};

module.exports = { status };
