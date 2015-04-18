angular.module('bookapp')
  .factory('bookDataService', bookDataService);

function bookDataService($http, $q) {

  return {
    listBooks: listBooks,
    addBook: addBook,
    deleteBook: deleteBook
  };

  function listBooks() {
    return $http.get('/api/books/')
      .then(sendResponseData, sendError);
  }

  function addBook(book) {
    return $http.post('/api/books/', {title: book.title})
      .then(sendResponseData, sendError);
  }

  function deleteBook(book) {
    return $http.delete('/api/books/' + book._id)
      .then(sendResponseData, sendError);
  }

  function sendResponseData(response) {
    return response.data;
  }

  function sendError(response) {
    return $q.reject('bookDataService failed with response code ' + response.status);
  }

}



