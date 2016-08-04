app.controller('stepOneController', function($scope) {
  $scope.numberArray = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];
  $scope.faces = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  $scope.tableColumns = [{name: 'Oral'}, {name: 'Cleaning'}, {name: 'Filling'}, {name: 'Xray'}, {name: 'Root'}, {name: 'Crown'}, {name: 'Upper'}, {name: 'Braces'}]


  $scope.warningMessage = true;
  $scope.stepTwoTable = false;

  $scope.selectMembers = function(familySize) {
    $scope.familyArray = [];
    $scope.warningMessage = false;
    $scope.stepTwoTable = true;

    familySize < 11 ? $scope.familyMembers = familySize : alert ('exceeded maximum family members');

    for (var i = 1; i <= $scope.familyMembers; i++) {
      $scope.familyArray.push(i);
    }
  }

  $scope.checkAll = function() {
    $scope.checkBox = !$scope.checkBox
    // $scope.familyArray.forEach(function (member) {
    //   console.log(member);
    //   member.Selected = $scope.selectedAll;
    // });
  }
})
