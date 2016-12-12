(function () {
    'use strict';

    angular.module('app.skillset')
        .controller('SkillSetCtrl', ['$cookies', '$modal', '$scope', '$http', '$routeParams', 'logger', '$location', SkillSetCtrl])


    function SkillSetCtrl($cookies, $modal, $scope, $http, $routeParams, logger, $location) {
       
//GET SKILLSET BY ID
        $scope.skillsets = [];

        $http.get('http://lstractorquizapi.azurewebsites.net/api/skillSets')
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
                                return video._links.self.href.split('/').pop();//What does this call look like??
                            });

                            // 2. search for user video results
                            return $http.get('http://lstractorquizapi.azurewebsites.net/api/SkillSets?userId={userId}&skillSetId={skillSetId}')

                        })
                        .then(function (response) {

                            //3. get list of user video results that are marked as complete
                            var userCompletedVideoResults = response.data._embedded.videoResults.filter(function (video) {
                                return video.isComplete;//What does this call look like??
                            });

                            var userVideosCompletedIDs = [];
                            var videosInSkillCompletedCount = 0;

                            function checkForSkillVideoInUserResults(userCompletedVideoResults, count) {

                                $http.get(userCompletedVideoResults[count]._links.video.href).then(function (response) {

                                    //now, get the ids of completed videos
                                    var videoCompletedID = response.data._links.self.href.split('/').pop();

                                    //keep count of videos completed for the current skillset
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
//UPDATE SKILL SET NAME BY ID
        $scope.updateSkillset = function () {
            $http.put('http://lstractorquizapi.azurewebsites.net/api/SkillSets?skillSetId={skillSetId}&name={name}')
                .then(function(response) {
                    logger.logSuccess("Your Edit was successful");
                    $location.url("/#/skill-set");
                })
        }
        
//DELETE SKILLSET BY ID
        $scope.deleteSkillSet = function () {
            $http.delete('http://lstractorquizapi.azurewebsites.net/api/SkillSets?skillSetId={skillSetId}')
                .then(function (response) {
                    logger.logSuccess("Well done! You successfully deleted{{skillset.name}}.");
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



})();