(function () {
    'use strict';

    angular.module('app.quiz-manager')
        .controller('QuizManagerCtrl', ['$cookies', '$scope', '$http', '$routeParams', '$location', 'logger', QuizManagerCtrl]);

    function QuizManagerCtrl($cookies, $scope, $http, $routeParams, $location, logger) {

        $scope.loadedQuizId = null;
        $scope.questions = [];
        $scope.newQuestionText = '';
        $scope.editedQuestion = null;

        $scope.addQuestion = function () {

            var questionText = $scope.newQuestionText.trim();

            if (questionText.length === 0) {
                return;
            }

            var newQuestion = {
                "QuestionText": questionText,
                "Answers": []
            };

            $scope.newQuestionText = '';

            // save changes
            $http.post($scope.main.apiUrl + 'Quizzes/AddQuizQuestion/' + $scope.loadedQuizId, newQuestion).then(function () {
                $scope.questions.push(newQuestion);
                logger.logSuccess('New question: "' + questionText + '" added');
            });
        };

        $scope.addAnswer = function (questionIndex) {

            var question = $scope.questions[questionIndex];

            if (question.newAnswerText.length === 0) {
                return;
            }

            var newAnswer = {
                'AnswerText': question.newAnswerText.trim(),
                'AnswerImage': '',
                'IsCorrect': !!question.newAnswerIsCorrect // !! forces boolean value
            }

            if (question.newAnswerImage) {
                newAnswer.AnswerImage = question.newAnswerImage.trim();
            }

            question.newAnswerText = '';
            question.newAnswerImage = '';
            question.newAnswerIsCorrect = false;

            // save changes
            $http.post($scope.main.apiUrl + 'Quizzes/AddQuizAnswer/' + $scope.loadedQuizId + '?questionId=' + question.Id, newAnswer).then(function () {
                question.Answers.push(newAnswer);
                logger.logSuccess('New answer: "' + newAnswer.AnswerText + '" added');
            });
        };

        $scope.editQuestion = function (index) {

            var question = $model.newQuestion.trim();

            if (question.length === 0) {
                return;
            }

            $scope.questions[index].QuestionText = question;

            // save changes?
            $http.put($scope.main.apiUrl + 'Quizzes/AddQuizQuestion/' + $scope.loadedQuizId, newQuestion)
            .then(function () {
                $scope.questions.push(newQuestion);
                logger.logSuccess('Edited question: "' + questionText + '" and updated!');
            });

            // $model.newQuestionText = '';
            // logger.logSuccess('Question edited!');
        };

        $scope.editAnswer = function (questionIndex, answerIndex) {

            var question = $scope.questions[questionIndex];
            var newAnswerText = question.newAnswerText.trim();
            var newAnswerImage = question.newAnswerImage.trim();

            if (newAnswerText.length === 0) {
                return;
            }

            var answer = question.Answers[answerIndex];

            answer.AnswerText = newAnswerText;
            answer.AnswerImage = newAnswerImage;

            // TODO: save changes

            question.newAnswerText = '';
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

        $scope.loadQuiz = function () {

            // TODO: only load this if "has quiz" radio is true
            // TODO: create new quiz if HTTP get request fails

            // openedSkillset comes from skillset controller
            // only accessible when quiz manager is a sub-controller of it
            var openedSkillset = $scope.openedSkillset;

            // TODO: this may not be the best method to get a quiz - a skillset can have multiple quizzes
            if (openedSkillset) {
                $http.get($scope.main.apiUrl + 'Quizzes/GetSkillsetQuiz/' + openedSkillset).then(function (result) {
                    $scope.loadedQuizId = result.data.Id;
                    $scope.questions = result.data.Questions;
                });
            }
        };

        $scope.doneEditing = function () {

        }

        $scope.loadQuiz();
    }

})();