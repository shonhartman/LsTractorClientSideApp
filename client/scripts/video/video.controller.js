(function () {
    'use strict';

    angular.module('app.video')
        .controller('ProgressDemoCtrl', ['$scope', ProgressDemoCtrl])
        .controller('VideoCtrl', ['$cookies', '$scope', '$routeParams', '$location', '$http', '$modal', VideoCtrl]);

    function ProgressDemoCtrl($scope) {
        $scope.max = 200;

        $scope.random = function () {
            var type, value;
            value = Math.floor((Math.random() * 100) + 10);
            type = void 0;
            if (value < 25) {
                type = "success";
            } else if (value < 50) {
                type = "info";
            } else if (value < 75) {
                type = "warning";
            } else {
                type = "danger";
            }
            $scope.showWarning = type === "danger" || type === "warning";
            $scope.dynamic = value;
            $scope.type = type;
        };

        $scope.random();
    }

    function VideoCtrl($cookies, $scope, $routeParams, $location, $http, $modal) {
        var skillSetId = $routeParams.id;
        $scope.videos = [];
        $scope.skillSet = null;
        $scope.user = angular.fromJson($cookies.get('user'));

        $http.get('http://lstractorquizapi.azurewebsites.net/api/SkillSets/' + skillSetId)
            .then(function (response) {
                $scope.skillSet = response.data;
            });

        $scope.open = function (id) {
            location.href = '/#/quizes/quiz/' + id;
        }

        $scope.edit = function (video) {
            var modalInstance;
            modalInstance = $modal.open({
                templateUrl: "myEditModal.html",
                controller: 'ModalInstanceCtrl',
                resolve: {
                    video: function () {
                        return video;
                    },
                    titles: function () {
                        return $scope.titles;
                    }
                }
            });
            modalInstance.result.then((function (selectedItem) {
                $scope.selected = selectedItem;
            }), function () {
                $log.info("Modal dismissed at: " + new Date());
            });
        }

        //DELETE VIDEO BY ID
        $scope.deleteVideos = function (video) {
            $http.delete('http://lstractorquizapi.azurewebsites.net/api/Videos?videoId={videoId}')
                .then(function (response) {
                    logger.logSuccess("You deleted {{video.Name}}");
                    $location.url("/#/skill-set");
                });
        }
    }
})();
