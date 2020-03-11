// Your code here!
var Pokemon = function(name, attack, defense, health, type) {
	this.name = name;
	this.attack = attack;
	this.defense = defense;
	this.max_health = health;
	this.health = health;
	this.type = type;
	this.takeDamage = function(damage) {
		this.health -= damage;
		if (this.health < 0)
			this.health = 0;
	}
	this.attackOpponent = function(opponent) {
		var damage = this.attack - opponent.defense;
		if (damage < 1)
			damage = 1;
		opponent.takeDamage(damage);
	}
	this.display = function() {
		console.log(this.name.toUpperCase() + 
			' (' + this.type.toUpperCase() + 
			') ' + this.health +
			'/' + this.max_health);
	}
}

// var char = new Pokemon('charmander', 15, 5, 10, 'fire');
// var bulb = new Pokemon('bulbasaur', 7, 4, 10, 'grass');

// bulb.attackOpponent(char);
// char.attackOpponent(bulb);


// char.display()
// bulb.display()

// Don't edit this line!
module.exports = Pokemon;
