'use strict';

describe('Controller: GlossaryCtrl', function () {

  // load the controller's module
  beforeEach(module('fetaApp'));

  var GlossaryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GlossaryCtrl = $controller('GlossaryCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
