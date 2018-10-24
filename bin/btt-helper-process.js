const program = require('commander');
const pkg = require('../package.json');
const proc = require('../commands/process');
const helpers = require('../lib/helpers');

program
  .version(pkg.version);

program
  .command('search <query>')
  .description('Search if process is running')
  .action((query) => proc
    .search(query)
    .catch(helpers.handleError));

program
  .command('multi <query>')
  .description('Search if multiple process (separated by commas) are running')
  .action((query) => proc
    .multi(query)
    .catch(helpers.handleError));

program
  .parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}