const cmd = require('node-cmd');
const { promisify } = require('util');

const status = async () => {
  const exec = 'tmutil status';
  const getAsync = promisify(cmd.get);
  const result = await getAsync(exec);
  const regex = /^\s+Running[\s+|\D\s+]*(\d)/m;
  const match = regex.exec(result);
  return match ? match[1] : 0;
};

module.exports = { status };
