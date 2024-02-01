/*
STRING - tekstas, simboliu grandinele
Inicijavimo simboliai/budai - vienguba ('), dviguba (") kabutese
*/

const text1 = 'Pirmas tekstas.';
console.log(text1);
const text2 = 'Kitas tekstas.';
console.log(text2);

const gele = 'tulpe';
const spalva = 'geltona';

const sakinys = "As turiu " + gele + ", kuri yra " + spalva + '.'
console.log(sakinys)

const backtick = `Vienguba (') + dviguba (") kabutes.`
console.log(backtick)
const kitasbudas = `As turiu ${gele}, kuri yra ${spalva}.`;
console.log(kitasbudas);

console.clear();

const eilutes = 'Stai sarasas:\r\n- pirmas\r\n- antras\r\n- trecias'
console.log(eilutes)