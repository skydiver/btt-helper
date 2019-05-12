const cmd = require('../lib/async-cmd');

const services = async () => {
  const exec = '/usr/local/bin/brew services list';
  const data = await cmd(exec);
  const total = (data.match(/started/g) || []).length;
  return total;
};

module.exports = { services };
