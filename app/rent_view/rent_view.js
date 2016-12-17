'use strict';

angular.module('myApp.rent_view', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/rent_view', {
    templateUrl: 'rent_view/rent_view.html',
    controller: 'rentViewCtrl'
  });
}])

.controller('rentViewCtrl', [function() {

}]);