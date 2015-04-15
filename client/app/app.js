'use strict';

angular.module('bookapp', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider.otherwise({
      redirectTo: '/'
    });
  });
