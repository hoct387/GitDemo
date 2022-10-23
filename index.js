//var Dog = require('./Dog.js');

//var dogObj = new Dog('Tom');
//dogObj.sayHi();

import chalk from 'chalk';

const log = console.log;

// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));
