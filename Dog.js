var chalk = require('chalk');


function Dog(name){
	this.name = name;
	this.stomach = [];
}

Dog.prototype.eat = function(cat) {
	// body...
	this.stomach.push(cat);
	return this;
};

Dog.prototype.sayHi = function() {
	// body...
	console.log('Hi my name is ' + chalk.red(this.name));
};

module.exports = Dog;