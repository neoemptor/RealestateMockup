'use strict';

angular.module('myApp.share_view', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/share_view', {
    templateUrl: 'share_view/share_view.html',
    controller: 'shareViewCtrl'
  });
}])

.controller('shareViewCtrl', [function() {

}]);