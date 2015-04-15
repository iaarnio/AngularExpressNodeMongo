'use strict';

angular.module('demoapp', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider.otherwise({
      redirectTo: '/'
    });
  });
