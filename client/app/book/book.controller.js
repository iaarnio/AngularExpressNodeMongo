'use strict';

angular.module('bookapp')
  .controller('BookController', bookController);

function bookController(bookDataService, $log) {
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
    $log.info('add: :"' + vm.newBook + '"');
    $log.info('add: hipsut :"' + '' + '"');

    var a1 = {};
    if (a1 === '') { $log.debug('hipsu') }
    if (a1 === {}) { $log.debug('{}') }
    if (a1 === []) { $log.debug('[]') }
    if (a1 === null) { $log.debug('null') }

    var a2 = {};
    a2.foo = '';
    a2.bar = '';
    if (a2 === '') { $log.debug('a2 hipsu') }
    if (a2 === {}) { $log.debug('a2 {}') }
    if (a2 === []) { $log.debug('a2 []') }
    if (a2 === null) { $log.debug('a2 null') }

    vm.a3 = {};
    vm.a3.foo = '';
    vm.a3.bar = '';
    if (vm.a3 === '') { $log.debug('a3 hipsu') }
    if (vm.a3 === {}) { $log.debug('a3 {}') }
    if (vm.a3 === []) { $log.debug('a3 []') }
    if (vm.a3 === null) { $log.debug('a3 null') }

    $log.debug('nb=' + vm.newBook);
    $log.debug('nb.t=' + vm.newBook.title);

    if (vm.newBook.title === '') {
      $log.debug('TITLE haara');
    }

    if (vm.newBook === '') {
      $log.debug('RETURN haara');
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
