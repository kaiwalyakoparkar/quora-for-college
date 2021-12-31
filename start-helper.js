const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const ngrok = require('ngrok');
const figlet = require('figlet');
const dotenv = require('dotenv');
const chalk = require('chalk');
const kill = require('tree-kill');
const _ = require('lodash');

dotenv.config();

/**
 * This script provide a cross-platform way for starting npm process in child directory.
 *
 * Usage: node start-helper.js [server|client|test|install-children]
 *
 */

const options = [
  {
    name: 'server',
    command: 'npm',
    arguments: ['start'],
    workingDirs: 'server',
    message: 'Starting server...',
  },
  {
    name: 'client',
    command: 'npm',
    arguments: ['start'],
    workingDirs: 'client',
    message: 'Starting web client...',
  },
  {
    name: 'test',
    command: 'npm',
    arguments: ['run', 'test'],
    workingDirs: ['server'],
    message: 'Running tests for',
  },
  {
    name: 'install-children',
    command: 'npm',
    arguments: ['install'],
    workingDirs: ['server', 'client'],
    message: 'Installing dependencies for',
  },
];

const start = () => {
  if (process.argv.length !== 3) {
    throw new Error(`[-] Invalid command. Please specify the argument`);
  }

  let command = _.find(options, (opt) => {
    if (opt.name === process.argv[2]) {
      return opt;
    }
  });
  if (!command) {
    throw new Error(`[-] Invalid argument "${process.argv[2]}"`);
  }


  process.exit(run(command));
  
};

const run = (command) => {
  const cmd = command.command;
  if (_.isArray(command.workingDirs)) {
    status = 0;
    command.workingDirs.forEach((dir) => {
      const opts = { cwd: dir, shell: true, stdio: 'inherit' };
      console.log(chalk.cyan(`\n[*] ${command.message} ${dir}...\n`));
      const child = spawnSync(cmd, command.arguments, opts);
      status += child.status;
    });
    return status;
  } else {
    const opts = { cwd: command.workingDirs, shell: true, stdio: 'inherit' };
    console.log(chalk.cyan(`[*] ${command.message}`));
    return spawnSync(cmd, command.arguments, opts);
  }
};

start();