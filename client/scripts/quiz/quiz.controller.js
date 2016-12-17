(function () {
    'use strict';

    angular.module('app.quiz')
        .controller('QuizCtrl', ['$cookies', '$scope', '$http', '$routeParams', '$sce', '$location', QuizCtrl]);

    function QuizCtrl($cookies, $scope, $http, $routeParams, $sce, $location) {

        $scope.answers = [];
        $scope.quiz = null;
        $scope.videoUrl = null;
        $scope.timeWatched = 0;
        $scope.disableQuiz = true;
        $scope.videoResult = null; // do we need this var? I don't see it used anywhere.
        $scope.activeQuestion = 0;

        // Get Title & Progress off of a Video
        window.vimeoPlayerLoaded = function () {

            var iframe = document.getElementById('vimeo-player');
            var player = new Vimeo.Player(iframe);

            player.getVideoTitle().then(function (title) {
                console.log('title:', title);
            });

            player.on('timeupdate', vimeoPlayProgressEvent);
        }

        // Track Individual Video Progress
        window.vimeoPlayProgressEvent = function (data) {

            if (data.seconds > $scope.timeWatched + 10) {
                $http.put($scope.main.apiUrl + 'Videos', {
                    UserId: $scope.main.user.Id,
                    VideoId: $scope.quiz.Video.Id,
                    ViewedAmount: parseInt(data.seconds, 10)
                });

                $scope.timeWatched = data.seconds;
            }

            if (data.percent >= .8) {
                $scope.disableQuiz = false;
            }
        }

        // Quiz and video
        $http.get($scope.main.apiUrl + "Quizzes?quizId=" + $routeParams.id)
            .then(function (response) {
                $scope.videoUrl = $sce.trustAsResourceUrl(response.data.Video.Url);
                $scope.quiz = response.data;
            });

        //CREATE A NEW QUIZ
        $scope.createQuiz = function () {
            $http.post($scope.main.apiUrl + 'Quizzes')
                .then(function (response) {
                    response.data._embedded.questions.forEach(function (question) {
                        var splitUrl = question._links.self.href.split("/");
                        question.id = splitUrl[splitUrl.length - 1];
                        question.answers = [];
                        $scope.questions.push(question);
                    });

                    $scope.questions.forEach(function (question) {
                        $http.get($scope.main.apiUrl + 'Questions/')
                            .then(function (response) {
                                question.answers = response.data._embedded.answers;
                            })
                            .then(function (response) {

                                // TODO - This should filter by quiz_id
                                var quiz_id = 13; // should be $scope.video.quiz_id
                                return $http.get($scope.main.apiUrl + 'Quizzes{id}');
                            })
                    });
                });
        }

        //DELETE A QUIZ BY ID
        $scope.deleteQuiz = function () {
            $http.delete($scope.main.apiUrl + 'Quizzes?quizId={quizId}')
                .then(function (response) {
                    logger.logSuccess("Well done! You successfully deleted{{quiz.name}}.");
                    $location.url("/#/skill-set.id");
                });
        }

        // Changes index number to a letter
        $scope.letterForIndex = function (index) {
            return String.fromCharCode(97 + index);
        }

        $scope.lastQuestion = function () {
            return $scope.quiz.Questions.length === $scope.activeQuestion + 1;
        }

        $scope.setAnswer = function (questionId, answerId) {
            $scope.answers[$scope.activeQuestion] = {
                "Id": questionId,
                "Answer": {
                    "Id": answerId
                }
            }
        }

        $scope.nextQuestion = function () {
            if ($scope.answers[$scope.activeQuestion]) {
                console.log($scope.answers[$scope.activeQuestion]);
                $scope.activeQuestion += 1;
            } else {
                alert("You must choose an answer.");
            }
        }

        $scope.finishQuiz = function () {

            //SUBMIT QUIZ RESULTS FOR GRADING
            $http.put($scope.main.apiUrl + 'Quizzes?userId=' + $scope.main.user.Id, {
                    Id: $scope.quiz.Id,
                    Questions: $scope.answers
                })
                .then(function (response) {

                    var passed = response.data.Passed;
                    var score = response.data.Score;

                    if (passed) {
                        alert("You passed with score " + score + "%!");
                    } else {
                        alert("You scored " + score + ". Try again!");
                    }

                    $location.url('/dashboard');
                });
        }
    }
})();