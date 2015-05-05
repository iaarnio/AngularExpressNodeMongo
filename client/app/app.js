'use strict';

angular.module('bookapp')
  .config(function ($routeProvider) {
    $routeProvider.otherwise({
      redirectTo: '/'
    });
  });
