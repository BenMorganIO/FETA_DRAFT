'use strict';

angular.module('fetaApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
      })
      .when('/expressions', {
        templateUrl: 'views/expressions.html',
        controller: 'ExprCtrl'
      })
      .when('/exercises', {
        templateUrl: 'views/exercises.html',
        controller: 'ExerCtrl'
      })
      .when('/glossary', {
        templateUrl: 'views/glossary.html',
        controller: 'GlosCtrl'
      })
      .when('/settings', {
        templateUrl: 'views/settings.html',
        controller: 'SetsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
