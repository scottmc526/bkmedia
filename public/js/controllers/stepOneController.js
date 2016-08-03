app.controller('stepOneController', function($scope) {
  $scope.familyArray = [];
  $scope.faces = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  $scope.warningMessage = true;
  $scope.stepTwoTable = false;

  $scope.selectMembers = function(index) {
    $scope.warningMessage = false;
    $scope.stepTwoTable = true;
    $scope.familyMembers = index + 1

    for (var i = 1; i <= $scope.familyMembers; i++) {
      $scope.familyArray.push(i)

    }
  }
})
