const program = require('commander');
const pkg = require('../package.json');
const tm = require('../commands/tm');
const { handleError } = require('../lib/helpers');

program.version(pkg.version);

program
  .command('status')
  .description('Get Time Machine running status')
  .action(() =>
    tm
      .status()
      .then(console.log)
      .catch(handleError)
  );

program
  .command('latestbackup')
  .description('Get Time Machine latest backup date')
  .action(() =>
    tm
      .latestbackup()
      .then(console.log)
      .catch(handleError)
  );

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
