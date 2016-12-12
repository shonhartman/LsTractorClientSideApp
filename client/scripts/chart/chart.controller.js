(function () {
    'use strict';

    angular.module('app.chart')
        .controller('chartCtrl', ['$scope', '$http', chartCtrl]);

    function chartCtrl($scope, $http) {

        //TODO ==> Bind data from Video Results

        $scope.percent = function () {
            $http.get('http://lstractorquizapi.azurewebsites.net//videoResults');
        }

        console.log("Let's bind the data from the timeWatched variable")
        $scope.easypiechart3 = {
            percent: $scope.percent, //originally this was a hardcoded integer eg. 45 for 45%
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