'use strict';

angular.module('myApp.invest_view', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/invest_view', {
    templateUrl: 'invest_view/invest_view.html',
    controller: 'investViewCtrl'
  });
}])

.controller('investViewCtrl', [function() {

}]);