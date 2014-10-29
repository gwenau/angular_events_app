(function() {

  var app = angular.module('angularEventsApp', ['ngAnimate']);

  app.controller('eventsController' , ["$scope","$http", function($scope, $http) {

    $http.get("https://www.googleapis.com/customsearch/v1?key=AIzaSyBqoZ-SBdyqfayjnfKX0XPvl55b6R1NK20&cx=003846610913805178311:nnrjjbpd8q8&q=events&alt=json").success(function(data){
      $scope.jsons = data["items"];
      console.log($scope.jsons)
      })

  }])

})();