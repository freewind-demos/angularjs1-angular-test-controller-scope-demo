describe('test', () => {

  beforeEach(module('app'));

  let $controller, $scope;

  beforeEach(inject(function (_$controller_, _$rootScope_) {
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
    $scope = _$rootScope_.$new();
  }));

  it('scope values', () => {
    $controller('HelloController', {$scope});
    expect($scope.yourName).toEqual('AngularJs1');
  });
});
