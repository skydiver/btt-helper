const cmd = require('node-cmd');

const level = async () => {
  cmd.get('ioreg -c AppleBacklightDisplay | grep brightness', (err, data, stderr) => {
    const regex = /"brightness"=\{"max"=([0-9]{1,4}),"min"=([0-9]{1,4}),"value"=([0-9]{1,4})/;
    const output = data.trim();
    const result = output.match(regex);
    const value = result[3] * 100 / result[1];
    console.log(Math.round(value));
  });
};

module.exports = { level };