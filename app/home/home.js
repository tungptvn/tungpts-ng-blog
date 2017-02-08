'use strict';

angular.module('myApp.home', ['ngRoute', 'myApp.services'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'homeCtrl'
  });
}])

.controller('homeCtrl', ['$scope', '$http','postsData', function ($scope, $http, postsData) {
  postsData.getPosts().then(function(result){
  
    $scope.posts= result;
  });
  
}]);