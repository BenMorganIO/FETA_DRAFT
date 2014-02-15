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
      controller: 'ExprCtrl'
    })
    .when('/exercises', {
      templateUrl: 'views/exercises.html',
      controller: 'ExerCtrl'
    })
    .when('/settings', {
      templateUrl: 'views/settings.html',
      controller: 'SetsCtrl'
    })
    .when('/glossary', {
      templateUrl: 'views/glossary.html',
      controller: 'GlossaryCtrl'
    })
    .otherwise({
      templateUrl: '404.html'
    });
});