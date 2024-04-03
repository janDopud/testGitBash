// Deklariranje varijabli
//==============================
/*
let ime = "Jure";
const prezime = "Jović";

ime = "Jan";
console.log(ime);

// Ne može se direktno mjenjati vrijednost varijable const
//prezime = "Dopuđ";
console.log(prezime);

// Data Types - Tipovi podataka
// Number, String, Array, Boolean, Object
//==============================

let broj = 25; // Number
let tekst = "25"; // String
let polje = [1, 2, 3, 4, 5]; // Polje - Array
let istina = true; // Boolean
let laz = false; // Boolean
// Objekt
let auto = {
  marka: "Mercedes",
  model: "GT",
  godina: 2024,
};

// Provjera tipa podatka varijable

let xx = "Java Script programiranje";
console.log(typeof xx);
// type of -> ugradbena funkcija koja vraća tip podatka varijable
let yy = 5;
console.log(typeof yy);

let poljeTip = [1, 2, 3, 4, "Jedan", "Dva", { x: 1, y: 2 }, true, false];
console.log(typeof poljeTip);

let objektTip = {
  ime: {
    type: "Tip",
    polje: [1, 2, 3, 45],
  },
};

// OPERATORI
//==============================
// Matematički operatori
// +,-,*,/,%
const trenutnaGodina = 2024;
const godinaJan = trenutnaGodina - 1997;
const godinaJure = trenutnaGodina - 1991;

console.log(godinaJan, godinaJure);

console.log(godinaJan + 6, godinaJure - 6, godinaJan * 5, godinaJure * 5);

// Modulo operator (%) daje višak
const paran = 4 % 2;
console.log(paran);
const neParan = 5 % 2;
console.log(neParan);

// Operatori "dodavanja" - Assignment Operators

let x = 15;
x += 5; // x = x + 5; => 20
x -= 5; // x = x - 4; => 10
x *= 3; // x = x * 3; => 45
x++; // x = x + 1; => 16
x--; // x = x - 1; => 14

// Operatori uspoređivanja - Comparison Operators
// < , > , <= , >=  , == , != (===) , !==

let a = 8;
let b = 10;
console.log(a < b); // a manji od b
console.log(a > b); // a veći od b
console.log(a <= b); // a manji jednako od b
console.log(a >= b); // a veći jednako od b
console.log(a == b); // a jednak b
console.log(a != b); // a različit od b po vrijednosti

console.log(a === b); // a jednak po vrijednosti i po tipu podatka od b
console.log(a !== b); // a razlicit po vrijednosti i po tipu podatka od b

////////////////////////////////////
// Coding Challenge #1

// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 ==== mass / (height * height). (mass in kg and height in meter).

// 1. Store Mark's and John's mass and height in variables.
// 2. Calculate both their BMIs using the formula (you can even implement both versions).
// 3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

// TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

// 1. TEST DATA 1
// let markMass = 78;
// let markHeight = 1.69;
// let johnMass = 92;
// let johnHeight = 1.95;

// 2. TEST DATA 1
// let bmiMark = markMass / markHeight ** 2;
// let bmiJohn = johnMass / johnHeight ** 2;
// console.log("BMI Mark: ", bmiMark);
// console.log("BMI John: ", bmiJohn);

// let markHigherBMI = bmiMark > bmiJohn;
// console.log(markHigherBMI);

// STRING tip podatka

const firstName = "Jure"; // string
const lastName = "Jović"; // string
const job = "Programmer"; // string
const age = 32; // number

const osoba = firstName + lastName + job + age;
console.log(osoba);

const osobaNew =
  "My name is " +
  firstName +
  " my last name is " +
  lastName +
  "age is " +
  age +
  " and my job is " +
  job;

console.log(osobaNew);

const osobaLatest = `I˙m ${firstName} and my last name is ${lastName}.`;
console.log(osobaLatest);

// IF / ELSE  UVJET

const godine = 17;

if (godine >= 18) {
  console.log("Osoba je punoljetna");
} else {
  console.log("Osoba nije punoljetna");
}

////////////////////////////////////
// Coding Challenge #2


// Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

// 1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!" 

let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

let bmiMark = markMass / markHeight ** 2;
let bmiJohn = johnMass / johnHeight ** 2;
console.log("BMI Mark: ", bmiMark);
console.log("BMI John: ", bmiJohn);

let markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);

if (bmiMark > bmiJohn) {
  console.log(`Mark's BMI (${bmiMark}) is higher than John's! (${bmiJohn})`);
} else {
  console.log(`John's BMI (${bmiJohn}) is higher than Mark's! (${bmiMark})`);
}

// Ispisivanje u konzolu
// console.log();

let a = 5;
let b = 10;
let tekst = "Neki tekst za ispis";

// pojedinacni ispis varijabli
console.log(a);
console.log(b);
console.log(tekst);

// ispisivanje varijabli odjednom

console.log(a, b, tekst);

let tekstRezultata = "Rezultat zbrajanja dva broja je: ";
let x = 10;
let y = 20;
let zbroj = x + y;

console.log(tekstRezultata + zbroj);
console.log("Rezultat zbrajanja dva broja je: " + zbroj);

console.log(tekstRezultata, zbroj);
console.log("Rezultat zbrajanja dva broja je:", zbroj);

let tekstRezultataUpgrade = `Rezultat zbrajanja ${x} i ${y} je ${zbroj}`;
console.log(tekstRezultataUpgrade);

console.log(
  "Broj x je " + x + " " + "broj y je " + y + " " + "rezultat je " + zbroj
);


// IF / ELSE  UVJET - nastavak

let x = 100;
let y = 100;

if (x > y) {
  console.log("x je veci od y");
} else if (x < y) {
  console.log("x je manji od y");
} else {
  console.log("x i y su jednaki");
}

let novcanik = 12;

//1.nacin
if (novcanik > 0) {
  console.log("Stedi pare");
} else {
  console.log("Nadi si posao!");
}

//2.nacin
if (novcanik) {
  console.log("Stedi pare dok ih imas");
} else {
  console.log("Nadi si posao jer para nemas");
}

// Kreiraj dvije number varijable. Ispisi njihov zbroj samo ako je zbroj veci od 20.

// let a = 10;
// let b = 15;
// let suma = a + b;

// if (suma > 20) {
//   console.log(suma);
// } else {
//   console.log("Suma je manja od 20");
// }

// Kreiraj 5 ocjena. Izracunaj prosjek ocjena i ispisi poruku s kojom ocjenom je student zavrsio taj predmet.

// let a = 5;
// let b = 5;
// let c = 4;
// let d = 4;
// let z = 4;

// let suma = a + b + c + d + z;
// let prosjek = suma / 5;
// console.log(prosjek);

// if (prosjek > 4) {
//   console.log("Odlican");
// } else if (prosjek > 3) {
//   console.log("Vrlo dobar");
// } else if (prosjek > 2) {
//   console.log("Dobar");
// } else if (prosjek > 1) {
//   console.log("Dovoljan");
// } else {
//   console.log("Nedovoljan");
// }

// Deklariraj dva broja i provjeri koji je od njih paran a koji ne paran.

// let a = 0;
// let b = 1;

// if (a == 0 || b == 0) {
//   console.log("Jedan od brojeva je nula. Nisu niti parni niti neparni");
// } else if (a % 2 == 0 && b % 2 == 0) {
//   console.log("A i B su parni brojevi.");
// } else if (a % 2 != 0 && b % 2 != 0) {
//   console.log("A i B su neparni brojevi.");
// } else if (a % 2 == 0 && b % 2 != 0) {
//   console.log("A je paran a B je neparan.");
// } else {
//   console.log("B je paran a A je neparan.");
// }

// Postoje dva gimnastička tima, Delfini i Koale. Oni se međusobno natječu 3 puta. Pobjednik s najvećim prosječnim rezultatom osvaja trofej!

// 1. Izračunajte prosječni rezultat za svaki tim, koristeći podatke testa ispod
// 2. Usporedite prosječne rezultate tima kako biste odredili pobjednika natjecanja i ispišite ga na konzolu. Ne zaboravite da može biti neriješeno, pa testirajte i to (neriješeno znači da imaju isti prosječni rezultat).

// 3. BONUS 1: Uključite zahtjev za minimalnim rezultatom od 100. Prema ovom pravilu, tim pobjeđuje samo ako ima viši rezultat od drugog tima, a istovremeno rezultat od najmanje 100 bodova. SAVJET: Koristite logički operator za testiranje minimalnog rezultata, kao i više blokova else-if 😉
// 4. BONUS 2: Minimalni rezultat vrijedi i za neriješeno! Dakle, neriješeno se događa samo kada oba tima imaju isti rezultat i oba imaju rezultat veći ili jednak 100 bodova. Inače, niti jedna momčad ne osvaja trofej.

// PODACI TESTIRANJA: Dupini 96, 108 i 89. Koale 88, 91 i 110
// BONUS PODATAKA TESTIRANJA 1: Dupini boduju 97, 112 i 101. Koale 109, 95 i 123
// BONUS PODATAKA TESTIRANJA 2: Dupini boduju 97, 112 i 101. Koale 109, 95 i 106

//1.zadatak
// let delfini = (96 + 108 + 89) / 3;
// let koale = (88 + 91 + 110) / 3;
// console.log("Delfini: " + delfini + " Koale: " + koale);

// //2.zadatak

// if (delfini > koale && delfini > 100) {
//   console.log("Delfini imaju više bodova.");
// } else if (koale > delfini && koale > 100) {
//   console.log("Koale imaju više bodova.");
// } else if (delfini == koale && delfini >= 100 && koale >= 100) {
//   console.log("Delfini i koale imaju jednak broj bodova");
// } else {
//   console.log("Nitko nije pobijedio");
// }

////////////////////////////////////
// SWITCH

// const dan = "utorak";

// switch (dan) {
//   case "ponedjeljak": // "utorak" == "ponedjeljak"
//     console.log("Danas je Ponedjeljak");
//     break;
//   case "utorak": // "utorak" == "utorak"
//     console.log("Danas je Utorak");
//     break;
//   case "srijeda":
//     console.log("Danas je Srijeda");
//     break;
//   case "četvrtak":
//     console.log("Danas je četvrtak");
//     break;
//   case "petak":
//     console.log("Danas je petak");
//   default:
//     console.log("Nije definiran dan");
// }

// const x = 100;

// switch (x) {
//   case 20:
//     console.log("Broj x je jednak 20");
//     break;
//   case 10:
//     console.log("Broj x je jednak 10");
//     break;
//   default:
//     console.log("Bravo");
// }

Jure želi napraviti vrlo jednostavan kalkulator za napojnice kad god ode jesti u restoran. U njegovoj je zemlji uobičajeno dati napojnicu od 15% ako je vrijednost novčanice između 50 i 300. Ako je vrijednost drugačija, napojnica je 20%.

1. Vaš zadatak je izračunati napojnicu, ovisno o vrijednosti računa. Za to stvorite varijablu pod nazivom "tip". Nije dopušteno koristiti if/else naredbu 😅 (Ako vam je lakše, možete početi s if/else naredbom, a zatim je pokušati pretvoriti u ternarni operator!)
2. Ispišite niz na konzoli koji sadrži vrijednost računa, napojnicu i konačnu vrijednost (račun + napojnica). Primjer: 'Račun je bio 275, napojnica 41,25, a ukupna vrijednost 316,25'

PODACI O ISPITU: Testirajte vrijednosti novčanice 275, 40 i 430

SAVJET: Da biste izračunali 20% vrijednosti, jednostavno je pomnožite s 20/100 = 0,2
SAVJET: Vrijednost X je između 50 i 300, ako je >= 50 && <= 300


// const racun = 275;
// let napojnica = 0;

// if (racun >= 50 && racun <= 300) {
//   napojnica = racun * 0.15;
//   console.log("Napojnica iznosi: €", napojnica);
// } else if (racun > 300) {
//   napojnica = racun * 0.2;
//   console.log("Napojnica iznosi: €", napojnica);
// }

////////////////////////////////////
// The Conditional (Ternary) Operator
// ? , :

// const starost = 23;

// starost >= 18 ? console.log("Mozes piti VINO") : console.log("Mozes piti VODU");

// if (starost >= 18) {
//   console.log("Možeš piti VINO");
// } else {
//   console.log("Mozes piti VODU");
// }


Steven želi napraviti vrlo jednostavan kalkulator za napojnice kad god ode jesti u restoran. U njegovoj je zemlji uobičajeno dati napojnicu od 15% ako je vrijednost novčanice između 50 i 300. Ako je vrijednost drugačija, napojnica je 20%.

1. Vaš zadatak je izračunati napojnicu, ovisno o vrijednosti računa. Za to stvorite varijablu pod nazivom "tip". Nije dopušteno koristiti if/else naredbu 😅 (Ako vam je lakše, možete početi s if/else naredbom, a zatim je pokušati pretvoriti u ternarni operator!)
2. Ispišite niz na konzoli koji sadrži vrijednost računa, napojnicu i konačnu vrijednost (račun + napojnica). Primjer: 'Račun je bio 275, napojnica 41,25, a ukupna vrijednost 316,25'

PODACI O ISPITU: Testirajte vrijednosti novčanice 275, 40 i 430

SAVJET: Da biste izračunali 20% vrijednosti, jednostavno je pomnožite s 20/100 = 0,2
SAVJET: Vrijednost X je između 50 i 300, ako je >= 50 && <= 300


// const račun1 = 275;
// const račun2 = 40;
// const račun3 = 430;

// const napojnica1 = račun1 > 50 && račun1 < 300 ? račun1 * 0.15 : račun1 * 0.2;
// console.log(
//   `Napojnica za račun od ${račun1}€ iznosi : €${napojnica1}, ukupna vrijednost iznosi: ${
//     račun1 + napojnica1
//   }€`
// );

// const napojnica2 = račun2 > 50 && račun2 < 300 ? račun2 * 0.15 : račun2 * 0.2;
// console.log(
//   `Napojnica za račun od ${račun2}€ iznosi: €${napojnica2}, ukupna vrijednost iznosi: ${
//     račun2 + napojnica2
//   }€`
// );

// const napojnica3 = račun3 > 50 && račun3 < 300 ? račun3 * 0.15 : račun3 * 0.2;
// console.log(
//   `Napojnica za račun od ${račun3}€ iznosi: €${napojnica3}, ukupna vrijednost iznosi: ${
//     račun3 + napojnica3
//   }€`
// );

/////////////////////////////////////////////////
// Functions

//Definicija funkcije (što funkcija radi!)
// function imeFunkcije() {
//   console.log("Ispis iz Funkcije");
// }

// poziv funkcije (beskonačno poziva iste funkcije)
// imeFunkcije();
// imeFunkcije();
// imeFunkcije();
// imeFunkcije();
// imeFunkcije();
// imeFunkcije();
// imeFunkcije();
// imeFunkcije();

///// Funkcija sa parametrima (ulazni podaci)

// function ispisVoća(jabuka, naranča) {
//   const sok = `Sok je od ${jabuka} jabuka i od ${naranča} naranča`;

//   // return (izlazni podatak)
//   return sok;
// }

// const sok = ispisVoća(5, 0);
// console.log(sok);

// const sok1 = ispisVoća(4, 1);
// console.log(sok1);

// Napiši funkciju koja zbraja dva broja.

// function dvaBroja(x, y) {
//   let z = x + y;
//   return z;
// }

// const rezultat = dvaBroja(2, 7);
// console.log(rezultat);

// Napiši funkciju koja prima 3 broja i izracunava njihov prosjek

// function triBroja(x, y, z) {
//   let rezultat = x + y + z;
//   let prosjek = rezultat / 3;
//   return prosjek;
// }

// const odgovor = triBroja(2, 9, 4);
// console.log(odgovor);

// Napiši funkciju koja prima 2 broja i provjerava koji broj je veci.

// function veciBroj(x, y) {
//   if (x > y) {
//     return x;
//   } else if (y > x) {
//     return y;
//   } else if (y == x) {
//     return "X i Y su jednaki!";
//   }
// }

// const rezultat = veciBroj(10, 19);
// console.log(rezultat);

// const rezultat2 = veciBroj(3, 1);
// console.log(rezultat2);

// const rezultat3 = veciBroj(6, 6);
// console.log(rezultat3);

//////////////// Vrste funckija /////////////////

//primjer Declarations funkcije
// function calcAge(godRodenja) {
//   return 2024 - godRodenja;
// }

// const age1 = calcAge(1997);
// console.log(age1);

// primjer Expression funkcije

// const calcAge2 = function (godRodenja) {
//   return 2024 - godRodenja;
// };

// const age2 = calcAge2(1991);
// console.log(age2);

// primjer Arrow Funkcije

// const calcAge3 = (godRodenja) => 2024 - godRodenja;
// const age3 = calcAge3(1995);
// console.log(age3);

// const calcAge4 = (godinaRodenja, ime) => {
//   const age = 2024 - godinaRodenja;
//   return `Moje ime je ${ime} i imam ${age} godina.`;
// };

// const age4 = calcAge4(1991, "Jure");
// console.log(age4);

/*----- Funkcije nastavak -----

//Primjer funckije bez parametara i return vrijednosti
function helloWorld() {
  console.log("Hello World");
}

helloWorld();

// Primjer funkcije sa jednim parametrom i return-om

let a = 5;

function ispisiA(x) {
  return x;
}

let rezultat = ispisiA(a);
console.log(rezultat);

// Primjer funckije sa dva parametra
// Izračunava zbroj dva broja
let x = 10;
let y = 25;

function zbroj(brojA, brojB) {
  return brojA + brojB;
}

let zbroj1 = zbroj(x, y);
console.log(zbroj1);

// Primjer funkcije sa dva parametra (string)

let ime = "Jure";
let prezime = "Jović";

function recenica(rijec1, rijec2) {
  return rijec1 + " " + rijec2;
}

let odgovor = recenica(ime, prezime);
console.log(odgovor);

/*
Natrag na dva gimnastička tima, Delfine i Koale! Postoji nova gimnastička disciplina, koja funkcionira drugačije.Svaki tim se natječe 3 puta, a zatim se izračuna prosjek 3 rezultata (dakle, jedan prosječni rezultat po timu).Momčad SAMO pobjeđuje ako ima najmanje DVOSTRUKO veći prosječni rezultat od druge ekipe. U protivnom nijedan tim ne pobjeđuje!

1. Napravite funkciju 'calcAverage' za izračun prosjeka 3 rezultata
2. Pomoću funkcije izračunajte prosjek za oba tima
3. Napravite funkciju 'checkWinner' koja uzima prosječni rezultat svakog tima kao parametre ('avgDolhins' i 'avgKoalas'), a zatim prijavljuje pobjednika na konzolu, zajedno s pobjedničkim bodovima, prema gornjem pravilu. Primjer: "Koale pobjeđuju (30 protiv 13)".
4. Koristite funkciju 'checkWinner' za određivanje pobjednika za DATA 1 i DATA 2.
5. Ovaj put zanemarite izvlačenja.

PODACI TESTA 1: Dupini imaju rezultate 44, 23 i 71. Koale rezultate 65, 54 i 49.


SAVJET: Da biste provjerili je li broj A barem dvostruki broj B, provjerite za A >= 2 * B. Primijenite ovo na prosječne rezultate tima

let dupini1 = 44;
let dupini2 = 23;
let dupini3 = 71;

let koale1 = 65;
let koale2 = 54;
let koale3 = 49;

// 1. zadatak

function calcAverage(x, y, z) {
  let prosjek = (x + y + z) / 3;
  return prosjek;
}

// 2. zadatak - Pomoću funkcije izracunaj prosjek za oba tima

let prosjekDupini = calcAverage(dupini1, dupini2, dupini3);
let prosjekKoale = calcAverage(koale1, koale2, koale3);

//3. Napravite funkciju 'checkWinner' koja uzima prosječni rezultat svakog tima , a zatim ispisuje pobjednika u konzolu, zajedno s pobjedničkim bodovima, prema PRAVILU Primjer ispisa: "Koale pobjeđuju (30 protiv 13)".

// PRAVILO: Momčad SAMO pobjeđuje ako ima najmanje DVOSTRUKO veći prosječni rezultat od druge ekipe. U protivnom nijedan tim ne pobjeđuje!

function checkWinner(dupini, koale) {
  if (dupini >= koale * 2) {
    console.log(`Dupini pobjeđuju (${dupini} protiv ${koale})`);
  } else if (koale >= dupini * 2) {
    console.log(`Koale pobjeđuju (${koale} protiv ${dupini})`);
  } else {
    console.log("Nitko nije pobijedio...");
  }
}

checkWinner(prosjekDupini, prosjekKoale);

//TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

// duzi nacin
let dupini2Rezultat = calcAverage(85, 54, 41);
let koale2Rezultat = calcAverage(23, 34, 27);

checkWinner(dupini2Rezultat, koale2Rezultat);

// kraci nacin
checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27));

*/

/* ------------------------------ ARRAY / POLJA ----------------------------------*/

// const friend1 = "Jure";
// const friend2 = "Jan";
// const friend3 = "Mile";

// // Deklaracija polja friends

// const friends = ["Jure", "Jan", "Mile"];
// console.log(friends);

// // Dohvacanje elemenata iz polja preko index-a([0], [1])

// console.log(friends[1]);
// console.log(friends[0]);
// console.log(friends[2]);

// // Dohvacanje velicine polja

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[1] = "Marko";
// console.log(friends);

// const datumRodenja = [1990, 1967, 2002, 2010, 2018, 2023];

// for (i = 0; i < datumRodenja.length; i++) {
//   let rezultat = 2024 - datumRodenja[i];
//   console.log(rezultat);
// }

// // Osnovne ugradbene metode za polja

// let automobili = ["Mercedes", "Škoda", "Fiat"];

// // Dodavanje elementa na kraj polja
// // metoda PUSH dodaje novi element na kraj polja

// automobili.push("Ford");
// console.log(automobili);

// // Dodavanje elementa na pocetak polja
// // metoda UNSHIFT dodaje novi element na početak polja

// automobili.unshift("Kurac");
// console.log(automobili);

// // Micanje elementa sa zadnjeg mjesta
// // metoda POP izbacuje zadnji element iz polja
// automobili.pop();
// const zadnjiElement = automobili.pop();
// console.log(zadnjiElement);

// // Micanje prvog elementa u polju
// // metoda SHIFT izbacuje prvi element iz polja

// automobili.shift();
// console.log(automobili);

// const vracaShift = automobili.shift();
// console.log(vracaShift);

// let kamioni = ["Mercedes", "Škoda", "Fiat"];

// // indexOf metoda koja vraca index od elementa iz polja

// console.log(kamioni.indexOf("Škoda"));

// // metoda includes provjerava da li postoji element sa tom vrijednosšću

// console.log(kamioni.includes("Fiat"));
// console.log(kamioni.includes(23));

/*
Steven još uvijek izrađuje svoj kalkulator napojnice, koristeći ista pravila kao i prije: dajte napojnicu 15% računa ako je vrijednost računa između 50 i 300, a ako je vrijednost drugačija, napojnica je 20%.

1. Napišite funkciju 'calcTip' koja uzima bilo koju vrijednost računa kao ulaz i vraća odgovarajuću napojnicu, izračunatu na temelju gornjih pravila (možete provjeriti kod iz prvog izazova kalkulatora napojnice ako je potrebno). Koristite vrstu funkcije koja vam se najviše sviđa. Testirajte funkciju koristeći vrijednost računa od 100.
2. A sada upotrijebimo nizove! Dakle, stvorite niz 'računi' koji sadrži testne podatke ispod.
3. Napravite niz 'napojnice' koji sadrži vrijednost napojnice za svaki račun, izračunatu iz funkcije koju ste prije stvorili.
4. BONUS: Napravite niz 'total' koji sadrži ukupne vrijednosti, dakle račun + napojnica.*/

// function calcTip(racun) {
//   if (racun >= 50 && racun <= 300) {
//     let napojnica = racun * 0.15;
//     return napojnica;
//   } else {
//     let napojnica = racun * 0.2;
//     return napojnica;
//   }
// }

// let računi = [125, 555, 44];

// //1.nacin
// let napojnica1 = calcTip(računi[0]);
// let napojnica2 = calcTip(računi[1]);
// let napojnica3 = calcTip(računi[2]);

// let napojnice = [napojnica1, napojnica2, napojnica3];
// console.log(napojnice);

// //2.nacin
// let napojnice1 = [calcTip(računi[0]), calcTip(računi[1]), calcTip(računi[2])];
// console.log(napojnice1);

// Funkcija koja gleda da li je umnožak dva broja, paran ili neparan.
// Rezultat ispisuje u konzolu.

// let prviBroj = 10;
// let drugiBroj = 20;

// function umnozak(x, y) {
//   let rezultat = x * y;
//   return rezultat;
// }

// let rezultatUmnozak = umnozak(prviBroj, drugiBroj);

// if (rezultatUmnozak % 2 == 0) {
//   console.log(
//     `Umnožak brojeva ${prviBroj} i ${drugiBroj} je ${rezultatUmnozak} i broj je paran.`
//   );
// } else {
//   console.log(
//     `Umnožak brojeva ${prviBroj} i ${drugiBroj} je ${rezultatUmnozak} i broj je paran.`
//   );
// }

// Napiši funkciju koja prima 3 broja i provjerava koji je najveci

// let a = 10;
// let b = 15;
// let c = 12;

// function provjeraNajveci(a, b, c) {
//   if (a > b && b > c) {
//     console.log(`Broj ${a} je najveci, zatim broj ${b} i onda broj ${c}`);
//   } else if (a > b && c > b) {
//     console.log(`Broj ${a} je najveci, zatim broj ${c} i onda broj ${b}`);
//   } else if (b > a && a > c) {
//     console.log(`Broj ${b} je najveci, zatim broj ${a} i onda broj ${c}`);
//   } else if (b > a && c > a) {
//     console.log(`Broj ${b} je najveci, zatim broj ${c} i onda broj ${a}`);
//   } else if (c > a && a > b) {
//     console.log(`Broj ${c} je najveci, zatim broj ${a} i onda broj ${b}`);
//   } else if (c > b && b > a) {
//     console.log(`Broj ${c} je najveci, zatim broj ${b} i onda broj ${a}`);
//   }
// }

// provjeraNajveci(a, b, c);

/* ------------------------- OBJECTS ------------------------- */

// const objekt = {};

// const auto = {
//   marka: "Mercedes",
//   godište: 1991,
//   boja: "crna",
//   ispis: function () {
//     console.log(auto);
//   },
//   ispis2: function () {
//     console.log(auto.marka + auto.godište);
//   },
// };

// ///////////////////////// Dohvaćanje svojstva i metoda od objekta
// // 1.način Dot notation

// console.log(auto.marka);
// console.log(auto.godište);
// console.log(auto.boja);

// auto.ispis();
// auto.ispis2();

// // 2.način Bracket notation

// console.log(auto["marka"]);
// console.log(auto["godište"]);
// console.log(auto["boja"]);

// const marko = {
//   ime: "Marko",
//   prezime: "Markić",
//   datumRodenja: 1995,
//   trenutnaGodina: 2024,
//   posao: "Developer",
//   obrazovanje: "FER",
//   prijatelji: ["Mate", "Ante", "Domagoj"],
//   roditelji: {
//     tata: "Ivo",
//     mama: "Iva",
//   },
//   godina: function () {
//     let godine = marko.trenutnaGodina - marko.datumRodenja;
//     console.log(`${marko.ime} ima ${godine} godina.`);
//   },
// };

// console.log(marko.prijatelji[0]);
// console.log(marko.roditelji.tata);

// console.log(marko["posao"]);

// marko["prijatelji"];

// console.log(marko["prijatelji"][1]);
// console.log(marko["prijatelji"][2]);

// console.log(marko["roditelji"]["mama"]);
// console.log(marko.roditelji.mama);

// marko.godina();

// const narudzba = {
//   brojRacuna: 12431234,
//   korisnickoIme: "Jure",
//   adresaKorisnika: "Split",
//   artikli: {
//     hrana: {
//       naziv: "Jabuka",
//     },
//     alkohol: {
//       naziv: "Pivo",
//     },
//   },
// };

// // dohvacanje na prvi nacin preko Tocke

// console.log(narudzba.brojRacuna);
// console.log(narudzba.korisnickoIme);
// console.log(narudzba.adresaKorisnika);
// console.log(narudzba.artikli);

// console.log(narudzba.artikli.hrana);
// console.log(narudzba.artikli.hrana.naziv);

// console.log(narudzba["brojRacuna"]);
// console.log(narudzba["korisnickoIme"]);
// console.log(narudzba["adresaKorisnika"]);
// console.log(narudzba["artikli"]);

// console.log(narudzba["artikli"]["hrana"]["naziv"]);

// const studenti = {
//   razred: {
//     razredA: {
//       ucionica: "74A",
//       imenaStudenata: ["Ante", "Anto", "Marin", "Luka"],
//     },
//     razredB: {
//       ucionica: "75A",
//       imenaStudenata: ["Igor", "Ivan", "Marko", "Tin"],
//     },
//   },
// };

// console.log(studenti.razred.razredA.imenaStudenata[1]);
// console.log(studenti["razred"]["razredB"]["imenaStudenata"][3]);

// const exports = {
//   tableName: "posts",
//   schema: {
//     columns: {
//       title: { type: "varchar", nullable: false, comment: "a comment!" },
//       slug: "varchar",
//       author_id: "int",
//       created_at: "datetime",
//       updated_at: "datetime",
//     },
//     indexes: [
//       {
//         type: "unique",
//         columns: ["title"],
//       },
//     ],
//   },
//   _fid: "sybwcf_tg",
// };

// console.log(exports.schema.columns.title.comment);
// console.log(exports.schema.indexes[0].columns[0]);

// console.log(exports["schema"]["indexes"][0]["columns"][0]);

const narudzba1 = {
  brojRacuna: 12431234,
  korisnickoIme: "Jure",
  adresaKorisnika: "Split",
  artikli: {
    hrana: {
      naziv: "Jabuka",
    },
    alkohol: {
      naziv: "Pivo",
    },
  },
};

for (svojstvo in narudzba1) {
  console.log(narudzba1[svojstvo]);
}

console.log(narudzba1["brojRacuna"]);
