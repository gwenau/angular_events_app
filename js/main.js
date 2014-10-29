(function() {

  var app = angular.module('angularEventsApp', ['ngAnimate']);

  app.controller('eventsController' , ["$scope","$http", function($scope, $http) {

    $scope.eventSearch = "";
    $scope.interestedList = [];

    $scope.searchEvents = function(){
      $http.get("https://www.googleapis.com/customsearch/v1?key=AIzaSyBqoZ-SBdyqfayjnfKX0XPvl55b6R1NK20&cx=003846610913805178311:nnrjjbpd8q8&q="+$scope.eventSearch+"&alt=json").success(function(data){
      $scope.eventList = true;
      $scope.jsons = data["items"];
      })
    }

    $scope.interested = function(json){
      $scope.interestedList.push(
      json);
      console.log($scope.interestedList);
    }

  }])

})();