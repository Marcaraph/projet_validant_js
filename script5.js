const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

/* ALL RENTED BOOKS */

const allRented = books.every(book => book.rented > 0);
  if (allRented) {
    console.log("Tous les livres ont déjà été empruntés au moins une fois");
  } else {
    console.log("Certains livres n'ont pas été empruntés");
  }

/* MOST RENTED BOOK */

const sortedMostRentedBooks = books.slice().sort((a, b) => b.rented - a.rented);
const mostRented = sortedMostRentedBooks[0];
console.log("Le livre le plus emprunté est :");
console.log(mostRented.title)

/* LEAST RENTED BOOK */

const sortedLeastRentedBooks = books.slice().sort((a, b) => a.rented - b.rented);
const leastRented = sortedLeastRentedBooks[0];
console.log("Le livre le moins emprunté est :");
console.log(leastRented.title)

/* FIND SPECIFIC ID */

const bookWithId = books.find(book => book.id === 873495);
console.log(bookWithId.title)

/* DELETE SPECIFIC ID */

/* OTHER METHOD */

/* let index = books.findIndex(book => book.id === 133712);
books.splice(index, 1);
console.log(books) */

const booksWithoutId = books.filter(book => book.id !== 133712);
console.log(booksWithoutId)

/* SORTED BOOKS */

const titleSorted = booksWithoutId.slice().sort((a, b) => a.title.localeCompare(b.title));
console.log(titleSorted)