(function () {
    'use strict';

    angular.module('app')
        .config(['$routeProvider', function($routeProvider) {
            var routes, setRoutes;

            routes = [
                'charts/charts', 'charts/flot', 'closure', 'certificates',
                'dashboard', 'dealership-list', 'failing-view', 'passing-view', 'profile', 'transfer', 'skill-sets',
                'pages/404', 'pages/500', 'pages/blank', 'pages/forgot-password', 'pages/lock-screen', 'pages/signin', 'pages/signup', 'pages/skill-set', 'pages/videos',
                'quizes/quiz-logic-test',
                'pages/skill-set-details',
                'test-view'
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
                .when('/employees/:id', { templateUrl: 'views/employee.html' })
                .when('/quizes/quiz/:id', { templateUrl: 'views/quizes/quiz.html' })
                .when('/pages/skill-set-details/:id', { templateUrl: 'views/pages/skill-set-details.html' })
                .when('/', {redirectTo: 'pages/signin'})
                .when('/404', {templateUrl: 'views/pages/404.html'})
                .otherwise({ redirectTo: '/404'});

        }]
    );

})();
