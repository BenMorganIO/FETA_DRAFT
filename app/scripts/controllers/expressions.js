'use strict';

feta.controller('ExpressionsCtrl', function ($scope) {
	$scope.expressions = [
    { "name": 'intro',
      "url":  'views/expressions/shared/intro.txt' },
    { "name": 'happiness',
      "url":  'views/expressions/shared/happiness.txt' },
    { "name": 'sadness',
      "url":  'views/expressions/shared/sadness.txt'},
    { "name": 'anger',
      "url":  'views/expressions/shared/anger.txt'},
    { "name": 'disgust',
      "url":  'views/expressions/shared/disgust.txt'},
    { "name": 'fear',
      "url":  'views/expressions/shared/fear.txt'},
    { "name": 'surprise',
      "url":  'views/expressions/shared/surprise.txt'},
  ];

  $scope.expression = $scope.expressions[0]

  $scope.emotion = function(emotion) {
    $scope.expression = $scope.expressions[emotion]
  }
});
