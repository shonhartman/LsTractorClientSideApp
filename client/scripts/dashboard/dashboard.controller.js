(function () {
    'use strict';

    angular.module('app.dashboard')
        .controller('DashboardCtrl', ['$cookies', '$scope', '$http', DashboardCtrl])
        .controller('EmployeeCtrl', ['$scope', '$http', '$routeParams', EmployeeCtrl]);


     function DashboardCtrl($cookies, $scope, $http) {
        $scope.user = angular.fromJson($cookies.get('user'));
        $scope.role = null;
        $scope.roleId = null;
        $scope.dealership = null;
        $scope.dealerships = [];
        $scope.totalVideos = 0;

        $http.get($scope.user._links.userRole.href)
            .then(function (response) {
                $scope.role = response.data;
                $scope.roleId = response.data._links.self.href.split('/').pop();
                $scope.populateData();
            });

        $scope.employeeProgress = function(total, employee) {
            return $http.get('http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/videoResults/search/byAppUser?appuser=' + employee._links.self.href)
                .then(function (response) {
                    var results = response.data._embedded.videoResults;

                    var complete = results.filter(function (result) {            
                        return result.isComplete;
                    }).length;

                    return (complete / total) * 100;
                });            
        }

        $scope.populateData = function() {
            // Technican - 4
            // Dealership Owner - 5
            // Super Admin - 6
            
            if ($scope.roleId === "4") {

            }

            if ($scope.roleId === "5") {
                $http.get($scope.user._links.dealership.href)
                    .then(function (response) {
                        $scope.dealership = response.data;
                        return $http.get('http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/videos');
                    })
                    .then (function (response) {
                        $scope.totalVideos = response.data._embedded.videos.length;
                        return $http.get($scope.dealership._links.listOfAppUser.href);
                    })
                    .then(function (response) {                        
                        $scope.employees = response.data._embedded.appUsers;
                        $scope.employees.forEach(function (employee) {
                            employee.id = employee._links.self.href.split('/').pop();
                            $scope.employeeProgress($scope.totalVideos, employee)
                                .then(function (progress) {
                                    employee.progress = progress;
                                });
                        });
                        console.log($scope.employees);
                    });
            }

            if ($scope.roleId === "6") {

            }
  
        }


    }

    function EmployeeCtrl($scope, $http, $routeParams) {
        $scope.results = [];

        // TODO - Modify call to new location for backend endpoint that returns user's status'
        $http.get('http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/videos/')
            .then(function(response) {
                $scope.videos = [];
                response.data._embedded.videos.forEach(function(video) {
                    var splitUrl = video._links.self.href.split("/");
                    video.id = splitUrl[splitUrl.length - 1];
                    $scope.videos.push(video);            
                });
            });

        $http.get('http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/appUsers/' + $routeParams.id)
            .then(function(response) {
                $scope.employee = response.data;
                console.log($scope.employee);
                return $http.get($scope.employee._links.listOfVideoResult.href);                                         
            });

        $scope.videoProgress = function(progress) {
            if (progress) {
                return progress;
            }

            return 0;
        }

        $scope.videoComplete = function(complete) {
            if (complete) {
                return "Yes";
            }

            return "No";
        }
    }

})();
