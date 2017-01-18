app.controller('stepOneController', function($scope) {
  $scope.warningMessage = true;
  $scope.stepTwoTable = false;
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

  $scope.selectMembers = function(familySize) {
    $scope.familyArray = [];
    $scope.warningMessage = false;
    $scope.stepTwoTable = true;

    familySize < 11 ? $scope.familyMembers = familySize : alert ('exceeded maximum family members');

    for (var i = 1; i <= $scope.familyMembers; i++) {
      $scope.familyArray.push({person: i, savings: 0, selected: false});
    };
  };

  $scope.highlightFaces = function(familySize) {
    $scope.smileyFaces.forEach(face => {
      face['className'] = 'unselected';
    });

    for (var face = 0; face < familySize; face++) {
      $scope.smileyFaces[face]['className'] = 'selected';
    };
  };

  $scope.individualSavings = function(person ,column) {
    $scope.familyArray[person]['selected'] = true;

    $scope.familyArray[person]['savings'] += $scope.tableColumns[column]['savings'];
  };

  $scope.combinedSavings = function() {
    $scope.totalSavings = 0;

    for (var i = 0; i < $scope.familyArray.length; i++) {
      $scope.totalSavings += $scope.familyArray[i]['savings'];
    };
  };

  $scope.movieTickets = function () {
    //average cost of movie ticket = $8.43 according to google
    $scope.tickets = 0;
    $scope.tickets = Math.floor($scope.totalSavings / 8.43)
  };
});
