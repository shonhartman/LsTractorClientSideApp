(function () {
    'use strict';

    angular.module('app.chart')
        .controller('chartCtrl', ['$scope', '$http', chartCtrl]);

    function chartCtrl($scope, $http) {

        // TODO: Bind data from Video Results
        $scope.percent = 45;

        console.log("Let's bind the data from the timeWatched variable")
        $scope.easypiechart3 = {
            percent: $scope.percent,
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