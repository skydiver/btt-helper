const cmd = require('node-cmd');
const { promisify } = require('util');

const asyncCmd = async exec => {
  const getAsync = promisify(cmd.get);
  const result = await getAsync(exec);
  return result;
};

module.exports = asyncCmd;
