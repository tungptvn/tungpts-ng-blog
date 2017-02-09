'use strict';

angular.module('myApp.home', ['ngRoute', 'myApp.services'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'homeCtrl'
  });
}])

.controller('homeCtrl', ['$scope', '$http', 'postsData', function ($scope, $http, postsData) {
  var current = 0;
  $scope.posts = [];
  postsData.getMorePosts(current, 10).then(function (result) {
    $scope.posts = _.concat($scope.posts, result);
  });
  $scope.loadMore = function () {
    postsData.getMorePosts(current, 10).then(function (result) {
      $scope.posts = _.concat($scope.posts, result);
    });
    current++;
  };

}]);