var app = angular.module("FinalApp", ["ngRoute", "sticky"]);

app.config(function($routeProvider) {
  $routeProvider.when("/week1", {
    templateUrl: "templates/week1.html"
  });
  $routeProvider.when("/memories", {
    templateUrl: "templates/memories.html"
  })
  
  $routeProvider.otherwise("/week1");
});

app.controller("AppCtrl", function($scope, $rootScope, $location) {
  $rootScope.$on('$routeChangeSuccess', function(e, current, pre) {
    $scope.route = $location.path().substring(1);
  });
  
});

app.controller("StudentCtrl", function($scope, $http, $filter) {
  $scope.images = [
    "lionsheadgroup.jpg",
    "dancing.jpg",
    "elephants.jpg",
    "rugby.jpg",
    "safari.jpg",
    "waterfront.jpg",
    "tablemountain.jpg",
    "welcome.jpeg",
    "safari2.jpg",
  ];

});

