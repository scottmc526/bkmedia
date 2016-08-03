app.controller('stepOneController', function($scope) {
  $scope.numberArray = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten']
  $scope.faces = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  $scope.warningMessage = true;
  $scope.stepTwoTable = false;

  $scope.selectMembers = function(index) {
    $scope.familyArray = [];
    $scope.warningMessage = false;
    $scope.stepTwoTable = true;

    if (index < 10) {
      $scope.familyMembers = index + 1
    } else {
      alert ('exceeded maximum family members')
    }

    for (var i = 1; i <= $scope.familyMembers; i++) {
      $scope.familyArray.push(i)
    }
  }
})
