const cmd = require('node-cmd');

const services = async () => {
  const brew = '/usr/local/bin/brew services list';
  cmd.get(brew, (err, data) => {
    const total = (data.match(/started/g) || []).length;
    console.log(total);
  });
};

module.exports = { services };