const WiFi = require('../lib/wifi');

const wifi = async options => {
  const network = await WiFi.getWiFi();
  if (!network) {
    return options.T || 'No connected';
  }
  return network;
};

const status = async action => {
  const network = await WiFi.getWiFi();

  if (network === false && action === 'off') {
    return 'WiFi is already off!';
  }

  if (network !== false && action === 'on') {
    return 'WiFi is already on!';
  }

  await WiFi.switchWiFi(action);
  return `WiFi turned ${action}`;
};

const toggle = async () => {
  const network = await WiFi.getWiFi();
  const action = !network ? 'on' : 'off';
  const result = status(action);
  return result;
};

module.exports = { wifi, status, toggle };
