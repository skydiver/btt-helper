const cmd = require('node-cmd');

const volume = async () => {
  cmd.get('osascript -e "get volume settings"', (err, data, stderr) => {
    const regex = /([0-9]{1,4})/gm;
    const output = data.trim();
    const res = output.match(regex);
    console.log(res[0]);
  });
};

module.exports = { volume };