'use strict';

feta.controller('ExpressionsCtrl', function ($scope) {
	$scope.expression = [
    { "name": 'happiness',
      "url":  'views/expressions/happiness.txt' }
  ];

  $scope.notes = $scope.expression[0]
});
