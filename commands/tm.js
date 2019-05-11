const cmd = require('node-cmd');

const status = async () => {
  const exec = 'tmutil status';
  cmd.get(exec, (err, data) => {
    const regex = /^\s+Running[\s+|\D\s+]*(\d)/m;
    const match = regex.exec(data);
    const ret = match ? match[1] : 0;
    console.log(ret);
  });
};

module.exports = { status };
