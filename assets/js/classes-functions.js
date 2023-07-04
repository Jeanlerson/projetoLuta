// knight ou Sorcerer - Guerreiro ou mago
// LittleMonster ou BigMonster

/*class Character{

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

    constructor(fighter1, fighter2, fighterEl1, fighterEl2, logObject){
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighterEl1 = fighterEl1;
        this.fighterEl2 = fighterEl2;
        this.log = logObject;
    }

    start(){
        this.update();
        
        this.fighterEl1.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2));
        this.fighterEl2.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1));
    }

    update(){
        // Fighter 1
        this.fighterEl1.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP`;
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighterEl1.querySelector('.bar').style.width = `${f1Pct}%`

        // Fighter 2
        this.fighterEl2.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP`;
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighterEl2.querySelector('.bar').style.width = `${f2Pct}%`;
    }

    doAttack(attacking, attacked){
        if(attacking.life <= 0 || attacked.life <= 0){
            this.log.addMessage('Luta acabada!');
            return;
        }

        let attackFactor = (Math.random() *2).toFixed(2);
        let defenseFactor = (Math.random() *2).toFixed(2);


        let actualAttack = attacking.attack * attackFactor;
        let actualDefense = attacked.defense * defenseFactor;

        if(actualAttack > actualDefense){
            attacked.life -= actualAttack;
            this.log.addMessage(`${attacking.name} causou ${actualAttack.toFixed(2)} de dano em ${attacked.name}`);
        } else{
            this.log.addMessage(`${attacked.name} conseguiu se defender...`);
        }

        this.update();
    }
}

class Log{

    list = [];

    constructor(listEl){
        this.listEl = listEl;
    }

    addMessage(msg){
        this.list.push(msg);
        this.render();
    }

    render(){
        this.listEl.innerHTML = '';

        for(let i in this.list){
            this.listEl.innerHTML += `<li>${this.list[i]}</li>`;
        }
    }
}*/

//-------------------------------------LUTA FUNCIONAL------------------------

const defaultCharacter = {
    nameFun: '',
    lifeFun: 1,
    maxLifeFun: 1,
    attackFun: 0,
    defenseFun: 0
}

const creatKnight = (nameFun) => {
    return{
        ...defaultCharacter,
        nameFun,
        lifeFun: 100,
        maxLifeFun: 100,
        attackFun: 10,
        defenseFun: 8
    }
}

const creatSorcerer = (nameFun) => {
    return{
        ...defaultCharacter,
        nameFun,
        lifeFun: 80,
        maxLifeFun: 80,
        attackFun: 14,
        defenseFun: 4
    }
}

const creatLittleMonster = () => {
    return{
        ...defaultCharacter,
        nameFun: 'Little Monster',
        lifeFun: 60,
        maxLifeFun: 60,
        attackFun: 7,
        defenseFun: 3
    }
}

const creatBigMonster = () => {
    return{
        ...defaultCharacter,
        nameFun: 'Big Monster',
        lifeFun: 120,
        maxLifeFun: 120,
        attackFun: 16,
        defenseFun: 6
    }
}

const stageFun = {
    fighter1Fun: null,
    fighter2Fun: null,
    fighterEl1Fun: null,
    fighterEl2Fun: null,

    startFun(fighter1Fun, fighter2Fun, fighterEl1Fun, fighterEl2Fun){
        this.fighter1Fun = fighter1Fun;
        this.fighter2Fun = fighter2Fun;
        this.fighterEl1Fun = fighterEl1Fun;
        this.fighterEl2Fun = fighterEl2Fun;

        this.fighterEl1Fun.querySelector('.attackButton').addEventListener('click', 
        () => this.doAttackFun(this.fighter1Fun, this.fighter2Fun));
        this.fighterEl2Fun.querySelector('.attackButton').addEventListener('click', 
        () => this.doAttackFun(this.fighter2Fun, this.fighter1Fun));

        this.updateFun();
    },
    updateFun() {
        //fighter1Fun
        this.fighterEl1Fun.querySelector('.name').innerHTML = 
        `${this.fighter1Fun.nameFun} - ${this.fighter1Fun.lifeFun.toFixed(1)} HP`

        let f1PctFun = (this.fighter1Fun.lifeFun / this.fighter1Fun.maxLifeFun) * 100;
        this.fighterEl1Fun.querySelector('.bar').style.width = `${f1PctFun}%`;

        //fighter2Fun
        this.fighterEl2Fun.querySelector('.name').innerHTML = 
        `${this.fighter2Fun.nameFun} - ${this.fighter2Fun.lifeFun.toFixed(1)} HP`

        let f2PctFun = (this.fighter2Fun.lifeFun / this.fighter2Fun.maxLifeFun) * 100;
        this.fighterEl2Fun.querySelector('.bar').style.width = `${f2PctFun}%`;

    },
    doAttackFun(attackingFun, attackedFun){
        if(attackingFun.lifeFun <= 0 || attackedFun.lifeFun <= 0){
            logFun.addMessageFun('Luta acabada!!');
            return;
        }

        const attackFactorFun = (Math.random() * 2).toFixed(2);
        const defenseFactorFun = (Math.random() * 2).toFixed(2);

        const actualAttackFun = attackingFun.attackFun * attackFactorFun;
        const actualDefenseFun = attackedFun.defenseFun * defenseFactorFun;

        if(actualAttackFun > actualDefenseFun){
            attackedFun.lifeFun -= actualAttackFun;
            attackedFun.lifeFun = attackedFun.lifeFun < 0 ? 0 : attackedFun.lifeFun;
            logFun.addMessageFun(`${attackingFun.nameFun} causou ${actualAttackFun.toFixed(2)} de dano em ${attackedFun.nameFun}`);
        } else{
            logFun.addMessageFun(`${attackedFun.nameFun} bloqueou o ataque...`)
        }

        this.updateFun();
    }
}

const logFun = {
    listFun: [],
    addMessageFun(msgFun) {
        this.listFun.push(msgFun);
        this.renderFun();
    },
    renderFun(){
        const logElFun = document.querySelector('.log');
        logElFun.innerHTML = '';

        for (let iFun in this.listFun) {
        logElFun.innerHTML += `<li>${this.listFun[iFun]}</li>`;
        }
    }
}