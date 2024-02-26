/*
Animal (name, color), intro():
    - Pet (name, color), intro():
        - Dog (name, color, sound), intro()
            - sound -> Double sound
        - Cat (name, color), intro()
        - Hamster (name, color), intro(), eat()
            - foodAmount
            - eat(): Mano burnoje siuo metu yra {{foodAmout++}} morku

    - Bird (name, color), intro(), fly(), stopFly():
        - Parrot (name, color), intro(), fly(), stopFly(), repeatSound(), repeatHistory()
            - history
            - repeatSound({{sound}})
            - repeatHistory() isspausdina paskutinius 3 jam pasakytus tekstus
        - Canary (name, color), intro(), fly(), stopFly()
        - Stark (name, color), intro(), fly(), stopFly(), bringBabies()
            - babiesCount
            - bringBabies(): Zmones i kopustu lauka atnesiau dar viena vaika ({{babiesCount}})

    - Fish (name, color), intro(), swim(), stopSwim():
        - Shark (name, color), intro(), swim(), stopSwim(), eatHuman()
            - eatHuman() Kaip noreciau paragauti plaukmenu...
        - Goldfish (name, color, wishLimit?), intro(), swim(), stopSwim(), makeWish()
            - wishLimit (default: 3)
            - makeWish({{myWish}})
                - jeigu liko neispildytu noru: Stai tavo noras: {{myWish}}
                - jeigu neliko neispildytu noru: Daugiau noru ispildyti nebegaliu :(
                - jeigu is viso nepildo noru: As nepildau noru / Wrong fish 👀
        - Dophin (name, color), intro(), swim(), stopSwim(), jumpFromWater()
            - jumpCount
            - jumpFromWater() Delfinas issoko is vandens {{jumpCount}}-a karta
*/

class Animal {
    constructor() {
        this.soundRepeatCound = 0;
        this.sound = '';
    }

    // voice() {
    //     const text = Array(this.soundRepeatCound).fill(this.sound);

    //     if (this.soundRepeatCound > 0) {
    //         text[0] = this.sound[0].toUpperCase() + this.sound.slice(1);
    //     }
    //     return text.join(' ') + '.';
    // }

    voice() {
        if (this.soundRepeatCound === 0) {
            return '.';
        }

        const firstWord = this.sound[0].toUpperCase() + this.sound.slice(1);
        return firstWord + (' ' + this.sound).repeat(this.soundRepeatCound - 1) + '.';
    }
}

class Pet extends Animal {
    constructor() {
        super();
        this.soundRepeatCound = 2;
        this.sound = 'naminis';
    }
}
class Fish extends Animal { }
class Bird extends Animal {
    constructor() {
        super();
        this.soundRepeatCound = 3;
        this.sound = 'paukstis';
    }
}

class Dog extends Pet {
    constructor() {
        super();
        this.sound = 'suo';
    }
}
class Cat extends Pet {
    constructor() {
        super();
        this.sound = 'kate';
    }
}
class Hamster extends Pet {
    constructor() {
        super();
        this.sound = 'ziurkenas';
    }
}

class Shark extends Fish { }
class GoldFish extends Fish { }
class Dophin extends Fish {
    constructor() {
        super();
        this.soundRepeatCound = 5;
        this.sound = 'delfinas';
    }
}

class Parrot extends Bird {
    constructor() {
        super();
        this.sound = 'papuga';
    }
}
class Canary extends Bird {
    constructor() {
        super();
        this.sound = 'kanarele';
    }
}
class Stark extends Bird {
    constructor() {
        super();
        this.sound = 'gandras';
    }
}

const suo = new Dog();
const kate = new Cat();
const ziurkenas = new Hamster();

const papuga = new Parrot();
const kanarele = new Canary();
const gandras = new Stark();

const ryklys = new Shark();
const auksineZuvele = new GoldFish();
const delfinas = new Dophin();

console.log('suo:', suo.voice());
console.log('papuga:', papuga.voice());
console.log('ryklys:', ryklys.voice());
