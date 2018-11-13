const program = require('commander');
const pkg = require('../package.json');
const network = require('../commands/network');
const helpers = require('../lib/helpers');

program
  .version(pkg.version);

program
  .command('wifi')
  .option('-t <text>', 'Custom text when not connected')
  .description('Get WiFi network name')
  .action((options) => network
    .wifi(options)
    .catch(helpers.handleError)
  );

program
  .command('on')
  .description('Turn WiFi on')
  .action(() => network
    .status('on')
    .catch(helpers.handleError)
  );

program
  .command('off')
  .description('Turn WiFi off')
  .action(() => network
    .status('off')
    .catch(helpers.handleError)
  );

program
  .parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}