'use strict';

angular.module('bookapp')
  .controller('BookController', BookController);

function BookController(bookDataService, $log) {
  var vm = this;

  // variables and functions available in view
  vm.bookList = [];
  vm.newBook = {};
  vm.getBooks = getBooks;
  vm.addBook = addBook;
  vm.deleteBook = deleteBook;

  activate();

  function activate() {
    getBooks();
  }

  function getBooks() {
    bookDataService.getBooks()
     .then(updateBookList, errorHandler)
  }

  function updateBookList(bookList) {
    vm.bookList = bookList;
  }

  function addBook() {
    if (vm.newBook === '') {
      return;
    }
    bookDataService.addBook(vm.newBook)
      .then(clearNewBookAndUpdateBookList, errorHandler)
  }

  function clearNewBookAndUpdateBookList() {
    vm.newBook = '';
    getBooks();
  }

  function deleteBook(book) {
    bookDataService.deleteBook(book)
      .then(getBooks, errorHandler)
  }

  function errorHandler(context) {
    $log.error('Error in controller: ' + context);
  }
}
