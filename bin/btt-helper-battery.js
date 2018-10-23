const program = require('commander');
const pkg = require('../package.json');
const battery = require('../commands/battery');
const helpers = require('../lib/helpers');

program
  .version(pkg.version);

program
  .command('mouse')
  .description('Get "Magic Mouse 2" battery level')
  .action(() => battery
    .mouse(helpers.extractName(pkg.name))
    .catch(helpers.handleError));

program
  .command('keyboard')
  .description('Get "Magic Keyboard with Numeric Keypad" battery level')
  .action(() => battery
    .keyboard(helpers.extractName(pkg.name))
    .catch(helpers.handleError));

program
  .parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}