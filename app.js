const app = angular.module('app', []);
app.controller('HelloController', function ($scope) {
  $scope.yourName = "AngularJs1";
  $scope.updatedName = '';
  $scope.$watch(() => $scope.yourName, (value) => {
    console.log('Changed: ', value);
    $scope.updatedName = value;
  })
});
