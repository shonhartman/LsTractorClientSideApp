(function () {
    'use strict';

    angular.module('app')
        .config(['$routeProvider', function($routeProvider) {
            var routes, setRoutes;

            routes = [
                'dashboard',
                'forms/elements', 'forms/layouts', 'forms/validation', 'forms/wizard',
                'charts/charts', 'charts/flot',
                'pages/404', 'pages/500', 'pages/blank', 'pages/forgot-password', 'pages/lock-screen', 'pages/profile', 'pages/signin', 'pages/signup', 'pages/skill-set',
                'quizes/quiz', 'quizes/quiz-logic-test'
            ]

            setRoutes = function(route) {
                var config, url;
                url = '/' + route;
                config = {
                    templateUrl: 'views/' + route + '.html'
                };
                $routeProvider.when(url, config);
                return $routeProvider;
            };

            routes.forEach(function(route) {
                return setRoutes(route);
            });

            $routeProvider
                .when('/', {redirectTo: 'pages/signin'})
                .when('/404', {templateUrl: 'views/pages/404.html'})
                .otherwise({ redirectTo: '/404'});

        }]
    );

})(); 