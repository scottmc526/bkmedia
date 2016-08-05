app.controller('stepOneController', function($scope) {
  $scope.numberArray = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];
  $scope.savingsArray = [];

  $scope.smileyFaces = [
    {id: 1, className: 'unselected'},
    {id: 2, className: 'unselected'},
    {id: 3, className: 'unselected'},
    {id: 4, className: 'unselected'},
    {id: 5, className: 'unselected'},
    {id: 6, className: 'unselected'},
    {id: 7, className: 'unselected'},
    {id: 8, className: 'unselected'},
    {id: 9, className: 'unselected'},
    {id: 10, className: 'unselected'},
  ];

  $scope.tableColumns = [
    {name: 'Oral Exam', selected: false, savings: 100},
    {name: 'Cleaning', selected: false, savings: 200},
    {name: 'Filling', selected: false, savings: 150},
    {name: 'X-Rays', selected: false, savings: 300},
    {name: 'Root Canal', selected: false, savings: 50},
    {name: 'Crown', selected: false, savings: 75},
    {name: 'Upper Denture', selected: false, savings: 125},
    {name: 'Braces', selected: false, savings: 250}
  ];


  $scope.warningMessage = true;
  $scope.stepTwoTable = false;

  $scope.selectMembers = function(familySize) {
    $scope.familyArray = [];
    $scope.warningMessage = false;
    $scope.stepTwoTable = true;

    familySize < 11 ? $scope.familyMembers = familySize : alert ('exceeded maximum family members');

    for (var i = 1; i <= $scope.familyMembers; i++) {
      $scope.familyArray.push(i);
    };
  };

  $scope.highlightFaces = function(familySize) {
    $scope.smileyFaces.forEach(function(face) {
      face['className'] = 'unselected';
    });

    for (var face = 0; face < familySize; face++) {
      $scope.smileyFaces[face]['className'] = 'selected';
    };
  };
  //
  // $scope.checkAll = function() {
  //   $scope.checkBox = !$scope.checkBox
  //
  // };

  $scope.savingsCalc = function(index) {
    $scope.savings = 0;
    $scope.savingsArray.push($scope.tableColumns[index]['savings'])
    for (var i = 0; i < $scope.savingsArray.length; i++) {
      $scope.savings += $scope.savingsArray[i]
    }
    console.log($scope.savings);
  }
});
