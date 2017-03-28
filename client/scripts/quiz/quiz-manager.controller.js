(function () {
    'use strict';

    angular.module('app.quiz-manager')
        .controller('QuizManagerCtrl', ['$cookies', '$scope', '$http', '$routeParams', '$location', 'logger', QuizManagerCtrl]);

    function QuizManagerCtrl($cookies, $scope, $http, $routeParams, $location, logger) {

        $scope.questions = [];
        $scope.newQuestion = '';
        $scope.newAnswer = '';
        $scope.newAnswerImage = '';
        $scope.editedQuestion = null;

        $scope.addQuestion = function () {

            var question = $scope.newQuestion.trim();

            if (question.length === 0) {
                return;
            }

            $scope.questions.push({
                "title": question,
                "answers": []
            });

            // TODO: save changes

            $scope.newQuestion = '';
            logger.logSuccess('New question: "' + question + '" added');
        };

        $scope.addAnswer = function (questionIndex) {

            var answer = "";
            var answerImage = "";
            var question = $scope.questions[questionIndex];

            if (question.newAnswer.length === 0) {
                return;
            }

            answer = question.newAnswer.trim();

            if (question.newAnswerImage) {
                answerImage = question.newAnswerImage.trim();
            }

            question.answers.push({
                "title": answer,
                "image": answerImage
            });

            // TODO: save changes

            question.newAnswer = '';
            question.newAnswerImage = '';
            logger.logSuccess('New answer: "' + answer + '" added');
        };

        $scope.editQuestion = function (index) {

            var question = $model.newQuestion.trim();

            if (question.length === 0) {
                return;
            }

            $scope.questions[index].title = question;

            // TODO: save changes

            $model.newQuestion = '';
            logger.logSuccess('Question edited!');
        };

        $scope.editAnswer = function (questionIndex, answerIndex) {

            var question = $scope.questions[questionIndex];
            var newAnswer = question.newAnswer.trim();
            var newAnswerImage = question.newAnswerImage.trim();

            if (newAnswer.length === 0) {
                return;
            }

            var answer = question.answers[answerIndex];

            answer.title = newAnswer;
            answer.image = newAnswerImage;

            // TODO: save changes

            question.newAnswer = '';
            question.newAnswerImage = '';
            logger.logSuccess('Answer edited!');
        };

        $scope.removeQuestion = function (index) {
            $scope.questions.splice(index, 1);
            logger.logError('Question removed');
        };

        $scope.removeAnswer = function (questionIndex, answerIndex) {
            $scope.questions[questionIndex].answers.splice(answerIndex, 1);
            logger.logError('Answer removed');
        }

        // TODO
        $scope.saveQuiz = function () {

        };

        // TODO
        $scope.loadQuiz = function () {

        };

        $scope.doneEditing = function () {

        }
    }

})();