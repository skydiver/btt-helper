const bplist = require('bplist-parser');
const cmd = require('../lib/async-cmd');

const status = async () => {
  const exec = 'tmutil status';
  const result = await cmd(exec);
  const regex = /^\s+Running[\s+|\D\s+]*(\d)/m;
  const match = regex.exec(result);
  const value = match ? match[1] : 0;
  return parseInt(value, 10);
};

const latestbackup = async () => {
  const path = '/Library/Preferences/com.apple.TimeMachine.plist';
  const obj = await bplist.parseFile(path);
  const arr = obj[0].Destinations[0].SnapshotDates;
  return arr[arr.length - 1];
};

module.exports = { status, latestbackup };
