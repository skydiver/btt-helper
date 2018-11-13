const WiFi = require('node-wifi');
const helpers = require('../lib/helpers');


const getWiFi = async () => {
  WiFi.init({
    iface: null
  });
  return WiFi.getCurrentConnections().then(function(current) {
    if (current.length === 0) {
      return false;
    }
    return current[0].ssid;
  }).catch(function(error) {
    helpers.handleError('Error getting network connection');
    process.exit(1);
  });
};

module.exports = { getWiFi };