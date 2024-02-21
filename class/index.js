/*
Animals
*/

import Dog from "./Dog.js";
import Cat from "./Cat.js";
import Hamster from "./Hamster.js";

const rexas = new Dog('Rexas', 'brown');
const brisius = new Dog('Brisius', 'white');
console.log(rexas.intro());
console.log(brisius.intro());

const pukis = new Cat('Pūkis', 'white');
const garfildas = new Cat('Garfildas', 'ginger');
console.log(pukis.intro());
console.log(garfildas.intro());

const steve = new Hamster('Steve', 'white');
const spirgis = new Hamster('Spirgis', 'white-black');
console.log(steve.intro());
console.log(spirgis.intro());
