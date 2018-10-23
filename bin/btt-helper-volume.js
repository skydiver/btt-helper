const program = require('commander');
const pkg = require('../package.json');
const volume = require('../commands/volume');
const helpers = require('../lib/helpers');

program
  .version(pkg.version);

program
  .command('level')
  .description('Get current volume level')
  .action(() => volume
    .volume(helpers.extractName(pkg.name))
    .catch(helpers.handleError));

program
  .parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}