const cmd = require('node-cmd');
const helpers = require('../lib/helpers');

const volume = async (options) => {
  cmd.get('osascript -e "get volume settings"', (err, data) => {
    const regex = /([0-9]{1,4})/gm;
    const output = data.trim();
    const result = output.match(regex);
    console.log(helpers.appendPercentSymbol(result[0], options.P));
  });
};

module.exports = { volume };