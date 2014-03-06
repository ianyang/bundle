'use strict';

var Bundle = angular.module('bundle', ['ngRoute']);

Bundle.config(function($locationProvider, $httpProvider, $routeProvider) {

    // Enable CORS
    $httpProvider.defaults.useXDomain = true;

    /* HTML5 Mode - History Api
     ******************************/
    $locationProvider.html5Mode(true);

    // Transform $http.post body to same param format used by jquery $.post call
    $httpProvider.defaults.transformRequest = function(data){
        if (data === undefined) {
            return data;
        }
        return $.param(data);
    }

    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';

    // Routes
    $routeProvider
    .when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
    })
    .when('/view/:id', {
        templateUrl: 'templates/view.html',
        controller: 'ViewCtrl'
    })
    .when('/create/:id', {
        templateUrl: 'templates/create.html',
        controller: 'CreateCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });

});
