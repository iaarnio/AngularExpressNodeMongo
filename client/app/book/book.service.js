angular.module('bookapp')
  .factory('bookDataService', bookDataService);

function bookDataService($http, $q, $log) {

  return {
    getBooks: getBooks,
    addBook: addBook,
    deleteBook: deleteBook
  };

  function getBooks() {
    $log.info('getBooks called in bookDataService');
    return $http.get('/api/books/')
      .then(sendResponseData, sendError);
  }

  function addBook(book) {
    $log.info('addBook called in bookDataService');
    $log.info('adding book: ' + book.title);
    return $http.post('/api/books/', {title: book.title})
      .then(sendResponseData, sendError);
  }

  function deleteBook(book) {
    $log.info('deleteBook called in bookDataService');
    $log.info('deleting book: ' + book.title);
    return $http.delete('/api/books/' + book._id)
      .then(sendResponseData, sendError);
  }

  function sendResponseData(response) {
    return response.data;
  }

  function sendError(response) {
    $log.info('sendError called');
    return $q.reject('bookDataService failed with response code ' + response.status);
  }

}



