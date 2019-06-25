function cat(){
	console.log('this is module.')
}

cat.prototype.die = function() {
	this.die = true;
}

module.exports = cat;