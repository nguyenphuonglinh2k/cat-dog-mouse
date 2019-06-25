var chalk = require('chalk');

function cat(name){
	this.name = name;
}

cat.prototype.sayHi = function() {
	console.log('hi!' + ' My name is ' + chalk.red(this.name));
}

module.exports = cat;