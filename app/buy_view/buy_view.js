'use strict';

angular.module('myApp.buy_view', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/buy_view', {
    templateUrl: 'buy_view/buy_view.html',
    controller: 'buyViewCtrl'
  });
}])

.controller('buyViewCtrl', [function() {

}]);