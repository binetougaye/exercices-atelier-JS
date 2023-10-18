const tabUser = [
  {
    id: 1,
    nom: "Sylla",
    prenom: "Diarry",
    age: 17,
    notes: 18,
    statut: "présent",
  },
  {
    id: 2,
    nom: "Barry",
    prenom: "Mahmoud",
    age: 18,
    notes: 12,
    statut: "présent",
  },
  {
    id: 3,
    nom: "Sow",
    prenom: "Abou",
    age: 20,
    notes: 8,
    statut: "absent",
  },
  {
    id: 4,
    nom: "Badji",
    prenom: "Alkaly",
    age: 15,
    notes: 16,
    statut: "présent",
  },
  {
    id: 5,
    nom: "Ndiaye",
    prenom: "Boubacar",
    age: 23,
    notes: 11,
    statut: "absent",
  },
  {
    id: 6,
    nom: "Tra",
    prenom: "Sidy",
    age: 22,
    notes: 9,
    statut: "absent",
  },
  {
    id: 7,
    nom: "Ba",
    prenom: "Mady",
    age: 24,
    notes: 15,
    statut: "présent",
  },
  {
    id: 8,
    nom: "Faye",
    prenom: "Awa",
    age: 21,
    notes: 17,
    statut: "présent",
  },
  {
    id: 9,
    nom: "Sow",
    prenom: "Racky",
    age: 16,
    notes: 12,
    statut: "présent",
  },
  {
    id: 10,
    nom: "Gaye",
    prenom: "Fabi",
    age: 24,
    notes: 14,
    statut: "absent",
  },
];
// // La note maximale
const myInitialValue = 0;
let noteMaximale = tabUser.reduce((a, b) => Math.max(a, b.notes), 0);
// console.log(noteMaximale);
// Afficher la liste des élèves par rapport aux notes de la plus petite à la plus grande
let notesCroissantes = tabUser.sort(
  (notes1, notes2) => notes1.notes - notes2.notes
);
// console.log(notesCroissantes);
// Faire la somme des ages de tous les élèves
const initialValue = 0;
let somme = tabUser.reduce((a, b) => a + b.age, 0);
// console.log(somme);
// Afficher les notes des élèves qui sont paires
let notesPaires = tabUser.filter((p) => p.notes % 2 === 0);
// console.log(notesPaires);
// Afficher la liste des élèves sans l'age
let tabWithoutAge = [];
for (i = 0; i < tabUser.length; i++) {
  delete tabUser[i].age;
  // console.log(tabUser[i]);
  tabWithoutAge.push(tabUser[i]);
}
// console.log(tabWithoutAge);
// Afficher la liste des élèves présents
let liste = tabUser.filter((p) => p.statut === "présent");
// console.log(liste);
// Afficher la liste des élèves qui ont une note sup ou =10 et return passe ou redouble
for (i = 0; i < tabUser.length; i++) {
  let text = "";
  if (tabUser[i].notes >= 10) {
    text = tabUser[i].prenom + " passe en classe supérieure";
    console.log(text);
  } else {
    text = tabUser[i].prenom + " redouble";
    console.log(text);
  }
}
