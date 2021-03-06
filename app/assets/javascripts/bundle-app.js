'use strict';

var Bundle = angular.module('bundle', ['angularFileUpload', 'ngRoute']);
Bundle.config(['$locationProvider', '$httpProvider', '$routeProvider',
    function($locationProvider, $httpProvider, $routeProvider) {

    // Enable CORS
    $httpProvider.defaults.useXDomain = true;

    /* HTML5 Mode - History Api
     ******************************/
    $locationProvider.html5Mode(true);

    // Transform $http.post body to same param format used by jquery $.post call
    $httpProvider.defaults.transformRequest = function(data) {
        if (data === undefined) {
            return data;
        }
        return $.param(data);
    }

    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';

    // Routes
    $routeProvider
        .when('/', {
            templateUrl: '../templates/home.html',
            controller: 'HomeCtrl'
        })
        .when('/:id', {
            templateUrl: '../templates/view.html',
            controller: 'ViewCtrl'
        })
        .when('/:id/:token', {
            templateUrl: '../templates/create.html',
            controller: 'CreateCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });

    // Fastclick
    $(function() {
        FastClick.attach(document.body);
    });
}]);
