const chalk = require('chalk');

const _get = (obj, path, defaultValue = null) =>
  String.prototype.split
    .call(path, /[,[\].]+?/)
    .filter(Boolean)
    .reduce(
      (a, c) => (Object.hasOwnProperty.call(a, c) ? a[c] : defaultValue),
      obj
    );

const notEmpty = input => (input === '' ? 'This value is required' : true);

const handleError = message => {
  console.error(chalk.redBright(message));
  process.exitCode = 1;
};

const appendPercentSymbol = (value, symbol) => {
  if (symbol) {
    return `${value}%`;
  }
  return parseInt(value);
};

const extractName = pkgName => pkgName.substr(pkgName.indexOf('/') + 1);

module.exports = {
  _get,
  notEmpty,
  handleError,
  appendPercentSymbol,
  extractName,
};
