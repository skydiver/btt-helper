const cmd = require('node-cmd');
const helpers = require('../lib/helpers');
const WiFi = require('../lib/wifi');


const wifi = async (options) => {
  const network = await WiFi.getWiFi();
  if (!network) {
    const msg = options.T || 'No connected';
    console.log(msg);
    process.exit(1);
  }
  console.log(network);
};

const status = async (action) => {
  const network = await WiFi.getWiFi();

  if (network === false && action === 'off') {
    console.log('WiFi is already off!');
    process.exit(1);
  }

  if (network !== false && action === 'on') {
    console.log('WiFi is already on!');
    process.exit(1);
  }

  const exec = `networksetup -setairportpower en0 ${action}`;
  cmd.get(exec, (err, data) => {
    if (err) {
      helpers.handleError(`Error trying to turn WiFi ${action}`);
      process.exit(1);
    }
    console.log(`WiFi turned ${action}`);
  });
};

const toggle = async () => {
  const network = await WiFi.getWiFi();
  const action = !network ? 'on' : 'off';
  status(action);
};

module.exports = { wifi, status, toggle };