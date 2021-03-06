const program = require('commander');
const pkg = require('../package.json');
const volume = require('../commands/volume');
const helpers = require('../lib/helpers');

program.version(pkg.version);

program
  .command('level')
  .option('-p', 'Append percent symbol')
  .description('Get current volume level')
  .action(options =>
    volume
      .volume(options)
      .then(console.log)
      .catch(helpers.handleError)
  );

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
