var app = angular.module("FinalApp", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider.when("/", {
    templateUrl: "templates/home.html"
  })
  $routeProvider.when("/memories", {
    templateUrl: "templates/memories.html"
  })
});

app.controller("StudentCtrl", function($scope, $http, $filter) {

});