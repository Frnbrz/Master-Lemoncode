function isBookRead (books, titleToSearch) {

  // for (const book of books) {
  //   if (book.title === titleToSearch) {
  //     return book.isRead
  //   }
  // }

  return books.some(book => book.title === titleToSearch && book.isRead)
}


var books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
]

console.log(isBookRead(books, "Devastación")) // true
console.log(isBookRead(books, "Canción de hielo y fuego")) // false
console.log(isBookRead(books, "Los Pilares de la Tierra")) // false