(function () {
    'use strict';

    angular.module('app.dashboard')
        .controller('DashboardCtrl', ['$cookies', '$scope', '$http', DashboardCtrl])
        .controller('EmployeeCtrl', ['$scope', '$http', '$routeParams', EmployeeCtrl]);

    function DashboardCtrl($cookies, $scope, $http) {

        console.log("I am DashboardCtrl");

        var user = angular.fromJson($cookies.get('user'));

        if (!user || !user.Role) {
            return;
        }

        $scope.roleId = user.Role;
        $scope.dealership = null;
        $scope.dealerships = [];
        $scope.totalVideos = 0;

        $scope.employeeProgress = function (total, employee) {
            return $http.get('http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/videoResults/search/byAppUser?appuser=' + employee._links.self.href)
                .then(function (response) {
                    var results = response.data._embedded.videoResults;

                    var complete = results.filter(function (result) {
                        return result.isComplete;
                    }).length;

                    return (complete / total) * 100;
                });
        }


        $scope.populateData = function () {
            // Technican - 4
            // Dealership Owner - 5
            // Super Admin - 6

            if ($scope.roleId === 4) {
                //Do nothing? return perhaps?
            }

            if ($scope.roleId === 5) {

                $http.get($scope.main.apiUrl + 'Dealerships/GetEmployeesReport/' + $scope.main.user.Dealership.Id)
                    .then(function (response) {
                        $scope.employees = response.data;
                    });

            }

            if ($scope.roleId === 6) {
                //WHAT SHOULD WE DO WITH SUPER ADMIN
            }

        }

        $scope.populateData();
    }

    function EmployeeCtrl($scope, $http, $routeParams) {
        $scope.results = [];

        $scope.employee = {};
        $scope.editing = ''; //name of property currently being edited

        // get employee information if on detail page
        var uriEmployeeId = $routeParams.id;

        if (uriEmployeeId) {
            $http.get($scope.main.apiUrl + 'Users/GetUserById/' + uriEmployeeId)
                .then(function (employee) {
                    $scope.employee = employee.data;
                });
        }

        $scope.edit = function (itemName) {
            console.log("Editing.");
            $scope.editing = itemName;
        };

        $scope.doneEditing = function () {
            console.log("Done editing.");
            if (uriEmployeeId) {
                $http.put($scope.main.apiUrl + 'Users/UpdateUser/' + uriEmployeeId, $scope.employee)
                    .then(function (response) {
                        $scope.editing = '';
                    });
            }
        };

        // STATUS - DEPRICATED
        // $http.get('http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/videos/')
        //     .then(function (response) {
        //         $scope.videos = [];
        //         response.data._embedded.videos.forEach(function (video) {
        //             var splitUrl = video._links.self.href.split("/");
        //             video.id = splitUrl[splitUrl.length - 1];
        //             $scope.videos.push(video);
        //         });
        //     });

        // $http.get('http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/appUsers/' + $routeParams.id)
        //     .then(function (response) {
        //         $scope.employee = response.data;
        //         console.log($scope.employee);
        //         return $http.get($scope.employee._links.listOfVideoResult.href);
        //     });

        // $scope.videoProgress = function (progress) {
        //     if (progress) {
        //         return progress;
        //     }

        //     return 0;
        // }

        // $scope.videoComplete = function (complete) {
        //     if (complete) {
        //         return "Yes";
        //     }

        //     return "No";
        // }
    }

})();