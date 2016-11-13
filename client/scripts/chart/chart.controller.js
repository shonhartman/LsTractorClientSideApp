(function () {
    'use strict';

    angular.module('app.chart')
        .controller('chartCtrl', ['$scope', chartCtrl]);

    function chartCtrl($scope) {
        $scope.easypiechartsm1 = {
            percent: 63,
            options: {
                animate: {
                    duration: 1000,
                    enabled: false
                },
                barColor: $scope.color.success,
                lineCap: 'round',
                size: 120,
                lineWidth: 5
            }
        };

        $scope.easypiechartsm2 = {
            percent: 35,
            options: {
                animate: {
                    duration: 1000,
                    enabled: false
                },
                barColor: $scope.color.info,
                lineCap: 'round',
                size: 120,
                lineWidth: 5
            }
        };

        $scope.easypiechartsm3 = {
            percent: 75,
            options: {
                animate: {
                    duration: 1000,
                    enabled: false
                },
                barColor: $scope.color.warning,
                lineCap: 'round',
                size: 120,
                lineWidth: 5
            }
        };

        $scope.easypiechartsm4 = {
            percent: 66,
            options: {
                animate: {
                    duration: 1000,
                    enabled: false
                },
                barColor: $scope.color.danger,
                lineCap: 'round',
                size: 120,
                lineWidth: 5
            }
        };

        $scope.easypiechart = {
            percent: 65,
            options: {
                animate: {
                    duration: 1000,
                    enabled: true
                },
                barColor: $scope.color.primary,
                lineCap: 'round',
                size: 180,
                lineWidth: 5
            }
        };

        $scope.easypiechart2 = {
            percent: 35,
            options: {
                animate: {
                    duration: 1000,
                    enabled: true
                },
                barColor: $scope.color.success,
                lineCap: 'round',
                size: 180,
                lineWidth: 10
            }
        };

        $scope.easypiechart3 = {
            percent: 42,
            options: {
                animate: {
                    duration: 1000,
                    enabled: true
                },
                barColor: $scope.color.info,
                lineCap: 'square',
                size: 50,
                lineWidth: 5,
                scaleLength: 0
            }
        };
    }
})(); 