class RPGCharacter {
    constructor(name) {
        this.name = name;
        this.power = undefined;
        this.intelligence = undefined;
        this.luck = undefined;
    }

    randomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    play(fighter, skill) {
        if (this[skill] === fighter[skill]) {
            return 'Remis';
        }

        if (this[skill] > fighter[skill]) {
            return this.name;
        }

        return fighter.name;
    }

    fight(opponent){
        return this.play(opponent, 'power');
    }

    playChess(opponent){
        return this.play(opponent, 'intelligence');
    }

    tossCoin(opponent){
        return this.play(opponent, 'luck');
    }
}

class Dwarf extends RPGCharacter {
    constructor(name) {
        super(name);
        this.power = this.randomNumber(40, 100);
        this.intelligence = this.randomNumber(40, 80);
        this.luck = this.randomNumber(40, 100);
        this.race = 'Dwarf'
    }
}

class Orc extends RPGCharacter {
    constructor(name) {
        super(name);
        this.power = this.randomNumber(50, 100);
        this.intelligence = this.randomNumber(5, 20);
        this.luck = this.randomNumber(1, 100);
        this.race = 'Orc'
    }
}


class Elf extends RPGCharacter {
    constructor(name) {
        super(name);
        this.power = this.randomNumber(30, 80);
        this.intelligence = this.randomNumber(60, 100);
        this.luck = this.randomNumber(20, 100);
        this.race = 'Elf'
    }
}

const dwarf = new Dwarf("Durin Kamienny Topór");
const orc = new Orc("Urk'har Niszczyciel");
const elf = new Elf("Naylee z Nieśmiertelnego Lasu");

console.log(orc.fight(elf)); // "Urk'har Niszczyciel" - gdyż akurat ten ork jest silniejszy do elfa
console.log(elf.playChess(dwarf)) // "Naylee z Nieśmiertelnego Lasu" - gdyż akurat ten elf jest mądrzejszy od krasnoluda
console.log(dwarf.tossCoin(elf)) // "Naylee z Nieśmiertelnego Lasu" - gdyż akurat ten elf ma więcej szczęścia niż krasnolud