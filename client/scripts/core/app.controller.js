(function () {
    'use strict';

    angular.module('app')
        .controller('AppCtrl', [ '$cookies', '$scope', '$rootScope', '$route', '$document', '$location', AppCtrl]); // overall control

    function AppCtrl($cookies, $scope, $rootScope, $route, $document, $location) {

        var date = new Date();
        var year = date.getFullYear();
        var user = angular.fromJson($cookies.get('user'));

        $scope.main = {
            brand: "LS Tractor",
            year: year,
            apiUrl: 'http://lstractorquizapi.azurewebsites.net/api/',
            // apiUrl: 'http://localhost:50516/api/',
            user: user
        };

        // redirect to login page if user not logged in
        $scope.$on('$locationChangeStart', function(event) {
            user = angular.fromJson($cookies.get('user'));
            if (!user && ['', '/', '/pages/signin', '/pages/signup', '/pages/forgot-password'].indexOf($location.path()) == -1) {
                $location.url('/pages/signin?redirect_uri=' + $location.path());
            }
        });

        $scope.pageTransitionOpts = [
            {
                name: 'Fade up',
                "class": 'animate-fade-up'
            }, {
                name: 'Scale up',
                "class": 'ainmate-scale-up'
            }, {
                name: 'Slide in from right',
                "class": 'ainmate-slide-in-right'
            }, {
                name: 'Flip Y',
                "class": 'animate-flip-y'
            }
        ];

        $scope.admin = {
            layout: 'wide',                                 // 'boxed', 'wide'
            menu: 'horizontal',                               // 'horizontal', 'vertical', 'collapsed'
            fixedHeader: true,                              // true, false
            fixedSidebar: true,                             // true, false
            pageTransition: $scope.pageTransitionOpts[0],   // unlimited
            skin: '12'                                      // 11,12,13,14,15,16; 21,22,23,24,25,26; 31,32,33,34,35,36
        };

        $scope.$watch('admin', function(newVal, oldVal) {
            if (newVal.menu === 'horizontal' && oldVal.menu === 'vertical') {
                $rootScope.$broadcast('nav:reset');
            }
            if (newVal.fixedHeader === false && newVal.fixedSidebar === true) {
                if (oldVal.fixedHeader === false && oldVal.fixedSidebar === false) {
                    $scope.admin.fixedHeader = true;
                    $scope.admin.fixedSidebar = true;
                }
                if (oldVal.fixedHeader === true && oldVal.fixedSidebar === true) {
                    $scope.admin.fixedHeader = false;
                    $scope.admin.fixedSidebar = false;
                }
            }
            if (newVal.fixedSidebar === true) {
                $scope.admin.fixedHeader = true;
            }
            if (newVal.fixedHeader === false) {
                $scope.admin.fixedSidebar = false;
            }
        }, true);

        $scope.color = {
            primary: '#7992BF',
            success: '#A9DC8E',
            info: '#6BD5C3',
            infoAlt: '#A085E4',
            warning: '#ECD48B',
            danger: '#ED848F',
            gray: '#DCDCDC'
        };

        $rootScope.$on("$routeChangeSuccess", function (event, currentRoute, previousRoute) {
            $document.scrollTo(0, 0);
        });
    }

})();
