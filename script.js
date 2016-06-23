var app = angular.module("FinalApp", ["ngRoute", "sticky"]);

app.config(function($routeProvider) {
  $routeProvider.when("/", {
    templateUrl: "templates/home.html"
  })
  $routeProvider.when("/week2", {
    templateUrl: "templates/week2.html"
  })
});

app.controller("AppCtrl", function($scope, $rootScope) {
  
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

