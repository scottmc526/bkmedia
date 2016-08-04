app.controller('stepOneController', function($scope) {
  $scope.numberArray = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];
  $scope.faces = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  $scope.tableColumns = [
    {name: 'Oral Exam', selected: false, savings: 100},
    {name: 'Cleaning', selected: false, savings: 200},
    {name: 'Filling', selected: false, savings: 150},
    {name: 'X-Rays', selected: false, savings: 300},
    {name: 'Root Canal', selected: false, savings: 50},
    {name: 'Crown', selected: false, savings: 75},
    {name: 'Upper Denture', selected: false, savings: 125},
    {name: 'Braces', selected: false, savings: 250}
  ]


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
