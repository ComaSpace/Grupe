function rightName(word = 'Labas') {
    let name = word                         // Labas
        .toLowerCase()                      // labas
        .replace(
            word[0],                        // L - tokios nera :(
            word[0].toUpperCase()           // L
        );
    return name;
}


//  Sukurti du kintamuosius.Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus(Jonas Jonaitis).Atspausdinti trumpesnį stringą
// Sukurti du kintamuosius
// let vardas = "Jonas";
// let pavarde = "Jonaitis";

// // Atspausdinti trumpesnį stringą
// if (vardas.length < pavarde.length) {
//     console.log(vardas);
// } else {
//     console.log(pavarde);
// }


// Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus(nebūtinai tikrus).Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį:
// "Aš esu Vardenis Pavardenis. Man yra XX metai(ų)".

// Sukurkite 4 kintamuosius
// let vardas = "Vardenis";
// let pavarde = "Pavardenis";
// let gimimoMetai = 1990;
// let siuMetai = 2024;

// // Paskaičiuoti amžių
// let amzius = siuMetai - gimimoMetai;

// // Atspausdinti sakinį
// console.log(`Aš esu ${vardas} ${pavarde}. Man yra ${amzius} metai(ų).`);


// Sukurti du kintamuosius.Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus.Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš trijų paskutinių vardo ir pavardės kintamųjų raidžių.Jį atspausdinti.



// // Sukurti du kintamuosius
// let vardas = "Johnny";
// let pavarde = "Depp";

// // Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš trijų paskutinių vardo ir pavardės kintamųjų raidžių
// let treciasKintamasis = vardas.slice(-3) + pavarde.slice(-3);

// // Atspausdinti trečią kintamąjį
// console.log(treciasKintamasis);

// Sukurti kintamąjį su stringu: “Once upon a time in hollywood”. Jame visas “o” (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.  Rezultatą atspausdinti.

// // Sukurti kintamąjį su stringu
// let tekstas = "Once upon a time in hollywood";

// // Pakeisti visas "o" (didžiąsias ir mažąsias) žvaigždutėmis "*"
// let pakeistasTekstas = tekstas.replace(/o/gi, "*");

// // Atspausdinti rezultatą
// console.log(pakeistasTekstas);


// Pasinaudokite atsitiktinio skaičiaus generavimo funkcija.Sukurkite du kintamuosius ir naudodamiesi funkcija jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės.Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.
// // Sukurkite du kintamuosius ir naudodamiesi funkcija jiems priskirkite atsitiktines reikšmes nuo 0 iki 4
// let skaicius1 = Math.floor(Math.random() * 5);
// let skaicius2 = Math.floor(Math.random() * 5);

// // Didesnę reikšmę padalinkite iš mažesnės
// let rezultatas = skaicius1 > skaicius2 ? skaicius1 / skaicius2 : skaicius2 / skaicius1;

// // Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio
// console.log(rezultatas.toFixed(2));

// Naudokite funkciją ir sukurkite tris kintamuosius kuriems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite vidurinę reikšmę.
// // Sukurkite tris kintamuosius kuriems priskirkite atsitiktines reikšmes nuo 0 iki 25
// // Sukurkite tris kintamuosius kuriems priskirkite atsitiktines reikšmes nuo 0 iki 25
//
// Sukurkite tris kintamuosius kuriems priskirkite atsitiktines reikšmes nuo 0 iki 25
// let skaicius1 = Math.floor(Math.random() * 26);
// let skaicius2 = Math.floor(Math.random() * 26);
// let skaicius3 = Math.floor(Math.random() * 26);

// // Sudėkite juos į masyvą ir surūšiuokite
// let masyvas = [skaicius1, skaicius2, skaicius3];
// masyvas.sort((a, b) => a - b);

// // Raskite ir atspausdinkite vidurinę reikšmę
// let vidurineReiksme = masyvas[1];
// console.log(vidurineReiksme);

// Parašyti kodą, kuris generuotų atsitiktinį stringą iš lotyniškų mažųjų raidžių.Stringo ilgis 3 simboliai.
// // Sukurkite funkciją, kuri generuotų atsitiktinį stringą iš lotyniškų mažųjų raidžių. Stringo ilgis 3 simboliai.
// function generuotiAtsitiktiniStringa() {
//     let stringas = '';
//     let lotyniskosRaides = 'abcdefghijklmnopqrstuvwxyz';
//     for (let i = 0; i < 3; i++) {
//         let randomIndex = Math.floor(Math.random() * lotyniskosRaides.length);
//         stringas += lotyniskosRaides[randomIndex];
//     }
//     return stringas;
// }

// // Iškviečiame funkciją ir atspausdiname rezultatą
// let atsitiktinisStringas = generuotiAtsitiktiniStringa();
// console.log(atsitiktinisStringas);

// let rezultatas = pirmassk > antrassk ? pirmassk / antrassk : antrassk / pirmassk;




