const program = require('commander');
const pkg = require('../package.json');
const battery = require('../commands/battery');
const helpers = require('../lib/helpers');

program
  .version(pkg.version);

program
  .command('keyboard')
  .description('Get Apple Magic Keyboard battery level')
  .action(() => battery
    .keyboard(helpers.extractName(pkg.name))
    .catch(helpers.handleError));

program
  .parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}