const program = require('commander');
const pkg = require('../package.json');
const brightness = require('../commands/brightness');
const { handleError } = require('../lib/helpers');

program.version(pkg.version);

program
  .command('level')
  .option('-p', 'Append percent symbol')
  .description('Get current brightness level')
  .action(options =>
    brightness
      .level(options)
      .then(console.log)
      .catch(handleError)
  );

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
