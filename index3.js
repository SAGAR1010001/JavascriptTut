class Bookstore {
  constructor(books) {
    this.books = books;
  }

  listBooks() {
    for (const book of this.books) {
    //   console.log(`
    //         ${book.name} by ${book.author}
    //         `);
        book.displayBook()
    }
  }
}

class Book {
  constructor(name, author) {
    this.name = name;
    this.author = author;
    }
    
    displayBook() {
              console.log(`
            ${this.name} by ${this.author}
            `);
    }
}

const ninteen84 = new Book("1984", "George Orwell");
const hp = new Book("Harry potter", "J.K Rowlinh");

const bookstore = new Bookstore([ninteen84, hp])
bookstore.listBooks()
