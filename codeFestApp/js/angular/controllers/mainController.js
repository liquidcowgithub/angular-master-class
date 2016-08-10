codeFestApp.controller("mainController", ["$scope", function ($scope) {
  $scope.currentView = "";

  $scope.menuItems = [
    {
      "name":"Athletes",
      "viewLink": "js/angular/views/athletes.html"
    },
    {
      "name":"Countries",
      "viewLink": "js/angular/views/countries.html"
    },
    {
      "name":"Medals",
      "viewLink": "js/angular/views/medals.html"
    },
    {
      "name":"Sports",
      "viewLink": "js/angular/views/sports.html"
    }
  ];

  $scope.currentView = "js/angular/views/athletes.html";

  $scope.loadView = function(viewLink) {
    $scope.currentView = viewLink;
  }
}]);
