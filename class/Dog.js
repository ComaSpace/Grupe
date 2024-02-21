import Pet from './Pet.js';

class Dog extends Pet {
    constructor(name, color) {
        super(name, color);

        this.breed = 'dog';
        this.sound = 'Au au';
        this.emoji = '🐕🐕';

        this.hasBone = true;
    }
}

export default Dog;
