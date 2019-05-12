const WiFi = require('node-wifi-fixed');
const cmd = require('node-cmd');
const helpers = require('../lib/helpers');

const getWiFi = async () => {
  WiFi.init({
    iface: null,
  });
  return WiFi.getCurrentConnections()
    .then(function(current) {
      if (current.length === 0) {
        return false;
      }
      return current[0].ssid;
    })
    .catch(function(error) {
      helpers.handleError('Error getting network connection');
      process.exit(1);
    });
};

const switchWiFi = async action => {
  const exec = `networksetup -setairportpower en0 ${action}`;
  cmd.get(exec, (err, data) => {
    if (err) {
      helpers.handleError(`Error trying to turn WiFi ${action}`);
      process.exit(1);
    }
  });
};

module.exports = { getWiFi, switchWiFi };
