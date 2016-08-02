var app = angular.module('carefree_dental', ['ngRoute', 'ngResource']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/index.html',
    controller: 'mainController'
  })
})
