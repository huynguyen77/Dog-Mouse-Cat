function Mouse(name){
	this.name = name;
	this.isDead = false;
}

Mouse.prototype.dead = function() {
	// body...
	this.isDead = true;
};

module.exports = Mouse;