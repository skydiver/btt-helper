#! /usr/bin/env node

const program = require('commander');
const updateNotifier = require('update-notifier');
const pkg = require('../package.json');

updateNotifier({ pkg }).notify({ isGlobal: true });

program
  .version(pkg.version)
  .command('battery', 'Get battery levels')
  .command('volume', 'Get volune level')
  .command('process', 'Check if process is running')
  .parse(process.argv);