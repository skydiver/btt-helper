const program = require('commander');
const pkg = require('../package.json');
const tm = require('../commands/tm');
const helpers = require('../lib/helpers');

program.version(pkg.version);

program
  .command('status')
  .description('Get Time Machine running status')
  .action(() => tm.status().catch(helpers.handleError));

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
