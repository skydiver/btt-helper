const format = require('date-fns/format');

const { _get } = require('../lib/helpers');
const cmd = require('../lib/async-cmd');

const status = async () => {
  const exec = 'tmutil status';
  const result = await cmd(exec);
  const regex = /^\s+Running[\s+|\D\s+]*(\d)/m;
  const match = regex.exec(result);
  const value = match ? match[1] : 0;
  return parseInt(value, 10);
};

const latestbackup = async (options = {}) => {
  const dateFormat = _get(options, 'F', 'yyyy-MM-dd HH:mm:ss');
  const exec =
    '/usr/libexec/PlistBuddy -c "Print Destinations:0:SnapshotDates" /Library/Preferences/com.apple.TimeMachine.plist | tail -n 2 | head -n 1';
  const result = await cmd(exec);
  return format(new Date(result), dateFormat);
};

module.exports = { status, latestbackup };
