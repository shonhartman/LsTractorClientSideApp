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
        $scope.skillSet = null;
        $scope.user = angular.fromJson($cookies.get('user'));

        $http.get($scope.main.apiUrl + 'SkillSets/GetSkillSet/' + skillSetId)
            .then(function (response) {
                $scope.skillSet = response.data;
                setVideoAndQuizProgress();
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
            $http.delete($scope.main.apiUrl + 'Videos/DeleteVideo/{videoId}')
                .then(function (response) {
                    logger.logSuccess("You deleted {{video.Name}}");
                    $location.url("/#/skill-set");
                });
        }

        function setVideoAndQuizProgress() {

            $http.get($scope.main.apiUrl + 'SkillSets/GetSkillSetResults', {
                params: {
                    "skillSetId": skillSetId,
                    "userId": $scope.main.user.Id
                }
            }).then(function (response) {

                var videoResults = response.data.VideoResults;
                var quizResults = response.data.QuizResults;

                angular.forEach(videoResults, function (result) {

                    var videoId = result.VideoId;

                    // find a quiz within this skillset that has this video, and set the progress
                    var quizWithVideo = $scope.skillSet.Quizzes.find(function (quiz) {
                        return quiz.Video.Id == videoId;
                    });

                    if (quizWithVideo) {
                        var videoLength = quizWithVideo.Video.Length;
                        quizWithVideo.Video["Progress"] = parseInt((result.ViewedAmount / quizWithVideo.Video.Length) * 100, 10);
                    }
                });

                angular.forEach(quizResults, function (result) {

                    var quizId = result.QuizId;

                    // find the quiz within this skillset, and mark it as complete
                    var quiz = $scope.skillSet.Quizzes.find(function (quiz) {
                        return quiz.Id == quizId;
                    });

                    if (quiz) {
                        quiz.IsComplete = true;
                    }
                });
            });
        }
    }
})();