'use strict';

angular.module('bookapp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/app/book/book.html',
        controller: 'BookController',
        controllerAs: 'books'
      });
  });