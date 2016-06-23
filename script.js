var app = angular.module("FinalApp", ["ngRoute", "sticky", "ngAnimate"]);

app.config(function($routeProvider) {
  $routeProvider.when("/week1", {
    templateUrl: "templates/week1.html"
  });
  $routeProvider.when("/week2", {
    templateUrl: "templates/week2.html"
  });
  $routeProvider.when("/memories", {
    templateUrl: "templates/memories.html"
  })
  
  $routeProvider.otherwise("/week1");
});

app.controller("AppCtrl", function($scope, $rootScope, $location) {
  $rootScope.$on('$routeChangeSuccess', function(e, current, pre) {
    $scope.route = $location.path().substring(1);
    $(".main-wrap").velocity("scroll", {offset: -90});
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

