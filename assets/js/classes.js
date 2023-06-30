// knight ou Sorcerer - Guerreiro ou mago
// LittleMonster ou BigMonster

class Character{

    _life = 1;
    maxLife = 1;
    attack = 0;
    defense = 0;


    constructor(name){
        this.name = name;
    }

    get life(){
        return this._life;
    }

    set life(newLife){
        this._life = newLife < 0 ? 0 : newLife;
    }
}

class knight extends Character{

    constructor(name){
        super(name);
        this.life = 100;
        this.attack = 10;
        this.defense = 8;
        this.maxLife = this.life;
    }
}

class Sorcerer extends Character{

    constructor(name){
        super(name);
        this.life = 80;
        this.attack = 15;
        this.defense = 3;
        this.maxLife = this.life
    }
}

class LittleMonster extends Character{

    constructor(){
        super('Little Monster');
        this.life = 40;
        this.attack = 4;
        this.defense = 4;
        this.maxLife = this.life;
    }
}

class BigMonster extends Character{

    constructor(){
        super('Big Monster');
        this.life = 120;
        this.attack = 16;
        this.defense = 6;
        this.maxLife = this.life;
    }
}

class Stage{

    constructor(fighter1, fighter2, fighterEl1, fighterEl2){
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighterEl1 = fighterEl1;
        this.fighterEl2 = fighterEl2;
    }

    start(){
        this.update();
        // TODO: Evento do botâo de atacar.
    }

    update(){
        // Fighter 1
        this.fighterEl1.querySelector('.name').innerHTML = this.fighter1.name

        // Fighter 2
        this.fighterEl2.querySelector('.name').innerHTML = this.fighter2.name
    }
}