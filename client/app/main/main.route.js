'use strict';

angular.module('demoapp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/app/main/main.html',
        controller: 'MainCtrl'
      });
  });