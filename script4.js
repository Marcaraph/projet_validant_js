const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

/* ENTREPRENERS BORN IN THE 70's */

const entrepreneursBorn70 = entrepreneurs.filter(entrepreneur => entrepreneur.year >= 1970 && entrepreneur.year < 1980);
console.log("Liste des entrepreneurs né(e)s dans les années 1970 :");
console.log(entrepreneursBorn70);

/* ENTREPRENERS NAMES */

const nameFirstEntrepreneurs = entrepreneurs.map(entrepreneur => ({ first: entrepreneur.first, last: entrepreneur.last }));
console.log("Array qui reprend le prénom et le nom de chaque entrepreneur :")
console.log(nameFirstEntrepreneurs);

/* ACTUAL AGE */

const yearActual = new Date().getFullYear();
const ageActual = entrepreneurs.map(entrepreneur => { 
  const age = yearActual - entrepreneur.year;
  return `${entrepreneur.first} ${entrepreneur.last} aurait ${age} ans aujourd'hui.`;
});
console.log("Âge actuel de chaque inveteur :");
console.log(ageActual);

/* SORTED ENTREPRENERS */

const lastSorted = entrepreneurs.slice().sort((a, b) => a.last.localeCompare(b.last));
console.log("Entrepreneurs/euses trié(e)s par ordre alphabétique du nom de famille :")
console.log(lastSorted)