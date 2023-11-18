/*
Filename: ComplexCode.js

Description: This code demonstrates a complex object-oriented application built in JavaScript using ES6 classes. The application simulates a library with books, authors, and users. It allows users to check out and return books, view their borrowing history, and search for books by title or author.

Author: Your Name
Date: Today's Date

*/

// Book class represents a single book
class Book {
  constructor(title, author, publicationYear, availability) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
    this.availability = availability;
  }

  // Helper method to check if the book is available
  isAvailable() {
    return this.availability;
  }
}

// User class represents a library user
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.borrowedBooks = [];
  }

  // Method to check out a book
  checkOutBook(book) {
    if (book.isAvailable()) {
      this.borrowedBooks.push(book);
      book.availability = false;
      console.log(`${this.name} checked out "${book.title}" by ${book.author}.`);
    } else {
      console.log(`${book.title} is not available.`);
    }
  }

  // Method to return a book
  returnBook(book) {
    const index = this.borrowedBooks.indexOf(book);
    if (index !== -1) {
      this.borrowedBooks.splice(index, 1);
      book.availability = true;
      console.log(`${this.name} returned "${book.title}" by ${book.author}.`);
    } else {
      console.log(`${this.name} did not borrow "${book.title}".`);
    }
  }

  // Method to view borrowing history
  viewBorrowingHistory() {
    console.log(`${this.name}'s Borrowing History:`);
    this.borrowedBooks.forEach((book, index) => {
      console.log(`${index + 1}. "${book.title}" by ${book.author}`);
    });
  }
}

// Library class represents the entire library
class Library {
  constructor() {
    this.books = [];
    this.users = [];
  }

  // Method to add books to the library
  addBook(book) {
    this.books.push(book);
  }

  // Method to register users
  registerUser(user) {
    this.users.push(user);
  }

  // Method to search for books by title or author
  searchBooks(query) {
    const results = [];
    this.books.forEach((book) => {
      if (
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase())
      ) {
        results.push(book);
      }
    });
    if (results.length > 0) {
      console.log(`Search results for "${query}":`);
      results.forEach((book, index) => {
        console.log(`${index + 1}. "${book.title}" by ${book.author}`);
      });
    } else {
      console.log(`No results found for "${query}".`);
    }
  }
}

// Create instances of books
const book1 = new Book("The Catcher in the Rye", "J.D. Salinger", 1951, true);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960, true);
const book3 = new Book("1984", "George Orwell", 1949, false);

// Create instances of users
const user1 = new User("John Doe", "johndoe@example.com");
const user2 = new User("Jane Smith", "janesmith@example.com");

// Create instance of library
const library = new Library();

// Add books to the library
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

// Register users
library.registerUser(user1);
library.registerUser(user2);

// Demonstrate library functionalities
user1.checkOutBook(book1);
user2.checkOutBook(book2);
user1.viewBorrowingHistory();

library.searchBooks("kill");
user2.returnBook(book2);

user1.viewBorrowingHistory();
library.searchBooks("1984");