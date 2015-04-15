'use strict';

angular.module('bookapp')
  .controller('BooksController', function ($http) {
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
    // implementation details (private)

    function getBooks() {
      $http.get('/api/books').success(function (bookList) {
        vm.bookList = bookList;
      });
      return vm.bookList;
    }

    function addBook() {
      if (vm.newBook === '') {
        return;
      }
      $http.post('/api/books', {title: vm.newBook.title});
      vm.newBook = '';
      getBooks();
    }

    function deleteBook(book) {
      $http.delete('/api/books/' + book._id);
      getBooks();
    }
  });
