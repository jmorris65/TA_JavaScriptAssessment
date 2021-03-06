// Your code here!
var Pokemon = function(name, attack, defense, health, type) {
	// object attributes
	this.name = name;
	this.attack = attack;
	this.defense = defense;
	// added extra attribute to hold initial health
	this.max_health = health;
	this.health = health;
	this.type = type;

	// method subtracts damage from health setting it zero if it goes negative
	this.takeDamage = function(damage) {
		this.health -= damage;
		if (this.health < 0)
			this.health = 0;
	}

	// takes two objects and calculates damage done 
	this.attackOpponent = function(opponent) {
		var damage = this.attack - opponent.defense;
		if (damage < 1)
			damage = 1;
		opponent.takeDamage(damage);
	}

	// converts object to string 
	this.display = function() {
		return this.name.toUpperCase() + 
			' (' + this.type.toUpperCase() + 
			') ' + this.health +
			'/' + this.max_health;
	}
}

// MY TEST
// var char = new Pokemon('charmander', 15, 5, 10, 'fire');
// var bulb = new Pokemon('bulbasaur', 7, 4, 10, 'grass');

// bulb.attackOpponent(char);
// char.attackOpponent(bulb);


// console.log(char.display());
// console.log(bulb.display());

// Don't edit this line!
module.exports = Pokemon;
