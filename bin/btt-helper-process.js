const program = require('commander');
const pkg = require('../package.json');
const proc = require('../commands/process');
const helpers = require('../lib/helpers');

program
  .version(pkg.version);

program
  .command('search')
  .description('Search if process is running')
  .action(() => proc
    .search(helpers.extractName(pkg.name))
    .catch(helpers.handleError));

program
  .parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}