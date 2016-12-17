'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.buy_view',
  'myApp.rent_view',
  'myApp.invest_view',
  'myApp.sold_view',
  'myApp.share_view',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/buy_view'});
}]);

