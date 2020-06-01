var Dog = require('./Dog');
var Cat = require('./Cat');

var dog = new Dog('Muc');
var cat = new Cat('Tom');

dog.eat(cat);
console.log(dog);
