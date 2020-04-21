console.log("Le tournoi vas bientôt commencer.")

class p1 {
	constructor (_name, _xp, _type){
		this.name = _name
		this.xp = _xp
		this.type = _type
	}
}

class p2 {
	constructor (_name, _xp, _type){
		this.name = _name
		this.xp = _xp
		this.type = _type
	}
}

class Arena {
	constructor (){

	}
fight (fighter1, fighter2){
	console.log("Un combat entre " + fighter1.name + " et " + fighter2.name + " vas commencer !")

}
}

let fighter1 = new p1("Ben", 0, "p1")
let fighter2 = new p2("Ali", 0, "p2")
console.log(fighter1.name + " entre en scène.")
let arena = new Arena()
arena.fight(fighter1, fighter2)


class Tournament {
	constructor(_ListFighter) {
		this.listFighter = _ListFighter
		this.random1 = 0
		this.random2 = 0
		this.start()
	}

	start() {
		while(1) {
      this.verifFighter();
      if (this.listFighter.length == 1) {
        console.log(this.listFighter[0].name + " a gagné !")
        break;
      }
      this.random1 =  Math.floor(Math.random() * Math.floor(this.listFighter.length));
      this.random2 =  Math.floor(Math.random() * Math.floor(this.listFighter.length));
      if (this.random1 != this.random2)
        this.createFight(this.random1, this.random2);
    }
  }
	}