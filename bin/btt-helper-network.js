const program = require('commander');
const pkg = require('../package.json');
const network = require('../commands/network');
const helpers = require('../lib/helpers');

program.version(pkg.version);

program
  .command('wifi')
  .option('-t <text>', 'Custom text when not connected')
  .description('Get WiFi network name')
  .action(options =>
    network
      .wifi(options)
      .then(console.log)
      .catch(helpers.handleError)
  );

program
  .command('toggle')
  .description('Toggle WiFi status')
  .action(() =>
    network
      .toggle()
      .then(console.log)
      .catch(helpers.handleError)
  );

program
  .command('on')
  .description('Turn WiFi on')
  .action(() =>
    network
      .status('on')
      .then(console.log)
      .catch(helpers.handleError)
  );

program
  .command('off')
  .description('Turn WiFi off')
  .action(() =>
    network
      .status('off')
      .then(console.log)
      .catch(helpers.handleError)
  );

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
