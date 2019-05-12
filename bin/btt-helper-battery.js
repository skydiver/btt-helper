const program = require('commander');
const pkg = require('../package.json');
const battery = require('../commands/battery');
const helpers = require('../lib/helpers');

program.version(pkg.version);

program
  .command('mouse')
  .option('-p', 'Append percent symbol')
  .description('Get "Magic Mouse 2" battery level')
  .action(options =>
    battery
      .mouse(options)
      .then(console.log)
      .catch(helpers.handleError)
  );

program
  .command('keyboard')
  .option('-p', 'Append percent symbol')
  .description('Get "Magic Keyboard with Numeric Keypad" battery level')
  .action(options =>
    battery
      .keyboard(options)
      .then(console.log)
      .catch(helpers.handleError)
  );

program
  .command('trackpad')
  .option('-p', 'Append percent symbol')
  .description('Get "Magic Trackpad 2" battery level')
  .action(options =>
    battery
      .trackpad(options)
      .then(console.log)
      .catch(helpers.handleError)
  );

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
