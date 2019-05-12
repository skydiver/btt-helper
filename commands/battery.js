const cmd = require('../lib/async-cmd');
const { appendPercentSymbol } = require('../lib/helpers');

const getBattery = async (device, options) => {
  const exec = `ioreg -l | grep -A 10 "${device}" | grep '"BatteryPercent" ='`;
  const data = await cmd(exec);
  if (data === undefined) {
    return '-';
  }
  const output = data.trim();
  const regex = /([0-9]{1,4})/gm;
  const result = output.match(regex);
  return appendPercentSymbol(result[0], options.P);
};

const mouse = async options => {
  const result = await getBattery('Magic Mouse 2', options);
  return result;
};

const keyboard = async options => {
  const result = await getBattery(
    'Magic Keyboard with Numeric Keypad',
    options
  );
  return result;
};

const trackpad = async options => {
  const result = await getBattery('Magic Trackpad 2', options);
  return result;
};

module.exports = { mouse, keyboard, trackpad };
