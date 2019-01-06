const program = require('commander');
const pkg = require('../package.json');
const brew = require('../commands/brew');
const helpers = require('../lib/helpers');

program
  .version(pkg.version);

program
  .command('services')
  .description('Display total running services')
  .action(query => brew
    .services(query)
    .catch(helpers.handleError)
  );

program
  .parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}