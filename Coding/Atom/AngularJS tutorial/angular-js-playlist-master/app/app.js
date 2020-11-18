var myApp=angular.module('myFirstApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){

      $routeProvider
        .when('/home', {
          templateUrl: 'views/home.html'
        })
        .when('/directory', {
          templateUrl: 'views/directory.html',
          controller: 'NinjaController'
        }).otherwise({
          redirectTo: '/home'
        });
}]);

myApp.directive('randomNinja', function(){

  return{


    restrict: "E",
    scope: {
      ninjas: '=',
      title: '='
    },
    templateUrl: 'views/random.html',
    controller: function($scope){
      $scope.random = Math.floor(Math.random()*4);
    }

  };
});



myApp.controller('NinjaController', ['$scope', '$http', function($scope,$http){

  $http.get('data/ninjas.json').then(function(response){
    $scope.ninjas=response.data;
  }, function(error){
    console.log(error);
  })

  $scope.removeNinja=function(ninja){
    var ninjaRemoved=$scope.ninjas.indexOf(ninja);
    $scope.ninjas.splice(ninjaRemoved, 1)
  }
  $scope.addNinja=function(){
    $scope.ninjas.push({
      name: $scope.newNinja.name,
      belt: $scope.newNinja.belt,
      rate: parseInt($scope.newNinja.rate),
      available:true
    })
    $scope.newNinja.name='',
    $scope.newNinja.belt='',
    $scope.newNinja.rate=''

  }


console.log(angular.toJson($scope.ninjas));
}]);
