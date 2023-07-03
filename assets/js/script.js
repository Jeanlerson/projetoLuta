/*let char = new knight('Jeanlerson');
let monster = new BigMonster();

let log = new Log(document.querySelector('.log'));

const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
);

stage.start();*/

//--------------------------------LUTA FUNCIONAL---------------------------------

const char = creatKnight('Jeanlerson');
const monster = creatBigMonster();

stageFun.startFun(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
);

console.log(monster.lifeFun);
console.log(char.maxLifeFun);