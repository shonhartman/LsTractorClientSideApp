(function () {
    'use strict';

    angular.module('app.skillset')
        .controller('SkillSetCtrl', ['$cookies', '$modal', '$scope', '$http', '$routeParams', 'logger', '$location', SkillSetCtrl])


    function SkillSetCtrl($cookies, $modal, $scope, $http, $routeParams, logger, $location) {

        $scope.skillsets = [];

        $http.get($scope.main.apiUrl + 'SkillSets/GetAllSkillSets')
            .then(function (response) {
                $scope.skillsets = response.data;
                console.log(response.data);
                setSkillsetsProgress();
            });

        $scope.goToSkillSet = function () {
            location.href = '#/pages/skill-set-details/{{ skillset.id }}';
        }

        $scope.goToCertificates = function () {
            location.href = '#/certificates';
        }

        //UPDATE SKILL SET NAME BY ID
        $scope.updateSkillSet = function (skillSetId) {
            console.log("updating skillset");
            $http.put('http://lstractorquizapi.azurewebsites.net/api/SkillSets/UpdateSkillSet/' + skillsetId, {
                    "Name": "{name}"
                })
                .then(function (response) {
                    logger.logSuccess("Your Edit was successful");
                    $location.url("/#/skill-set");
                })
        }

        //DELETE SKILLSET BY ID
        $scope.deleteSkillSet = function (skillSetId, $index) {
            $http.delete('http://lstractorquizapi.azurewebsites.net/api/SkillSets/DeleteSkillSet/' + skillSetId)
                .then(function (response) {
                    logger.logSuccess("Well done! You successfully deleted{{skillset.name}}.");
                    $scope.skillsets.splice($index, 1);
                });
            console.log("deleting skillSet");

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

        $scope.open = function () {
            console.log("Open");
            var modalInstance;
            modalInstance = $modal.open({
                templateUrl: "addVideo.html"
            });
        }

        $scope.cancel = function () {
                console.log("Cancel");
               $modalInstance.dismiss("cancel");
           };
        
        $scope.test = function () {
            console.log("Test");
        }

        function setSkillsetsProgress() {

            angular.forEach($scope.skillsets, function (skillset) {

                $http.get($scope.main.apiUrl + 'SkillSets/GetSkillSetResults', {
                    params: {
                        "skillSetId": skillset.Id,
                        "userId": $scope.main.user.Id
                    }
                }).then(function (response) {

                    var videoResults = response.data.VideoResults;
                    var quizResults = response.data.QuizResults;

                    // calculate overall skillset progress
                    skillset.Progress = (quizResults.length / skillset.Quizzes.length) * 100;

                    // set status on each quiz
                    angular.forEach(skillset.Quizzes, function (quiz) {

                        quiz.Status = 1; // not started

                        var quizResult = quizResults.find(function (result) {
                            return result.QuizId === quiz.Id;
                        });

                        var quizVideoProgress = videoResults.find(function (result) {
                            return result.VideoId === quiz.Video.Id;
                        });

                        if (quizResult) {
                            quiz.Status = 3; // complete
                        } else if (quizVideoProgress && quizVideoProgress.ViewedAmount > 10) {
                            quiz.Status = 2; // in progress
                        }
                    });
                });
            });
        }

        
    }

})();