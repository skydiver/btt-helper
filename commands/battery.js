const cmd = require('node-cmd');
const helpers = require('../lib/helpers');

const mouse = async (options) => {
  const exec = 'ioreg -l | grep -A 10 "Magic Mouse 2" | grep \'"BatteryPercent" =\'';
  cmd.get(exec, (err, data) => {
    const output = data.trim();
    if (output === '') {
      console.log('-');
      process.exit(1);
    }
    const regex = /([0-9]{1,4})/gm;
    const result = output.match(regex);
    console.log(helpers.appendPercentSymbol(result[0], options.P));
  });
};

const keyboard = async (options) => {
  const exec = 'ioreg -l | grep -A 10 "Magic Keyboard with Numeric Keypad" | grep \'"BatteryPercent" =\'';
  cmd.get(exec, (err, data) => {
    const output = data.trim();
    if (output === '') {
      console.log('-');
      process.exit(1);
    }
    const regex = /([0-9]{1,4})/gm;
    const result = output.match(regex);
    console.log(helpers.appendPercentSymbol(result[0], options.P));
  });
};

const trackpad = async (options) => {
  const exec = 'ioreg -l | grep -A 10 "Magic Trackpad 2" | grep \'"BatteryPercent" =\'';
  cmd.get(exec, (err, data) => {
    const output = data.trim();
    if (output === '') {
      console.log('-');
      process.exit(1);
    }
    const regex = /([0-9]{1,4})/gm;
    const result = output.match(regex);
    console.log(helpers.appendPercentSymbol(result[0], options.P));
  });
};

module.exports = { mouse, keyboard, trackpad };