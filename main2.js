
class Guerrier {
	constructor(_name, _xp, _type, _level){
		this.name = _name
		this.xp = _xp
		this.type = _type
		this.level = _level
		this.description();
	}
	description(){
		console.log("je m'appelle " + this.name)
	}
	}

class Gladiator {
	constructor(_name, _xp, _type, _level){
		this.name = _name
		this.xp = _xp
		this.type = _type
		this.level = _level
	}
}

class Arena{
	constructor(){

	}
	fight (fighter1, fighter2){
		console.log("Les couillus " + fighter1.name + " et " + fighter2.name + " vont se castagner !")
	}
} 

let fighter1 = new Guerrier("Ben", 0, "Guerrier", 1)
let fighter2 = new Gladiator("Jack", 0, "Gladiator", 1)
console.log(fighter1.name + " arrive !")
let arena = new Arena()
arena.fight(fighter1, fighter2)