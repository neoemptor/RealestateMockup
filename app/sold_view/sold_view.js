'use strict';

angular.module('myApp.sold_view', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sold_view', {
    templateUrl: 'sold_view/sold_view.html',
    controller: 'soldViewCtrl'
  });
}])

.controller('soldViewCtrl', [function() {

}]);