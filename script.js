var app = angular.module("FinalApp", ["ngRoute", "sticky", "ngAnimate"]);

app.config(function($routeProvider) {
  $routeProvider.when("/week1", {
    templateUrl: "templates/week1.html"
  });
  $routeProvider.when("/week2", {
    templateUrl: "templates/week2.html"
  })
  $routeProvider.when("/week3", {
    templateUrl: "templates/week3.html"
  });
  $routeProvider.when("/week4", {
    templateUrl: "templates/week4.html"
  });
  
  $routeProvider.otherwise("/week1");
});

app.controller("AppCtrl", function($scope, $rootScope, $location) {
  $rootScope.$on('$routeChangeSuccess', function(e, current, pre) {
    if(pre) {
      $(".main-wrap").velocity("scroll", {offset: -90});
    }
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

