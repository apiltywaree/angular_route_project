/**
 * Created by apiltiwari on 8/10/16.
 */
angular.module('app', ['ngRoute']);
angular.module('app').config(function ($locationProvider, $routeProvider) {
    $routeProvider.when('/', {
            templateUrl: '/angular_route_project/views/home.html',
            controller: 'homeCtrl'
        })
        .when('/home', {
            templateUrl: '/angular_route_project/views/home.html',
            controller: 'homeCtrl'
        })
        .when('/info', {
            templateUrl: '/angular_route_project/views/info.html',
            controller: 'infoCtrl'
        })
            .when('/content', {
                templateUrl: '/angular_route_project/views/content.html',
                controller: 'contentCtrl'
            });
    $locationProvider.html5Mode(false).hashPrefix('!');


});