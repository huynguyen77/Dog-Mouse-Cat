var Dog = require('./Dog');
var Cat = require('./Cat');
var Mouse = require('./Mouse');


var cat = new Cat();
var mouse = new Mouse('Mickey');
var dog = new Dog();


try{
	cat.eat(dog);
}catch(error){
	console.log('Error while Cat eating not mouse');
}
console.log(cat);
