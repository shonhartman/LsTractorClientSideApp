(function () {
    'use strict';

    angular.module('app.video')
        .controller('ProgressDemoCtrl', ['$scope', ProgressDemoCtrl])
        .controller('SkillSetCtrl', ['$cookies', '$modal', '$scope', '$http', '$routeParams', 'logger', '$location', SkillSetCtrl])
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

    function SkillSetCtrl($cookies, $modal, $scope, $http, $routeParams, logger, $location) {
        $scope.skillsets = [];

        $http.get('http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/skillSets')
            .then(function (response) {

                $scope.skillsets = [];
                var user = angular.fromJson($cookies.get('user'));

                response.data._embedded.skillSets.forEach(function (skillset) {

                    var splitUrl = skillset._links.self.href.split("/");
                    skillset.id = splitUrl[splitUrl.length - 1];

                    // set skillset status
                    // 1. not started
                    // 2. in progress
                    // 3. complete

                    var skillsetVideoIDs = [];

                    $http.get(skillset._links.listOfVideo.href)
                        .then(function (response) {

                            // 1. collect videos in this skillset
                            skillsetVideoIDs = response.data._embedded.videos.map(function (video) {
                                return video._links.self.href.split('/').pop();
                            });

                            // 2. search for user video results
                            return $http.get('http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/videoResults/search/byAppUser?appuser=' + user._links.self.href);

                        })
                        .then(function (response) {

                            //3. get count of completed videos that exist in skillset
                            var userCompletedVideoResults = response.data._embedded.videoResults.filter(function (video) {
                                return video.isComplete;
                            });

                            var userVideosCompletedIDs = [];
                            var videosInSkillCompletedCount = 0;

                            function checkForSkillVideoInUserResults(userCompletedVideoResults, count) {

                                $http.get(userCompletedVideoResults[count]._links.video.href).then(function (response) {

                                    //now, get the ids of completed videos
                                    var videoCompletedID = response.data._links.self.href.split('/').pop();

                                    //4. set skillset status
                                    if (skillsetVideoIDs.indexOf(videoCompletedID) >= 0) {
                                        videosInSkillCompletedCount++;
                                    }

                                    if (userCompletedVideoResults.length > count + 1) {
                                        checkForSkillVideoInUserResults(userCompletedVideoResults, count + 1);
                                    } else {

                                        //4. set skillset status
                                        if (skillsetVideoIDs.length > 0 && videosInSkillCompletedCount >= skillsetVideoIDs.length) {
                                            skillset.status = 3;
                                        } else if (videosInSkillCompletedCount > 0) {
                                            skillset.status = 2;
                                        } else {
                                            skillset.status = 1;
                                        }

                                        $scope.skillsets.push(skillset);
                                    }

                                }, function () {
                                    //handle error
                                    skillset.status = 1;

                                    if (userCompletedVideoResults.length > count + 1) {
                                        checkForSkillVideoInUserResults(userCompletedVideoResults, count + 1);
                                    } else {

                                        //4. set skillset status
                                        if (skillsetVideoIDs.length > 0 && videosInSkillCompletedCount >= skillsetVideoIDs.length) {
                                            skillset.status = 3;
                                        } else if (videosInSkillCompletedCount > 0) {
                                            skillset.status = 2;
                                        } else {
                                            skillset.status = 1;
                                        }

                                        $scope.skillsets.push(skillset);
                                    }
                                });
                            }

                            checkForSkillVideoInUserResults(userCompletedVideoResults, 0);
                        });
                });
            });

        $scope.goToSkillSet = function () {
            location.href = '#/pages/skill-set-details/{{ skillset.id }}';
        }

        $scope.deleteSkillSet = function () {
            $http.delete('http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/skillSets/' + $routeParams.id)
                .then(function (response) {
                    logger.logSuccess("Well done! You successfully deleted that video.");
                    $location.url("/#/skill-set");
                });
        }

        //Add Skill Set Modal
        $scope.addSkillSet = function (video) {
            var modalInstance;
            modalInstance = $modal.open({
                templateUrl: "skillSetModal.html",
                controller: 'ModalInstanceCtrl',
                resolve: {
                    video: function () {
                        return {};
                    },
                    titles: function () {
                        return $scope.titles;
                    }
                }
            });
            modalInstance.result.then((function (response) {
                $scope.skillsets.push(response.data); //adds the new Skill Set to the collection
            }), function () {
                $log.info("Modal dismissed at: " + new Date());
            });
        }
    }

    function VideoCtrl($cookies, $scope, $routeParams, $location, $http, $modal) {
        var skillSet = $routeParams.id;
        $scope.videos = [];
        $scope.skillSet = null;
        $scope.user = angular.fromJson($cookies.get('user'));

        $http.get('http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/skillSets/' + $routeParams.id)
            .then(function (response) {
                $scope.skillSet = response.data;
            });

        $http.get('http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/skillSets/' + $routeParams.id + '/listOfVideo')
            .then(function (response) {
                $scope.videos = [];
                response.data._embedded.videos.forEach(function (video) {
                    var splitUrl = video._links.self.href.split("/");
                    video.id = splitUrl[splitUrl.length - 1];
                    $scope.videos.push(video);
                });
                console.log($scope.videoResults);
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
    }

})();