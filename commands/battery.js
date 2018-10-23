const cmd = require('node-cmd');

const mouse = async () => {
  const exec = 'ioreg -l | grep -A 10 "Magic Mouse 2" | grep \'"BatteryPercent" =\'';
  cmd.get(exec, (err, data) => {
    const output = data.trim();
    if (output === '') {
      console.log('-');
      process.exit(1);
    }
    const regex = /([0-9]{1,4})/gm;
    const res = output.match(regex);
    console.log(res[0]);
  });
};

const keyboard = async () => {
  const exec = 'ioreg -l | grep -A 10 "Magic Keyboard with Numeric Keypad" | grep \'"BatteryPercent" =\'';
  cmd.get(exec, (err, data) => {
    const output = data.trim();
    if (output === '') {
      console.log('-');
      process.exit(1);
    }
    const regex = /([0-9]{1,4})/gm;
    const res = output.match(regex);
    console.log(res[0]);
  });
};

module.exports = { mouse, keyboard };