//class guerrier
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

let fighter1 = new Guerrier("Ben", 0, "Guerrier", 1)

console.log(fighter1.name + " arrive !")