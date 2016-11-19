(function () {
    'use strict';

    angular.module('app.chart')
        .controller('chartCtrl', ['$scope', chartCtrl]);

    function chartCtrl($scope) {

        //TODO ==> Bind data from video progress

        $scope.easypiechart3 = {
            percent: 45,
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