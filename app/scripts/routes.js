'use strict';

feta.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
    })
    .when('/expressions', {
      templateUrl: 'views/expressions/expressions.html',
      controller: 'ExpressionsCtrl'
    })
    .when('/exercises', {
      templateUrl: 'views/exercises.html',
    })
    .when('/settings', {
      templateUrl: 'views/settings.html',
    })
    .when('/glossary', {
      templateUrl: 'views/glossary.html',
      controller: 'GlossaryCtrl'
    })
    .otherwise({
      templateUrl: '404.html'
    });
});