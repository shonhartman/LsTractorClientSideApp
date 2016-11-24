(function () {
    'use strict';

    angular.module('app.quiz')
         .controller('QuizCtrl', ['$cookies', '$scope', '$http', '$routeParams', '$sce', '$location', QuizCtrl]);

        function QuizCtrl($cookies, $scope, $http, $routeParams, $sce, $location) {
            $scope.video = null;
            $scope.videoUrl = null;
            $scope.questions = [];
            $scope.answers = [];
            $scope.timeWatched = 0;
            $scope.disableQuiz = true;
            $scope.user = angular.fromJson($cookies.get('user'));
            $scope.videoResult = null;

// Get Title & Progress off of a Video
            window.vimeoPlayerLoaded = function() {
                var iframe = document.querySelector('iframe');
                var player = new Vimeo.Player(iframe);

                player.getVideoTitle().then(function(title) {
                    console.log('title:', title);
                });

                player.on('timeupdate', vimeoPlayProgressEvent);
            }
// Track Individual Video Progress
            window.vimeoPlayProgressEvent = function(data) {

                if (data.seconds > $scope.timeWatched + 10) {
                    $http.post('http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/videoResults', {
                        appUser: $scope.user._links.self.href,
                        video: "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/videos/" + $routeParams.id,
                        viewAmount: data.seconds 
                    });


                    $scope.timeWatched = data.seconds;
                }
                
                if (data.percent >= .8) {
                    $scope.disableQuiz = false;
                }
                // console.log($scope.timeWatched);
            }

// Get Videos & Questions
            $http.get('http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/videos/' + $routeParams.id)
                .then(function(response) {
                    $scope.video = response.data;
                    $scope.videoUrl = $sce.trustAsResourceUrl($scope.video.url);
                                        
                    return $http.get($scope.video._links.quiz.href);                    
                })
                .then(function (response) {
                    $scope.quiz = response.data;
                    return $http.get($scope.quiz._links.listOfQuestion.href);                
                })
                .then(function (response) {
                    response.data._embedded.questions.forEach(function(question) {
                        var splitUrl = question._links.self.href.split("/");
                        question.id = splitUrl[splitUrl.length - 1];
                        question.answers = [];
                        $scope.questions.push(question);
                    });

                    $scope.questions.forEach(function(question) {
                        $http.get('http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/questions/' + question.id + '/listOfAnswer')
                            .then(function (response) {
                                question.answers = response.data._embedded.answers;
                            });
                    });
                });

// Post a new Video
                // $http.post('http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/videos/' + $routeParams.id)
                // .then(function(response) {

                //     // TODO - This should filter by quiz_id
                //     var quiz_id = 13; // should be $scope.video.quiz_id
                //     return $http.get('http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/quizzes/' + quiz_id + '/listOfQuestion');
                // })
                // .then(function (response) {
                //     response.data._embedded.questions.forEach(function(question) {
                //         var splitUrl = question._links.self.href.split("/");
                //         question.id = splitUrl[splitUrl.length - 1];
                //         question.answers = [];
                //         $scope.questions.push(question);
                //     });

                //     $scope.questions.forEach(function(question) {
                //         $http.get('http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/questions/' + question.id + '/listOfAnswer')
                //             .then(function (response) {
                //                 question.answers = response.data._embedded.answers;
                //             });
                //     });
                // });
// Changes index number to a letter 
            $scope.letterForIndex = function (index) {
                return String.fromCharCode(97 + index); 
            }

            $scope.activeQuestion = 0;

            $scope.lastQuestion = function() {
                return $scope.questions.length === $scope.activeQuestion + 1;
            }

            $scope.setAnswer = function(answer) {
                $scope.answers[$scope.activeQuestion] = answer;
            }

            $scope.nextQuestion = function() {
                if ($scope.answers[$scope.activeQuestion]) {
                    console.log($scope.answers[$scope.activeQuestion]);
                    $scope.activeQuestion += 1;
                } else {
                    alert("You must choose an answer.");
                }

            }

            $scope.finishQuiz = function() {
                var correct = 0;

                $scope.answers.forEach(function (answer) {
                    if (answer.isCorrect) {
                        correct += 1;
                    }
                });

                var score = (correct / $scope.questions.length) * 100;
                
                if (score > 99) {
                    // TODO - When we have $scope.videoResult
                    // $http.put($scope.videoResult._links.self.href, {
                    //     appUser: $scope.user._links.self.href,
                    //     video: "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/videos/" + $routeParams.id,
                    //     viewAmount: $scope.videoResult.viewAmount,                                                 
                    //     isComplete: true
                    // });   
                    var data =  {
                       appUser: $scope.user._links.self.href,
                       video: "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/videos/" + $routeParams.id,
                       viewAmount: $scope.videoResult.viewAmount,                                                 
                       isComplete: true
                   };
                    console.log(data);
                    $http.put($scope.videoResult._links.self.href, data)
                }   

                $http.post('http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/quizResults', {
                    quiz: $scope.quiz._links.self.href,
                    appUser: $scope.user._links.self.href,
                    score: score
                })
                .then(function (response) {
                    alert("You scored " + score + "%!");
                    $location.url('/dashboard');
                    // console.log(response);
                });   
            }
        }
})();       
      

      